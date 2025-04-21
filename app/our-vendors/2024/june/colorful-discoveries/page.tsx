import Image from "next/image"
import Link from "next/link"
import { Facebook, ShoppingBag, Globe } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/june"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to June
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Colorful Discoveries</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/colorful-discoveries/colorful-discoveries-bio.jpeg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="Bio picture for colorful discoveries"
          />
          <div className={styles.bio}><p>My name is Janelle from Colorful Discoveries.  I discovered my passion for dot painting during COVID.  The love of creativity has allowed me to make one of kind gifts and pieces of art including hand casted rocks, tea light candles, mini pots, mandala mirrors, boxes, vinyl record albums, necklace pendants, ornaments, shells and key chain fobs.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/JanelleRutkowskiArt"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.etsy.com/shop/colorfuldiscoveries/?etsrc=sdt"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/colorful-discoveries/colorful-discoveries-1.jpeg"}
            img1Alt={"Mandala art by colorful discoveries"}
            imgSrc2={"/images/vendors/colorful-discoveries/colorful-discoveries-2.jpeg"}
            img2Alt={"Mandala art by colorful discoveries"}
            imgSrc3={"/images/vendors/colorful-discoveries/colorful-discoveries-3.jpeg"}
            img3Alt={"Mandala art by colorful discoveries"}
            imgSrc4={"/images/vendors/colorful-discoveries/colorful-discoveries-4.jpeg"}
            img4Alt={"Mandala art by colorful discoveries"}
            imgSrc5={"/images/vendors/colorful-discoveries/colorful-discoveries-5.jpeg"}
            img5Alt={"Mandala art by colorful discoveries"}
            imgSrc6={"/images/vendors/colorful-discoveries/colorful-discoveries-6.jpeg"}
            img6Alt={"Mandala art by colorful discoveries"}
            imgSrc7={"/images/vendors/colorful-discoveries/colorful-discoveries-7.jpeg"}
            img7Alt={"Mandala art by colorful discoveries"}
            imgSrc8={"/images/vendors/colorful-discoveries/colorful-discoveries-8.jpeg"}
            img8Alt={"Mandala art by colorful discoveries"}
            imgSrc9={"/images/vendors/colorful-discoveries/colorful-discoveries-9.jpeg"}
            img9Alt={"Mandala art by colorful discoveries"}
            imgSrc10={"/images/vendors/colorful-discoveries/colorful-discoveries-10.jpeg"}
            img10Alt={"Mandala art by colorful discoveries"}
          />
        </div>
      </div>
    </div>
  )
}
