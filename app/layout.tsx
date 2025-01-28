import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientComponent from "@/components/ClientComponent";
import React from "react";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
    title: "Dev Nexus",
    description: "Curated Collection of Modern Development Resources",
    icons: {
        icon: "/logo.jpg",
        shortcut: "/logo.jpg",
    }
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-[#0f172a] text-white`}>
        <ClientComponent>{children}</ClientComponent>
        </body>
        </html>
    );
}