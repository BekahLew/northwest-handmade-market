import Image from "next/image"
import Link from "next/link"
import { Facebook } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Bri&apos;s Blooms</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/bris-blooms/bris-blooms-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for bris blooms"
          />
          <div className={styles.bio}>
            <p>Upcycled glass art pieces given a second chance to bloom.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/share/16bf55ykvw/?mibextid=wwxlfr"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/bris-blooms/bris-blooms-1.jpg"}
            img1Alt={"Hand crafted glass lawn flowers by bris blooms"}
            imgSrc2={"/images/vendors/bris-blooms/bris-blooms-2.jpg"}
            img2Alt={"Hand crafted glass lawn flowers by bris blooms"}
            imgSrc3={"/images/vendors/bris-blooms/bris-blooms-3.jpg"}
            img3Alt={"Hand crafted glass lawn flowers by bris blooms"}
            imgSrc4={"/images/vendors/bris-blooms/bris-blooms-4.jpg"}
            img4Alt={"Hand crafted glass lawn flowers by bris blooms"}
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
