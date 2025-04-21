import Image from "next/image"
import Link from "next/link"
import { Instagram, Globe } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/october"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to October
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Aromatic Creations LLC</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/aromatic-creations/aromatic-creations-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for aromatic-creations"
          />
          <div className={styles.bio}>
            <p>We at Aromatic Creations LLC., make candles, reed diffuser oils and other wax products with the fragrance combos that are inspired by our Indian culture in our collections.</p>
            <p>We also make crochet products like hair scrunchies, scarfs, dish cloths and many others.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://instagram.com/aromaticcreationsllc"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.aromaticcreationsllc.com"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/aromatic-creations/aromatic-creations-1.jpeg"}
            img1Alt={"Custon designed clothes by aromatic-creations"}
            imgSrc2={"/images/vendors/aromatic-creations/aromatic-creations-2.jpeg"}
            img2Alt={"Custon designed clothes by aromatic-creations"}
            imgSrc3={"/images/vendors/aromatic-creations/aromatic-creations-3.jpeg"}
            img3Alt={"Custon designed clothes by aromatic-creations"}
            imgSrc4={"/images/vendors/aromatic-creations/aromatic-creations-4.jpeg"}
            img4Alt={"Custon designed clothes by aromatic-creations"}
            imgSrc5={"/images/vendors/aromatic-creations/aromatic-creations-5.jpeg"}
            img5Alt={"Custon designed clothes by aromatic-creations"}
            imgSrc6={"/images/vendors/aromatic-creations/aromatic-creations-6.jpeg"}
            img6Alt={"Custon designed clothes by aromatic-creations"}
            imgSrc7={"/images/vendors/aromatic-creations/aromatic-creations-7.jpeg"}
            img7Alt={"Custon designed clothes by aromatic-creations"}
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
