import "./globals.css";
import { Quattrocento } from "next/font/google";

const quattrocento = Quattrocento({ subsets: ["latin"], weight: ["400","700"] });

export const metadata = {
  title: "Thiago Rodrigues - Dev",
  description: "Desenvolvedor Front-end",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={quattrocento.className}>{children}</body>
    </html>
  );
}
