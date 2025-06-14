import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe, Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">
        Wanderlust Scents Studio
      </h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/wanderlust/wanderlust-bio.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="Picture of woman sitting in a grassy, sunny field"
          />
          <div className={styles.bio}>
            <p className="bold">
              Meet May: Founder of Wanderlust Scents Studio
            </p>

            <p>
              My passion for the outdoors, travel, and a minimalistic lifestyle
              ignited the inspiration behind the studio. Specializing in small
              batches of artisanal scents, I aim to infuse the essence of
              nature, travel, and serenity found in simple living into each
              creation.
            </p>

            <p>
              At Wanderlust Scents Studio, my goal is clear: bring joy into your
              space through fragrances that narrate a distinct tale of
              wanderlust and adventure. This story isn&apos;t just mine; it resonates
              with each customer, offering an aromatic journey that echoes
              personal tales and experiences.
            </p>

            <p>
              Each collection is a celebration of diverse landscapes and
              cultures around the world, reflecting the wanderlust spirit that
              drives me. Join me on this aromatic journey, and let Wanderlust
              Scents Studio transport you to the corners of the globe.
              Experience the joy, embrace the scents, and add a touch of
              wanderlust to your life!
            </p>
          </div>
          <div className="flex justify-center">
          <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/wanderlustscents.studio/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.shopwanderlustscents.com"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/wanderlust/wanderlust-1.JPG"}
            img1Alt={"homemade candles and diffusers"}
            imgSrc2={"/images/vendors/wanderlust/wanderlust-2.JPEG"}
            img2Alt={"homemade candles and diffusers"}
            imgSrc3={""}
            img3Alt={""}
            imgSrc4={""}
            img4Alt={""}
            imgSrc5={""}
            img5Alt={""}
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
