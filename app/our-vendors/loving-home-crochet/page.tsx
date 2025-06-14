import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Loving Home Crochet</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/loving-home-crochet/loving-home-crochet-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for loving home crochet"
          />
          <div className={styles.bio}><p>I am Chantel. I own Loving Home Crochet located in Everett. I specialize in creating plushies looking for their loving forever homes and strive to create experiences through crochet for my customers and their loved ones. </p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/lovinghome_crochet"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.etsy.com/shop/lovinghomecrochet/?etsrc=sdt"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/loving-home-crochet/loving-home-crochet-1.png"}
            img1Alt={"handmade crochet by Loving Home Crochet"}
            imgSrc2={"/images/vendors/loving-home-crochet/loving-home-crochet-2.png"}
            img2Alt={"handmade crochet by Loving Home Crochet"}
            imgSrc3={"/images/vendors/loving-home-crochet/loving-home-crochet-3.png"}
            img3Alt={"handmade crochet by Loving Home Crochet"}
            imgSrc4={""}
            img4Alt={""}
            imgSrc5={""}
            img5Alt={""}
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
