import { Spacer } from "@/components/spacer"
import Link from "next/link"
import styles from 'styles/VendorsOverview.module.css'
import Image from 'next/image'
import { Facebook, CalendarHeart } from "lucide-react"


export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
        <Link href="/our-vendors/2024" className="mb-[2rem] max-w-[1000px] mx-auto">&larr; Back to Our Vendors</Link>
        <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">July Vendors</h1>

        <div className={styles.vendors}>
        <Link href="/our-vendors//2024/july/casi-g-designs" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/casi-g-designs/casi-g-designs-logo.jpg"
            height={200}
            width={200}
            alt="logo for casi g designs"
          />
        </Link>
        <Link href="/our-vendors//2024/july/the-forest-blues" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/the-forest-blues/the-forest-blues-logo.jpg"
            height={200}
            width={200}
            alt="logo for The Forest Blues"
          />
        </Link>
        <Link href="/our-vendors//2024/july/way-cool-stuff" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/way-cool-stuff/way-cool-stuff-logo-pic.jpeg"
            height={200}
            width={200}
            alt="logo for way-cool-stuff"
          />
        </Link>
        <Link href="/our-vendors//2024/july/tizana-mexicana" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/tizana-mexicana/tizana-mexicana-logo.png"
            height={200}
            width={200}
            alt="logo for tizana mexicana"
          />
        </Link>
        <Link href="/our-vendors//2024/july/love-and-flora-creations" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/love-and-flora-creations/love-and-flora-creations-logo.jpg"
            height={200}
            width={200}
            alt="logo for love and flora creations"
          />
        </Link>
        <Link href="/our-vendors//2024/july/dw-crafts" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/dw-crafts/dw-crafts-logo.png"
            height={200}
            width={200}
            alt="logo for DW Crafts"
          />
        </Link>
        <Link href="/our-vendors//2024/july/full-bloom-and-co" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/full-bloom-and-co/full-bloom-and-co-logo.jpeg"
            height={200}
            width={200}
            alt="logo for full bloom and co"
          />
        </Link>
        <Link href="/our-vendors//2024/july/elevar-sundry-company" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/elevar-sundry-company/elevar-sundry-company-logo.png"
              height={200}
              width={200}
              alt="Logo for elevar sundry company"
            />
          </Link>
        <Link href="/our-vendors//2024/july/adrianas-bowtique" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/adrianas-bowtique/adrianas-bowtique-logo.jpeg"
            height={200}
            width={200}
            alt="logo for adrianas bowtique"
          />
        </Link>
        <Link href="/our-vendors//2024/july/sugarcane-beauty" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/sugarcane-beauty/sugarcane-beauty-logo.png"
              height={200}
              width={200}
              alt="logo for sugarcane beauty"
            />
          </Link>
          <Link href="/our-vendors//2024/july/wanderlust-scents-studio" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/wanderlust/wanderlust-logo.png"
              height={200}
              width={200}
              alt="Black and white pencil sketch of mountains and a sunset for wanderlust scents studio logo"
            />
          </Link>
          <Link href="/our-vendors//2024/july/rustic-designs" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/rustic-designs/rustic-designs-logo.png"
              height={200}
              width={200}
              alt="Hand sketched square with mountains logo for rustic designs"
            />
          </Link>
          <Link href="/our-vendors//2024/july/handslow-pottery" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/handslow-pottery/handslow-pottery-logo.png"
              height={200}
              width={200}
              alt="Sketch of hand holding pottery"
            />
          </Link>
          <Link href="/our-vendors//2024/july/colorful-discoveries" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/colorful-discoveries/colorful-discoveries-logo.jpeg"
              height={200}
              width={200}
              alt="logo for colorful discoveries"
            />
          </Link>
          <Link href="/our-vendors//2024/july/red-sunset-designs" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/red-sunset-designs/red-sunset-designs-logo.jpg"
              height={200}
              width={200}
              alt="Logo for Red Sunset Designs"
            />
          </Link>
          <Link href="/our-vendors//2024/july/hae-candles" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/hae-candles/hae-candles-logo.jpeg"
              height={200}
              width={200}
              alt="logo for hae candles"
            />
          </Link>
          <Link href="/our-vendors//2024/july/corina-kay-designs" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/corina-kay-designs/corina-kay-designs-pic-logo.png"
              height={200}
              width={200}
              alt="logo for corina kay designs"
            />
          </Link>
          <Link href="/our-vendors//2024/july/coco-crafts" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/coco-crafts/coco-crafts-logo-new-pic.png"
              height={200}
              width={200}
              alt="logo for coco crafts"
            />
          </Link>
          <Link href="/our-vendors//2024/july/oddpetz-emporium" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/oddpetz-emporium/oddpetz-emporium-logo.jpg"
              height={200}
              width={200}
              alt="Logo for OddPetz Emporium"
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
          <a href="https://www.instagram.com/yuzumakes" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/logos/yuzumakes.png"
              height={200}
              width={200}
              alt="logo for yuzu makes"
            />
          </a>
          <a href="https://www.instagram.com/torigami.crafts?igsh=MXhrZGpkd2ExM2JjaQ%3D%3D&utm_source=qr" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/logos/torigami-logo.jpeg"
              height={200}
              width={200}
              alt="logo for torigami crafts"
            />
          </a>
          <a href="https://www.instagram.com/ma_and_pa_prints_3d_toys/?igsh=bXRwZzQ0NjRzM25o" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/logos/ma-and-pa-prints-logo.png"
              height={200}
              width={200}
              alt="logo for ma and pa prints"
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
          <div className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/logos/elisabethartwork.png"
              height={200}
              width={200}
              alt="logo for elisabethartwork"
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
          <div className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/logos/halo-halo-crochet.png"
              height={200}
              width={200}
              alt="logo for Halo Halo Crochet"
            />
          </div>
        </div>
      </div>
    )
  }