import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Op Pautu | Portfolio",
  description:
    "Op Pautu is a self-taught full-stack developer who started web development in 2022.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative bg-gray-50 text-gray-950 h-[5000px]`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] blur-[10rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] blur-[10rem] left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
