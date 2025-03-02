import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/august"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to August
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Sand Dollar Style</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/sand-dollar-style/sand-dollar-style-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for Sand Dollar Style"
          />
          <div className={styles.bio}><p>We take Driftwood and seashells from the Pacific Northwest. Add some air plants make art out of it and of course there’s the famous jetty kitties.</p></div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/sand-dollar-style/sand-dollar-style-2.jpeg"}
            img1Alt={"wood crafts by Sand Dollar Style"}
            imgSrc2={"/images/vendors/sand-dollar-style/sand-dollar-style-1.jpeg"}
            img2Alt={"wood crafts by Sand Dollar Style"}
            imgSrc3={"/images/vendors/sand-dollar-style/sand-dollar-style-3.jpeg"}
            img3Alt={"wood crafts by Sand Dollar Style"}
            imgSrc4={"/images/vendors/sand-dollar-style/sand-dollar-style-4.jpeg"}
            img4Alt={"wood crafts by Sand Dollar Style"}
            imgSrc5={"/images/vendors/sand-dollar-style/sand-dollar-style-5.jpeg"}
            img5Alt={"wood crafts by Sand Dollar Style"}
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
