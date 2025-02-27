import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientComponent from "@/components/ClientComponent";
import React from "react";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
    title: "Nexus Tools",
    description: "Curated Collection of Modern Development Resources",
    keywords: ["development", "design", "resources", "tools", "react", "web", "backend", "frontend", "database", "sql"],
    facebook: {
        appId: "",
    },
    twitter: {
      card: "summary_large_image",
        site: "@nexus-tools",
        title: "Nexus Tools",
        description: "Curated Collection of Modern Development Resources",
        images: "/logo.jpg",
    },
    icons: {
        icon: "/logo.jpg",
        shortcut: "/logo.jpg",
    },
    verification: {
        google: "XMP70sp5iFA9s6ZUkmQ4ldYSCki74sNMD1tIj5D86t4",
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