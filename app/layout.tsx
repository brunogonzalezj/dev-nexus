import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientComponent from "@/components/ClientComponent";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nexus Tools - Modern Development Resources",
    description: "Discover curated development resources including UI Libraries, React Tools, Design Resources, Databases, and Backend Tools for modern web development.",
    keywords: "web development, UI libraries, React tools, design resources, databases, backend tools, developer resources",
    metadataBase: new URL('https://nexus-tools.tech'),
    icons: {
        icon: '/logo.jpg',
        shortcut: '/og-image.png',
    },
    openGraph: {
        title: 'Nexus Tools - Modern Development Resources',
        description: 'Curated Collection of Modern Development Resources for Developers',
        type: 'website',
        locale: 'en_US',
        url: 'https://nexus-tools.tech',
        siteName: 'Nexus Tools',
        images: [{
            url: '/og-image.png',
            width: 1200,
            height: 630,
            alt: 'Nexus Tools Preview',
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nexus Tools - Modern Development Resources',
        description: 'Curated Collection of Modern Development Resources for Developers',
        images: ['/og-image.png'],
    },
    other: {
        'whatsapp:app': 'true',
        'mobile-web-app-capable': 'yes',
        'whatsapp-title': 'Nexus Tools - Modern Development Resources',
        'whatsapp-description': 'Curated Collection of Modern Development Resources for Developers',
        'whatsapp-image': '/og-image.png',
        'discord:app': 'true',
        'discord-title': 'Nexus Tools - Modern Development Resources',
        'discord-description': 'Curated Collection of Modern Development Resources for Developers',
        'discord-image': '/og-image.png',
        'discord-robots': 'index,follow',
    },
    alternates: {
        canonical: 'https://nexus-tools.tech',
    },
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