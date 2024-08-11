import { Spacer } from "@/components/spacer"
import Link from "next/link"
import styles from 'styles/VendorsOverview.module.css'
import Image from 'next/image'
import { Facebook, CalendarHeart } from "lucide-react"


export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
        <Link href="/our-vendors" className="mb-[2rem] max-w-[1000px] mx-auto">&larr; Back to Our Vendors</Link>
        <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">July Vendors</h1>

        <div className={styles.vendors}>
        <Link href="/our-vendors/july/casi-g-designs" className={styles.vendor + " bg-[#bc5738]"}>
          <Image
            src="/images/vendors/casi-g-designs/casi-g-designs-logo.jpg"
            height={200}
            width={200}
            alt="logo for casi g designs"
          />
        </Link>
        <Link href="/our-vendors/july/the-forest-blues" className={styles.vendor + " bg-[#bc5738]"}>
          <Image
            src="/images/vendors/the-forest-blues/the-forest-blues-logo.jpg"
            height={200}
            width={200}
            alt="logo for The Forest Blues"
          />
        </Link>
        <Link href="/our-vendors/july/way-cool-stuff" className={styles.vendor + " bg-[#bc5738]"}>
          <Image
            src="/images/vendors/way-cool-stuff/way-cool-stuff-logo-pic.jpeg"
            height={200}
            width={200}
            alt="logo for way-cool-stuff"
          />
        </Link>
        <Link href="/our-vendors/july/tizana-mexicana" className={styles.vendor + " bg-[#fff]"}>
          <Image
            src="/images/vendors/tizana-mexicana/tizana-mexicana-logo.png"
            height={200}
            width={200}
            alt="logo for tizana mexicana"
          />
        </Link>
        <Link href="/our-vendors/july/love-and-flora-creations" className={styles.vendor + " bg-[#bc5738]"}>
          <Image
            src="/images/vendors/love-and-flora-creations/love-and-flora-creations-logo.jpg"
            height={200}
            width={200}
            alt="logo for love and flora creations"
          />
        </Link>
        <Link href="/our-vendors/july/dw-crafts" className={styles.vendor + " bg-[#bc5738]"}>
          <Image
            src="/images/vendors/dw-crafts/dw-crafts-logo.png"
            height={200}
            width={200}
            alt="logo for DW Crafts"
          />
        </Link>
        <Link href="/our-vendors/july/full-bloom-and-co" className={styles.vendor + " bg-[#bc5738]"}>
          <Image
            src="/images/vendors/full-bloom-and-co/full-bloom-and-co-logo.jpeg"
            height={200}
            width={200}
            alt="logo for full bloom and co"
          />
        </Link>
        <Link href="/our-vendors/july/elevar-sundry-company" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/elevar-sundry-company/elevar-sundry-company-logo.png"
              height={200}
              width={200}
              alt="Logo for elevar sundry company"
            />
          </Link>
        <Link href="/our-vendors/july/adrianas-bowtique" className={styles.vendor + " bg-[#bc5738]"}>
          <Image
            src="/images/vendors/adrianas-bowtique/adrianas-bowtique-logo.jpeg"
            height={200}
            width={200}
            alt="logo for adrianas bowtique"
          />
        </Link>
        <Link href="/our-vendors/july/sugarcane-beauty" className={styles.vendor + " bg-[#fff]"}>
            <Image
              src="/images/vendors/sugarcane-beauty/sugarcane-beauty-logo.png"
              height={200}
              width={200}
              alt="logo for sugarcane beauty"
            />
          </Link>
          <Link href="/our-vendors/july/wanderlust-scents-studio" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/wanderlust/wanderlust-logo.png"
              height={200}
              width={200}
              alt="Black and white pencil sketch of mountains and a sunset for wanderlust scents studio logo"
            />
          </Link>
          <Link href="/our-vendors/july/rustic-designs" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/rustic-designs/rustic-designs-logo.png"
              height={200}
              width={200}
              alt="Hand sketched square with mountains logo for rustic designs"
            />
          </Link>
          <Link href="/our-vendors/july/handslow-pottery" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/handslow-pottery/handslow-pottery-logo.png"
              height={200}
              width={200}
              alt="Sketch of hand holding pottery"
            />
          </Link>
          <Link href="/our-vendors/july/colorful-discoveries" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/colorful-discoveries/colorful-discoveries-logo.jpeg"
              height={200}
              width={200}
              alt="logo for colorful discoveries"
            />
          </Link>
          <Link href="/our-vendors/july/red-sunset-designs" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/red-sunset-designs/red-sunset-designs-logo.jpg"
              height={200}
              width={200}
              alt="Logo for Red Sunset Designs"
            />
          </Link>
          <Link href="/our-vendors/july/hae-candles" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/hae-candles/hae-candles-logo.jpeg"
              height={200}
              width={200}
              alt="logo for hae candles"
            />
          </Link>
          <Link href="/our-vendors/july/corina-kay-designs" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/corina-kay-designs/corina-kay-designs-pic-logo.png"
              height={200}
              width={200}
              alt="logo for corina kay designs"
            />
          </Link>
          <Link href="/our-vendors/july/coco-crafts" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/coco-crafts/coco-crafts-logo-new-pic.png"
              height={200}
              width={200}
              alt="logo for coco crafts"
            />
          </Link>
          <Link href="/our-vendors/july/oddpetz-emporium" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/oddpetz-emporium/oddpetz-emporium-logo.jpg"
              height={200}
              width={200}
              alt="Logo for OddPetz Emporium"
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
          <a href="https://www.instagram.com/yuzumakes" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/yuzumakes.png"
              height={200}
              width={200}
              alt="logo for yuzu makes"
            />
          </a>
          <a href="https://www.instagram.com/torigami.crafts?igsh=MXhrZGpkd2ExM2JjaQ%3D%3D&utm_source=qr" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/torigami-logo.jpeg"
              height={200}
              width={200}
              alt="logo for torigami crafts"
            />
          </a>
          <a href="https://www.instagram.com/ma_and_pa_prints_3d_toys/?igsh=bXRwZzQ0NjRzM25o" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/ma-and-pa-prints-logo.png"
              height={200}
              width={200}
              alt="logo for ma and pa prints"
            />
          </a>
          <a href="https://www.thatsassyteacher.com/" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/cs-of-three-logo.png"
              height={200}
              width={200}
              alt="logo for cs of three"
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
          <div className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/logos/elisabethartwork.png"
              height={200}
              width={200}
              alt="logo for elisabethartwork"
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
          <div className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/logos/halo-halo-crochet.png"
              height={200}
              width={200}
              alt="logo for Halo Halo Crochet"
            />
          </div>
        </div>

        <div className="md:pt-[4rem] pt-[2rem] md:pb-[4rem] pb-[2rem]"><Spacer /></div>

        <div className="text-center">
          <div className="bg-orange-100 dark:text-black rounded flex mx-auto xl:w-[100%] mt-[1rem] mb-[1rem] max-w-[800px]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">July</p>
              <p className="text-[3rem] leading-8">06</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://www.facebook.com/events/1582085929030134?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22calendar_going_events_unit%22%2C%22surface%22%3A%22bookmark_calendar%22%7D]%2C%22ref_notif_type%22%3Anull%7D" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240706T170000Z%2F20240706T230000Z&details=Shopping%20at%20the%20Northwest%20Handmade%20Market&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&text=Northwest%20Handmade%20Market%20Show%20-%20July%206th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Google</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.live.com/calendar/0/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-07-06T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-07-06T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20July%206th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Outlook</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.office.com/calendar/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-07-06T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-07-06T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20July%206th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Office</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.yahoo.com/?desc=Shopping%20at%20the%20Northwest%20Handmade%20Market&dur=&et=20240706T230000Z&in_loc=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&st=20240706T170000Z&title=Northwest%20Handmade%20Market%20Show%20-%20July%206th%202024&v=60" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Yahoo</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/1393dKsEiREDLvCeI8w-qLaA3A7jfoVBz/view?usp=drive_link" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
            </div>
          </div>
        </div>
      </div>
    )
  }