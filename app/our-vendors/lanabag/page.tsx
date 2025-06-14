import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">LANABAG</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/lanabag/lanabag-logo.jpeg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for lanabag"
          />
          <div className={styles.bio}><p>My name is Svitlana Altukhova, and I create LanaBag — unique handcrafted crochet bags with a cozy, stylish touch. Each piece is made with care, using quality materials. I offer ready-to-ship and custom designs for those who love handmade accessories.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/_lanabag_?igsh=MWdzdHZjMnE1d2p0Ng%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/share/15685vyhEEU/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/lanabag/lanabag-1.jpeg"}
            img1Alt={"Handmade bags by LANABAG"}
            imgSrc2={"/images/vendors/lanabag/lanabag-2.jpeg"}
            img2Alt={"Handmade bags by LANABAG"}
            imgSrc3={"/images/vendors/lanabag/lanabag-3.jpeg"}
            img3Alt={"Handmade bags by LANABAG"}
            imgSrc4={"/images/vendors/lanabag/lanabag-4.jpeg"}
            img4Alt={"Handmade bags by LANABAG"}
            imgSrc5={"/images/vendors/lanabag/lanabag-5.jpeg"}
            img5Alt={"Handmade bags by LANABAG"}
            imgSrc6={"/images/vendors/lanabag/lanabag-6.jpeg"}
            img6Alt={"Handmade bags by LANABAG"}
            imgSrc7={"/images/vendors/lanabag/lanabag-7.jpeg"}
            img7Alt={"Handmade bags by LANABAG"}
            imgSrc8={"/images/vendors/lanabag/lanabag-8.jpeg"}
            img8Alt={"Handmade bags by LANABAG"}
            imgSrc9={"/images/vendors/lanabag/lanabag-9.jpeg"}
            img9Alt={"Handmade bags by LANABAG"}
            imgSrc10={"/images/vendors/lanabag/lanabag-10.jpeg"}
            img10Alt={"Handmade bags by LANABAG"}
          />
        </div>
      </div>
    </div>
  )
}
