import { Spacer } from "@/components/spacer"
import Link from "next/link"
import styles from 'styles/VendorsOverview.module.css'
import Image from 'next/image'
import { Facebook, CalendarHeart } from "lucide-react"

export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
        <Link href="/our-vendors" className="mb-[2rem] max-w-[1000px] mx-auto">&larr; Back to Our Vendors</Link>
        <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">October Vendors</h1>
        <div className={styles.vendors}>
        <Link href="/our-vendors/october/mieps-stitches" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/mieps-stitches/mieps-stitches-logo.png"
              height={200}
              width={200}
              alt="logo for mieps stitches"
            />
          </Link>
          <Link href="/our-vendors/october/sundrop-workshop" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/sundrop-workshop/sundrop-workshop-logo.jpg"
              height={200}
              width={200}
              alt="logo for sundrop workshop"
            />
          </Link>
          <Link href="/our-vendors/october/naterade-creates" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/naterade-creates/naterade-creates-logo.jpeg"
              height={200}
              width={200}
              alt="logo for naterade creates"
            />
          </Link>
          <Link href="/our-vendors/october/corina-kay-designs" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/corina-kay-designs/corina-kay-designs-pic-logo.png"
              height={200}
              width={200}
              alt="logo for corina kay designs"
            />
          </Link>
          <Link href="/our-vendors/october/zarqa-makes" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/zarqa-makes/zarqa-makes-logo.png"
              height={200}
              width={200}
              alt="logo for zarqa makes"
            />
          </Link>
          <Link href="/our-vendors/october/babaubles" className={styles.vendor + " bg-[#bc5738]"}>
              <Image
                src="/images/vendors/babaubles/babaubles-logo.png"
                height={200}
                width={200}
                alt="logo for babaubles"
              />
            </Link>
          <Link href="/our-vendors/october/taylors-creative-nook" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/taylors-creative-nook/taylors-creative-nook-logo.webp"
              height={200}
              width={200}
              alt="Logo for Taylor&apos;s Creative Nook"
            />
          </Link>
          <Link href="/our-vendors/october/leslie-sarah-designs" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/leslie-sarah-designs/leslie-sarah-designs-pic-logo.jpg"
              height={200}
              width={200}
              alt="logo for leslie sarah designs"
            />
          </Link>
          <Link href="/our-vendors/october/aromatic-creations" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/aromatic-creations/aromatic-creations-logo.png"
              height={200}
              width={200}
              alt="Logo for Aromatic Creations"
            />
          </Link>
          <Link href="/our-vendors/october/from-my-art" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/from-my-art/from-my-art-logo.jpg"
              height={200}
              width={200}
              alt="logo for from my art"
            />
          </Link>
          <Link href="/our-vendors/october/loving-home-crochet" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/loving-home-crochet/loving-home-crochet-logo.png"
              height={200}
              width={200}
              alt="Logo for loving home crochet"
            />
          </Link>
          <Link href="/our-vendors/october/elevar-sundry-company" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/elevar-sundry-company/elevar-sundry-company-logo.png"
              height={200}
              width={200}
              alt="Logo for elevar sundry company"
            />
          </Link>
          <Link href="/our-vendors/october/marisi-ceramics" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/marisi-ceramics/marisi-ceramics-logo.png"
              height={200}
              width={200}
              alt="Logo for Marisi Ceramics"
            />
          </Link>
          <Link href="/our-vendors/october/koala-creations" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/koala-creations/koala-creations-logo-pic.png"
              height={200}
              width={200}
              alt="logo for koala creations"
            />
          </Link>
          <Link href="/our-vendors/october/red-sunset-designs" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/red-sunset-designs/red-sunset-designs-logo.jpg"
              height={200}
              width={200}
              alt="Logo for Red Sunset Designs"
            />
          </Link>
          <Link href="/our-vendors/october/pilchuck-soap-company" className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/pilchuck-soap-company/pilchuck-soap-company-logo.png"
              height={200}
              width={200}
              alt="Logo for pilchuck soap company"
            />
          </Link>
          <a href="https://www.rainemakercreatives.com" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/rainemaker-creatives-logo.png"
              height={200}
              width={200}
              alt="logo for rainemaker creatives"
            />
          </a>
          <a href="https://wilderandjean.etsy.com" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/wilder-and-jean/wilder-and-jean.png"
              height={200}
              width={200}
              alt="logo for wilder and jean"
            />
          </a>
          <a href="https://cmjewelry.shop/" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/cm-jewelry-logo.png"
              height={200}
              width={200}
              alt="logo for CM Jewelry"
            />
          </a>
          <a href="https://pacificbloomstudio.com/" className={styles.vendor + " bg-[#000]"} target="_blank">
            <Image
              src="/images/vendors/logos/pacific-bloom-studio-logo.png"
              height={200}
              width={200}
              alt="logo for pacific bloom studio"
            />
          </a>
          <a href="https://olecalcustomcreations.com/" className={styles.vendor + " bg-[#000]"} target="_blank">
            <Image
              src="/images/vendors/logos/olecal-custom-creations-logo.png"
              height={200}
              width={200}
              alt="logo for olecal custom creations"
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
          <a href="https://www.instagram.com/createdbyqualley" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/qualley-logo.png"
              height={200}
              width={200}
              alt="logo for created by qualley"
            />
          </a>
          <a href="https://www.goblin-spleen.com/" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/logos/goblin-spleen-logo.png"
              height={200}
              width={200}
              alt="logo for goblin spleen"
            />
          </a>
          <a href="https://wellrooted.net/" className={styles.vendor + " bg-[#bc5738]"} target="_blank">
            <Image
              src="/images/vendors/well-rooted/well-rooted-logo.jpg"
              height={200}
              width={200}
              alt="logo for well rooted"
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
              src="/images/vendors/logos/marks-smokehouse-logo.png"
              height={200}
              width={200}
              alt="logo for marks smokehouse"
            />
          </div>
          <div className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/logos/zunzun-logo.png"
              height={200}
              width={200}
              alt="logo for zunzun"
            />
          </div>
          <div className={styles.vendor + " bg-[#bc5738]"}>
            <Image
              src="/images/vendors/logos/griffith-works-logo.png"
              height={200}
              width={200}
              alt="logo for griffith works"
            />
          </div>
        </div>

        <div className="md:pt-[4rem] pt-[2rem] md:pb-[4rem] pb-[2rem]"><Spacer /></div>

        <div className="text-center">
          <div className="bg-orange-100 dark:text-black rounded flex mx-auto xl:w-[100%] mt-[1rem] mb-[1rem] max-w-[800px]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">Oct</p>
              <p className="text-[3rem] leading-8">05</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://www.facebook.com/events/947909010055344?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22calendar_going_events_unit%22%2C%22surface%22%3A%22bookmark_calendar%22%7D]%2C%22ref_notif_type%22%3Anull%7D" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20241005T170000Z%2F20241005T230000Z&details=Shopping%20at%20the%20Northwest%20Handmade%20Market&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&text=Northwest%20Handmade%20Market%20Show%20-%20October%205th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Google</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.live.com/calendar/0/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-10-05T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-10-05T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20October%205th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Outlook</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.office.com/calendar/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-10-05T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-10-05T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20October%205th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Office</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.yahoo.com/?desc=Shopping%20at%20the%20Northwest%20Handmade%20Market&dur=&et=20241005T230000Z&in_loc=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&st=20241005T170000Z&title=Northwest%20Handmade%20Market%20Show%20-%20October%205th%202024&v=60" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Yahoo</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/1LcNE4VM-FVar7PnjsX3nsPKK5al-jWL3/view?usp=drive_link" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
            </div>
          </div>
        </div>
      </div>
    )
  }