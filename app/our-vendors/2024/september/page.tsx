import { Spacer } from "@/components/spacer"
import Link from "next/link"
import styles from 'styles/VendorsOverview.module.css'
import Image from 'next/image'
import { Facebook, CalendarHeart } from "lucide-react"

export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
        <Link href="/our-vendors/2024" className="mb-[2rem] max-w-[1000px] mx-auto">&larr; Back to Our Vendors</Link>
        <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">September Vendors</h1>
        <div className={styles.vendors}>
          <Link href="/our-vendors/2024/september/loving-home-crochet" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/loving-home-crochet/loving-home-crochet-logo.png"
              height={200}
              width={200}
              alt="Logo for loving home crochet"
            />
          </Link>
          <Link href="/our-vendors/2024/september/pilchuck-soap-company" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/pilchuck-soap-company/pilchuck-soap-company-logo.png"
              height={200}
              width={200}
              alt="Logo for pilchuck soap company"
            />
          </Link>
          <Link href="/our-vendors/2024/september/loopsalooza" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/loopsalooza/loopsalooza-logo-pic.png"
              height={200}
              width={200}
              alt="Logo for loopsalooza"
            />
          </Link>
          <Link href="/our-vendors/2024/september/elevar-sundry-company" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/elevar-sundry-company/elevar-sundry-company-logo.png"
              height={200}
              width={200}
              alt="Logo for elevar sundry company"
            />
          </Link>
          <Link href="/our-vendors/2024/september/my-wandering-muse" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/my-wandering-muse/my-wandering-muse-logo.png"
              height={200}
              width={200}
              alt="Logo for my wandering muse"
            />
          </Link>
          <Link href="/our-vendors/2024/september/koala-creations" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/koala-creations/koala-creations-logo-pic.png"
              height={200}
              width={200}
              alt="Logo for koala-creations"
            />
          </Link>
          <Link href="/our-vendors/2024/september/cards-by-meesh" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/cards-by-meesh/cards-by-meesh-logo.png"
              height={200}
              width={200}
              alt="Logo for Cards by Meesh"
            />
          </Link>
          <Link href="/our-vendors/2024/september/coco-crafts" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/coco-crafts/coco-crafts-logo-new-pic.png"
              height={200}
              width={200}
              alt="Logo for coco crafts"
            />
          </Link>
          <Link href="/our-vendors/2024/september/corina-kay-designs" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/corina-kay-designs/corina-kay-designs-pic-logo.png"
              height={200}
              width={200}
              alt="Logo for corina kay designs"
            />
          </Link>
          <Link href="/our-vendors/2024/september/gemini-gems-ak" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/gemini-gems-ak/gemini-gems-ak-logo.png"
              height={200}
              width={200}
              alt="Logo for gemini gems ak"
            />
          </Link>
          <Link href="/our-vendors/2024/september/plantern-glass-and-novelty" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/plantern-glass-and-novelty/plantern-glass-and-novelty-logo-img.png"
              height={200}
              width={200}
              alt="Logo for plantern glass and novelty"
            />
          </Link>
          <Link href="/our-vendors/2024/september/shiki-clay" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/shiki-clay/shiki-clay-logo.png"
              height={200}
              width={200}
              alt="Logo for shiki clay"
            />
          </Link>
          <Link href="/our-vendors/2024/september/way-cool-stuff" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/way-cool-stuff/way-cool-stuff-logo-pic.jpeg"
              height={200}
              width={200}
              alt="Logo for way cool stuff"
            />
          </Link>
          <Link href="/our-vendors/2024/september/sugarcane-beauty" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/sugarcane-beauty/sugarcane-beauty-logo.png"
              height={200}
              width={200}
              alt="Logo for sugarcane beauty"
            />
          </Link>
          <Link href="/our-vendors/2024/september/the-forest-blues" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/the-forest-blues/the-forest-blues-logo.jpg"
              height={200}
              width={200}
              alt="Logo for the forest blues"
            />
          </Link>
          <a href="https://www.etsy.com/shop/crabfruitco/?etsrc=sdt" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/logos/crab-fruit-co-logo.webp"
              height={200}
              width={200}
              alt="logo for crabfruit co"
            />
          </a>
          <a href="https://www.facebook.com/Happicraft.shop" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/logos/happicraft-logo.jpg"
              height={200}
              width={200}
              alt="logo for happicraft"
            />
          </a>
          <a href="https://www.etsy.com/shop/FabledEarthArt" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/logos/fabled-earth-art-logo.png"
              height={200}
              width={200}
              alt="logo for fabled earth art"
            />
          </a>
          <a href="https://www.estherlillianandco.com/" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/logos/esther-lillian-and-co-logo.png"
              height={200}
              width={200}
              alt="logo for Esther Lillian and Co"
            />
          </a>
          <a href="https://www.instagram.com/goa.col" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/logos/goa-logo.jpg"
              height={200}
              width={200}
              alt="logo for goa"
            />
          </a>
          <a href="https://mudd-n-play.com/" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/logos/mudd-n-play-logo.png"
              height={200}
              width={200}
              alt="logo for mudd n play"
            />
          </a>
          <a href="https://megansjohnston.com/" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/logos/megan-johnstons-art-logo.png"
              height={200}
              width={200}
              alt="logo for megan johnstons art"
            />
          </a>
          <div className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/logos/rebeccas-whimsical-art-logo.png"
              height={200}
              width={200}
              alt="logo for Rebeccas Whimsical Art"
            />
          </div>
          <div className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/logos/house-of-aromamama-logo.png"
              height={200}
              width={200}
              alt="logo for house of aromamama"
            />
          </div>
          <div className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/logos/get-your-sparkle-on-logo.png"
              height={200}
              width={200}
              alt="logo for get your sparkle on"
            />
          </div>
          <div className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/logos/griffith-works-logo.png"
              height={200}
              width={200}
              alt="logo for griffith works"
            />
          </div>
          <div className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/logos/marks-smokehouse-logo.png"
              height={200}
              width={200}
              alt="logo for marks smokehouse"
            />
          </div>
        </div>
      </div>
    )
  }