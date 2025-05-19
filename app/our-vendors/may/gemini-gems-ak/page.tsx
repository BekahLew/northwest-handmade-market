import Image from "next/image"
import Link from "next/link"
import { Facebook, ShoppingBag, Music2 } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/may"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to May
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Gemini Gems AK</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/gemini-gems-ak/gemini-gems-ak-bio-pic.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for gemini gems ak"
          />
          <div className={styles.bio}>
            <p>Hi! I&apos;m Sigrid, the Chilean artist behind Gemini Gems AK. I make handmade, one of a kind beaded wrap bracelets and earrings, each one crafted with love and care. My love for wrap bracelets and beading started over 12 years ago, thanks to my mama. Crafting and beading are in my blood, rooted in my indigenous heritage.</p>
            <p>In a world full of mass-produced items, I believe artists and creators are truly special. Every wrap bracelet, beaded earrings, and beaded necklaces I create are unique and one of a kind. No two pieces are ever the same. When you shop with me, you&apos;re getting a handcrafted piece that no one else in the world will have.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/geminigemsak/"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.tiktok.com/@geminigemsak"
              target="_blank"
              rel="noopener"
            >
              <Music2 size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://geminigemsak.etsy.com"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/gemini-gems-2025/gemini-gems-2025-8.jpeg"}
            img1Alt={"custom earrings and bracelets by gemini gems"}
            imgSrc2={"/images/vendors/gemini-gems-2025/gemini-gems-2025-9.jpeg"}
            img2Alt={"custom earrings and bracelets by gemini gems"}
            imgSrc3={"/images/vendors/gemini-gems-2025/gemini-gems-2025-3.png"}
            img3Alt={"custom earrings and bracelets by gemini gems"}
            imgSrc4={"/images/vendors/gemini-gems-2025/gemini-gems-2025-4.jpeg"}
            img4Alt={"custom earrings and bracelets by gemini gems"}
            imgSrc5={"/images/vendors/gemini-gems-2025/gemini-gems-2025-5.jpeg"}
            img5Alt={"custom earrings and bracelets by gemini gems"}
            imgSrc6={"/images/vendors/gemini-gems-2025/gemini-gems-2025-6.png"}
            img6Alt={"custom earrings and bracelets by gemini gems"}
            imgSrc7={"/images/vendors/gemini-gems-2025/gemini-gems-2025-7.png"}
            img7Alt={"custom earrings and bracelets by gemini gems"}
            imgSrc8={"/images/vendors/gemini-gems-2025/gemini-gems-2025-1.png"}
            img8Alt={"custom earrings and bracelets by gemini gems"}
            imgSrc9={"/images/vendors/gemini-gems-2025/gemini-gems-2025-2.jpeg"}
            img9Alt={"custom earrings and bracelets by gemini gems"}
            imgSrc10={"/images/vendors/gemini-gems-2025/gemini-gems-2025-10.jpeg"}
            img10Alt={"custom earrings and bracelets by gemini gems"}
          />
        </div>
      </div>
    </div>
  )
}
