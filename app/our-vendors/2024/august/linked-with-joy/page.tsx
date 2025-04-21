import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/august"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to August
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Linked with Joy</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo + " flex flex-col items-center mx-auto"}>
          <Image
            src="/images/vendors/linked-with-joy/linked-with-joy-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for linked-with-joy"
          />
          <div className={styles.bio}><p>Custom fit claspless jewelry.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/linkedwithjoy?igsh=MWN4eTlzYWx4Z203bw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/linked-with-joy/linked-with-joy-1.jpeg"}
            img1Alt={"Custom fit permanent jewelry by linked with joy"}
            imgSrc2={"/images/vendors/linked-with-joy/linked-with-joy-2.jpeg"}
            img2Alt={"Custom fit permanent jewelry by linked with joy"}
            imgSrc3={"/images/vendors/linked-with-joy/linked-with-joy-3.jpeg"}
            img3Alt={"Custom fit permanent jewelry by linked with joy"}
            imgSrc4={"/images/vendors/linked-with-joy/linked-with-joy-4.jpeg"}
            img4Alt={"Custom fit permanent jewelry by linked with joy"}
            imgSrc5={"/images/vendors/linked-with-joy/linked-with-joy-5.jpeg"}
            img5Alt={"Custom fit permanent jewelry by linked with joy"}
            imgSrc6={"/images/vendors/linked-with-joy/linked-with-joy-6.jpeg"}
            img6Alt={"Custom fit permanent jewelry by linked with joy"}
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
