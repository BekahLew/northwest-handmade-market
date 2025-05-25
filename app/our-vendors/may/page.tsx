import Link from "next/link"
import styles from 'styles/VendorsOverview.module.css'
import Image from 'next/image'
import { Facebook, CalendarHeart } from "lucide-react"
import { Spacer } from "@/components/spacer"

export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[1600px] mx-auto mt-[2rem]">
        <Link href="/our-vendors" className="mb-[2rem] max-w-[1000px] mx-auto">&larr; Back to Our Vendors</Link>
        <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">May Vendors</h1>
        <div className={styles.vendors}>
          <Link href="/our-vendors/may/crafty-juniper" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/crafty-juniper-2025/crafty-juniper-2025-logo.png"
                height={200}
                width={200}
                alt="crafty juniper logo"
              />
            </Link>
            <Link href="/our-vendors/may/solea" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/solea/solea-logo.png"
                height={200}
                width={200}
                alt="solea logo"
              />
            </Link>
            <Link href="/our-vendors/may/shiki-clay" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/shiki-clay/shiki-clay-logo.png"
                height={200}
                width={200}
                alt="Logo for Shiki Clay"
              />
            </Link>
            <Link href="/our-vendors/may/from-my-art" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/from-my-art-2025/from-my-art-logo-new.png"
                height={200}
                width={200}
                alt="from my art logo"
              />
            </Link>
            <Link href="/our-vendors/may/the-tipsy-toadstool" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/the-tipsy-toadstool/the-tipsy-toadstool-logo.png"
                height={200}
                width={200}
                alt="unique art from the tipsy toadstool"
              />
            </Link>
            <Link href="/our-vendors/may/foxhilt" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/foxhilt/foxhilt-logo.jpg"
                height={200}
                width={200}
                alt="logo for foxhilt"
              />
            </Link>
            <Link href="/our-vendors/may/kathie-ceramics" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/kathie-ceramics/kathie-ceramics-logo-new.jpeg"
                height={200}
                width={200}
                alt="unique art from kathie ceramics"
              />
            </Link>
            <Link href="/our-vendors/may/koala-creations" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/koala-creations/koala-creations-logo-pic.png"
                height={200}
                width={200}
                alt="logo for koala creations"
              />
            </Link>
            <Link href="/our-vendors/may/ma-n-da-quilts-n-crafts" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/ma-n-da-quilts-n-crafts/ma-n-da-quilts-n-crafts-7.jpeg"
                height={200}
                width={200}
                alt="unique art and quilts from Ma-n-da quilts n crafts"
              />
            </Link>
            <Link href="/our-vendors/may/sweet-dlily-shop" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/sweet-dlily-shop/sweet-dlily-shop-logo.png"
                height={200}
                width={200}
                alt="unique bags from sweet d lily shop"
              />
            </Link>
            <Link href="/our-vendors/may/dw-crafts" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/dw-crafts/dw-crafts-logo.png"
                height={200}
                width={200}
                alt="unique wood art from dw-crafts"
              />
            </Link>
            <Link href="/our-vendors/may/uniquely-curious-art" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/uniquely-curious-art/uniquely-curious-art-logo.png"
                height={200}
                width={200}
                alt="unique art from uniquely curious art"
              />
            </Link>
            <Link href="/our-vendors/may/aromatic-creations" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/aromatic-creations/aromatic-creations-logo.png"
                height={200}
                width={200}
                alt="Logo for Aromatic Creations"
              />
            </Link>
            <Link href="/our-vendors/may/trinda-magic" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/trinda-magic/trinda-magic-logo.png"
                height={200}
                width={200}
                alt="Logo for Trinda Magic"
              />
            </Link>
            <Link href="/our-vendors/may/m-and-ms-vintage-decor" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/m-ms-vintage-2025/m-ms-vintage-2025-logo.jpeg"
                height={200}
                width={200}
                alt="m and ms vintage decor"
              />
            </Link>
            <Link href="/our-vendors/may/gemini-gems-ak" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/gemini-gems-ak/gemini-gems-ak-logo.png"
                height={200}
                width={200}
                alt="Starry logo for gemini gems ak"
              />
            </Link>
            <Link href="/our-vendors/may/bris-blooms" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/bris-blooms/bris-blooms-logo.png"
                height={200}
                width={200}
                alt="logo for bris blooms"
              />
            </Link>
            <Link href="/our-vendors/may/yarrow-and-the-sea" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/logos/yarrow-and-the-sea.webp"
                height={200}
                width={200}
                alt="logo for yarrow and the sea"
              />
            </Link>
      


            <a href="https://www.tealandflow.com" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/logos/teal-and-flow-logo.png"
                height={200}
                width={200}
                alt="logo for teal and flow"
              />
            </a>
            <a href="https://www.instagram.com/mola_shoppe?igsh=MWhvYnpjMzFnM2ZvZw%3D%3D&utm_source=qr%3F" className={styles.vendor + " bg-[#b45537]"} target="_blank">
              <Image
                  src="/images/vendors/logos/mola-shoppe-logo.jpeg"
                  height={200}
                  width={200}
                  alt="pressed flower art by mola shoppe"
                />
            </a>
            <a href="https://rebloomdesigns.com" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/logos/rebloom-designs-logo.png"
                height={200}
                width={200}
                alt="logo for rebloom designs"
              />
            </a>
            <a href="https://www.bmacphersonstudio.com/" className={styles.vendor + " bg-[#b45537]"} target="_blank">
              <Image
                  src="/images/vendors/logos/b-macpherson-studio.webp"
                  height={200}
                  width={200}
                  alt="logo for b macpherson studio"
                />
            </a>
            <a href="https://wellrooted.net/" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/well-rooted/well-rooted-logo.jpg"
                height={200}
                width={200}
                alt="logo for well rooted"
              />
            </a>
            <a href="https://falconefarm.com/" className={styles.vendor + " bg-[#b45537]"} target="_blank">
              <Image
                  src="/images/vendors/logos/falcone-farm.webp"
                  height={200}
                  width={200}
                  alt="soap from falcone farm"
                />
            </a>
            <a href="https://aromaticindulgence.com/" className={styles.vendor + " bg-[#b45537]"} target="_blank">
              <Image
                  src="/images/vendors/logos/aromatic-indulgence.jpg"
                  height={200}
                  width={200}
                  alt="Candles from aromatic indulgence"
                />
            </a>
            <a href="https://www.courtneyleanne.com/" className={styles.vendor + " bg-[#b45537]"} target="_blank">
              <Image
                  src="/images/vendors/logos/courtney-leanne.jpg"
                  height={200}
                  width={200}
                  alt="art from courtney leanne"
                />
            </a>
            <a href="https://www.instagram.com/cieloyamorcandles/" className={styles.vendor + " bg-[#b45537]"} target="_blank">
              <Image
                  src="/images/vendors/logos/cielo-y-amor-candle-co.png"
                  height={200}
                  width={200}
                  alt="candles from cielo y amor candle co"
                />
            </a>



            <div className={styles.vendor + " bg-[#b45537]"}>
              <Image
                  src="/images/vendors/logos/darkhart-productions.png"
                  height={200}
                  width={200}
                  alt="sewn items by darkhart productions"
                />
            </div>


            <div className={styles.vendor + " bg-[#b45537]"}>
              <p>ZunZun <span>Bath and Body</span></p>
            </div>
        </div>
      </div>
    )
  }