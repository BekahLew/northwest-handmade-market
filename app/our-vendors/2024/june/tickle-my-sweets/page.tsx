import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
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
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Tickle My Sweets</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/tickle-my-sweets/tickle-my-sweets-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for tickle my sweets"
          />
          <div className={styles.bio}><p>We are a family that works together to provide our community with delicious and unique Mexican candy and treats. The tastes that you will experience include bursts of tang, sweet, sour and spice all at once!</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/ticklemysweets?igsh=MWRzM244MnB6cWxjZQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/tickle-my-sweets/tickle-my-sweets-2.jpeg"}
            img1Alt={"Mexican candy by tickle my sweets"}
            imgSrc2={"/images/vendors/tickle-my-sweets/tickle-my-sweets-9.jpeg"}
            img2Alt={"Mexican candy by tickle my sweets"}
            imgSrc3={"/images/vendors/tickle-my-sweets/tickle-my-sweets-3.jpeg"}
            img3Alt={"Mexican candy by tickle my sweets"}
            imgSrc4={"/images/vendors/tickle-my-sweets/tickle-my-sweets-4.jpeg"}
            img4Alt={"Mexican candy by tickle my sweets"}
            imgSrc5={"/images/vendors/tickle-my-sweets/tickle-my-sweets-5.jpeg"}
            img5Alt={"Mexican candy by tickle my sweets"}
            imgSrc6={"/images/vendors/tickle-my-sweets/tickle-my-sweets-8.jpeg"}
            img6Alt={"Mexican candy by tickle my sweets"}
            imgSrc7={"/images/vendors/tickle-my-sweets/tickle-my-sweets-10.jpeg"}
            img7Alt={"Mexican candy by tickle my sweets"}
            imgSrc8={"/images/vendors/tickle-my-sweets/tickle-my-sweets-1.png"}
            img8Alt={"Mexican candy by tickle my sweets"}
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
