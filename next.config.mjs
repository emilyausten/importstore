/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "event-kraken.s3.amazonaws.com",
        port: "",
        pathname: "/event/**",
      },
      {
        protocol: "https",
        hostname: "api.ingresse.com",
        port: "",
        pathname: "/user/**",
      },
      {
        protocol: "https",
        hostname: "faturas.iugu.com",
        port: "",
        pathname: "/qr_code/**",
      },
    ],
  },
};

export default nextConfig;
