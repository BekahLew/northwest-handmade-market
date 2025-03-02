import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, ShoppingBag } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/november"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to November
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Sunny Sasha Pottery
      </h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/sunny-sasha-pottery/sunny-sasha-pottery-bio.jpeg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for sunny sasha pottery"
          />
          <div className={styles.bio}>
            <p>At Sunny Sasha Pottery, each piece I create is a celebration of craftsmanship and individuality, rooted in my European heritage. Using traditional European techniques that differ from contemporary American pottery, I handcraft and hand-paint each item in the vibrant majolica style. This approach allows me to infuse every cup with vivid colors and intricate designs, while paying homage to my great-grandfather, who inspired my journey with his own pottery studio.</p>
            <p>As an immigrant, I strive to share my traditions with the American community, infusing my work with love, empathy, and a touch of humor. Each piece is not only functional but also a vessel for connection, inviting you to savor the beauty of everyday moments—whether over morning coffee or shared meals.</p>
            <p>Through Sunny Sasha Pottery, I hope to bring a bit of European warmth into your home, encouraging appreciation for the artistry in both the mundane and the extraordinary. Every sip becomes a moment of connection, reflecting the love and tradition behind each handmade creation</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/sunnysashapottery/profilecard/?igsh=MWhsZWdkNWo4aGtzcw%3D%3D"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/sunny-sasha-pottery/sunny-sasha-pottery-1.jpeg"}
            img1Alt={"Handmade pottery by sunny sasha pottery"}
            imgSrc2={"/images/vendors/sunny-sasha-pottery/sunny-sasha-pottery-2.jpeg"}
            img2Alt={"Handmade pottery by sunny sasha pottery"}
            imgSrc3={"/images/vendors/sunny-sasha-pottery/sunny-sasha-pottery-3.jpeg"}
            img3Alt={"Handmade pottery by sunny sasha pottery"}
            imgSrc4={"/images/vendors/sunny-sasha-pottery/sunny-sasha-pottery-4.jpeg"}
            img4Alt={"Handmade pottery by sunny sasha pottery"}
            imgSrc5={"/images/vendors/sunny-sasha-pottery/sunny-sasha-pottery-5.jpeg"}
            img5Alt={"Handmade pottery by sunny sasha pottery"}
            imgSrc6={"/images/vendors/sunny-sasha-pottery/sunny-sasha-pottery-6.jpeg"}
            img6Alt={"Handmade pottery by sunny sasha pottery"}
            imgSrc7={"/images/vendors/sunny-sasha-pottery/sunny-sasha-pottery-7.jpeg"}
            img7Alt={"Handmade pottery by sunny sasha pottery"}
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
