import Image from "next/image"
import Link from "next/link"
import { Globe } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/may"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to May
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">BaBaubles</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/babaubles/babaubles-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for babaubles"
          />
          <div className={styles.bio}><p>BaBaubles was born during Covid – I had some extra down time, so I started making my beaded bracelets and enjoyed it so much that before I knew it, I had made many more than I could wear myself or give away to family and friends, so I opened BaBaubles from my home in Lynnwood.  I now make necklaces, too, and have even made wood bead garland decorations for Christmas.  Still, my primary focus is beaded gemstone and crystal bracelets.  I love learning about the meanings and qualities of each stone I use in my creations, and I find the creation process very calming and fulfilling.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://babaubles.com/"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          {/* @ts-expect-error Server Component */}
          <Slider
            imgSrc1={"/images/vendors/babaubles/babaubles-1.jpeg"}
            img1Alt={"handmade jewelry by babaubles"}
            imgSrc2={"/images/vendors/babaubles/babaubles-2.jpeg"}
            img2Alt={"handmade jewelry by babaubles"}
            imgSrc3={"/images/vendors/babaubles/babaubles-3.jpeg"}
            img3Alt={"handmade jewelry by babaubles"}
            imgSrc4={"/images/vendors/babaubles/babaubles-4.jpeg"}
            img4Alt={"handmade jewelry by babaubles"}
            imgSrc5={""}
            img5Alt={""}
            imgSrc6={""}
            img6Alt={""}
            imgSrc7={""}
            img7Alt={""}
            imgSrc8={""}
            img8Alt={""}
            imgSrc9={""}
            img9Alt={""}
            imgSrc10={""}
            img10Alt={""}
          />
        </div>
      </div>
    </div>
  )
}
