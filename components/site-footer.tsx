import Link from "next/link"

import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer>
      <div className="mx-auto max-w-[2000px] overflow-hidden px-6 py-6 sm:py-10 lg:px-8">
        {/* <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {siteConfig.footer.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6">
                {item.name}
              </Link>
            </div>
          ))}
        </nav> */}
        <div className="text-center">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </div>
      </div>
    </footer>
  )
}
