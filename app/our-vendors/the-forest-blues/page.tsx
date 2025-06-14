import Image from "next/image"
import Link from "next/link"
import { Globe, Camera } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">The Forest Blues</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/the-forest-blues/the-forest-blues-logo.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for the forest blues"
          />
          <div className={styles.bio}>
            <p>Hi Everyone! My name is Rae Hood. I am an artist, plant lover and portrait photographer based in Seattle. The Forest Blues is my small art practice that celebrates the marriage of photography, printmaking and my love for nature using the historic process of cyanotypes!</p>
            <p>A cyanotype is a unique form of photography dating back to the 19th century. It involves using light-sensitive chemicals to create blue-toned prints that develop under the sun. The pressed plants I use work similarly to film and block out patterns with their shadows. I print on paper, fabric and second hand clothing. My work is inspired by the landscapes of the Pacific Northwest and everything that grows around me.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.rachaelhoodphotography.com "
              target="_blank"
              rel="noopener"
            >
              <Camera size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.theforestblues.com"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/the-forest-blues/the-forest-blues-1.jpg"}
            img1Alt={"wood mountain art by the-forest-blues"}
            imgSrc2={"/images/vendors/the-forest-blues/the-forest-blues-2.jpg"}
            img2Alt={"wood mountain art by the-forest-blues"}
            imgSrc3={"/images/vendors/the-forest-blues/the-forest-blues-3.jpg"}
            img3Alt={"wood mountain art by the-forest-blues"}
            imgSrc4={"/images/vendors/the-forest-blues/the-forest-blues-4.jpg"}
            img4Alt={"wood mountain art by the-forest-blues"}
            imgSrc5={"/images/vendors/the-forest-blues/the-forest-blues-5.jpg"}
            img5Alt={"wood mountain art by the-forest-blues"}
            imgSrc6={"/images/vendors/the-forest-blues/the-forest-blues-6.jpg"}
            img6Alt={"wood mountain art by the-forest-blues"}
            imgSrc7={"/images/vendors/the-forest-blues/the-forest-blues-7.png"}
            img7Alt={"wood mountain art by the-forest-blues"}
            imgSrc8={"/images/vendors/the-forest-blues/the-forest-blues-8.jpg"}
            img8Alt={"wood mountain art by the-forest-blues"}
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
