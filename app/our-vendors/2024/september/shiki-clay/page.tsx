import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Globe } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/september"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to September
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Shiki Clay</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/shiki-clay/shiki-clay-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for shiki-clay"
          />
          <div className={styles.bio}><p>Hello there!  My name is Shiori - a woman behind Shiki Clay.  My passion for creating reached its peak after my son was born.  I was a stay home mom and I spent LOTS of time staying in my crafting bubble with my little one for a while. That&apos;s when I fell in love with polymer clay art and started making jewelries.  Once I had an enough courage to open up an online shop and Instagram account to share with the world, I found my happy place!  I enjoy making floral earrings that are delicate and detailed, and also love making bookmarks for book lovers including myself.  I can&apos;t wait to meet new people in Edmonds!</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://shikiclay.com"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.etsy.com/shop/ShikiClayCreations?section_id=1"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/shiki-clay/shiki-clay-1.JPG"}
            img1Alt={"Handmade polymer clay jewelry by shiki clay"}
            imgSrc2={"/images/vendors/shiki-clay/shiki-clay-2.JPG"}
            img2Alt={"Handmade polymer clay jewelry by shiki clay"}
            imgSrc3={"/images/vendors/shiki-clay/shiki-clay-3.JPG"}
            img3Alt={"Handmade polymer clay jewelry by shiki clay"}
            imgSrc4={"/images/vendors/shiki-clay/shiki-clay-4.JPG"}
            img4Alt={"Handmade polymer clay jewelry by shiki clay"}
            imgSrc5={"/images/vendors/shiki-clay/shiki-clay-5.JPG"}
            img5Alt={"Handmade polymer clay jewelry by shiki clay"}
            imgSrc6={"/images/vendors/shiki-clay/shiki-clay-6.JPG"}
            img6Alt={"Handmade polymer clay jewelry by shiki clay"}
            imgSrc7={"/images/vendors/shiki-clay/shiki-clay-7.JPG"}
            img7Alt={"Handmade polymer clay jewelry by shiki clay"}
            imgSrc8={"/images/vendors/shiki-clay/shiki-clay-8.jpg"}
            img8Alt={"Handmade polymer clay jewelry by shiki clay"}
            imgSrc9={"/images/vendors/shiki-clay/shiki-clay-9.jpg"}
            img9Alt={"Handmade polymer clay jewelry by shiki clay"}
            imgSrc10={""}
            img10Alt={""}
          />
        </div>
      </div>
    </div>
  )
}
