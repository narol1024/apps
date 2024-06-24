/** @type {import('next').NextConfig} */
const nextConfig =
  process.env.buildEnv === "static"
    ? {
        basePath: "/apps",
        output: "export",
      }
    : {};

export default nextConfig;
