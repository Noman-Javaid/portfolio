/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to username.github.io/repository-name, set basePath:
  // basePath: '/portfolio',
  // Uncomment the line above and replace 'portfolio' with your repo name if needed
};

export default nextConfig;

