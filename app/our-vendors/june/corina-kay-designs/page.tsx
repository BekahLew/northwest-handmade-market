import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/june"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to June
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Corina Kay Designs</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/corina-kay-designs/corina-kay-designs-bio.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for corina kay designs"
          />
          <div className={styles.bio}>
            <p>I&apos;m Corina, owner of Corina Kay Designs.  My passion for creativity and design drives me to infuse everyday items with unique and eye-catching designs. My journey in this field has been a fulfilling blend of creative expression and meaningful connections with customers, whether they&apos;re looking to elevate their daily routines or commemorate special occasions. Whether you&apos;re treating yourself or searching for the perfect gift, I&apos;m committed to helping you find something truly special that resonates with your style and personality.</p>
          </div>
          <div className="flex justify-center">
          <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/corinakaydesigns"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/corinakaydesigns/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://corinakaydesigns.com/"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/corina-kay-designs/corina-kay-designs-pic-1.png"}
            img1Alt={"image of graphic apparel and drinkware from corina kay designs"}
            imgSrc2={"/images/vendors/corina-kay-designs/corina-kay-designs-pic-2.png"}
            img2Alt={"image of graphic apparel and drinkware from corina kay designs"}
            imgSrc3={"/images/vendors/corina-kay-designs/corina-kay-designs-pic-3.png"}
            img3Alt={"image of graphic apparel and drinkware from corina kay designs"}
            imgSrc4={"/images/vendors/corina-kay-designs/corina-kay-designs-pic-4.png"}
            img4Alt={"image of graphic apparel and drinkware from corina kay designs"}
            imgSrc5={"/images/vendors/corina-kay-designs/corina-kay-designs-pic-5.png"}
            img5Alt={"image of graphic apparel and drinkware from corina kay designs"}
            imgSrc6={"/images/vendors/corina-kay-designs/corina-kay-designs-pic-6-new.png"}
            img6Alt={"image of graphic apparel and drinkware from corina kay designs"}
            imgSrc7={"/images/vendors/corina-kay-designs/corina-kay-designs-pic-7.png"}
            img7Alt={"image of graphic apparel and drinkware from corina kay designs"}
            imgSrc8={"/images/vendors/corina-kay-designs/corina-kay-designs-pic-8.png"}
            img8Alt={"image of graphic apparel and drinkware from corina kay designs"}
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
