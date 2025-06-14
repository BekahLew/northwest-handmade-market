import Image from "next/image"
import Link from "next/link"
import { Globe } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Earrings by E</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/earrings-by-e/earrings-by-e-logo-img.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for earrings-by-e"
          />
          <div className={styles.bio}>
            <p>Eugenia Kvistad is 13 year-old middle-schooler and local Edmonds artist. Eugenia makes driftwood ducks and sailboats, hand paints tote bags and pencil pouches, and designs unique earrings.</p>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/earrings-by-e/earrings-by-e-1.jpg"}
            img1Alt={"handmade items by Earring by E"}
            imgSrc2={"/images/vendors/earrings-by-e/earrings-by-e-2.jpg"}
            img2Alt={"handmade items by Earring by E"}
            imgSrc3={"/images/vendors/earrings-by-e/earrings-by-e-3.jpg"}
            img3Alt={"handmade items by Earring by E"}
            imgSrc4={"/images/vendors/earrings-by-e/earrings-by-e-4.jpg"}
            img4Alt={"handmade items by Earring by E"}
            imgSrc5={"/images/vendors/earrings-by-e/earrings-by-e-5.jpg"}
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
