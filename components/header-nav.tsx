import { useEffect, useState } from "react"
import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import styled from "styled-components"
import styles from "styles/Header.module.css"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const Hamburger = styled.button`
  position: relative;
  height: 3rem;
  &::before {
    content: "";
    top: 0;
    left: 0;
    height: 3rem;
    width: 3rem;
    position: absolute;
  }
`

const HeaderIconsMobile = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
`

const HeaderLinksMobile = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  font-size: 2rem;

  a {
    border-bottom: 1px solid lightgray;
  }
`

const HeaderLinksDesktop = styled.div`
  a {
    position: relative;
    font-size: 1.1rem;
    margin: 0.4rem;
    min-width: 100px;
    white-space: nowrap;
  }

  a::before {
    content: "";
    position: absolute;
    min-width: 0;
    width: 0;
    height: 2px;
    bottom: -3px;
    background-color: #bc5738;
    transition: all 0.4s ease;
  }

  a:hover::before {
    width: 100%;
    min-width: 30px;
    transition: all 0.4s ease;
  }
`

const HeaderIconsDesktop = styled.div`
  display: flex;
  justify-content: flex-end;
`

export function HeaderNav() {
  // const pathname = usePathname()
  // const router = useRouter()

  // if (pathname.startsWith("/studio")) return null

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function updateSize() {
      setIsMobile(window.innerWidth <= 640)
    }
  
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])
  

  return (
    //   <HeaderMenu className="flex">
    //   <ThemeToggle />
    //   <Button size="sm" variant="ghost">
    //     <Link
    //       href="https://www.facebook.com/northwesthandmademarket"
    //       className={styles.social}
    //       target="_blank"
    //     >
    //       <Facebook />
    //     </Link>
    //   </Button>
    // </HeaderMenu>
    <>
      {isMobile ? (
        <div
          className={
            styles.menu +
            " flex items-center space-x-1 headerNav " +
            (mobileMenuOpen ? styles.active : "")
          }
        >
          <div className={styles.mobile + " bg-white dark:bg-black"}>
            <HeaderIconsMobile>
              {/* <Link href="/cart" className={styles.cart} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Button size="sm" variant="ghost">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="ml-2 text-sm font-bold">{cartCount}</span>
                  <span className="sr-only">Cart</span>
                </Button>
              </Link> */}
              <ThemeToggle />
              {/* {process.env.NODE_ENV === "development" && (
                <Link href="/studio" className={styles.editor}>
                  <Button size="sm" variant="ghost">
                    <Edit className="h-5 w-5" />
                  </Button>
                </Link>
              )} */}
              <Button size="sm" variant="ghost">
                <a
                  href="https://www.facebook.com/northwesthandmademarket"
                  className={styles.social}
                  target="_blank"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <Facebook />
                </a>
              </Button>
              <Button size="sm" variant="ghost">
                <a
                  href="https://www.instagram.com/northwesthandmademarket/"
                  className={styles.social}
                  target="_blank"
                >
                  <Instagram />
                </a>
              </Button>
              <Button size="sm" variant="ghost">
                <a
                  href="https://www.pinterest.com/northwesthandmademarket/"
                  className={styles.social}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="dark:fill-[#E1E7EF] fill-[#0F172A]"
                    width="25"
                    height="25"
                    viewBox="0 0 384 512"
                  >
                    <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path>
                  </svg>
                </a>
              </Button>
            </HeaderIconsMobile>
            <HeaderLinksMobile>
              <Link href="/" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                Home
              </Link>
              <Link
                href="/events"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Find a Show
              </Link>
              <Link
                href="/our-vendors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Our Vendors
              </Link>
              <Link
                href="/raffle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Free Raffle
              </Link>
              {/* <Link href="/about-us" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>About Us</Link> */}
              <Link
                href="/vendor-info"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                For Vendors
              </Link>
            </HeaderLinksMobile>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative h-[3rem] before:content-[''] top-0 left-[0] h-[3rem] w-[3rem]"
          >
            <span
              className={
                styles.line +
                " dark:bg-white bg-black relative flex w-[2rem] h-[2px] transition-all mb-[.6rem]"
              }
            ></span>
            <span
              className={
                styles.line +
                " dark:bg-white bg-black relative flex w-[2rem] h-[2px] transition-all"
              }
            ></span>
            <span
              className={
                styles.line +
                " dark:bg-white bg-black relative flex w-[2rem] h-[2px] transition-all mt-[.6rem]"
              }
            ></span>
          </button>
        </div>
      ) : (
        <div>
          <HeaderLinksDesktop>
            <Link href="/" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              Home
            </Link>
            <Link
              href="/events"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              Shows
            </Link>
            <Link
              href="/our-vendors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              Our Vendors
            </Link>
            <Link
              href="/raffle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              Free Raffle
            </Link>
            {/* <Link href="/about-us" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>About</Link> */}
            <Link
              href="/vendor-info"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              For Vendors
            </Link>
          </HeaderLinksDesktop>
          <HeaderIconsDesktop>
            {/* <Link href="/cart" className={styles.cart}>
              <Button size="sm" variant="ghost">
                <ShoppingBag className="h-5 w-5" />
                <span className="ml-2 text-sm font-bold">{cartCount}</span>
                <span className="sr-only">Cart</span>
              </Button>
            </Link> */}
            <ThemeToggle />
            {/* {process.env.NODE_ENV === "development" && (
              <Link href="/studio" className={styles.editor}>
                <Button size="sm" variant="ghost">
                  <Edit className="h-5 w-5" />
                </Button>
              </Link>
            )} */}
            <Button size="sm" variant="ghost">
              <a
                href="https://www.facebook.com/northwesthandmademarket"
                className={styles.social}
                target="_blank"
              >
                <Facebook />
              </a>
            </Button>
            <Button size="sm" variant="ghost">
              <a
                href="https://www.instagram.com/northwesthandmademarket/"
                className={styles.social}
                target="_blank"
              >
                <Instagram />
              </a>
            </Button>
            <Button size="sm" variant="ghost">
              <a
                href="https://www.pinterest.com/northwesthandmademarket/"
                className={styles.social}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="dark:fill-[#E1E7EF] fill-[#0F172A]"
                  width="25"
                  height="25"
                  viewBox="0 0 384 512"
                >
                  <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path>
                </svg>
              </a>
            </Button>
          </HeaderIconsDesktop>
        </div>
      )}
    </>
  )
}
