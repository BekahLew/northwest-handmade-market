import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Providers } from "@/components/providers"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico'
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId="G-G8GZJ2WN1H" />
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-arapey antialiased",
            fontSans.variable
          )}
        >
          <Providers>
            <div className="relative flex min-h-screen flex-col overflow-hidden">
              <SiteHeader />
              <div className="flex-1 pt-[4rem]">{children}</div>
              <SiteFooter />
            </div>
          </Providers>
        </body>
      </html>
    </>
  )
}
