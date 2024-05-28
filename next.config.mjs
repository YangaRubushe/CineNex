/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "image.tmdb.org",
          port: "",
        },
        {
          protocol: "https",
          hostname: "www.themoviedb.org",
          port: "",
        },
      ],
    },
  };
  
  export default nextConfig;
  