const rawBasePath = process.env.NEXT_PUBLIC_APP_BASE_PATH ?? "";
const trimmedBasePath = rawBasePath.trim();
const normalizedBasePath = trimmedBasePath
  ? `/${trimmedBasePath.replace(/^\/+/, "").replace(/\/+$/, "")}`
  : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: normalizedBasePath || undefined
};

export default nextConfig;
