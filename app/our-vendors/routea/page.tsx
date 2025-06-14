import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Globe } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Routea</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/routea/routea-logo.jpeg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for routea"
          />
          <div className={styles.bio}><p>Tea bags inspired by traditional tea beverages worldwide, fostering mutual learning to bridge cultural differences.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/routeacafe"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.routeacafe.com"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/routeacafe"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/routea/routea-3.jpeg"}
            img1Alt={"Custon designed clothes by routea"}
            imgSrc2={"/images/vendors/routea/routea-2.jpeg"}
            img2Alt={"Custon designed clothes by routea"}
            imgSrc3={"/images/vendors/routea/routea-1.jpeg"}
            img3Alt={"Custon designed clothes by routea"}
            imgSrc4={"/images/vendors/routea/routea-4.jpeg"}
            img4Alt={"Custon designed clothes by routea"}
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
