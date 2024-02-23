import { useEffect, useState } from "react"
import Link from "next/link"
// import { usePathname, useRouter } from "next/navigation"
import { Edit, Facebook, ShoppingBag } from "lucide-react"
import styled from "styled-components"
import { useShoppingCart } from "use-shopping-cart"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  &.active .line {
    transition: all 0.3s ease;
  }

  &.active .line:first-child {
    transform: rotate(45deg);
    margin-bottom: 0;
    top: 2px;
  }

  &.active .line:nth-child(2) {
    opacity: 0;
  }

  &.active .line:last-child {
    transform: rotate(-45deg);
    margin-top: 0;
    bottom: 2px;
  }

  .mobile-nav {
    position: absolute;
    top: 0;
    right: -16rem;
    padding-top: 5rem;
  }

  &.active .mobile-nav {
    transition: all 0.5s ease;
    right: 0;
    width: 100%;
    height: 100vh;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-end;
  }

  @media (max-width: 640px) {
    .social,
    .cart,
    .toggle-theme,
    .editor {
      display: flex;
      flex-direction: row;
    }

    &.active .social,
    &.active .cart,
    &.active .toggle-theme,
    &.active .editor {
      display: flex;
    }
  }
`

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

const Line = styled.span`
  position: relative;
  display: flex;
  width: 2rem;
  height: 2px;
  transition: all 0.3s ease;

  &:first-child {
    margin-bottom: 0.6rem;
  }

  &:last-child {
    margin-top: 0.6rem;
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
  }

  a:hover {
    font-weight: 800;
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
  //       className="social"
  //       target="_blank"
  //     >
  //       <Facebook />
  //     </Link>
  //   </Button>
  // </HeaderMenu>
    <>
      {isMobile ? (
        <HeaderMenu
          className={
            "flex items-center space-x-1 headerNav " +
            (mobileMenuOpen ? "active" : "")
          }
        >
          <div className="mobile-nav bg-white dark:bg-black">
            <HeaderIconsMobile>
              <Link href="/cart" className="cart" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Button size="sm" variant="ghost">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="ml-2 text-sm font-bold">{cartCount}</span>
                  <span className="sr-only">Cart</span>
                </Button>
              </Link>
              <ThemeToggle />
              {/* {process.env.NODE_ENV === "development" && (
                <Link href="/studio" className="editor">
                  <Button size="sm" variant="ghost">
                    <Edit className="h-5 w-5" />
                  </Button>
                </Link>
              )} */}
              <Button size="sm" variant="ghost">
                <Link
                  href="https://www.facebook.com/northwesthandmademarket"
                  className="social"
                  target="_blank"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <Facebook />
                </Link>
              </Button>
            </HeaderIconsMobile>
            {/* <HeaderLinksMobile>
              <Link href="/" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Home</Link>
              <Link href="/events" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Find a Show</Link>
              <Link href="/vendors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Our Vendors</Link>
              <Link href="/raffle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Monthly Raffle</Link>
              <Link href="/about-us" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>About Us</Link>
              <Link href="/vendor-info" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>For Vendors</Link>
            </HeaderLinksMobile> */}
          </div>
          <Hamburger
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Line className="line dark:bg-white bg-black"></Line>
            <Line className="line dark:bg-white bg-black"></Line>
            <Line className="line dark:bg-white bg-black"></Line>
          </Hamburger>
        </HeaderMenu>
      ) : (
        <HeaderMenu>
          {/* <HeaderLinksDesktop>
            <Link href="/" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Home</Link>
            <Link href="/events" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Shows</Link>
            <Link href="/vendors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Our Vendors</Link>
            <Link href="/raffle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Raffle</Link>
            <Link href="/about-us" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>About</Link>
            <Link href="/vendor-info" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>For Vendors</Link>
          </HeaderLinksDesktop> */}
          <HeaderIconsDesktop>
            <Link href="/cart" className="cart">
              <Button size="sm" variant="ghost">
                <ShoppingBag className="h-5 w-5" />
                <span className="ml-2 text-sm font-bold">{cartCount}</span>
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
            <ThemeToggle />
            {/* {process.env.NODE_ENV === "development" && (
              <Link href="/studio" className="editor">
                <Button size="sm" variant="ghost">
                  <Edit className="h-5 w-5" />
                </Button>
              </Link>
            )} */}
            <Button size="sm" variant="ghost">
              <Link
                href="https://www.facebook.com/northwesthandmademarket"
                className="social"
                target="_blank"
              >
                <Facebook />
              </Link>
            </Button>
          </HeaderIconsDesktop>
        </HeaderMenu>
      )}
    </>
  )
}
