import Image from "next/image"
import Link from "next/link"
import { Facebook } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/may"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to May
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">M&M&apos;s Vintage Crafts and Decor</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/m-ms-vintage-2025/m-ms-vintage-2025-logo.jpeg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for m and ms vintage crafts and decor"
          />
          <div className={styles.bio}>
            <p>Hello, my name is Mandy. I am the creator of M&M&apos;s Vintage Crafts and Decor. I live in Mountlake Terrace with my family. My creative journey started when I was making Mother&apos;s Day gifts for friends and family.</p>
            <p>A few little hens and chicks in a teacup is all it took, I was hooked.</p>
            <p>Since then I have been doing local craft shows for over 7 years.</p>
            <p>My company name, as with my style, is very eclectic. From mason jar lights to succulents, l just love to repurpose items in a new and unique way.</p>
            <p>It&apos;s vintage inspiration with a boho vibe!</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/MandMsVintagecrafts"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/m-ms-vintage-2025/m-ms-vintage-2025-1.jpeg"}
            img1Alt={"Vintage Decor by M and Ms Vintage Decor"}
            imgSrc2={"/images/vendors/m-ms-vintage-2025/m-ms-vintage-2025-2.jpeg"}
            img2Alt={"Vintage Decor by M and Ms Vintage Decor"}
            imgSrc3={"/images/vendors/m-ms-vintage-2025/m-ms-vintage-2025-3.jpeg"}
            img3Alt={"Vintage Decor by M and Ms Vintage Decor"}
            imgSrc4={"/images/vendors/m-ms-vintage-2025/m-ms-vintage-2025-4.jpeg"}
            img4Alt={"Vintage Decor by M and Ms Vintage Decor"}
            imgSrc5={"/images/vendors/m-ms-vintage-2025/m-ms-vintage-2025-5.jpeg"}
            img5Alt={"Vintage Decor by M and Ms Vintage Decor"}
            imgSrc6={"/images/vendors/m-ms-vintage-2025/m-ms-vintage-2025-6.jpeg"}
            img6Alt={"Vintage Decor by M and Ms Vintage Decor"}
            imgSrc7={"/images/vendors/m-ms-vintage-2025/m-ms-vintage-2025-7.jpeg"}
            img7Alt={"Vintage Decor by M and Ms Vintage Decor"}
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
