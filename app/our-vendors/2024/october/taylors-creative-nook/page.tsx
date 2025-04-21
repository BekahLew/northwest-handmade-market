import Image from "next/image"
import Link from "next/link"
import { Facebook, ShoppingBag, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/october"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to October
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Taylor&apos;s Creative Nook</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/taylors-creative-nook/taylors-creative-nook-logo.webp"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for taylors-creative-nook"
          />
          <div className={styles.bio}><p> Hi there! I&apos;m Taylor, the creative soul behind Taylor&apos;s Creative Nook. Crafting has been my lifelong passion, but it took on a whole new meaning during some pivotal moments in my life. When faced with the stress of teaching and the challenges that life threw my way, I turned to DIY wedding decor for my own and my best friend&apos;s special day. Little did I know that this would become the beginning of a beautiful journey. My crafting journey took an unexpected turn when my husband needed a kidney and ended up on dialysis. In the midst of this challenging time, crafting became more than just a hobby; it became a source of strength and a platform for spreading awareness about kidney disease and organ donation. Through personalized shirts, tumblers, and car decals, we not only succeeded in raising awareness but also found a kidney donor for my husband. The joy of crafting and the success in my personal quest ignited a passion that extended far beyond my initial projects. I delved into the art of etched glass when our dog agility club needed High In Trial prizes, and I expanded my offerings to include party decor and baby clothes as friends and family welcomed new additions. What started as a coping mechanism transformed into a genuine love for creating custom gifts and memorable experiences. This summer I started stepping beyond the &quot;walls&quot; of Etsy and Facebook to bring some of my designs directly to you through events such as Petpalooza (Auburn), Dog Days of Summer (Bellingham). and Northwest Handmade Markets (Edmonds). You can now purchase a pre-made design, still given the attention to detail and love that I give my custom designs, or work with me to create a custom gift, as special as the person receiving it. Unleash your creativity and celebrate life&apos;s special moments with custom gifts and decorations that are as unique as you are! Whether you&apos;re looking for a unique tumbler, a set of baby clothes, a custom bag, a customized sign, etched glass or one-of-a-kind decor for a party, wedding, or celebration, I&apos;m here to make it happen. Let&apos;s work together to make your next celebration extraordinary and spread the love! Thank you for being a part of this meaningful journey. Your support means the world to me.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/profile.php?id=61557563162653&mibextid=ZbWKwL
              "
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/taylorscreativenook?igsh=cWVzMGpzempxaWtk&utm_source=qr"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.etsy.com/shop/TaylorsCreativeNook"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/taylors-creative-nook/taylors-creative-nook-1.jpeg"}
            img1Alt={"Custom designs by taylors creative nook"}
            imgSrc2={"/images/vendors/taylors-creative-nook/taylors-creative-nook-2.jpeg"}
            img2Alt={"Custom designs by taylors creative nook"}
            imgSrc3={"/images/vendors/taylors-creative-nook/taylors-creative-nook-3.jpeg"}
            img3Alt={"Custom designs by taylors creative nook"}
            imgSrc4={"/images/vendors/taylors-creative-nook/taylors-creative-nook-4.jpeg"}
            img4Alt={"Custom designs by taylors creative nook"}
            imgSrc5={"/images/vendors/taylors-creative-nook/taylors-creative-nook-5.jpeg"}
            img5Alt={"Custom designs by taylors creative nook"}
            imgSrc6={"/images/vendors/taylors-creative-nook/taylors-creative-nook-6.jpeg"}
            img6Alt={"Custom designs by taylors creative nook"}
            imgSrc7={"/images/vendors/taylors-creative-nook/taylors-creative-nook-7.jpeg"}
            img7Alt={"Custom designs by taylors creative nook"}
            imgSrc8={"/images/vendors/taylors-creative-nook/taylors-creative-nook-8.jpeg"}
            img8Alt={"Custom designs by taylors creative nook"}
            imgSrc9={"/images/vendors/taylors-creative-nook/taylors-creative-nook-9.jpeg"}
            img9Alt={"Custom designs by taylors creative nook"}
            imgSrc10={"/images/vendors/taylors-creative-nook/taylors-creative-nook-10.jpeg"}
            img10Alt={"Custom designs by taylors creative nook"}
          />
        </div>
      </div>
    </div>
  )
}
