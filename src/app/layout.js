import { Inter, Kanit } from "next/font/google";
import "./globals.css";

const inter = Kanit({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Moko Thailand",
  description: "Mokothailand",
  icons: {
    icon: "/public/Logo4.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
