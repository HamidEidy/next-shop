import localFont from "next/font/local";
import type { Metadata } from "next";
import "./main.css"
import NextNprogress from "@/libraries/NextNProgress";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext";
import ReduxProvider from "@/context/ReduxProvider";
const myFont = localFont({
  src: '../public/font/Yekan-Bakh-FaNum-05-Medium.woff'
})
export const metadata: Metadata = {
  title: "Next.js Eccommerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" className="apply">
      <body className={myFont.className}>
        <AuthProvider>
          <ReduxProvider>
            <NextNprogress>
              {children}
              <Toaster />
            </NextNprogress>
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
