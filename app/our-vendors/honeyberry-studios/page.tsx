import Image from "next/image"
import Link from "next/link"
import { Globe } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Honeyberry Studios</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/honeyberry-studios/honeyberry-studios-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for honeyberry-studios"
          />
          <div className={styles.bio}><p>My name is Yuko, and I&apos;m an artist/designer who loves to create colorful and uplifting greeting cards, stickers, notepads, and gifts that bring you joy. I grew up in Himeji, Japan, and have been calling the PNW a home for the last 29 years. I became a full time artist after working for a non-profit domestic violence survivor support organization for 14+ years. My art is inspired by nature, animals (cats!), and care for fellow humans.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://honeyberrystudios.com"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/honeyberry-studios/honeyberry-studios-1.jpg"}
            img1Alt={"Handmade bags by honeyberry-studios"}
            imgSrc2={"/images/vendors/honeyberry-studios/honeyberry-studios-2.jpg"}
            img2Alt={"Handmade bags by honeyberry-studios"}
            imgSrc3={"/images/vendors/honeyberry-studios/honeyberry-studios-3.jpg"}
            img3Alt={"Handmade bags by honeyberry-studios"}
            imgSrc4={"/images/vendors/honeyberry-studios/honeyberry-studios-4.jpg"}
            img4Alt={"Handmade bags by honeyberry-studios"}
            imgSrc5={"/images/vendors/honeyberry-studios/honeyberry-studios-5.jpg"}
            img5Alt={"Handmade bags by honeyberry-studios"}
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
