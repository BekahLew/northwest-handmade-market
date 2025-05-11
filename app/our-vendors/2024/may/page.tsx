import Link from "next/link"
import styles from 'styles/VendorsOverview.module.css'
import Image from 'next/image'
import { Facebook, CalendarHeart } from "lucide-react"
import { Spacer } from "@/components/spacer"

export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[1600px] mx-auto mt-[2rem]">
        <Link href="/our-vendors/2024" className="mb-[2rem] max-w-[1000px] mx-auto">&larr; Back to Our Vendors</Link>
        <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">May Vendors</h1>
        <div className={styles.vendors}>
          <Link href="/our-vendors/2024/may/wanderlust-scents-studio" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/wanderlust/wanderlust-logo.png"
                height={200}
                width={200}
                alt="Black and white pencil sketch of mountains and a sunset for wanderlust scents studio logo"
              />
            </Link>
            <Link href="/our-vendors/2024/may/jm-stained-glass-design" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/jm-stained-glass-design/jm-stained-glass-design-logo.png"
                height={200}
                width={200}
                alt="Blue to yellow gradient for JM stained glass design logo"
              />
            </Link>
            <Link href="/our-vendors/2024/may/handslow-pottery" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/handslow-pottery/handslow-pottery-logo.png"
                height={200}
                width={200}
                alt="Sketch of hand holding pottery"
              />
            </Link>
            <Link href="/our-vendors/2024/may/doily-by-pony" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/doily-by-pony/doily-by-pony-logo.jpg"
                height={200}
                width={200}
                alt="Blue and green gradient with logo for doily by pony"
              />
            </Link>
            <a href="https://wilderandjean.etsy.com" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/wilder-and-jean/wilder-and-jean.png"
                height={200}
                width={200}
                alt="logo for wilder and jean"
              />
            </a>
            <Link href="/our-vendors/2024/may/gemini-gems-ak" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/gemini-gems-ak/gemini-gems-ak-logo.png"
                height={200}
                width={200}
                alt="Starry logo for gemini gems ak"
              />
            </Link>
            <Link href="/our-vendors/2024/may/rustic-designs" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/rustic-designs/rustic-designs-logo.png"
                height={200}
                width={200}
                alt="Hand sketched square with mountains logo for rustic designs"
              />
            </Link>
            <Link href="/our-vendors/2024/may/writers-coop" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/writers-coop/writers-coop-logo.jpg"
                height={200}
                width={200}
                alt="logo of books for writer&apos;s coop"
              />
            </Link>
            <Link href="/our-vendors/2024/may/sweet-katies-treats" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/sweet-katies-treats/sweet-katies-treats-logo.png"
                height={200}
                width={200}
                alt="logo for sweet katie&apos;s treats"
              />
            </Link>
            <Link href="/our-vendors/2024/may/amigurumis" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/amigurumis/amigurumis-logo-pic.png"
                height={200}
                width={200}
                alt="logo for amigurumis"
              />
            </Link>
            <Link href="/our-vendors/2024/may/inti-the-label" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/inti-the-label/inti-the-label-logo-pic.png"
                height={200}
                width={200}
                alt="logo for inti the label"
              />
            </Link>
            <Link href="/our-vendors/2024/may/little-okie-studio" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/little-okie-studio/little-okie-studio-logo.jpeg"
                height={200}
                width={200}
                alt="logo for little okie studio"
              />
            </Link>
            <a href="https://wellrooted.net/" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/well-rooted/well-rooted-logo.jpg"
                height={200}
                width={200}
                alt="logo for well rooted"
              />
            </a>
            <Link href="/our-vendors/2024/may/soha365" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/soha365/soha365-logo.png"
                height={200}
                width={200}
                alt="logo for soha 365"
              />
            </Link>
            <Link href="/our-vendors/2024/may/babaubles" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/babaubles/babaubles-logo.png"
                height={200}
                width={200}
                alt="logo for babaubles"
              />
            </Link>
            <Link href="/our-vendors/2024/may/corina-kay-designs" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/corina-kay-designs/corina-kay-designs-pic-logo.png"
                height={200}
                width={200}
                alt="logo for corina kay designs"
              />
            </Link>
            <Link href="/our-vendors/2024/may/zarqa-makes" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/zarqa-makes/zarqa-makes-logo.png"
                height={200}
                width={200}
                alt="logo for zarqa makes"
              />
            </Link>
            <Link href="/our-vendors/2024/may/bonafide-pets" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/bonafide-pets/bonafide-pets-logo.png"
                height={200}
                width={200}
                alt="logo for bonafide pets"
              />
            </Link>
            <Link href="/our-vendors/2024/may/hae-candles" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/hae-candles/hae-candles-logo.jpeg"
                height={200}
                width={200}
                alt="logo for hae candles"
              />
            </Link>
            <Link href="/our-vendors/2024/may/earrings-by-e" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/earrings-by-e/earrings-by-e-logo-img.png"
                height={200}
                width={200}
                alt="logo for Earrings by E"
              />
            </Link>
            <Link href="/our-vendors/2024/may/tyche-handcrafted" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/tyche-handcrafted/tyche-handcrafted-logo-img.png"
                height={200}
                width={200}
                alt="logo for tyche handcrafted"
              />
            </Link>
            <Link href="/our-vendors/2024/may/moore-than-stitches" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/moore-than-stitches/moore-than-stitches-logo-img.png"
                height={200}
                width={200}
                alt="logo for moore than stitches"
              />
            </Link>
            <a href="https://www.goblin-spleen.com/" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/logos/goblin-spleen-logo.png"
                height={200}
                width={200}
                alt="logo for goblin spleen"
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
            <a href="https://nuricreations.com/" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/logos/nuri-creations-logo.png"
                height={200}
                width={200}
                alt="logo for nuri creations"
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
            <Link href="/our-vendors/2024/may/m-and-ms-vintage-crafts" className={styles.vendor + " bg-[#b45537]"}>
              <Image
                src="/images/vendors/m-and-m/m-and-m-6.jpeg"
                height={200}
                width={200}
                alt="logo for m and m vintage craft"
              />
            </Link>
            <a href="https://www.instagram.com/createdbyqualley" className={styles.vendor + " bg-[#b45537]"} target="_blank">
              <Image
                src="/images/vendors/logos/qualley-logo.png"
                height={200}
                width={200}
                alt="logo for created by qualley"
              />
            </a>
            <a href="https://www.instagram.com/catnipkickers/?igsh=MTVuZHQ2azR6ZWl3dg%3D%3D&utm_source=qr" className={styles.vendor + " bg-[#b45537]"} target="_blank">
              <p>2 Pouch People <span>Catnip Toys</span></p>
            </a>
            <div className={styles.vendor + " bg-[#b45537]"}>
              <p>ZunZun <span>Bath and Body</span></p>
            </div>
            <div className={styles.vendor + " bg-[#b45537]"}>
              <p>Cards by Meesh <span>Handmade Cards</span></p>
            </div>
        </div>
      </div>
    )
  }