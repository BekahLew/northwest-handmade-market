import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
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
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Bonafide Pets</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/bonafide-pets/bonafide-pets.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for bonafide pets"
          />
          <div className={styles.bio}><p>I got two dogs while I was still serving in the U.S. Army in South Korea because I didn&apos;t want to spend my free time drinking and partying. Fortunately, the dogs kept me busy for me to say &quot;no&quot; to hanging out with party-ers, but one of my dogs was extremely sick. While I was finding out ways to help him, I found out that diet can be a huge part of helping your dogs increasing longevity and decreasing trips to the vet. That was when I started making treats and feeding them to my dogs. Miraculously, Cookie, the always sick dog, is fully healed and is healthier than ever! When I saw results from my dogs, I realized that I can spread the good news of single-ingredient dog treats to my friends, families, and other dog and cat owners to help their dogs live the longest and healthiest life!</p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.etsy.com/shop/bonafidepets"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          {/* @ts-expect-error Server Component */}
          <Slider
            imgSrc1={"/images/vendors/bonafide-pets-1.jpg"}
            img1Alt={"homemade dog treats"}
            imgSrc2={"/images/vendors/bonafide-pets-2.jpg"}
            img2Alt={"homemade dog treats"}
            imgSrc3={"/images/vendors/bonafide-pets-3.jpg"}
            img3Alt={"homemade dog treats"}
            imgSrc4={"/images/vendors/bonafide-pets-4.JPG"}
            img4Alt={"homemade dog treats"}
            imgSrc5={"/images/vendors/bonafide-pets-5.jpg"}
            img5Alt={"homemade dog treats"}
            imgSrc6={"/images/vendors/bonafide-pets-6.jpg"}
            img6Alt={"homemade dog treats"}
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
