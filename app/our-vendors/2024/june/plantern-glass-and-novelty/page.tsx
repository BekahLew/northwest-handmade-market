import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/june"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to June
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Plantern Glass and Novelty</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/plantern-glass-and-novelty/plantern-glass-and-novelty-logo-img.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for plantern-glass-and-novelty"
          />
          <div className={styles.bio}><p>My name is Katy and I&apos;m the creator behind Plantern Glass & Novelty. I primarily create stained glass art to add beauty and color to any home, but I also do some glass fusing and flamework. That means recently I&apos;ve been creating glass beads and earrings! Stained glass is always my first passion though, and I love creating all manner of stained glass pieces, typically depicting nature or wild life in some manner.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.etsy.com/shop/planternglass"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/plantern-glass-and-novelty/plantern-glass-and-novelty-1.jpg"}
            img1Alt={"Stained glass by plantern glass and novelty"}
            imgSrc2={"/images/vendors/plantern-glass-and-novelty/plantern-glass-and-novelty-2.jpg"}
            img2Alt={"Stained glass by plantern glass and novelty"}
            imgSrc3={"/images/vendors/plantern-glass-and-novelty/plantern-glass-and-novelty-3.png"}
            img3Alt={"Stained glass by plantern glass and novelty"}
            imgSrc4={"/images/vendors/plantern-glass-and-novelty/plantern-glass-and-novelty-4.jpg"}
            img4Alt={"Stained glass by plantern glass and novelty"}
            imgSrc5={"/images/vendors/plantern-glass-and-novelty/plantern-glass-and-novelty-5.jpg"}
            img5Alt={"Stained glass by plantern glass and novelty"}
            imgSrc6={"/images/vendors/plantern-glass-and-novelty/plantern-glass-and-novelty-6.jpg"}
            img6Alt={"Stained glass by plantern glass and novelty"}
            imgSrc7={"/images/vendors/plantern-glass-and-novelty/plantern-glass-and-novelty-7.jpg"}
            img7Alt={"Stained glass by plantern glass and novelty"}
            imgSrc8={"/images/vendors/plantern-glass-and-novelty/plantern-glass-and-novelty-8.jpg"}
            img8Alt={"Stained glass by plantern glass and novelty"}
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
