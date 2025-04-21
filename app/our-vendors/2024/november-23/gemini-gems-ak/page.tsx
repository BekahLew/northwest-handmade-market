import Image from "next/image"
import Link from "next/link"
import { Facebook, ShoppingBag, Music2 } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/november-23"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to November 23rd
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
          <div className={styles.bio}><p>My name is Sigrid and I am the Chilean artist and creator behind Gemini Gems AK. I was born and raised in Alaska and lived there for 30 years before I uprooted my life to be a second grade teacher in Las Vegas. I recently left teaching to focus on my health and my art. My mom introduced me to wrap bracelets 11 years ago, and I have been hooked ever since! Beading and crafting runs strong through my indigenous roots. My mom also helps make crochet bags for my bracelets. Making handmade bracelets is a passion of mine. In a world where almost everything is mass produced by huge companies, I believe that artists and creators are a special gift on Mother Earth. My wrap bracelets and beaded earrings are all unique. I have never created two of the same bracelets or designs. You can be assured that when you purchase from my shop, you will be buying a handcrafted piece that no one else in the world has- a truly one of a kind piece!</p></div>
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
            imgSrc1={"/images/vendors/gemini-gems-ak/gemini-gems-ak-1.png"}
            img1Alt={"custom earrings and bracelets by gemini gems"}
            imgSrc2={"/images/vendors/gemini-gems-ak/gemini-gems-ak-2.png"}
            img2Alt={"custom earrings and bracelets by gemini gems"}
            imgSrc3={"/images/vendors/gemini-gems-ak/gemini-gems-ak-3.png"}
            img3Alt={"custom earrings and bracelets by gemini gems"}
            imgSrc4={"/images/vendors/gemini-gems-ak/gemini-gems-ak-4.png"}
            img4Alt={"custom earrings and bracelets by gemini gems"}
            imgSrc5={"/images/vendors/gemini-gems-ak/gemini-gems-ak-5.png"}
            img5Alt={"custom earrings and bracelets by gemini gems"}
            imgSrc6={"/images/vendors/gemini-gems-ak/gemini-gems-ak-6.png"}
            img6Alt={"custom earrings and bracelets by gemini gems"}
            imgSrc7={"/images/vendors/gemini-gems-ak/gemini-gems-ak-7.png"}
            img7Alt={"custom earrings and bracelets by gemini gems"}
            imgSrc8={"/images/vendors/gemini-gems-ak/gemini-gems-ak-8.png"}
            img8Alt={"custom earrings and bracelets by gemini gems"}
            imgSrc9={"/images/vendors/gemini-gems-ak/gemini-gems-ak-9.png"}
            img9Alt={"custom earrings and bracelets by gemini gems"}
            imgSrc10={"/images/vendors/gemini-gems-ak/gemini-gems-ak-10.png"}
            img10Alt={"custom earrings and bracelets by gemini gems"}
          />
        </div>
      </div>
    </div>
  )
}
