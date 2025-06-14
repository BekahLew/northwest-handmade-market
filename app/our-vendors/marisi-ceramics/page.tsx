import Image from "next/image"
import Link from "next/link"
import { Facebook, ShoppingBag, Globe, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Marisi Ceramics</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/marisi-ceramics/marisi-ceramics-bio.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for marisi ceramics"
          />
          <div className={styles.bio}>
            <p>Hello everyone!</p>
            <p>My name is Mariia and I&apos;m a ceramicist and the founder of small home pottery studio Marisi Ceramics based in Bonney Lake, Washington. I have always been interested in art, and for many years my main hobby was drawing. Over time, while studying new facets of art, I discovered the world of ceramics. Since then, my pottery hobby has become my main job. Handmade ceramics are not just my work, but, also, a way to convey through clay my vision of human interaction with nature. I put my soul, feelings, and emotions into this and I hope that by purchasing my ceramics, I can share them with you. Hope to see you soon!</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/profile.php?id=61559166988340"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/marisi.ceramics"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://marisiceramics.store/"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.etsy.com/shop/MarisiCeramics"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/marisi-ceramics/marisi-ceramics-1.jpg"}
            img1Alt={"Ceramics by marisi ceramics"}
            imgSrc2={"/images/vendors/marisi-ceramics/marisi-ceramics-2.jpg"}
            img2Alt={"Ceramics by marisi ceramics"}
            imgSrc3={"/images/vendors/marisi-ceramics/marisi-ceramics-3.jpg"}
            img3Alt={"Ceramics by marisi ceramics"}
            imgSrc4={"/images/vendors/marisi-ceramics/marisi-ceramics-4.jpg"}
            img4Alt={"Ceramics by marisi ceramics"}
            imgSrc5={"/images/vendors/marisi-ceramics/marisi-ceramics-5.jpeg"}
            img5Alt={"Ceramics by marisi ceramics"}
            imgSrc6={"/images/vendors/marisi-ceramics/marisi-ceramics-6.jpg"}
            img6Alt={"Ceramics by marisi ceramics"}
            imgSrc7={"/images/vendors/marisi-ceramics/marisi-ceramics-7.jpg"}
            img7Alt={"Ceramics by marisi ceramics"}
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
