import { Facebook, CalendarHeart } from "lucide-react"

export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] md:pr-20 md:pl-20 max-w-[2000px] mx-auto">
        <div className="max-w-[1200px] text-center mx-auto mt-5 mb-8 md:grid md:grid-cols-2 gap-[2rem]">
          <div>
            <h1 className="text-[2rem]">Mark your Calendar!</h1>
            <p className="mb-[1.3rem]">The Northwest Handmade market is something you don&apos;t want to miss. Each show will feature artists from your town. Come by and sample some delicious food, find a gift or a special keepsake. You could also <a href="/raffle" className="dark:text-[#ff8f6d] text-[#a12701]" target="_blank">win a $50 gift card</a> to Crow at each show!</p>
            <a className="text-[1.3rem] border border-color-[#ff8f6d] p-[.5rem]" href="https://drive.google.com/file/d/1JOr_jC0qcdXSWjkfDZLMPYInwOSJmDS9/view?usp=sharing" target="_blank"> Download Calendar File for All Shows</a>
          </div>
          <div>
            <h2 className="text-[2rem]">Directions</h2>
            <p>The 2025 Northwest Handmade Market will be held at the Edmonds Masonic Center</p>
            <p>515 Dayton St,</p>
            <p>Edmonds, WA 98020</p>
            <div className="grid grid-cols-2">
                <a className="border border-[#ff8f6d] m-[1rem] text-[1.3rem]" href="https://maps.app.goo.gl/H2AgnxAHz71qWVkX8" target="_blank">Google Maps</a>
                <a className="border border-[#ff8f6d] m-[1rem] text-[1.3rem]" href="https://maps.apple.com/?address=515%20Dayton%20St,%20Edmonds,%20WA%20%2098020,%20United%20States&auid=1014986215964303287&ll=47.809943,-122.376784&lsp=9902&q=Edmonds%20Masonic%20Center&_ext=CjMKBQgEEOIBCgQIBRADCgUIBhCfAwoECAoQAAoECFIQAwoECFUQEAoECFkQAwoFCKQBEAESJim5JBgJGedHQDFaqEXMiphewDk3+j1lP+hHQEFMLaalr5dewFAE" target="_blank">Apple Maps</a>
            </div>
          </div>
        </div>
        <div className="gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-[3rem]">
          <div className="bg-orange-50 dark:text-black rounded flex mb-[1.5rem] mx-auto md:max-w-[800px] xl:max-w-[100%] xl:w-[100%]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">May</p>
              <p className="text-[3rem] leading-8">31</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://www.facebook.com/share/163uEfrZTe/" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/1X89q243D3uk_YwoeYGlvupHSJfnUQWA6/view?usp=sharing" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
            </div>
          </div>

          <div className="bg-orange-50 dark:text-black rounded flex mb-[1.5rem] mx-auto md:max-w-[800px] lg:xl:max-w-[100%] xl:w-[100%]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">June</p>
              <p className="text-[3rem] leading-8">28</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://www.facebook.com/share/14ud4bhBLz/" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/1GBbXGHFt23sfKo0VK45MNs9qbBX8QRly/view?usp=sharing" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
            </div>
          </div>

          <div className="bg-orange-50 dark:text-black rounded flex mb-[1.5rem] mx-auto md:max-w-[800px] lg:xl:max-w-[100%] xl:w-[100%]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">July</p>
              <p className="text-[3rem] leading-8">26</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://www.facebook.com/share/15GVykGqtR/" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/1_LJGnavh-UHc1JVKHg60oqq1vrR46_Vs/view?usp=sharing" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
            </div>
          </div>

          <div className="bg-orange-50 dark:text-black rounded flex mb-[1.5rem] mx-auto md:max-w-[800px] lg:xl:max-w-[100%] xl:w-[100%]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">Aug</p>
              <p className="text-[3rem] leading-8">23</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://www.facebook.com/share/1KnNctDpFp/" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/1LeoHaA4jewImWLjkak65TDXPvn6hu8KD/view?usp=sharing" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
            </div>
          </div>

          <div className="bg-orange-50 dark:text-black rounded flex mb-[1.5rem] mx-auto md:max-w-[800px] lg:xl:max-w-[100%] xl:w-[100%]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">Sept</p>
              <p className="text-[3rem] leading-8">27</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://www.facebook.com/share/1DzUS2RTYK/" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/1lieSfQJmdsWrVdQl8nhNUHv2PlVR1AzV/view?usp=sharing" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
            </div>
          </div>

          <div className="bg-orange-50 dark:text-black rounded flex mb-[1.5rem] mx-auto md:max-w-[800px] lg:xl:max-w-[100%] xl:w-[100%]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">Oct</p>
              <p className="text-[3rem] leading-8">25</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://www.facebook.com/share/15xnGtYQz5/" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/16b3iDD2okwlG1I9yQxXRi49uM04X4pV7/view?usp=sharing" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
            </div>
          </div>

          <div className="bg-orange-50 dark:text-black rounded flex mb-[1.5rem] mx-auto md:max-w-[800px] lg:xl:max-w-[100%] xl:w-[100%]">
            <div className="w-[6.5rem] flex flex-col justify-center bg-[#BC5738] text-center pt-[.5rem] px-[.5rem] sm:px-[1.5rem] pb-[1rem] rounded-l-sm">
              <p className="text-[1.5rem] leading-8">Nov</p>
              <p className="text-[3rem] leading-8">08</p>
            </div>
            <div className="flex justify-evenly my-[.5rem] flex-wrap w-[100%] mx-auto">
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://www.facebook.com/share/18eavuBHF6/" target="_blank"><Facebook size={48} strokeWidth={1.25} />RSVP</a>
              <a className="flex justify-center flex-col text-center flex-wrap content-center min-w-[5rem]" href="https://drive.google.com/file/d/1dpNqQaPXN9HPfILjldSsbrntdiQdo7S7/view?usp=sharing" target="_blank" rel="noopener"><CalendarHeart size={48} strokeWidth={1.25} />ICS File</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  