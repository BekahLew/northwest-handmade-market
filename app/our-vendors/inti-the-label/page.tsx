import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe, Instagram, Music2 } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Inti the Label</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/inti-the-label/inti-the-label-bio.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for inti the label"
          />
          <div className={styles.bio}>
            <p>Inti The Label creates aesthetic pieces that are both gender and color neutral and our collections work seamlessly together, so no matter what time of the year you are buying, your Inti pieces will always match! We have basics, updated basics and statement pieces for baby boys and baby girls that will always carry the same color tones and the same fit and style as we transition from one collection to the next.</p>
            <p>My mission is to create clothes in neutral tones that every baby can wear so that we can take the brainwork out of matching outfits and have more time to play and have fun. Love, Delma.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/intithelabel"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/intithelabel/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://intithelabel.com"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://tiktok.com/@intithelabel"
              target="_blank"
              rel="noopener"
            >
              <Music2 size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/inti-the-label/inti-the-label-1.jpeg"}
            img1Alt={"Baby and kid&apos;s clothes by inti the label"}
            imgSrc2={"/images/vendors/inti-the-label/inti-the-label-2.png"}
            img2Alt={"Baby and kid&apos;s clothes by inti the label"}
            imgSrc3={"/images/vendors/inti-the-label/inti-the-label-3.PNG"}
            img3Alt={"Baby and kid&apos;s clothes by inti the label"}
            imgSrc4={"/images/vendors/inti-the-label/inti-the-label-4.jpg"}
            img4Alt={"Baby and kid&apos;s clothes by inti the label"}
            imgSrc5={"/images/vendors/inti-the-label/inti-the-label-5.jpg"}
            img5Alt={"Baby and kid&apos;s clothes by inti the label"}
            imgSrc6={"/images/vendors/inti-the-label/inti-the-label-6.jpg"}
            img6Alt={"Baby and kid&apos;s clothes by inti the label"}
            imgSrc7={"/images/vendors/inti-the-label/inti-the-label-7.png"}
            img7Alt={"Baby and kid&apos;s clothes by inti the label"}
            imgSrc8={"/images/vendors/inti-the-label/inti-the-label-8.jpeg"}
            img8Alt={"Baby and kid&apos;s clothes by inti the label"}
            imgSrc9={"/images/vendors/inti-the-label/inti-the-label-9.jpeg"}
            img9Alt={"Baby and kid&apos;s clothes by inti the label"}
            imgSrc10={"/images/vendors/inti-the-label/inti-the-label-10.jpg"}
            img10Alt={"Baby and kid&apos;s clothes by inti the label"}
          />
        </div>
      </div>
    </div>
  )
}
