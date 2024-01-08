import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Edit, Facebook, ShoppingBag } from "lucide-react"
import styled from "styled-components"
import { useShoppingCart } from "use-shopping-cart"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const HeaderMenu = styled.div`
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
    right: -12rem;
    padding-top: 5rem;
  }

  &.active .mobile-nav {
    transition: all 0.5s ease;
    right: 0;
    width: 100%;
    height: 100vh;
  }

  @media (max-width: 640px) {
    .social,
    .cart,
    .toggle-theme,
    .editor {
      display: none;
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

const HeaderIcons = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
`

const HeaderLinks = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  font-size: 2rem;

  a {
    border-bottom: 1px solid lightgray;
  }
`

export function HeaderNav() {
  const pathname = usePathname()
  const router = useRouter()
  const { cartCount } = useShoppingCart()

  if (pathname.startsWith("/studio")) return null

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
    <>
      {isMobile ? (
        <HeaderMenu
          className={
            "flex items-center space-x-1 headerNav " +
            (mobileMenuOpen ? "active" : "")
          }
        >
          <div className="mobile-nav bg-white dark:bg-black">
            <HeaderIcons>
              {/* <Link href="/cart" className="cart">
                <Button size="sm" variant="ghost">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="ml-2 text-sm font-bold">{cartCount}</span>
                  <span className="sr-only">Cart</span>
                </Button>
              </Link> */}
              <ThemeToggle />
              {process.env.NODE_ENV === "development" && (
                <Link href="/studio" className="editor">
                  <Button size="sm" variant="ghost">
                    <Edit className="h-5 w-5" />
                  </Button>
                </Link>
              )}
              <Button size="sm" variant="ghost">
                <Link
                  href="https://www.facebook.com/northwesthandmademarket"
                  className="social"
                  target="_blank"
                >
                  <Facebook />
                </Link>
              </Button>
            </HeaderIcons>
            {/* <HeaderLinks>
              <Link href="#">Find a Show</Link>
              <Link href="#">About Us</Link>
              <Link href="#">For Vendors</Link>
            </HeaderLinks> */}
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
          {/* <Link href="/cart" className="cart">
            <Button size="sm" variant="ghost">
              <ShoppingBag className="h-5 w-5" />
              <span className="ml-2 text-sm font-bold">{cartCount}</span>
              <span className="sr-only">Cart</span>
            </Button>
          </Link> */}
          <ThemeToggle />
          {process.env.NODE_ENV === "development" && (
            <Link href="/studio" className="editor">
              <Button size="sm" variant="ghost">
                <Edit className="h-5 w-5" />
              </Button>
            </Link>
          )}
          <Button size="sm" variant="ghost">
            <Link
              href="https://www.facebook.com/northwesthandmademarket"
              className="social"
              target="_blank"
            >
              <Facebook />
            </Link>
          </Button>
        </HeaderMenu>
      )}
    </>
  )
}
