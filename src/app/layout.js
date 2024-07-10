import { Inter, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const inter = IBM_Plex_Sans_Thai({
  weight: ["300","400","500","600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
