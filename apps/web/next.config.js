const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js가 상위 폴더의 package-lock.json을 프로젝트 루트로 착각하지 않도록 고정합니다.
  outputFileTracingRoot: path.join(__dirname, "../.."),
};

module.exports = nextConfig;