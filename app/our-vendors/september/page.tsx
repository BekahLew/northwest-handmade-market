import { Spacer } from "@/components/spacer"
import Link from "next/link"
import styles from 'styles/VendorsOverview.module.css'
import Image from 'next/image'
import { Facebook, CalendarHeart } from "lucide-react"

export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
        <Link href="/our-vendors" className="mb-[2rem] max-w-[1000px] mx-auto">&larr; Back to Our Vendors</Link>
        <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">September Vendors</h1>
        <div className={styles.vendors}>
        <Link href="/our-vendors/september/loving-home-crochet" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/loving-home-crochet/loving-home-crochet-logo.png"
              height={200}
              width={200}
              alt="Logo for loving home crochet"
            />
          </Link>
          <Link href="/our-vendors/september/pilchuck-soap-company" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/pilchuck-soap-company/pilchuck-soap-company-logo.png"
              height={200}
              width={200}
              alt="Logo for pilchuck soap company"
            />
          </Link>
          <Link href="/our-vendors/september/loopsalooza" className={styles.vendor + " bg-[#bc5738]"}>
          <Image
            src="/images/vendors/loopsalooza/loopsalooza-logo-pic.png"
            height={200}
            width={200}
            alt="Logo for loopsalooza"
          />
        </Link>
        <Link href="/our-vendors/september/elevar-sundry-company" className={styles.vendor + " bg-[#bc5738]"}>
          <Image
            src="/images/vendors/elevar-sundry-company/elevar-sundry-company-logo.png"
            height={200}
            width={200}
            alt="Logo for elevar sundry company"
          />
          </Link>
          <Link href="/our-vendors/september/my-wandering-muse" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/my-wandering-muse/my-wandering-muse-logo.png"
              height={200}
              width={200}
              alt="Logo for my wandering muse"
            />
          </Link>
          <Link href="/our-vendors/september/koala-creations" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/koala-creations/koala-creations-logo-pic.png"
              height={200}
              width={200}
              alt="Logo for koala-creations"
            />
          </Link>
          <Link href="/our-vendors/september/cards-by-meesh" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/cards-by-meesh/cards-by-meesh-logo.png"
              height={200}
              width={200}
              alt="Logo for Cards by Meesh"
            />
          </Link>
          <Link href="/our-vendors/september/coco-crafts" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/coco-crafts/coco-crafts-logo-new-pic.png"
              height={200}
              width={200}
              alt="Logo for coco crafts"
            />
          </Link>
          <Link href="/our-vendors/september/corina-kay-designs" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/corina-kay-designs/corina-kay-designs-pic-logo.png"
              height={200}
              width={200}
              alt="Logo for corina kay designs"
            />
          </Link>
          <Link href="/our-vendors/september/gemini-gems-ak" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/gemini-gems-ak/gemini-gems-ak-logo.png"
              height={200}
              width={200}
              alt="Logo for gemini gems ak"
            />
          </Link>
          <Link href="/our-vendors/september/plantern-glass-and-novelty" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/plantern-glass-and-novelty/plantern-glass-and-novelty-logo-img.png"
              height={200}
              width={200}
              alt="Logo for plantern glass and novelty"
            />
          </Link>
          <Link href="/our-vendors/september/red-sunset-designs" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/red-sunset-designs/red-sunset-designs-logo.jpg"
              height={200}
              width={200}
              alt="Logo for red sunset designs"
            />
          </Link>
          <Link href="/our-vendors/september/shiki-clay" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/shiki-clay/shiki-clay-logo.png"
              height={200}
              width={200}
              alt="Logo for shiki clay"
            />
          </Link>
          <Link href="/our-vendors/september/way-cool-stuff" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/way-cool-stuff/way-cool-stuff-logo-pic.jpeg"
              height={200}
              width={200}
              alt="Logo for way cool stuff"
            />
          </Link>
          <Link href="/our-vendors/september/sugarcane-beauty" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/sugarcane-beauty/sugarcane-beauty-logo.png"
              height={200}
              width={200}
              alt="Logo for sugarcane beauty"
            />
          </Link>
          <Link href="/our-vendors/september/the-forest-blues" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/the-forest-blues/the-forest-blues-logo.jpg"
              height={200}
              width={200}
              alt="Logo for the forest blues"
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
          <a href="https://www.etsy.com/shop/crabfruitco/?etsrc=sdt" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/crab-fruit-co-logo.webp"
              height={200}
              width={200}
              alt="logo for crabfruit co"
            />
          </a>
          <a href="https://www.facebook.com/Happicraft.shop" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/happicraft-logo.jpg"
              height={200}
              width={200}
              alt="logo for happicraft"
            />
          </a>
          <a href="https://www.instagram.com/thelotuscreations23/?hl=en" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/lotus-creations-logo.jpg"
              height={200}
              width={200}
              alt="logo for lotus creations"
            />
          </a>
          <a href="https://www.etsy.com/shop/FabledEarthArt" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/fabled-earth-art-logo.png"
              height={200}
              width={200}
              alt="logo for fabled earth art"
            />
          </a>
          <a href="https://www.instagram.com/naked.novels" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/naked-novels-logo.jpg"
              height={200}
              width={200}
              alt="logo for naked novels"
            />
          </a>
          <a href="https://www.instagram.com/goa.col" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/goa-logo.jpg"
              height={200}
              width={200}
              alt="logo for goa"
            />
          </a>
          <a href="https://mudd-n-play.com/" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/mudd-n-play-logo.png"
              height={200}
              width={200}
              alt="logo for mudd n play"
            />
          </a>
          <a href="https://megansjohnston.com/" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/megan-johnstons-art-logo.png"
              height={200}
              width={200}
              alt="logo for megan johnstons art"
            />
          </a>
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
              src="/images/vendors/logos/house-of-aromamama-logo.png"
              height={200}
              width={200}
              alt="logo for house of aromamama"
            />
          </div>
          <div className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/logos/marks-smokehouse-logo.png"
              height={200}
              width={200}
              alt="logo for marks smokehouse"
            />
          </div>
        </div>

        <div className="md:pt-[4rem] pt-[2rem] md:pb-[4rem] pb-[2rem]"><Spacer /></div>
        <div className="bg-orange-100 dark:text-black rounded flex mx-auto xl:w-[100%] mt-[1rem] mb-[1rem] max-w-[800px]">
          <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
            <p className="text-[1.5rem] leading-8">Sept</p>
            <p className="text-[3rem] leading-8">07</p>
          </div>
          <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
            <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://www.facebook.com/events/389093040648146?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22calendar_going_events_unit%22%2C%22surface%22%3A%22bookmark_calendar%22%7D]%2C%22ref_notif_type%22%3Anull%7D" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
            <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240907T170000Z%2F20240907T230000Z&details=Shopping%20at%20the%20Northwest%20Handmade%20Market&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&text=Northwest%20Handmade%20Market%20Show%20-%20September%207th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Google</a>
            <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.live.com/calendar/0/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-09-07T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-09-07T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20September%207th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Outlook</a>
            <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.office.com/calendar/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-09-07T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-09-07T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20September%207th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Office</a>
            <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.yahoo.com/?desc=Shopping%20at%20the%20Northwest%20Handmade%20Market&dur=&et=20240907T230000Z&in_loc=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&st=20240907T170000Z&title=Northwest%20Handmade%20Market%20Show%20-%20September%207th%202024&v=60" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Yahoo</a>
            <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/1mJZo6XHKowtgZQ0kYx56NsziTs6_jVvA/view?usp=drive_link" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
          </div>
        </div>
      </div>
    )
  }