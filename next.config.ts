import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
  "./src/shared/localization/request.ts"
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  trailingSlash: true,

  images: {
    unoptimized: true,
    domains: ["test.dianet.ooo", "dianet.ooo"],
  },

  useFileSystemPublicRoutes: true,
};

export default withNextIntl(nextConfig);
