import Image from "next/image"
import Link from "next/link"
import { Instagram, Globe, ShoppingBag } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Sylvie B Art</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/sylvie-b-art/sylvie-b-art-logo.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for sylvie-b-art"
          />
          <div className={styles.bio}><p>My name is Sylvie Blattenbauer and I am a multimedia artist local to the Pacific Northwest. I specialize in whimsical, surreal, and fantasy art. In addition to selling original artwork, I sell my work in the form of prints, greeting cards, and stickers.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/sylvieb_art/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.etsy.com/shop/TwinflowerValley"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://sylvieblattenbauer.com/"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/sylvie-b-art/sylvie-b-art-1.jpg"}
            img1Alt={"unique art by sylvie b art"}
            imgSrc2={"/images/vendors/sylvie-b-art/sylvie-b-art-2.jpg"}
            img2Alt={"unique art by sylvie b art"}
            imgSrc3={"/images/vendors/sylvie-b-art/sylvie-b-art-3.jpg"}
            img3Alt={"unique art by sylvie b art"}
            imgSrc4={"/images/vendors/sylvie-b-art/sylvie-b-art-4.jpg"}
            img4Alt={"unique art by sylvie b art"}
            imgSrc5={"/images/vendors/sylvie-b-art/sylvie-b-art-5.jpg"}
            img5Alt={"unique art by sylvie b art"}
            imgSrc6={"/images/vendors/sylvie-b-art/sylvie-b-art-6.png"}
            img6Alt={"unique art by sylvie b art"}
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
