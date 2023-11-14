const { createSlice, nanoid, current, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    userApiData: [],
    // users: JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

}

// const api ="http://127.0.0.1:8000/api/"
// const api ="https://jsonplaceholder.typicode.com/users"
export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {
    const result = await fetch("https://flpflix-flparvez.vercel.app/api/");
    return result.json();
})


const Slice = createSlice({
    name: "addUserSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {

            const data = {
                id: nanoid(),
                name: action.payload
            }

            state.users.push(data)
            let userData = JSON.stringify(current(state.users))
            localStorage.setItem("users", userData)
            console.log(current(state.users))
        },
        removeUser: (state, action) => {
            const data = state.users.filter((item) => {
                return item.id !== action.payload
            })
            state.users = data;

            let userData = JSON.stringify(data)
            localStorage.setItem("users", userData)

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
            // console.log(action)
            state.isLoading = false,
                state.userApiData = action.payload
        })
    }
})

export const { addUser, removeUser } = Slice.actions;

export default Slice.reducer;
