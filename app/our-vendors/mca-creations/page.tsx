import Image from "next/image"
import Link from "next/link"
import { Facebook } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">MCA Creations</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/mca-creations/mca-creations-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for mca-creations"
          />
          <div className={styles.bio}><p>Here at MCA Creations we create glittered epoxied tumblers, and we love custom orders to make it just how you want it! We also create rhinestone tumblers, resin art, key chains,  apparel, home decor, and metal art.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/MCACreations?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/mca-creations/mca-creations-2.jpeg"}
            img1Alt={"Tumblers by MCA creations"}
            imgSrc2={"/images/vendors/mca-creations/mca-creations-1.jpeg"}
            img2Alt={"Tumblers by MCA creations"}
            imgSrc3={"/images/vendors/mca-creations/mca-creations-3.jpeg"}
            img3Alt={"Tumblers by MCA creations"}
            imgSrc4={"/images/vendors/mca-creations/mca-creations-4.jpeg"}
            img4Alt={"Tumblers by MCA creations"}
            imgSrc5={"/images/vendors/mca-creations/mca-creations-5.jpeg"}
            img5Alt={"Tumblers by MCA creations"}
            imgSrc6={"/images/vendors/mca-creations/mca-creations-6.jpeg"}
            img6Alt={"Tumblers by MCA creations"}
            imgSrc7={"/images/vendors/mca-creations/mca-creations-7.png"}
            img7Alt={"Tumblers by MCA creations"}
            imgSrc8={"/images/vendors/mca-creations/mca-creations-8.jpeg"}
            img8Alt={"Tumblers by MCA creations"}
            imgSrc9={"/images/vendors/mca-creations/mca-creations-9.jpeg"}
            img9Alt={"Tumblers by MCA creations"}
            imgSrc10={"/images/vendors/mca-creations/mca-creations-10.jpeg"}
            img10Alt={"Tumblers by MCA creations"}
          />
        </div>
      </div>
    </div>
  )
}
