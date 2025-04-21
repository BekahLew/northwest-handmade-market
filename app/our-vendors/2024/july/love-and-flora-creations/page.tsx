import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/july"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to July
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Love & Flora Creations</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/love-and-flora-creations/love-and-flora-creations-bio.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for love and flora creations"
          />
          <div className={styles.bio}><p>Love & Flora Creations is here to inspire and heal others through art and plant medicine. Growing up in the Pacific Northwest I was always surrounded by beautiful things, and I have always loved to draw and create, even as a child. Something shifted about six years ago and I took an intentional turn down my path as a healer. One step at a time I work to figure out just what that means - and bringing Love & Flora creations to life has been a big part of that! As the heart calls, I bring my art to print with hopes of sharing it with others. Always in love with plants and nature, they inspire my art and my desire to continue exploring the incredible healing properties they have always held.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/love._.and._.flora?igsh=MTZkd2Fhdm9uMGVwOQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/love-and-flora-creations/love-and-flora-creations-2.jpeg"}
            img1Alt={"Artwork by love and flora creations"}
            imgSrc2={"/images/vendors/love-and-flora-creations/love-and-flora-creations-1.jpeg"}
            img2Alt={"Artwork by love and flora creations"}
            imgSrc3={"/images/vendors/love-and-flora-creations/love-and-flora-creations-3.jpeg"}
            img3Alt={"Artwork by love and flora creations"}
            imgSrc4={"/images/vendors/love-and-flora-creations/love-and-flora-creations-4.jpeg"}
            img4Alt={"Artwork by love and flora creations"}
            imgSrc5={"/images/vendors/love-and-flora-creations/love-and-flora-creations-5.jpeg"}
            img5Alt={"Artwork by love and flora creations"}
            imgSrc6={"/images/vendors/love-and-flora-creations/love-and-flora-creations-6.jpeg"}
            img6Alt={"Artwork by love and flora creations"}
            imgSrc7={"/images/vendors/love-and-flora-creations/love-and-flora-creations-7.jpeg"}
            img7Alt={"Artwork by love and flora creations"}
            imgSrc8={"/images/vendors/love-and-flora-creations/love-and-flora-creations-8.jpeg"}
            img8Alt={"Artwork by love and flora creations"}
            imgSrc9={"/images/vendors/love-and-flora-creations/love-and-flora-creations-9.jpeg"}
            img9Alt={"Artwork by love and flora creations"}
            imgSrc10={"/images/vendors/love-and-flora-creations/love-and-flora-creations-10.jpeg"}
            img10Alt={"Artwork by love and flora creations"}
          />
        </div>
      </div>
    </div>
  )
}
