import Image from "next/image"
import Link from "next/link"
import { Globe } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/may"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to May
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">From My 'Art</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/from-my-art-2025/from-my-art-2025-bio.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for from my art"
          />
          <div className={styles.bio}>
            <p>Sculpture, Wood and resin art, Wood serving boards, jewelry, cast metal pendants, leatherwork, journals, handmade paper, hand printed greeting cards, all one of a kind.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://frommyart.com/art/"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/from-my-art-2025/from-my-art-2025-1.jpg"}
            img1Alt={"Sculptures and Wood and resin art from from my art"}
            imgSrc2={"/images/vendors/from-my-art-2025/from-my-art-2025-2.jpg"}
            img2Alt={"Sculptures and Wood and resin art from from my art"}
            imgSrc3={"/images/vendors/from-my-art-2025/from-my-art-2025-3.jpg"}
            img3Alt={"Sculptures and Wood and resin art from from my art"}
            imgSrc4={"/images/vendors/from-my-art-2025/from-my-art-2025-4.JPG"}
            img4Alt={"Sculptures and Wood and resin art from from my art"}
            imgSrc5={"/images/vendors/from-my-art-2025/from-my-art-2025-5.JPG"}
            img5Alt={"Sculptures and Wood and resin art from from my art"}
            imgSrc6={"/images/vendors/from-my-art-2025/from-my-art-2025-6.jpeg"}
            img6Alt={"Sculptures and Wood and resin art from from my art"}
            imgSrc7={"/images/vendors/from-my-art-2025/from-my-art-2025-7.jpeg"}
            img7Alt={"Sculptures and Wood and resin art from from my art"}
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
