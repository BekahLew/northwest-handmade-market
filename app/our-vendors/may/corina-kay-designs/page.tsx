import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe, Instagram } from "lucide-react"
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
            <p>Hello! My name is Corina, owner of Corina Kay Designs. I offer graphic apparel, drinkware, stickers and home goods.</p>
            <p>I&apos;ve spent my years working with children in school settings,  decorating cakes and have always had a creative soul.  I really found my passion a few years ago when I created some custom items for a bachelorette party. This led to more creations for work events, girls&apos; trips, holiday shirts and more.  As my product offerings and skills evolved, Corina Kay Designs was born!</p>
            <p>I&apos;m excited to share my creations with you.</p>
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
          {/* @ts-expect-error Server Component */}
          <Slider
            imgSrc1={"/images/vendors/corina-kay-designs/corina-kay-designs-1.png"}
            img1Alt={"image of graphic apparel and drinkware from corina kay designs"}
            imgSrc2={"/images/vendors/corina-kay-designs/corina-kay-designs-2.png"}
            img2Alt={"image of graphic apparel and drinkware from corina kay designs"}
            imgSrc3={"/images/vendors/corina-kay-designs/corina-kay-designs-3.png"}
            img3Alt={"image of graphic apparel and drinkware from corina kay designs"}
            imgSrc4={"/images/vendors/corina-kay-designs/corina-kay-designs-4.png"}
            img4Alt={"image of graphic apparel and drinkware from corina kay designs"}
            imgSrc5={"/images/vendors/corina-kay-designs/corina-kay-designs-5.png"}
            img5Alt={"image of graphic apparel and drinkware from corina kay designs"}
            imgSrc6={"/images/vendors/corina-kay-designs/corina-kay-designs-6.jpg"}
            img6Alt={"image of graphic apparel and drinkware from corina kay designs"}
            imgSrc7={"/images/vendors/corina-kay-designs/corina-kay-designs-7.png"}
            img7Alt={"image of graphic apparel and drinkware from corina kay designs"}
            imgSrc8={"/images/vendors/corina-kay-designs/corina-kay-designs-8.png"}
            img8Alt={"image of graphic apparel and drinkware from corina kay designs"}
            imgSrc9={"/images/vendors/corina-kay-designs/corina-kay-designs-9.png"}
            img9Alt={"image of graphic apparel and drinkware from corina kay designs"}
            imgSrc10={"/images/vendors/corina-kay-designs/corina-kay-designs-10.png"}
            img10Alt={"image of graphic apparel and drinkware from corina kay designs"}
          />
        </div>
      </div>
    </div>
  )
}
