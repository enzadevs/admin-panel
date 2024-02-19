import "./globals.css";
import TopProgressBar from "components/Functions/TopProgressBar";

export const metadata = {
  title: "E-Commerce Admin Panel Tools by Älem Tilsimat HJ",
  description: "E-Commerce Admin Panel Tools by Älem Tilsimat HJ",
  name: "viewport",
  content: "width=device-width, initial-scale=1",
};

import { Roboto } from "next/font/google";

const globalFont = Roboto({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="rus" className={globalFont.className} suppressHydrationWarning>
      <body className="bg-white flex flex-col min-h-screen">
        <TopProgressBar />
        {children}
      </body>
    </html>
  );
}
