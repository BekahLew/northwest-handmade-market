import { Spacer } from "@/components/spacer"
import Link from "next/link"
import styles from 'styles/VendorsOverview.module.css'
import Image from 'next/image'
import { Facebook, CalendarHeart } from "lucide-react"

export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
        <Link href="/our-vendors/2024" className="mb-[2rem] max-w-[1000px] mx-auto">&larr; Back to Our Vendors</Link>
        <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">October Vendors</h1>
        <div className={styles.vendors}>
        <Link href="/our-vendors/2024/october/mieps-stitches" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/mieps-stitches/mieps-stitches-logo.png"
              height={200}
              width={200}
              alt="logo for mieps stitches"
            />
          </Link>
          <Link href="/our-vendors/2024/october/sundrop-workshop" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/sundrop-workshop/sundrop-workshop-logo.jpg"
              height={200}
              width={200}
              alt="logo for sundrop workshop"
            />
          </Link>
          <Link href="/our-vendors/2024/october/naterade-creates" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/naterade-creates/naterade-creates-logo.jpeg"
              height={200}
              width={200}
              alt="logo for naterade creates"
            />
          </Link>
          <Link href="/our-vendors/2024/october/corina-kay-designs" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/corina-kay-designs/corina-kay-designs-pic-logo.png"
              height={200}
              width={200}
              alt="logo for corina kay designs"
            />
          </Link>
          <Link href="/our-vendors/2024/october/zarqa-makes" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/zarqa-makes/zarqa-makes-logo.png"
              height={200}
              width={200}
              alt="logo for zarqa makes"
            />
          </Link>
          <Link href="/our-vendors/2024/october/babaubles" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/babaubles/babaubles-logo.png"
              height={200}
              width={200}
              alt="logo for babaubles"
            />
          </Link>
          <Link href="/our-vendors/2024/october/doily-by-pony" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/doily-by-pony/doily-by-pony-logo.jpg"
              height={200}
              width={200}
              alt="Blue and green gradient with logo for doily by pony"
            />
          </Link>
          <Link href="/our-vendors/2024/october/taylors-creative-nook" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/taylors-creative-nook/taylors-creative-nook-logo.webp"
              height={200}
              width={200}
              alt="Logo for Taylor&apos;s Creative Nook"
            />
          </Link>
          <Link href="/our-vendors/2024/october/leslie-sarah-designs" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/leslie-sarah-designs/leslie-sarah-designs-pic-logo.jpg"
              height={200}
              width={200}
              alt="logo for leslie sarah designs"
            />
          </Link>
          <Link href="/our-vendors/2024/october/aromatic-creations" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/aromatic-creations/aromatic-creations-logo.png"
              height={200}
              width={200}
              alt="Logo for Aromatic Creations"
            />
          </Link>
          <Link href="/our-vendors/2024/october/from-my-art" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/from-my-art/from-my-art-logo-new.png"
              height={200}
              width={200}
              alt="logo for from my art"
            />
          </Link>
          <Link href="/our-vendors/2024/october/loving-home-crochet" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/loving-home-crochet/loving-home-crochet-logo.png"
              height={200}
              width={200}
              alt="Logo for loving home crochet"
            />
          </Link>
          <Link href="/our-vendors/2024/october/elevar-sundry-company" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/elevar-sundry-company/elevar-sundry-company-logo.png"
              height={200}
              width={200}
              alt="Logo for elevar sundry company"
            />
          </Link>
          <Link href="/our-vendors/2024/october/marisi-ceramics" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/marisi-ceramics/marisi-ceramics-logo.png"
              height={200}
              width={200}
              alt="Logo for Marisi Ceramics"
            />
          </Link>
          <Link href="/our-vendors/2024/october/koala-creations" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/koala-creations/koala-creations-logo-pic.png"
              height={200}
              width={200}
              alt="logo for koala creations"
            />
          </Link>
          <Link href="/our-vendors/2024/october/red-sunset-designs" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/red-sunset-designs/red-sunset-designs-logo.jpg"
              height={200}
              width={200}
              alt="Logo for Red Sunset Designs"
            />
          </Link>
          <Link href="/our-vendors/2024/october/pilchuck-soap-company" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/pilchuck-soap-company/pilchuck-soap-company-logo.png"
              height={200}
              width={200}
              alt="Logo for pilchuck soap company"
            />
          </Link>
          <a href="https://www.rainemakercreatives.com" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/logos/rainemaker-creatives-logo.png"
              height={200}
              width={200}
              alt="logo for rainemaker creatives"
            />
          </a>
          <a href="https://wilderandjean.etsy.com" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/wilder-and-jean/wilder-and-jean.png"
              height={200}
              width={200}
              alt="logo for wilder and jean"
            />
          </a>
          <a href="https://cmjewelry.shop/" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/logos/cm-jewelry-logo.png"
              height={200}
              width={200}
              alt="logo for CM Jewelry"
            />
          </a>
          <a href="https://pacificbloomstudio.com/" className={styles.vendor + " bg-[#000]"} target="_blank">
            <Image
              src="/images/vendors/logos/pacific-bloom-studio-logo.png"
              height={200}
              width={200}
              alt="logo for pacific bloom studio"
            />
          </a>
          <a href="https://olecalcustomcreations.com/" className={styles.vendor + " bg-[#000]"} target="_blank">
            <Image
              src="/images/vendors/logos/olecal-custom-creations-logo.png"
              height={200}
              width={200}
              alt="logo for olecal custom creations"
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
          <a href="https://www.instagram.com/createdbyqualley" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/logos/qualley-logo.png"
              height={200}
              width={200}
              alt="logo for created by qualley"
            />
          </a>
          <a href="https://www.goblin-spleen.com/" className={styles.vendor + " bg-[#fff]"} target="_blank">
            <Image
              src="/images/vendors/logos/goblin-spleen-logo.png"
              height={200}
              width={200}
              alt="logo for goblin spleen"
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
              src="/images/vendors/logos/marks-smokehouse-logo.png"
              height={200}
              width={200}
              alt="logo for marks smokehouse"
            />
          </div>
          <div className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/logos/zunzun-logo.png"
              height={200}
              width={200}
              alt="logo for zunzun"
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
        </div>
      </div>
    )
  }