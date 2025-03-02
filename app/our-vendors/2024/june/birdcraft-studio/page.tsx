import Image from "next/image"
import Link from "next/link"
import { Instagram, Globe } from "lucide-react"
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
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Birdcraft Studios</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/birdcraft-studio/birdcraft-studio-bio-pic.JPG"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for birdcraft studios"
          />
          <div className={styles.bio}>
            <p>I’m Gabriela, the creative force behind Birdcraft Studio, where we create sustainable hair accessories & gifts. Sewing has been a lifelong passion, nurtured by the rhythmic hum of my grandmother’s sewing machine. Those childhood memories of watching her craft beautiful, color-matching dresses for my sister and me while spending school breaks at her house remain vivid. As I navigated the complexities of adulthood, sewing became my therapy—an escape from the stresses and demands of my professional life as a healthcare worker back in Chile, my home country. Growing up in a developing country, sustainability was woven into our daily lives. Repairing things wasn’t just practical; it was a way of life, and in every neighborhood, you’d find a shoe repair shop, a clothing alteration spot, or an appliance fixer. This instilled in me a deep appreciation for sustainability.</p>
            <p>These two pillars—crafting and sustainability—naturally combined at Birdcraft Studio when I embarked on a new chapter in my life, moving to Seattle in 2019. Facing language and certification barriers to practice my professional career here, I found solace and purpose in reviving my passion for sewing, in a sustainable way. This is how Birdcraft Studio was born, and I’m hoping to help close the loop on the textile industry and contribute to a more sustainable future with our eco-friendly hair accessories and gifts.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/birdcraftstudio/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.birdcraftstudio.com"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/birdcraft-studio/birdcraft-studio-1.png"}
            img1Alt={"Custon designed clothes by birdcraft-studio"}
            imgSrc2={"/images/vendors/birdcraft-studio/birdcraft-studio-2.png"}
            img2Alt={"Custon designed clothes by birdcraft-studio"}
            imgSrc3={"/images/vendors/birdcraft-studio/birdcraft-studio-3.png"}
            img3Alt={"Custon designed clothes by birdcraft-studio"}
            imgSrc4={"/images/vendors/birdcraft-studio/birdcraft-studio-4.png"}
            img4Alt={"Custon designed clothes by birdcraft-studio"}
            imgSrc5={"/images/vendors/birdcraft-studio/birdcraft-studio-5.png"}
            img5Alt={"Custon designed clothes by birdcraft-studio"}
            imgSrc6={"/images/vendors/birdcraft-studio/birdcraft-studio-6.png"}
            img6Alt={"Custon designed clothes by birdcraft-studio"}
            imgSrc7={"/images/vendors/birdcraft-studio/birdcraft-studio-7.png"}
            img7Alt={"Custon designed clothes by birdcraft-studio"}
            imgSrc8={"/images/vendors/birdcraft-studio/birdcraft-studio-8.png"}
            img8Alt={"Custon designed clothes by birdcraft-studio"}
            imgSrc9={"/images/vendors/birdcraft-studio/birdcraft-studio-9.png"}
            img9Alt={"Custon designed clothes by birdcraft-studio"}
            imgSrc10={"/images/vendors/birdcraft-studio/birdcraft-studio-10.png"}
            img10Alt={"Custon designed clothes by birdcraft-studio"}
          />
        </div>
      </div>
    </div>
  )
}
