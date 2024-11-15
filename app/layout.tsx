import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Truyện Full MQ",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
  description: "Đọc truyện mọi nơi",
  icons: {
    icon: ["/icons/logo_text.ico?v=8"],
    apple: "/icons/logo_text.ico?v=8",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans`}>{children}</body>
    </html>
  );
}
