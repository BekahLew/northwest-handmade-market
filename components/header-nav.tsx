import { useEffect, useState } from "react"
import Link from "next/link"
// import { usePathname, useRouter } from "next/navigation"
import { Edit, Facebook, ShoppingBag } from "lucide-react"
import styled from "styled-components"
import styles from 'styles/Header.module.css';
import { useShoppingCart } from "use-shopping-cart"

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
    margin: .4rem;
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
    background-color: #BC5738;
    transition: all .4s ease;
  }

  a:hover::before {
    width: 100%;
    min-width: 30px;
    transition: all .4s ease;
  }
`

const HeaderIconsDesktop = styled.div`
  display: flex;
  justify-content: flex-end;
`

export function HeaderNav() {
  // const pathname = usePathname()
  // const router = useRouter()
  const { cartCount } = useShoppingCart()

  // if (pathname.startsWith("/studio")) return null

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  
  const isMobile = width <= 640;

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
            styles.menu + " flex items-center space-x-1 headerNav " +
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
            </HeaderIconsMobile>
            <HeaderLinksMobile>
              <Link href="/" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Home</Link>
              <Link href="/events" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Find a Show</Link>
              <Link href="/our-vendors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Our Vendors</Link>
              <Link href="/raffle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Free Raffle</Link>
              {/* <Link href="/about-us" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>About Us</Link> */}
              <Link href="/vendor-info" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>For Vendors</Link>
            </HeaderLinksMobile>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative h-[3rem] before:content-[''] top-0 left-[0] h-[3rem] w-[3rem]"
          >
            <span className={styles.line + " dark:bg-white bg-black relative flex w-[2rem] h-[2px] transition-all mb-[.6rem]"}></span>
            <span className={styles.line + " dark:bg-white bg-black relative flex w-[2rem] h-[2px] transition-all"}></span>
            <span className={styles.line + " dark:bg-white bg-black relative flex w-[2rem] h-[2px] transition-all mt-[.6rem]"}></span>
          </button>
        </div>
      ) : (
        <div>
          <HeaderLinksDesktop>
            <Link href="/" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Home</Link>
            <Link href="/events" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Shows</Link>
            <Link href="/our-vendors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Our Vendors</Link>
            <Link href="/raffle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Free Raffle</Link>
            {/* <Link href="/about-us" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>About</Link> */}
            <Link href="/vendor-info" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>For Vendors</Link>
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
          </HeaderIconsDesktop>
        </div>
      )}
    </>
  )
}
