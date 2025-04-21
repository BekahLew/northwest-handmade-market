import { Spacer } from "@/components/spacer"
import Link from "next/link"
import styles from 'styles/VendorsOverview.module.css'
import Image from 'next/image'
import { Facebook, CalendarHeart } from "lucide-react"


export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
        <Link href="/our-vendors/2024" className="mb-[2rem] max-w-[1000px] mx-auto">&larr; Back to Our Vendors</Link>
        <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">August Vendors</h1>
        <div className={styles.vendors}>
          <Link href="/our-vendors/2024/august/the-forest-blues" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/the-forest-blues/the-forest-blues-logo.jpg"
              height={200}
              width={200}
              alt="logo for The Forest Blues"
            />
          </Link>
          <Link href="/our-vendors/2024/august/cards-by-meesh" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/cards-by-meesh/cards-by-meesh-logo.png"
              height={200}
              width={200}
              alt="logo for Cards by Meesh"
            />
          </Link>
          <Link href="/our-vendors/2024/august/faerie-made" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/faerie-made/faerie-made-logo.jpg"
              height={200}
              width={200}
              alt="logo for Faerie Made"
            />
          </Link>
          <Link href="/our-vendors/2024/august/from-my-art" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/from-my-art/from-my-art-logo.jpg"
              height={200}
              width={200}
              alt="logo for from my art"
            />
          </Link>
          <Link href="/our-vendors/2024/august/leslie-sarah-designs" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/leslie-sarah-designs/leslie-sarah-designs-pic-logo.jpg"
              height={200}
              width={200}
              alt="logo for leslie sarah designs"
            />
          </Link>
          <Link href="/our-vendors/2024/august/long-play-art" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/long-play-art/long-play-art-logo.jpg"
              height={200}
              width={200}
              alt="logo for long play art"
            />
          </Link>
          <Link href="/our-vendors/2024/august/love-my-resin" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/love-my-resin/love-my-resin-logo.png"
              height={200}
              width={200}
              alt="logo for love my resin"
            />
          </Link>
          <Link href="/our-vendors/2024/august/naterade-creates" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/naterade-creates/naterade-creates-logo.jpeg"
              height={200}
              width={200}
              alt="logo for naterade creates"
            />
          </Link>
          <Link href="/our-vendors/2024/august/hae-candles" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/hae-candles/hae-candles-logo.jpeg"
              height={200}
              width={200}
              alt="logo for hae candles"
            />
          </Link>
          <Link href="/our-vendors/2024/august/dw-crafts" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/dw-crafts/dw-crafts-logo.png"
              height={200}
              width={200}
              alt="logo for DW Crafts"
            />
          </Link>
          <Link href="/our-vendors/2024/august/koala-creations" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/koala-creations/koala-creations-logo-pic.png"
              height={200}
              width={200}
              alt="logo for koala creations"
            />
          </Link>
          <Link href="/our-vendors/2024/august/doily-by-pony" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/doily-by-pony/doily-by-pony-logo.jpg"
              height={200}
              width={200}
              alt="Blue and green gradient with logo for doily by pony"
            />
          </Link>
          <Link href="/our-vendors/2024/august/elevar-sundry-company" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/elevar-sundry-company/elevar-sundry-company-logo.png"
              height={200}
              width={200}
              alt="Logo for elevar sundry company"
            />
          </Link>
          <Link href="/our-vendors/2024/august/linked-with-joy" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/linked-with-joy/linked-with-joy-logo.png"
              height={200}
              width={200}
              alt="Logo for Linked with Joy"
            />
          </Link>
          <Link href="/our-vendors/2024/august/red-sunset-designs" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/red-sunset-designs/red-sunset-designs-logo.jpg"
              height={200}
              width={200}
              alt="Logo for Red Sunset Designs"
            />
          </Link>
          <Link href="/our-vendors/2024/august/vs-treats-bakery" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/vs-treats/vs-treats-logo.png"
              height={200}
              width={200}
              alt="Logo for V&apos;s Treats"
            />
          </Link>
          <Link href="/our-vendors/2024/august/sand-dollar-style" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/sand-dollar-style/sand-dollar-style-logo.png"
              height={200}
              width={200}
              alt="Logo for Sand Dollar Style"
            />
          </Link>
          <Link href="/our-vendors/2024/august/trinda-magic" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/trinda-magic/trinda-magic-logo.png"
              height={200}
              width={200}
              alt="Logo for Trinda Magic"
            />
          </Link>
          <Link href="/our-vendors/2024/august/crafty-juniper" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/crafty-juniper-2/crafty-juniper-logo-pic.jpg"
              height={200}
              width={200}
              alt="Logo for Crafty Juniper"
            />
          </Link>
          <Link href="/our-vendors/2024/august/coco-crafts" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/coco-crafts/coco-crafts-logo-new-pic.png"
              height={200}
              width={200}
              alt="logo for coco crafts"
            />
          </Link>
          <Link href="/our-vendors/2024/august/aromatic-creations" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/aromatic-creations/aromatic-creations-logo.png"
              height={200}
              width={200}
              alt="Logo for Aromatic Creations"
            />
          </Link>
          <a href="https://cafegureum.com/" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/logos/cafe-gureum.png"
              height={200}
              width={200}
              alt="logo for Cafe Gureum"
            />
          </a>
          <a href="https://www.instagram.com/aurorabyalexis" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/logos/aurora-designs-logo.png"
              height={200}
              width={200}
              alt="logo for Aurora Designs"
            />
          </a>
          <a href="https://www.instagram.com/saraslittlecreations?igsh=MXVkMjZqaTR1dmN6eA%3D%3D&utm_source=qr" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/logos/saras-little-creations-logo.png"
              height={200}
              width={200}
              alt="logo for saras little creations"
            />
          </a>
          <a href="https://www.egj-studios.com" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/logos/egj-studios-logo.png"
              height={200}
              width={200}
              alt="logo for EGJ Studios"
            />
          </a>
          <a href="https://www.etsy.com/shop/sweetdlilyshop/?etsrc=sdt" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/logos/sweet-dlily-logo.png"
              height={200}
              width={200}
              alt="logo for sweet d'lily"
            />
          </a>
          <a href="https://www.instagram.com/yanayaart?igsh=enR4aHJvdHd6bXZ0&utm_source=qr" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/logos/yanaya-jewelry-logo.png"
              height={200}
              width={200}
              alt="logo for yanaya jewelry"
            />
          </a>
          <div className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/logos/homebased-mandala-and-lippan-art-logo.png"
              height={200}
              width={200}
              alt="logo for homebased mandala and lippan art"
            />
          </div>
          <div className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/logos/rebeccas-whimsical-art-logo.png"
              height={200}
              width={200}
              alt="logo for Rebeccas Whimsical Art"
            />
          </div>
        </div>
      </div>
    )
  }