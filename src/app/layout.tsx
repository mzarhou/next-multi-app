"use client";

import Link from "next/link";
import "../styles/globals.css";
import GameRouter from "./_game";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <div className="flex">
            <div className="min-h-screen w-1/2 bg-blue-500">
              <GameRouter />
            </div>
            <div className="flex min-h-screen w-1/2 flex-col">
              <div className="space-x-4 px-4 py-2">
                <Link href="/">Home</Link>
                <Link href="/chat">Chat</Link>
                <Link href="/chat/friend">Friend</Link>
              </div>
              {children}
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
