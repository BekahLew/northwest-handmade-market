import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">

      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Cookie Box</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/cookie-box/cookie-box-logo.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for cookie-box"
          />
          <div className={styles.bio}><p>Cookie Box was created with the intent to bring home made, better tasting gluten free cookies to people who are gluten free. About 10 years ago I had to remove gluten from my diet, and was constantly disappointed with the gluten free options I would find. In 2019, I decided to pursue my love of baking, and obtained my pastry certificate through Edmonds Community College. I grew tired of not being able to eat what I was baking, so I started to branch out into the world of gluten free baking. I spent the next few years perfecting my cookie recipes through trial and error and gathering feedback from my peers. Eventually began the process for becoming an official cottage bakery! While I specialize in cookies, I also make scones, cinnamon rolls and have dabbled in other baked goods.</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/cookieboxgfbakery/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/profile.php?id=61575738427104"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/cookie-box/cookie-box-1.jpeg"}
            img1Alt={"Handmade bags by cookie-box"}
            imgSrc2={"/images/vendors/cookie-box/cookie-box-2.jpeg"}
            img2Alt={"Handmade bags by cookie-box"}
            imgSrc3={"/images/vendors/cookie-box/cookie-box-3.jpeg"}
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
