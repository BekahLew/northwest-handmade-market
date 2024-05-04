import { Spacer } from "@/components/spacer"
import Link from "next/link"
import styles from 'styles/VendorsOverview.module.css'
import Image from 'next/image'
import { Facebook, CalendarHeart } from "lucide-react"

export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
        <Link href="/our-vendors" className="mb-[2rem] max-w-[1000px] mx-auto">&larr; Back to Our Vendors</Link>
        <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">November Vendors</h1>
        <div className="text-center">
          <p className="mt-[.5rem] mb-[1rem]">Coming soon! We&apos;re getting vendors signed up for the show.</p>
          <p className="mt-[.5rem] mb-[1rem]">In the meantime, please RSVP to the event so you don&apos;t miss it.</p>
            
          <div className="bg-orange-100 dark:text-black rounded flex mx-auto md:max-w-[800px] lg:xl:max-w-[100%] xl:w-[100%] mt-[1rem] mb-[1rem]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">Nov</p>
              <p className="text-[3rem] leading-8">02</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://www.facebook.com/events/7663982810288696?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22calendar_going_events_unit%22%2C%22surface%22%3A%22bookmark_calendar%22%7D]%2C%22ref_notif_type%22%3Anull%7D" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20241102T170000Z%2F20241102T230000Z&details=Shopping%20at%20the%20Northwest%20Handmade%20Market&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&text=Northwest%20Handmade%20Market%20Show%20-%20November%202nd%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Google</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.live.com/calendar/0/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-11-02T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-11-02T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20November%202nd%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Outlook</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.office.com/calendar/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-11-02T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-11-02T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20November%202nd%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Office</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.yahoo.com/?desc=Shopping%20at%20the%20Northwest%20Handmade%20Market&dur=&et=20241102T230000Z&in_loc=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&st=20241102T170000Z&title=Northwest%20Handmade%20Market%20Show%20-%20November%202nd%202024&v=60" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Yahoo</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/1QGScmz4_xTJv4zrJGaiXO516Us-vix48/view?usp=drive_link" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
            </div>
          </div>
        </div>
      </div>
    )
  }