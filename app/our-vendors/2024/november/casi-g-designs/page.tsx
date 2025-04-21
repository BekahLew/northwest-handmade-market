import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, ShoppingBag } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/november"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to November
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Casi G. Designs</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/casi-g-designs/casi-g-designs-bio.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="bio pic for casi g designs"
          />
          <div className={styles.bio}>
            <p>Hi, I&apos;m Casi. I create impressionist dance paintings with a focus on jazz dance history. Vernacular jazz dancing, which includes swing dancing, charleston, and blues, is a black American artform that continues to evolve today. As a dancer myself, my mission is to celebrate innovators in the jazz dance scene and educate viewers about the rich history of jazz dance in America.</p>
            <p>When I am not painting dancers, I am inspired by the natural world around us in the Pacific Northwest. I love to create soft, contemporary paintings of mountains and flora.</p>
          </div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.facebook.com/profile.php?id=61556661350430"
              target="_blank"
              rel="noopener"
            >
              <Facebook size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/casig.designs/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://casigdesigns.etsy.com"
              target="_blank"
              rel="noopener"
            >
              <ShoppingBag size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/casi-g-designs/casi-g-designs-1.jpg"}
            img1Alt={"Original art by casi g designs"}
            imgSrc2={"/images/vendors/casi-g-designs/casi-g-designs-2.jpg"}
            img2Alt={"Original art by casi g designs"}
            imgSrc3={"/images/vendors/casi-g-designs/casi-g-designs-3.png"}
            img3Alt={"Original art by casi g designs"}
            imgSrc4={"/images/vendors/casi-g-designs/casi-g-designs-4.png"}
            img4Alt={"Original art by casi g designs"}
            imgSrc5={"/images/vendors/casi-g-designs/casi-g-designs-5.jpg"}
            img5Alt={"Original art by casi g designs"}
            imgSrc6={"/images/vendors/casi-g-designs/casi-g-designs-6.jpg"}
            img6Alt={"Original art by casi g designs"}
            imgSrc7={"/images/vendors/casi-g-designs/casi-g-designs-7.jpg"}
            img7Alt={"Original art by casi g designs"}
            imgSrc8={"/images/vendors/casi-g-designs/casi-g-designs-8.jpg"}
            img8Alt={"Original art by casi g designs"}
            imgSrc9={"/images/vendors/casi-g-designs/casi-g-designs-9.png"}
            img9Alt={"Original art by casi g designs"}
            imgSrc10={"/images/vendors/casi-g-designs/casi-g-designs-10.png"}
            img10Alt={"Original art by casi g designs"}
          />
        </div>
      </div>
    </div>
  )
}
