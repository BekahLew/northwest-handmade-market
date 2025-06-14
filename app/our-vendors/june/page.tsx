import Link from "next/link"
import { Facebook, CalendarHeart } from "lucide-react"
import Image from "next/image"
import styles from 'styles/VendorsOverview.module.css'
import { Spacer } from "@/components/spacer"


export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link href="/our-vendors" className="mb-[2rem] max-w-[1000px] mx-auto">&larr; Back to Our Vendors</Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">June Vendors</h1>
      <div className={styles.vendors}>
        <Link href="/our-vendors/trinda-magic" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/trinda-magic/trinda-magic-logo.png"
            height={200}
            width={200}
            alt="Logo for Trinda Magic"
          />
        </Link>
        <Link href="/our-vendors/lanabag" className={styles.vendor + " bg-[#fff] overflow-hidden"}>
          <Image
            src="/images/vendors/lanabag/lanabag-logo.jpeg"
            height={200}
            width={200}
            alt="Logo for LANABAG"
            className="scale-150"
          />
        </Link>
        <Link href="/our-vendors/gemini-gems-ak" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/gemini-gems-ak/gemini-gems-ak-logo.png"
            height={200}
            width={200}
            alt="Starry logo for gemini gems ak"
          />
        </Link>
        <Link href="/our-vendors/doily-by-pony" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/doily-by-pony/doily-by-pony-logo.jpg"
            height={200}
            width={200}
            alt="Blue and green gradient with logo for doily by pony"
          />
        </Link>
        <Link href="/our-vendors/koala-creations" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/koala-creations/koala-creations-logo-pic.png"
            height={200}
            width={200}
            alt="logo for koala creations"
          />
        </Link>
        <Link href="/our-vendors/wilder-and-jean-co" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/wilder-and-jean-new-2025/wilder-and-jean-new-2025-logo.png"
            height={200}
            width={200}
            alt="Logo for wilder and jean co"
          />
        </Link>
        <Link href="/our-vendors/sylvie-b-art" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/sylvie-b-art/sylvie-b-art-logo.jpg"
            height={200}
            width={200}
            alt="Logo for wilder and jean co"
          />
        </Link>
        <Link href="/our-vendors/from-my-art" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/from-my-art-2025/from-my-art-logo-new.png"
            height={200}
            width={200}
            alt="logo for from my art"
          />
        </Link>
        <Link href="/our-vendors/cookie-box" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/cookie-box/cookie-box-logo.jpg"
            height={200}
            width={200}
            alt="Logo for cookie box"
          />
        </Link>
        <Link href="/our-vendors/blue-kangaroo-crafts" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/blue-kangaroo-crafts/blue-kangaroo-crafts-logo.jpg"
            height={200}
            width={200}
            alt="Logo for blue kangaroo crafts"
          />
        </Link>
        <Link href="/our-vendors/shiki-clay" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/shiki-clay/shiki-clay-logo.png"
            height={200}
            width={200}
            alt="Logo for Shiki Clay"
          />
        </Link>
        <a href="https://falconefarm.com/" className={styles.vendor + " bg-[#b45537]"} target="_blank">
          <Image
            src="/images/vendors/logos/falcone-farm.webp"
            height={200}
            width={200}
            alt="soap from falcone farm"
          />
        </a>
        <Link href="/our-vendors/dw-crafts" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/dw-crafts/dw-crafts-logo.png"
            height={200}
            width={200}
            alt="logo for DW Crafts"
          />
        </Link>
        <Link href="/our-vendors/made-by-michelley" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/made-by-michelley/made-by-michelley-logo.png"
            height={200}
            width={200}
            alt="Logo for made-by-michelley"
          />
        </Link>
        <Link href="/our-vendors/solea" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/solea/solea-logo.png"
            height={200}
            width={200}
            alt="solea logo"
          />
        </Link>
        <Link href="/our-vendors/art-studio-by-akash" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/art-studio-by-akash/art-studio-by-akash-logo.png"
            height={200}
            width={200}
            alt="Logo for art-studio-by-akash"
          />
        </Link>
        <Link href="/our-vendors/honeyberry-studios" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/honeyberry-studios/honeyberry-studios-logo.png"
            height={200}
            width={200}
            alt="Logo for honeyberry-studios"
          />
        </Link>
        <Link href="/our-vendors/sweet-dlily-shop" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/sweet-d-lily-shop-new-2025/sweet-d-lily-shop-new-2025-logo.png"
            height={200}
            width={200}
            alt="Logo for sweet-dlily-shop"
          />
        </Link>

        <a href="https://darlingillustrations.com/" className={styles.vendor + " bg-[#b45537]"} target="_blank">
          <Image
            src="/images/vendors/logos/darling-illustrations-logo.png"
            height={200}
            width={200}
            alt="unique art by darling illustrations"
          />
        </a>
        <a href="https://linktr.ee/phelix.koi" className={styles.vendor + " bg-[#b45537]"} target="_blank">
          <Image
            src="/images/vendors/logos/mixed-mushroom-media-new-logo.png"
            height={200}
            width={200}
            alt="unique art by Mixed Mushroom Media"
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

        <div className={styles.vendor + " bg-[#b45537]"}>
          <Image
            src="/images/vendors/logos/this-is-us-candle-boutique-logo.jpg"
            height={200}
            width={200}
            alt="unique art by this-is-us-candle-boutique"
          />
        </div>
      </div>
      <div className="max-w-[2000px] mx-auto text-center mt-8 text-[3rem]">And Many More!!</div>

      <div className="md:pt-[4rem] pt-[2rem] md:pb-[4rem] pb-[2rem]"><Spacer /></div>

      <div className="text-center">
        <div className="bg-orange-50 dark:text-black rounded flex mb-[1.5rem] mx-auto md:max-w-[400px] my-9">
          <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
            <p className="text-[1.5rem] leading-8">June</p>
            <p className="text-[3rem] leading-8">28</p>
          </div>
          <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
            <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://www.facebook.com/share/14ud4bhBLz/" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
            <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/165IN6haBwC_LQHttBNXA94fvrBf7-XUf/view?usp=sharing" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
          </div>
        </div>
      </div>
    </div>
  )
}