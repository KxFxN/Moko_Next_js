import { Inter, Kanit } from "next/font/google";
import "./globals.css";

const inter = Kanit({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ครีมถนอมรอยสัก ลดการระคายเคืองผิว Moko Thailand ครีมรอยสัก",
  description:
    "Moko thailand ครีมถนอมรอยสัก ออกแบบมาเพื่อดูแลรอยสักโดยเฉพาะ และคืนความอ่อนเยาว์ด้วยส่วนผสมอันเป็นเอกลักษณ์เฉพาะตัว และยังช่วยลดการระคายเคืองผิวที่เกิดจากกระบวนการสัก",
  keywords: "Moko, moko, Moko Thailand, MokoThailand, mokothailand",
  icons: {
    icon: "/Logo4.svg",
  },
  openGraph: {
    title: "ครีมถนอมรอยสัก ลดการระคายเคืองผิว Moko Thailand ครีมรอยสัก",
    description: `Moko thailand ครีมถนอมรอยสัก ออกแบบมาเพื่อดูแลรอยสักโดยเฉพาะ และคืนความอ่อนเยาว์ด้วยส่วนผสมอันเป็นเอกลักษณ์เฉพาะตัว และยังช่วยลดการระคายเคืองผิวที่เกิดจากกระบวนการสัก`,
    type: "website",
    url: "https://www.mokothailand.com",
    images: [
      {
        url: "/path-to-open-graph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moko Thailand",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <title>
          ครีมถนอมรอยสัก ลดการระคายเคืองผิว Moko Thailand ครีมรอยสัก
        </title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Moko thailand ครีมถนอมรอยสัก ออกแบบมาเพื่อดูแลรอยสักโดยเฉพาะ และคืนความอ่อนเยาว์ด้วยส่วนผสมอันเป็นเอกลักษณ์เฉพาะตัว และยังช่วยลดการระคายเคืองผิวที่เกิดจากกระบวนการสัก"
        />
        <meta
          name="keywords"
          content="Moko, moko, Moko Thailand, MokoThailand, mokothailand , ครีมรอยสัก , ครีมถนอมรอยสัก"
        />
        <meta
          property="og:title"
          content="ครีมถนอมรอยสัก ลดการระคายเคืองผิว Moko Thailand ครีมรอยสัก"
        />
        <meta
          property="og:description"
          content="Moko thailand ครีมถนอมรอยสัก ออกแบบมาเพื่อดูแลรอยสักโดยเฉพาะ และคืนความอ่อนเยาว์ด้วยส่วนผสมอันเป็นเอกลักษณ์เฉพาะตัว และยังช่วยลดการระคายเคืองผิวที่เกิดจากกระบวนการสัก"
        />
        <meta property="og:image" content="/path-to-open-graph-image.jpg" />
        <meta property="og:url" content="https://www.mokothailand.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ครีมถนอมรอยสัก ลดการระคายเคืองผิว Moko Thailand ครีมรอยสัก"
        />
        <meta
          name="twitter:description"
          content="Moko thailand ครีมถนอมรอยสัก ออกแบบมาเพื่อดูแลรอยสักโดยเฉพาะ และคืนความอ่อนเยาว์ด้วยส่วนผสมอันเป็นเอกลักษณ์เฉพาะตัว และยังช่วยลดการระคายเคืองผิวที่เกิดจากกระบวนการสัก"
        />
        <meta name="twitter:image" content="/path-to-twitter-image.jpg" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7DREBPW8E5"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7DREBPW8E5');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Moko Thailand",
              url: "https://www.mokothailand.com",
              logo: "https://www.mokothailand.com/Logo4.ico",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+66-840-439-489",
                contactType: "Customer Service",
                areaServed: "TH",
                availableLanguage: "Thai",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
