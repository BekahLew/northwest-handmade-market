import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Foxhilt</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/foxhilt/foxhilt-logo.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for foxhilt"
          />
          <div className={styles.bio}>
            <p>Foxhilt (Dean Shinner) creates handmade relief prints inspired by myth and magic. Bold, dark designs of tarot cards, haunted doors, and figures from mythology and folktales are carved in linoleum, brought to life with hand-pressed accents of bright color. Believing that artwork should be accessible to all, prints range from $5-40, and small, handmade flaws and marks are allowed to stay, showing the human hand as a weaver of printed tales. Occasionally, Foxhilt also offers hand-painted animal skulls, acquired secondhand and painted to for a second afterlife.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/foxhilt"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/foxhilt/foxhilt-1.jpg"}
            img1Alt={"Unique art by foxhilt"}
            imgSrc2={"/images/vendors/foxhilt/foxhilt-2.jpg"}
            img2Alt={"Unique art by foxhilt"}
            imgSrc3={"/images/vendors/foxhilt/foxhilt-3.jpg"}
            img3Alt={"Unique art by foxhilt"}
            imgSrc4={"/images/vendors/foxhilt/foxhilt-4.jpg"}
            img4Alt={"Unique art by foxhilt"}
            imgSrc5={"/images/vendors/foxhilt/foxhilt-5.jpg"}
            img5Alt={"Unique art by foxhilt"}
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
