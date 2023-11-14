// @type {import('next').NextConfig} 
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        domains: ['occ-0-3933-116.1.nflxso.net', 'i.postimg.cc', 'themayanagari.com', 'image.tmdb.org']
    }
}

module.exports = nextConfig