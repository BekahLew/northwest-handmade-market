import { Spacer } from "@/components/spacer"
import Link from "next/link"
import styles from 'styles/VendorsOverview.module.css'
import Image from 'next/image'
import { Facebook, CalendarHeart } from "lucide-react"


export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
        <Link href="/our-vendors" className="mb-[2rem] max-w-[1000px] mx-auto">&larr; Back to Our Vendors</Link>
        <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">August Vendors</h1>
        <div className={styles.vendors}>
          <Link href="/our-vendors/august/the-forest-blues" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/the-forest-blues/the-forest-blues-logo.jpg"
              height={200}
              width={200}
              alt="logo for The Forest Blues"
            />
          </Link>
          <Link href="/our-vendors/august/cards-by-meesh" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/cards-by-meesh/cards-by-meesh-logo.png"
              height={200}
              width={200}
              alt="logo for Cards by Meesh"
            />
          </Link>
          <Link href="/our-vendors/august/faerie-made" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/faerie-made/faerie-made-logo.jpg"
              height={200}
              width={200}
              alt="logo for Faerie Made"
            />
          </Link>
          <Link href="/our-vendors/august/from-my-art" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/from-my-art/from-my-art-logo.jpg"
              height={200}
              width={200}
              alt="logo for from my art"
            />
          </Link>
          <Link href="/our-vendors/august/leslie-sarah-designs" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/leslie-sarah-designs/leslie-sarah-designs-pic-logo.jpg"
              height={200}
              width={200}
              alt="logo for leslie sarah designs"
            />
          </Link>
          <Link href="/our-vendors/august/long-play-art" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/long-play-art/long-play-art-logo.jpg"
              height={200}
              width={200}
              alt="logo for long play art"
            />
          </Link>
          <Link href="/our-vendors/august/love-my-resin" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/love-my-resin/love-my-resin-logo.png"
              height={200}
              width={200}
              alt="logo for love my resin"
            />
          </Link>
          <Link href="/our-vendors/august/naterade-creates" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/naterade-creates/naterade-creates-logo.jpeg"
              height={200}
              width={200}
              alt="logo for naterade creates"
            />
          </Link>
          <Link href="/our-vendors/august/hae-candles" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/hae-candles/hae-candles-logo.jpeg"
              height={200}
              width={200}
              alt="logo for hae candles"
            />
          </Link>
          <Link href="/our-vendors/august/dw-crafts" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/dw-crafts/dw-crafts-logo.png"
              height={200}
              width={200}
              alt="logo for DW Crafts"
            />
          </Link>
          <Link href="/our-vendors/august/koala-creations" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/koala-creations/koala-creations-logo-pic.png"
              height={200}
              width={200}
              alt="logo for koala creations"
            />
          </Link>
          <Link href="/our-vendors/august/doily-by-pony" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/doily-by-pony/doily-by-pony-logo.jpg"
              height={200}
              width={200}
              alt="Blue and green gradient with logo for doily by pony"
            />
          </Link>
          <Link href="/our-vendors/august/elevar-sundry-company" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/elevar-sundry-company/elevar-sundry-company-logo.png"
              height={200}
              width={200}
              alt="Logo for elevar sundry company"
            />
          </Link>
          <Link href="/our-vendors/august/linked-with-joy" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/linked-with-joy/linked-with-joy-logo.png"
              height={200}
              width={200}
              alt="Logo for Linked with Joy"
            />
          </Link>
          <Link href="/our-vendors/august/red-sunset-designs" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/red-sunset-designs/red-sunset-designs-logo.jpg"
              height={200}
              width={200}
              alt="Logo for Red Sunset Designs"
            />
          </Link>
          <Link href="/our-vendors/august/vs-treats-bakery" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/vs-treats/vs-treats-logo.png"
              height={200}
              width={200}
              alt="Logo for V&apos;s Treats"
            />
          </Link>
          <Link href="/our-vendors/august/sand-dollar-style" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/sand-dollar-style/sand-dollar-style-logo.png"
              height={200}
              width={200}
              alt="Logo for Sand Dollar Style"
            />
          </Link>
          <Link href="/our-vendors/august/trinda-magic" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/trinda-magic/trinda-magic-logo.png"
              height={200}
              width={200}
              alt="Logo for Trinda Magic"
            />
          </Link>
          <Link href="/our-vendors/august/crafty-juniper" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/crafty-juniper-2/crafty-juniper-logo-pic.jpg"
              height={200}
              width={200}
              alt="Logo for Crafty Juniper"
            />
          </Link>
          <Link href="/our-vendors/august/coco-crafts" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/coco-crafts/coco-crafts-logo-new-pic.png"
              height={200}
              width={200}
              alt="logo for coco crafts"
            />
          </Link>
          <Link href="/our-vendors/august/aromatic-creations" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/aromatic-creations/aromatic-creations-logo.png"
              height={200}
              width={200}
              alt="Logo for Aromatic Creations"
            />
          </Link>
          <a href="https://cafegureum.com/" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/cafe-gureum.png"
              height={200}
              width={200}
              alt="logo for Cafe Gureum"
            />
          </a>
          <a href="https://www.instagram.com/aurorabyalexis" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/aurora-designs-logo.png"
              height={200}
              width={200}
              alt="logo for Aurora Designs"
            />
          </a>
          <a href="https://www.instagram.com/saraslittlecreations?igsh=MXVkMjZqaTR1dmN6eA%3D%3D&utm_source=qr" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/saras-little-creations-logo.png"
              height={200}
              width={200}
              alt="logo for saras little creations"
            />
          </a>
          <a href="https://www.egj-studios.com" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/egj-studios-logo.png"
              height={200}
              width={200}
              alt="logo for EGJ Studios"
            />
          </a>
          <a href="https://www.etsy.com/shop/sweetdlilyshop/?etsrc=sdt" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/sweet-dlily-logo.png"
              height={200}
              width={200}
              alt="logo for sweet d'lily"
            />
          </a>
          <a href="https://www.instagram.com/yanayaart?igsh=enR4aHJvdHd6bXZ0&utm_source=qr" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/yanaya-jewelry-logo.png"
              height={200}
              width={200}
              alt="logo for yanaya jewelry"
            />
          </a>
          <div className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/logos/homebased-mandala-and-lippan-art-logo.png"
              height={200}
              width={200}
              alt="logo for homebased mandala and lippan art"
            />
          </div>
          <div className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/logos/rebeccas-whimsical-art-logo.png"
              height={200}
              width={200}
              alt="logo for Rebeccas Whimsical Art"
            />
          </div>
        </div>

        <div className="md:pt-[4rem] pt-[2rem] md:pb-[4rem] pb-[2rem]"><Spacer /></div>
          <div className="bg-orange-100 dark:text-black rounded flex mx-auto xl:w-[100%] mt-[1rem] mb-[1rem] max-w-[800px]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">Aug</p>
              <p className="text-[3rem] leading-8">03</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://www.facebook.com/events/946293786598462?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22calendar_going_events_unit%22%2C%22surface%22%3A%22bookmark_calendar%22%7D]%2C%22ref_notif_type%22%3Anull%7D" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240803T170000Z%2F20240803T230000Z&details=Shopping%20at%20the%20Northwest%20Handmade%20Market&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&text=Northwest%20Handmade%20Market%20Show%20-%20August%203rd%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Google</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.live.com/calendar/0/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-08-03T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-08-03T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20August%203rd%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Outlook</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.office.com/calendar/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-08-03T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-08-03T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20August%203rd%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Office</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.yahoo.com/?desc=Shopping%20at%20the%20Northwest%20Handmade%20Market&dur=&et=20240803T230000Z&in_loc=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&st=20240803T170000Z&title=Northwest%20Handmade%20Market%20Show%20-%20August%203rd%202024&v=60" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Yahoo</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/1c2rkLQRerCw58wKINpCVgfETmwg_BZRG/view?usp=drive_link" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
            </div>
          </div>
      </div>
    )
  }