import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Adriana&apos;s Bowtique</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/adrianas-bowtique/adrianas-bowtique-logo.jpeg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for adrianas-bowtique"
          />
          <div className={styles.bio}><p>My name is Kirsa and I love crafting, I started this beautiful project in 2023 based on accessories for babies, little girls and adults. All my accessories are handmade with a lot of care and love. I use various materials as fabrics, ribbon, faux leather and embellishments. I try to improve every day in the production and designs of my accessories with good quality materials.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://linktr.ee/kirsag2302"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/adrianas-bowtique/adrianas-bowtique-1.jpeg"}
            img1Alt={"cute hair bows by adrianas-bowtique"}
            imgSrc2={"/images/vendors/adrianas-bowtique/adrianas-bowtique-2.jpeg"}
            img2Alt={"cute hair bows by adrianas-bowtique"}
            imgSrc3={"/images/vendors/adrianas-bowtique/adrianas-bowtique-3.jpeg"}
            img3Alt={"cute hair bows by adrianas-bowtique"}
            imgSrc4={"/images/vendors/adrianas-bowtique/adrianas-bowtique-4.jpeg"}
            img4Alt={"cute hair bows by adrianas-bowtique"}
            imgSrc5={"/images/vendors/adrianas-bowtique/adrianas-bowtique-5.jpeg"}
            img5Alt={"cute hair bows by adrianas-bowtique"}
            imgSrc6={"/images/vendors/adrianas-bowtique/adrianas-bowtique-6.jpeg"}
            img6Alt={"cute hair bows by adrianas-bowtique"}
            imgSrc7={"/images/vendors/adrianas-bowtique/adrianas-bowtique-7.jpeg"}
            img7Alt={"cute hair bows by adrianas-bowtique"}
            imgSrc8={"/images/vendors/adrianas-bowtique/adrianas-bowtique-8.jpeg"}
            img8Alt={"cute hair bows by adrianas-bowtique"}
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
