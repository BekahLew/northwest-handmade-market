import { Spacer } from "@/components/spacer"
import Link from "next/link"
import styles from 'styles/VendorsOverview.module.css'
import Image from 'next/image'
import { Facebook, CalendarHeart } from "lucide-react"


export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
        <Link href="/our-vendors/2024" className="mb-[2rem] max-w-[1000px] mx-auto">&larr; Back to Our Vendors</Link>
        <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">June Vendors</h1>
        <div className={styles.vendors}>
          <Link href="/our-vendors//2024/june/tyche-handcrafted" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/tyche-handcrafted/tyche-handcrafted-logo-img.png"
              height={200}
              width={200}
              alt="logo for tyche handcrafted"
            />
          </Link>
          <Link href="/our-vendors//2024/june/corina-kay-designs" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/corina-kay-designs/corina-kay-designs-pic-logo.png"
              height={200}
              width={200}
              alt="logo for corina kay designs"
            />
          </Link>
          <Link href="/our-vendors//2024/june/soha365" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/soha365/soha365-logo.png"
              height={200}
              width={200}
              alt="logo for soha 365"
            />
          </Link>
          <Link href="/our-vendors//2024/june/gemini-gems-ak" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/gemini-gems-ak/gemini-gems-ak-logo.png"
              height={200}
              width={200}
              alt="Starry logo for gemini gems ak"
            />
          </Link>
          <Link href="/our-vendors//2024/june/handslow-pottery" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/handslow-pottery/handslow-pottery-logo.png"
              height={200}
              width={200}
              alt="Sketch of hand holding pottery"
            />
          </Link>
          <Link href="/our-vendors//2024/june/wanderlust-scents-studio" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/wanderlust/wanderlust-logo.png"
              height={200}
              width={200}
              alt="Black and white pencil sketch of mountains and a sunset for wanderlust scents studio logo"
            />
          </Link>
          <Link href="/our-vendors//2024/june/oddpetz-emporium" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/oddpetz-emporium/oddpetz-emporium-logo.jpg"
                height={200}
                width={200}
                alt="Logo for OddPetz Emporium"
              />
            </Link>
            <Link href="/our-vendors//2024/june/colorful-discoveries" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/colorful-discoveries/colorful-discoveries-logo.jpeg"
                height={200}
                width={200}
                alt="Logo for Colorful Discoveries"
              />
            </Link>
            <Link href="/our-vendors//2024/june/marisi-ceramics" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/marisi-ceramics/marisi-ceramics-logo.png"
                height={200}
                width={200}
                alt="Logo for Marisi Ceramics"
              />
            </Link>
            <Link href="/our-vendors//2024/june/trinda-magic" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/trinda-magic/trinda-magic-logo.png"
                height={200}
                width={200}
                alt="Logo for Trinda Magic"
              />
            </Link>
            <Link href="/our-vendors//2024/june/routea" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/routea/routea-logo.jpeg"
                height={200}
                width={200}
                alt="Logo for ROUTEA"
              />
            </Link>
            <Link href="/our-vendors//2024/june/crafty-juniper" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/crafty-juniper-2/crafty-juniper-logo-pic.jpg"
                height={200}
                width={200}
                alt="Logo for Crafty Juniper"
              />
            </Link>
            <Link href="/our-vendors//2024/june/red-sunset-designs" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/red-sunset-designs/red-sunset-designs-logo.jpg"
                height={200}
                width={200}
                alt="Logo for Red Sunset Designs"
              />
            </Link>
            <Link href="/our-vendors//2024/june/aromatic-creations" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/aromatic-creations/aromatic-creations-logo.png"
                height={200}
                width={200}
                alt="Logo for Aromatic Creations"
              />
            </Link>
            <Link href="/our-vendors//2024/june/plantern-glass-and-novelty" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/plantern-glass-and-novelty/plantern-glass-and-novelty-logo-img.png"
                height={200}
                width={200}
                alt="Logo for Plantern Glass and Novelty"
              />
            </Link>
            <Link href="/our-vendors//2024/june/tickle-my-sweets" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/tickle-my-sweets/tickle-my-sweets-logo.png"
                height={200}
                width={200}
                alt="Logo for TickleMySweets"
              />
            </Link>
            <Link href="/our-vendors//2024/june/vs-treats-bakery" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/vs-treats/vs-treats-logo.png"
                height={200}
                width={200}
                alt="Logo for V&apos;s Treats"
              />
            </Link>
            <Link href="/our-vendors//2024/june/linked-with-joy" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/linked-with-joy/linked-with-joy-logo.png"
                height={200}
                width={200}
                alt="Logo for Linked with Joy"
              />
            </Link>
            <Link href="/our-vendors//2024/june/mca-creations" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/mca-creations/mca-creations-logo.png"
                height={200}
                width={200}
                alt="Logo for MCA Creations"
              />
            </Link>
            <Link href="/our-vendors//2024/june/shiki-clay" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/shiki-clay/shiki-clay-logo.png"
                height={200}
                width={200}
                alt="Logo for Shiki Clay"
              />
            </Link>
            <Link href="/our-vendors//2024/june/birdcraft-studio" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/birdcraft-studio/birdcraft-studio-logo-img.png"
                height={200}
                width={200}
                alt="Logo for Birdcraft Studio"
              />
            </Link>
            <Link href="/our-vendors//2024/june/taylors-creative-nook" className={styles.vendor + " bg-[#fff]"}>
              <Image
                src="/images/vendors/taylors-creative-nook/taylors-creative-nook-logo.webp"
                height={200}
                width={200}
                alt="Logo for Taylor&apos;s Creative Nook"
              />
            </Link>
            <a href="https://www.instagram.com/ma_and_pa_prints_3d_toys/?igsh=bXRwZzQ0NjRzM25o" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/logos/ma-and-pa-prints-logo.png"
                height={200}
                width={200}
                alt="logo for ma and pa prints"
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
            <a href="https://www.instagram.com/aurorabyalexis" className={styles.vendor + " bg-[#fff]"} target="_blank">
              <Image
                src="/images/vendors/logos/aurora-designs-logo.png"
                height={200}
                width={200}
                alt="logo for Aurora Designs"
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
                src="/images/vendors/logos/cards-by-meesh-logo.png"
                height={200}
                width={200}
                alt="logo for Cards by Meesh"
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