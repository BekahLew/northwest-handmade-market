import Image from "next/image"
import Link from "next/link"
import { Instagram, Globe, ShoppingBag } from "lucide-react"
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
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Faëire Made</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/faerie-made/faerie-made-logo.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for Faerie Made"
          />
          <div className={styles.bio}>
            <p>Fairie is the realm of imagination. Everything that comes from faerie brings beauty, wonder and joy. I combine paper, fabric, leather, thread and yarn to make unique handmade products that are inspired by nature and created for your enchantment.</p>
            <p>Products include handmade sketchbooks, mixed media journals, hand-printed paper, hand embroidered home decor items, greeting cards, junk journals,  and mixed media art.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/faeriemadestudio/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.faerie-made.com/"
              target="_blank"
              rel="noopener"
            >
              <Globe size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://faeriemadestudio.etsy.com"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/faerie-made/faerie-made-1.jpeg"}
            img1Alt={"handmade crafts by Faerie Made"}
            imgSrc2={"/images/vendors/faerie-made/faerie-made-2.png"}
            img2Alt={"handmade crafts by Faerie Made"}
            imgSrc3={"/images/vendors/faerie-made/faerie-made-3.jpeg"}
            img3Alt={"handmade crafts by Faerie Made"}
            imgSrc4={"/images/vendors/faerie-made/faerie-made-4.jpeg"}
            img4Alt={"handmade crafts by Faerie Made"}
            imgSrc5={"/images/vendors/faerie-made/faerie-made-5.jpeg"}
            img5Alt={"handmade crafts by Faerie Made"}
            imgSrc6={"/images/vendors/faerie-made/faerie-made-6.jpeg"}
            img6Alt={"handmade crafts by Faerie Made"}
            imgSrc7={"/images/vendors/faerie-made/faerie-made-7.jpeg"}
            img7Alt={"handmade crafts by Faerie Made"}
            imgSrc8={"/images/vendors/faerie-made/faerie-made-8.jpeg"}
            img8Alt={"handmade crafts by Faerie Made"}
            imgSrc9={"/images/vendors/faerie-made/faerie-made-9.jpeg"}
            img9Alt={"handmade crafts by Faerie Made"}
            imgSrc10={"/images/vendors/faerie-made/faerie-made-10.jpeg"}
            img10Alt={"handmade crafts by Faerie Made"}
          />
        </div>
      </div>
    </div>
  )
}
