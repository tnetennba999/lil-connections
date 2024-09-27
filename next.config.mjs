/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/lil-connections', // Change this to '/app-2' for the second app
  assetPrefix: '/lil-connections/', // Same change for the second app
  trailingSlash: true, // This is necessary for static export
  output: 'export'
};

export default nextConfig;
