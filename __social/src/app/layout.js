import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Leor Media | Linktree",
    description: "Leor Media - Photography • Cinematography • Events. Connect with us for professional photography, cinematography, and event services.",
    keywords: "photography, cinematography, events, leor media, professional photographer, video production",
    openGraph: {
        title: "Leor Media | Linktree",
        description: "Connect with Leor Media - Photography • Cinematography • Events",
        siteName: "Leor Media",
        locale: "en_US",
        type: "website",
        url: "https://www.leormedia.com",
        images: [
            {
                url: "/Thumbnails.png",
                width: 1200,
                height: 630,
                alt: "Leor Media - Photography, Cinematography & Events",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Leor Media | Linktree",
        description: "Connect with Leor Media - Photography • Cinematography • Events",
        images: ["/Thumbnails.png"],
    },
};

export const viewport = {
    themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
