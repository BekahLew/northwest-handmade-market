import Image from "next/image"
import Link from "next/link"
import { Globe, Facebook } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">made-by-michelley</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/made-by-michelley/made-by-michelley-logo.png"
            height={200}
            width={200}
            className={styles.bioImage + " bg-[#fff]"}
            alt="logo for made-by-michelley"
          />
          <div className={styles.bio}><p>My name is Michelle Hoffman, owner of Made By Michelley.  I create hand made greeting cards with all types of sentiments, and for all different occasions.  Each card is unique, and made by me.  I also have gift tags and notecards available as well as a monthly subscription option.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://linktr.ee/Pampered.Blessings"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/michelle.knutzen"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/made-by-michelley/made-by-michelley-1.jpg"}
            img1Alt={"Handmade bags by made-by-michelley"}
            imgSrc2={"/images/vendors/made-by-michelley/made-by-michelley-2.jpg"}
            img2Alt={"Handmade bags by made-by-michelley"}
            imgSrc3={"/images/vendors/made-by-michelley/made-by-michelley-3.jpg"}
            img3Alt={"Handmade bags by made-by-michelley"}
            imgSrc4={"/images/vendors/made-by-michelley/made-by-michelley-4.jpg"}
            img4Alt={"Handmade bags by made-by-michelley"}
            imgSrc5={"/images/vendors/made-by-michelley/made-by-michelley-5.jpg"}
            img5Alt={"Handmade bags by made-by-michelley"}
            imgSrc6={"/images/vendors/made-by-michelley/made-by-michelley-6.jpg"}
            img6Alt={"Handmade bags by made-by-michelley"}
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
