import { Metadata } from "next";

const baseUrl = "http://localhost:3000/";
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  keywords: [
    "Agrobazar",
    "Agro-bazar",
    "Агробазар",
    "Агро-базар",
    "Фермы",
    "Продажа овощей",
    "Продажа спецтехники",
    "Продажа фруктов",
    "Овощи",
    "Спецтехника",
    "Фрукты",
  ],
  title: { default: "Agrobazar", template: "%s | Agrobazar" },
  openGraph: { description: "Фермерская доска объявлений" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
