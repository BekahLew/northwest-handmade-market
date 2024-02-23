"use client"

import { useSearchParams } from "next/navigation"
import { HeaderNav } from "./header-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HeaderLogo } from "@/components/header-logo"

export function SiteHeader() {
  // const searchParams = useSearchParams()
  // const defaultSearchQuery = searchParams.get('search') ?? ""

  // function onSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
  //   event.preventDefault()
  //   const formData = new FormData(event.currentTarget)
  //   const searchQuery = formData.get('search')
  //   router.replace(`/?search=${searchQuery}`)
  // }
  
  return (
    <header className="sticky top-0 z-40 w-full shadow-md bg-background">
      <div className="max-w-[2000px] mx-auto flex items-center justify-between space-x-4 px-6 sm:space-x-0 pt-[.5rem] pb-[.5rem]">
        <HeaderLogo />
        {/* <form onSubmit={onSubmit} className="hidden items-center lg:inline-flex">
          <Input
            id="search"
            name="search"
            type="search"
            autoComplete="off"
            placeholder="Search products..."
            className="h-9 lg:w-[300px]"
            defaultValue={defaultSearchQuery}
          />
        </form> */}
        <HeaderNav />
      </div>
    </header>
  )
}
