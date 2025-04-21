import Image from "next/image"
import Link from "next/link"
import { Facebook } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/november-23"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to November 23rd
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Love my Resin</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/love-my-resin/love-my-resin-bio.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for Love my Resin"
          />
          <div className={styles.bio}><p>I offer Custom made Resin products for home and office decor and all other resin needs!</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/profile.php?id=61558861515276"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/love-my-resin/love-my-resin-1.jpg"}
            img1Alt={"Resin art by Love my Resin"}
            imgSrc2={"/images/vendors/love-my-resin/love-my-resin-2.jpg"}
            img2Alt={"Resin art by Love my Resin"}
            imgSrc3={"/images/vendors/love-my-resin/love-my-resin-3.jpg"}
            img3Alt={"Resin art by Love my Resin"}
            imgSrc4={"/images/vendors/love-my-resin/love-my-resin-4.jpg"}
            img4Alt={"Resin art by Love my Resin"}
            imgSrc5={"/images/vendors/love-my-resin/love-my-resin-5.jpg"}
            img5Alt={"Resin art by Love my Resin"}
            imgSrc6={"/images/vendors/love-my-resin/love-my-resin-6.jpg"}
            img6Alt={"Resin art by Love my Resin"}
            imgSrc7={"/images/vendors/love-my-resin/love-my-resin-7.jpg"}
            img7Alt={"Resin art by Love my Resin"}
            imgSrc8={"/images/vendors/love-my-resin/love-my-resin-8.jpg"}
            img8Alt={"Resin art by Love my Resin"}
            imgSrc9={"/images/vendors/love-my-resin/love-my-resin-9.jpg"}
            img9Alt={"Resin art by Love my Resin"}
            imgSrc10={"/images/vendors/love-my-resin/love-my-resin-10.jpg"}
            img10Alt={"Resin art by Love my Resin"}
          />
        </div>
      </div>
    </div>
  )
}
