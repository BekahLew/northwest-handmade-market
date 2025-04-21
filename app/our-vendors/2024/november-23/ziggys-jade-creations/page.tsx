import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Globe } from "lucide-react"
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
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Ziggy&apos;s Jade Creations</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/ziggys-jade-creations/ziggys-jade-creations-bio-new.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for ziggys-jade-creations"
          />
          <div className={styles.bio}><p>My name is Ziggy and welcome to Ziggy&apos;s Jade Creations! Since 2019, I have dedicated myself to creating unique wearable art using beautiful different types of jades from around the world, including jade found here in Washington State. Every piece of jewelry, whether it is earrings, pendants, beads or cabochons, is carefully handcrafted, with love and intention, using only the finest jades and beautifully finished with silver or 14k gold (earrings).</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.ziggysjadecreations.com"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/ziggysjadecreations/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/ZiggysJadeCreations/"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/ziggys-jade-creations/ziggys-jade-creations-1.jpg"}
            img1Alt={"Jade jewelry by Ziggys Jade Creations"}
            imgSrc2={"/images/vendors/ziggys-jade-creations/ziggys-jade-creations-2.jpg"}
            img2Alt={"Jade jewelry by Ziggys Jade Creations"}
            imgSrc3={"/images/vendors/ziggys-jade-creations/ziggys-jade-creations-3.jpg"}
            img3Alt={"Jade jewelry by Ziggys Jade Creations"}
            imgSrc4={"/images/vendors/ziggys-jade-creations/ziggys-jade-creations-4.jpg"}
            img4Alt={"Jade jewelry by Ziggys Jade Creations"}
            imgSrc5={"/images/vendors/ziggys-jade-creations/ziggys-jade-creations-5.jpg"}
            img5Alt={"Jade jewelry by Ziggys Jade Creations"}
            imgSrc6={"/images/vendors/ziggys-jade-creations/ziggys-jade-creations-6.jpg"}
            img6Alt={"Jade jewelry by Ziggys Jade Creations"}
            imgSrc7={"/images/vendors/ziggys-jade-creations/ziggys-jade-creations-7.jpg"}
            img7Alt={"Jade jewelry by Ziggys Jade Creations"}
            imgSrc8={"/images/vendors/ziggys-jade-creations/ziggys-jade-creations-8.jpg"}
            img8Alt={"Jade jewelry by Ziggys Jade Creations"}
            imgSrc9={"/images/vendors/ziggys-jade-creations/ziggys-jade-creations-9.jpg"}
            img9Alt={"Jade jewelry by Ziggys Jade Creations"}
            imgSrc10={"/images/vendors/ziggys-jade-creations/ziggys-jade-creations-10.jpg"}
            img10Alt={"Jade jewelry by Ziggys Jade Creations"}
          />
        </div>
      </div>
    </div>
  )
}
