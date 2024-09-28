import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:"GeniusWorld Social Media App",
  description: "Proudly Built by GeniusWorld",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider  appearance={{
      signIn: {
        variables: { colorPrimary: "#F9AA11" },
      },
      signUp: {
        variables: { colorPrimary: "#F9AA11" },
      },
    }}>
    <html lang="en">
      <body className={inter.className}>
      <div className="w-full bg-white md:px-8 lg:px-16 xl:px-32 2xl:px-64">  
        <Navbar/>
        
      </div>
      <div className=" bg-slate-100 px-4  md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        {children}
      </div>
      </body>
    </html>
    </ClerkProvider>
  );
}