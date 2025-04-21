import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
import styles from "styles/VendorDetail.module.css"

import Slider from "@/components/slider"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link
        href="/our-vendors/2024/september"
        className="mb-[2rem] max-w-[1000px] mx-auto"
      >
        &larr; Back to September
      </Link>
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">My Wandering Muse</h1>
      <div className={styles.vendor}>
        <div className={styles.vendorInfo}>
          <Image
            src="/images/vendors/my-wandering-muse/my-wandering-muse-bio.jpg"
            height={200}
            width={200}
            className={styles.bioImage}
            alt="logo for my wandering muse"
          />
          <div className={styles.bio}><p>Growing up as the daughter of a talented &quot;Jill-of-all-arts&quot; mom and an antiques & &quot;junque&quot; dealer dad, the urge to constantly creatively dabble, as well as explore, hunt for and discover long forgotten treasures, is embedded in my very soul. I can happily spend an inordinate amount of time in any thrift/secondhand or antique store, and I especially cannot resist the mystery and history of ephemera of all kinds-especially hand-written letters and vintage photographs, as well as found objects which most would likely consider &quot;trash&quot; or useless. Equally, I revel in the magic of the natural world, and feel a deep connection to the sublime majesty of woods and water, flora and fauna, and sticks and stones. My artistic joy comes in allowing my intuition (muse) guide me in using a myriad of these seemingly random, yet now cherished finds to create something which extends and honors their existence and relevance, and, hopefully, has the potential and power to evoke intrigue, emotion, connection or wonder. </p></div>
          <div className="flex justify-center">
            <a
              className="p-[.9rem] hover:scale-125 transition"
              href="https://www.instagram.com/mywanderingmuse/"
              target="_blank"
              rel="noopener"
            >
              <Instagram size={35} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <div>
          <Slider
            imgSrc1={"/images/vendors/my-wandering-muse/my-wandering-muse-1.JPEG"}
            img1Alt={"Handmade polymer clay jewelry by My Wandering Muse"}
            imgSrc2={"/images/vendors/my-wandering-muse/my-wandering-muse-2.JPEG"}
            img2Alt={"Handmade polymer clay jewelry by My Wandering Muse"}
            imgSrc3={"/images/vendors/my-wandering-muse/my-wandering-muse-3.JPEG"}
            img3Alt={"Handmade polymer clay jewelry by My Wandering Muse"}
            imgSrc4={"/images/vendors/my-wandering-muse/my-wandering-muse-4.JPEG"}
            img4Alt={"Handmade polymer clay jewelry by My Wandering Muse"}
            imgSrc5={"/images/vendors/my-wandering-muse/my-wandering-muse-5.JPEG"}
            img5Alt={"Handmade polymer clay jewelry by My Wandering Muse"}
            imgSrc6={"/images/vendors/my-wandering-muse/my-wandering-muse-6.JPEG"}
            img6Alt={"Handmade polymer clay jewelry by My Wandering Muse"}
            imgSrc7={"/images/vendors/my-wandering-muse/my-wandering-muse-7.JPEG"}
            img7Alt={"Handmade polymer clay jewelry by My Wandering Muse"}
            imgSrc8={"/images/vendors/my-wandering-muse/my-wandering-muse-8.JPEG"}
            img8Alt={"Handmade polymer clay jewelry by My Wandering Muse"}
            imgSrc9={"/images/vendors/my-wandering-muse/my-wandering-muse-9.JPEG"}
            img9Alt={"Handmade polymer clay jewelry by My Wandering Muse"}
            imgSrc10={""}
            img10Alt={""}
          />
        </div>
      </div>
    </div>
  )
}
