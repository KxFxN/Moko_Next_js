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
  description: "Moko thailand ครีมถนอมรอยสัก ออกแบบมาเพื่อดูแลรอยสักโดยเฉพาะ และคืนความอ่อนเยาว์ด้วยส่วนผสมอันเป็นเอกลักษณ์เฉพาะตัว และยังช่วยลดการระคายเคืองผิวที่เกิดจากกระบวนการสัก",
  keywords: "Moko ,moko ,Moko Thailand, MokoThailand , mokothailand",
  icons: {
    icon: "/Logo4.ico",
  },
  openGraph: {
    title: "Moko Thailand - [ชื่อเรื่องสำหรับ social media]",
    description: `Moko thailand ครีมถนอมรอยสัก ออกแบบมาเพื่อดูแลรอยสักโดยเฉพาะ และคืนความอ่อนเยาว์ด้วยส่วนผสมอันเป็นเอกลักษณ์เฉพาะตัว และยังช่วยลดการระคายเคืองผิวที่เกิดจากกระบวนการสัก`,
    type: "website",
    url: "https://www.mokothailand.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
