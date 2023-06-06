import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mansour Lotfi",
  description:
    "Check out my portfolio site to see my projects, skills and testimonials.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div id="overlays"></div>
        {children}
      </body>
    </html>
  );
}
