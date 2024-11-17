import Image from "next/image"
import Link from "next/link"
import { Instagram, Globe, Facebook } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/november-23"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to November 23rd
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Brownie &apos;n Blondie</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/brownie-n-blondie/brownie-n-blondie-logo.PNG"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for brownie and blondie"
          />
          <div className={styles.bio}><p>Hi, I&apos;m Bridget. I&apos;ve been an artist all my life, but it wasn&apos;t until many years after high school that I actually pursued it professionally. Brownie ‘n Blondie has been in business since 2012 and my main mediums are digital art and acrylic painting on wood. I make stationery items and hand paint different types of wood crafts (Kokeshi dolls, mushrooms, boxes, ornaments, etc,...). My work has a lot of love put into it and it is inspired by family, music, Japanese animation, and Japanese culture.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/brownienblondiecrafts"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/brownienblondie"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://brownienblondie.com/"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/brownie-n-blondie/brownie-n-blondie-1.JPG"}
            img1Alt={"Unique crafts by brownie n blondie"}
            imgSrc2={"/images/vendors/brownie-n-blondie/brownie-n-blondie-2.JPG"}
            img2Alt={"Unique crafts by brownie n blondie"}
            imgSrc3={"/images/vendors/brownie-n-blondie/brownie-n-blondie-3.jpg"}
            img3Alt={"Unique crafts by brownie n blondie"}
            imgSrc4={"/images/vendors/brownie-n-blondie/brownie-n-blondie-4.jpg"}
            img4Alt={"Unique crafts by brownie n blondie"}
            imgSrc5={"/images/vendors/brownie-n-blondie/brownie-n-blondie-5.jpg"}
            img5Alt={"Unique crafts by brownie n blondie"}
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
