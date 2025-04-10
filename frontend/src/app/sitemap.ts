import { MetadataRoute } from "next";

const baseUrl = "=http://localhost:3000";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/404",
      lastModified: new Date(),
    },
  ];
}
