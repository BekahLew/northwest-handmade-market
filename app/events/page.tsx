import { Facebook, CalendarHeart } from "lucide-react"
import Link from "next/link"

export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] md:pr-20 md:pl-20 max-w-[2000px] mx-auto">
        <div className="max-w-[1200px] text-center mx-auto mt-5 mb-8 md:grid md:grid-cols-2 gap-[2rem]">
          <div>
            <h1 className="text-[2rem]">Mark your Calendar!</h1>
            <p className="mb-[1.3rem]">The Northwest Handmade market is something you don&apos;t want to miss. Each show will feature artists from your town. Come by and sample some delicious food, find a gift or a special keepsake. You could also <a href="/raffle" className="dark:text-[#ff8f6d] text-[#a12701]" target="_blank">win a $50 gift card</a> to Crow at each show!</p>
            <a className="text-[1.3rem] border border-color-[#ff8f6d] p-[.5rem]" href="https://drive.google.com/file/d/1BzuDPLxsMRCRhYXMwX0uEygsmsIPFHwn/view?usp=drive_link" target="_blank"> Download Calendar File for All Shows</a>
          </div>
          <div>
            <h2 className="text-[2rem]">Directions</h2>
            <p>The 2024 Northwest Handmade Market will be held at the Edmonds Masonic Center</p>
            <p>515 Dayton St,</p>
            <p>Edmonds, WA 98020</p>
            <div className="grid grid-cols-2">
                <a className="border border-[#ff8f6d] m-[1rem] text-[1.3rem]" href="https://maps.app.goo.gl/H2AgnxAHz71qWVkX8" target="_blank">Google Maps</a>
                <a className="border border-[#ff8f6d] m-[1rem] text-[1.3rem]" href="https://maps.apple.com/?address=515%20Dayton%20St,%20Edmonds,%20WA%20%2098020,%20United%20States&auid=1014986215964303287&ll=47.809943,-122.376784&lsp=9902&q=Edmonds%20Masonic%20Center&_ext=CjMKBQgEEOIBCgQIBRADCgUIBhCfAwoECAoQAAoECFIQAwoECFUQEAoECFkQAwoFCKQBEAESJim5JBgJGedHQDFaqEXMiphewDk3+j1lP+hHQEFMLaalr5dewFAE" target="_blank">Apple Maps</a>
            </div>
          </div>
        </div>
        <div className="gap-6 xl:grid xl:grid-cols-2 mt-[3rem]">
          <div className="bg-orange-100 dark:text-black rounded flex mb-[1.5rem] mx-auto md:max-w-[800px] xl:max-w-[100%] xl:w-[100%]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">May</p>
              <p className="text-[3rem] leading-8">25</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="#" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240525T170000Z%2F20240525T230000Z&details=Shopping%20at%20the%20Northwest%20Handmade%20Market&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&text=Northwest%20Handmade%20Market%20Show%20-%20May%2025th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Google</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.live.com/calendar/0/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-05-25T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-05-25T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20May%2025th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Outlook</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.office.com/calendar/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-05-25T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-05-25T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20May%2025th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Office</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.yahoo.com/?desc=Shopping%20at%20the%20Northwest%20Handmade%20Market&dur=&et=20240525T230000Z&in_loc=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&st=20240525T170000Z&title=Northwest%20Handmade%20Market%20Show%20-%20May%2025th%202024&v=60" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Yahoo</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/1cXaW66-fjeosCEVCUPC4CPXYMaTqGSBl/view?usp=drive_link" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
            </div>
          </div>

          <div className="bg-orange-100 dark:text-black rounded flex mb-[1.5rem] mx-auto md:max-w-[800px] lg:xl:max-w-[100%] xl:w-[100%]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">June</p>
              <p className="text-[3rem] leading-8">15</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="#" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240615T170000Z%2F20240615T230000Z&details=Shopping%20at%20the%20Northwest%20Handmade%20Market&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&text=Northwest%20Handmade%20Market%20Show%20-%20June%2015th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Google</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.live.com/calendar/0/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-06-15T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-06-15T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20June%2015th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Outlook</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.office.com/calendar/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-06-15T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-06-15T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20June%2015th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Office</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.yahoo.com/?desc=Shopping%20at%20the%20Northwest%20Handmade%20Market&dur=&et=20240615T230000Z&in_loc=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&st=20240615T170000Z&title=Northwest%20Handmade%20Market%20Show%20-%20June%2015th%202024&v=60" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Yahoo</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/1Tx8SUQcrRqJ3CQ8xYo2bXAjhkgIMuNSx/view?usp=drive_link" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
            </div>
          </div>

          <div className="bg-orange-100 dark:text-black rounded flex mb-[1.5rem] mx-auto md:max-w-[800px] lg:xl:max-w-[100%] xl:w-[100%]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">July</p>
              <p className="text-[3rem] leading-8">06</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="#" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240706T170000Z%2F20240706T230000Z&details=Shopping%20at%20the%20Northwest%20Handmade%20Market&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&text=Northwest%20Handmade%20Market%20Show%20-%20July%206th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Google</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.live.com/calendar/0/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-07-06T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-07-06T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20July%206th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Outlook</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.office.com/calendar/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-07-06T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-07-06T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20July%206th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Office</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.yahoo.com/?desc=Shopping%20at%20the%20Northwest%20Handmade%20Market&dur=&et=20240706T230000Z&in_loc=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&st=20240706T170000Z&title=Northwest%20Handmade%20Market%20Show%20-%20July%206th%202024&v=60" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Yahoo</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/1393dKsEiREDLvCeI8w-qLaA3A7jfoVBz/view?usp=drive_link" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
            </div>
          </div>

          <div className="bg-orange-100 dark:text-black rounded flex mb-[1.5rem] mx-auto md:max-w-[800px] lg:xl:max-w-[100%] xl:w-[100%]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">Aug</p>
              <p className="text-[3rem] leading-8">03</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="#" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240803T170000Z%2F20240803T230000Z&details=Shopping%20at%20the%20Northwest%20Handmade%20Market&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&text=Northwest%20Handmade%20Market%20Show%20-%20August%203rd%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Google</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.live.com/calendar/0/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-08-03T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-08-03T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20August%203rd%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Outlook</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.office.com/calendar/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-08-03T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-08-03T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20August%203rd%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Office</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.yahoo.com/?desc=Shopping%20at%20the%20Northwest%20Handmade%20Market&dur=&et=20240803T230000Z&in_loc=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&st=20240803T170000Z&title=Northwest%20Handmade%20Market%20Show%20-%20August%203rd%202024&v=60" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Yahoo</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/1c2rkLQRerCw58wKINpCVgfETmwg_BZRG/view?usp=drive_link" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
            </div>
          </div>

          <div className="bg-orange-100 dark:text-black rounded flex mb-[1.5rem] mx-auto md:max-w-[800px] lg:xl:max-w-[100%] xl:w-[100%]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">Sept</p>
              <p className="text-[3rem] leading-8">07</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="#" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240907T170000Z%2F20240907T230000Z&details=Shopping%20at%20the%20Northwest%20Handmade%20Market&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&text=Northwest%20Handmade%20Market%20Show%20-%20September%207th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Google</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.live.com/calendar/0/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-09-07T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-09-07T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20September%207th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Outlook</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.office.com/calendar/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-09-07T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-09-07T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20September%207th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Office</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.yahoo.com/?desc=Shopping%20at%20the%20Northwest%20Handmade%20Market&dur=&et=20240907T230000Z&in_loc=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&st=20240907T170000Z&title=Northwest%20Handmade%20Market%20Show%20-%20September%207th%202024&v=60" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Yahoo</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/1mJZo6XHKowtgZQ0kYx56NsziTs6_jVvA/view?usp=drive_link" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
            </div>
          </div>

          <div className="bg-orange-100 dark:text-black rounded flex mb-[1.5rem] mx-auto md:max-w-[800px] lg:xl:max-w-[100%] xl:w-[100%]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">Oct</p>
              <p className="text-[3rem] leading-8">05</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="#" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20241005T170000Z%2F20241005T230000Z&details=Shopping%20at%20the%20Northwest%20Handmade%20Market&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&text=Northwest%20Handmade%20Market%20Show%20-%20October%205th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Google</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.live.com/calendar/0/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-10-05T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-10-05T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20October%205th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Outlook</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://outlook.office.com/calendar/action/compose?allday=false&body=Shopping%20at%20the%20Northwest%20Handmade%20Market&enddt=2024-10-05T23%3A00%3A00%2B00%3A00&location=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-10-05T17%3A00%3A00%2B00%3A00&subject=Northwest%20Handmade%20Market%20Show%20-%20October%205th%202024" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Office</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://calendar.yahoo.com/?desc=Shopping%20at%20the%20Northwest%20Handmade%20Market&dur=&et=20241005T230000Z&in_loc=515%20Dayton%20St%2C%20Edmonds%2C%20WA%2098020&st=20241005T170000Z&title=Northwest%20Handmade%20Market%20Show%20-%20October%205th%202024&v=60" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />Yahoo</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/1LcNE4VM-FVar7PnjsX3nsPKK5al-jWL3/view?usp=drive_link" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
            </div>
          </div>

          <div className="bg-orange-100 dark:text-black rounded flex mb-[1.5rem] mx-auto md:max-w-[800px] lg:xl:max-w-[100%] xl:w-[100%]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">Nov</p>
              <p className="text-[3rem] leading-8">02</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="#" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
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
  