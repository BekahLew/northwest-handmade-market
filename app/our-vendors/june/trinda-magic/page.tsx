import Image from "next/image"
import Link from "next/link"
import { Instagram, Globe } from "lucide-react"
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
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Trinda Magic</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/trinda-magic/trinda-magic-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for trinda-magic"
          />
          <div className={styles.bio}><p>Trinda is a passionate artist with a love of crystals and their natural, healing energy. As a reiki master, she infuses each creation with reiki and love. Her creations are unique and one-of-a-kind based on inspiration and include crystal/copper trees, crystal zen gardens, pyramids, and misc. crystal/resin shapes. She also offers custom creations tailored to your specific preferences and intentions. Embrace the magic and beauty of crystals with Trinda’s exquisite creations. ✨</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://instagram.com/trinda.magic"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://goimagine.com/trindamagic"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/trinda-magic/trinda-magic-1.png"}
            img1Alt={"Crystal Art by trinda magic"}
            imgSrc2={"/images/vendors/trinda-magic/trinda-magic-2.png"}
            img2Alt={"Crystal Art by trinda magic"}
            imgSrc3={"/images/vendors/trinda-magic/trinda-magic-3.png"}
            img3Alt={"Crystal Art by trinda magic"}
            imgSrc4={"/images/vendors/trinda-magic/trinda-magic-4.png"}
            img4Alt={"Crystal Art by trinda magic"}
            imgSrc5={"/images/vendors/trinda-magic/trinda-magic-5.jpeg"}
            img5Alt={"Crystal Art by trinda magic"}
            imgSrc6={"/images/vendors/trinda-magic/trinda-magic-6.jpeg"}
            img6Alt={"Crystal Art by trinda magic"}
            imgSrc7={"/images/vendors/trinda-magic/trinda-magic-7.jpeg"}
            img7Alt={"Crystal Art by trinda magic"}
            imgSrc8={"/images/vendors/trinda-magic/trinda-magic-8.jpeg"}
            img8Alt={"Crystal Art by trinda magic"}
            imgSrc9={"/images/vendors/trinda-magic/trinda-magic-9.jpeg"}
            img9Alt={"Crystal Art by trinda magic"}
            imgSrc10={""}
            img10Alt={""}
          />
        </div>
      </div>
    </div>
  )
}
