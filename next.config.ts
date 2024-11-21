import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "gizmodo.com",
      "ichef.bbci.co.uk",
      "cdn.mos.cms.futurecdn.net",
      "www.cnet.com",
      "hackaday.com",
      "npr.brightspotcdn.com",
      "cdn.vox-cdn.com", // добавь сюда все домены, которые используешь для изображений
    ],
  },
  /* config options here */
};

export default nextConfig;
