import Image from "next/image"
import Link from "next/link"
import { Instagram, Globe, Music2 } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Glimmer Glassworks</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/glimmer-glassworks/glimmer-glassworks-logo.png"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for glimmer-glassworks"
          />
          <div className={styles.bio}><p>My name is Mina, I have been making stained glass for over a year. My style is modern, colorful, and fun! I make suncatchers, panels, plant stakes, and propagation stations.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.glimmerglassworks.com/"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/glimmerglassworks"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.tiktok.com/@glimmerglassworks"
              target="_blank"
              rel="noopener"
            >
              <Music2 size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/glimmer-glassworks/glimmer-glassworks-1.jpeg"}
            img1Alt={"Stained glass by glimmer glassworks"}
            imgSrc2={"/images/vendors/glimmer-glassworks/glimmer-glassworks-2.jpeg"}
            img2Alt={"Stained glass by glimmer glassworks"}
            imgSrc3={"/images/vendors/glimmer-glassworks/glimmer-glassworks-3.jpeg"}
            img3Alt={"Stained glass by glimmer glassworks"}
            imgSrc4={"/images/vendors/glimmer-glassworks/glimmer-glassworks-4.jpeg"}
            img4Alt={"Stained glass by glimmer glassworks"}
            imgSrc5={"/images/vendors/glimmer-glassworks/glimmer-glassworks-5.jpeg"}
            img5Alt={"Stained glass by glimmer glassworks"}
            imgSrc6={"/images/vendors/glimmer-glassworks/glimmer-glassworks-6.jpeg"}
            img6Alt={"Stained glass by glimmer glassworks"}
            imgSrc7={"/images/vendors/glimmer-glassworks/glimmer-glassworks-7.jpeg"}
            img7Alt={"Stained glass by glimmer glassworks"}
            imgSrc8={"/images/vendors/glimmer-glassworks/glimmer-glassworks-8.jpeg"}
            img8Alt={"Stained glass by glimmer glassworks"}
            imgSrc9={"/images/vendors/glimmer-glassworks/glimmer-glassworks-9.jpeg"}
            img9Alt={"Stained glass by glimmer glassworks"}
            imgSrc10={"/images/vendors/glimmer-glassworks/glimmer-glassworks-10.jpeg"}
            img10Alt={"Stained glass by glimmer glassworks"}
          />
        </div>
      </div>
    </div>
  )
}
