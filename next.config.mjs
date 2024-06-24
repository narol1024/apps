const staticConfig = {
  basePath: "/apps",
  output: "export",
};
const buildConfig = {
  async redirects() {
    return [
      {
        source: "/apps",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

/** @type {import('next').NextConfig} */
const nextConfig =
  process.env.buildEnv === "static" ? staticConfig : buildConfig;
export default nextConfig;
