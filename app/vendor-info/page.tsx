import { Spacer } from "@/components/spacer"
import { ZoomImage } from "@/components/image-zoom"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Vendor Information</h1>
      <p className="mb-[2rem] max-w-[1000px] mx-auto">
        <span className="text-[#bc5738]">**Important**</span> Please be sure to take these steps prior to purchasing booth space.
      </p>
      <div className="flex flex-col max-w-[1000px] mx-auto">
          <div className="flex justify-between items-center border border-[#bc5738]">
            <p className="p-[.5rem] min-w-[10%] text-center"><span className="hidden sm:block">Step</span> 1</p>
            <span className="min-w-[90%] text-[1.1rem] sm:text-[1.5rem] p-[.5rem] border-l border-[#bc5738]">Read through the vendor guidelines below to see if Northwest Handmade Market is a good fit for you.</span>
          </div>
          <div className="flex justify-between items-center border border-[#bc5738] mt-[-1px] mb-[-1px]">
            <p className="p-[.5rem] min-w-[10%] text-center"><span className="hidden sm:block">Step</span> 2</p>
            <span className="min-w-[90%] text-[1.1rem] sm:text-[1.5rem] p-[.5rem] border-l border-[#bc5738]">Download the vendor contract. Review, initial and sign it and send it back to <a href="mailto:northwesthandmademarket@gmail.com">northwesthandmademarket@gmail.com</a>. It doesn&apos;t need to be scanned if you don&apos;t have a scanner. A photo works just fine.</span>
          </div>
          <div className="flex justify-between items-center border border-[#bc5738] mb-[-1px]">
            <p className="p-[.5rem] min-w-[10%] text-center"><span className="hidden sm:block">Step</span> 3</p>
            <span className="min-w-[90%] text-[1.1rem] sm:text-[1.5rem] p-[.5rem] border-l border-[#bc5738]">You&apos;ll receive the go-ahead from either Becky or Zack letting you know you&apos;ve been approved. We don&apos;t charge for applications and this is not a juried show. We just want to make sure you will be a good fit for the market we are trying to create.</span>
          </div>
          <div className="flex justify-between items-center border border-[#bc5738]">
            <p className="p-[.5rem] min-w-[10%] text-center"><span className="hidden sm:block">Step</span> 4</p>
            <span className="min-w-[90%] text-[1.1rem] sm:text-[1.5rem] p-[.5rem] border-l border-[#bc5738]">After purchasing a space we will ask you to send photos that will help represent your business on our website.</span>
          </div>
        </div>
        <div className="md:pt-[4rem] pt-[2rem] md:pb-[4rem] pb-[2rem]"><Spacer /></div>
        <div>
          <h2 className="text-[2rem]">Vendor Guidelines</h2>
          <ul>
            <li className="mb-[1rem] ml-[2rem] leading-tight">No sales of intellectual property that you do not own (Disney, Coca-Cola, etc…).</li>
            <li className="mb-[1rem] ml-[2rem] leading-tight">No Reselling. We want to offer handmade crafts and food only.</li>
            <li className="mb-[1rem] ml-[2rem] leading-tight">No drama please. We want to build a community of sellers that support each other. Please feel free to notify Becky or Zack if someone is making you feel unsafe or uncomfortable.</li>
            <li className="mb-[1rem] ml-[2rem] leading-tight">We will not charge for applications but we will want to see examples of your products to see if it will be a good fit for our shows.</li>
          </ul>
        </div>
        <div className="md:pt-[4rem] pt-[2rem] md:pb-[4rem] pb-[2rem]"><Spacer /></div>
        <div className="grid grid-cols-1 md:grid-cols-3 mb-[2rem]">
          <div className="flex flex-col justify-start items-center">
            <h2 className="text-[2rem] md:mb-[1rem] text-center">Vendor Contract</h2>
            <a className="border border-[#ff8f6d] text-[1.3rem] p-[.5rem]" href="https://drive.google.com/file/d/1Tto0xRNIQtW5IEb-PZyYgQpKklNO2Vd9/view?usp=drive_link" target="_blank">Download Contract</a>
          </div>
          <div className="flex flex-col justify-start items-center my-[1rem] md:my-0">
            <h2 className="text-[2rem] text-center">Booth Fees 2024</h2>
            <p className="text-center">7&apos; x 5&apos; -- $50</p>
            <p className="text-center">8&apos; x 8.5&apos; -- $70</p>
          </div>
          <div className="flex flex-col justify-start items-center">
            <h2 className="text-[2rem] md:mb-[1rem] text-center">Purchase Space</h2>
            <a className="border border-[#ff8f6d] text-[1.3rem] p-[.5rem]" href="https://northwest-handmade-market.square.site/" target="_blank">Purchase Booths</a>
          </div>
        </div>
        <div className="flex justify-center gap-6">
          <div>
            <span>Numbered Map</span>
            <ZoomImage src="/images/upgraded-numbered.png" alt="graphical image of vendor spots and associated numbers" />
          </div>
          
          <div>
            <span>Booth Measurements</span>
            <ZoomImage src="/images/upgraded-measured.png" alt="graphical image of vendor spots and associated measurements" />
          </div>
        </div>
        <div className="md:pt-[4rem] pt-[2rem] md:pb-[4rem] pb-[2rem]"><Spacer /></div>
        <h2 className="text-[2rem]">Join the Group!</h2>
        <p className="pb-[1rem]">Most of the communication for vendors as a group will be done through the Facebook vendors page. Please join the group if you are a vendor or interested in becoming a vendor.</p>
        <div className="flex flex-col items-center">
          <a className="border border-[#ff8f6d] text-[1.3rem] p-[.5rem]" href="https://www.facebook.com/groups/1488742601671338" target="_blank">Facebook Vendor Group</a>
        </div>
        <div className="md:pt-[4rem] pt-[2rem] md:pb-[4rem] pb-[2rem]"><Spacer /></div>
        <h2 className="text-[2rem]">FAQ</h2>
        <div className="text-[1.4rem] text-left">
        <div className="font-bold">What are the show dates for 2024?</div>
          <div className="pl-[1rem] pb-[1rem]">
          <p>05/25/2024</p>
          <p>06/15/2024</p>
          <p>07/06/2024</p>
          <p>08/03/2024</p>
          <p>09/07/2024</p>
          <p>10/05/2024</p>
          <p>11/02/2024</p>
          </div>

          <div className="font-bold">What can I expect in regards to parking?</div>
          <div className="pl-[1rem] pb-[1rem]">There is a parking lot right next to the lodge with about 10-15 spots for $2/ hour. In the early morning I imagine there will be ample street parking available as well. If you&apos;re able we would ask that once you are unloaded please move your vehicle a block or two to give customers more parking near the lodge.</div>

          <div className="font-bold">Is electricity available?</div>
          <div className="pl-[1rem] pb-[1rem]">There are four outlets toward the center of each wall. If you would like to use electricity you would need to purchase one of the larger booths toward the center of the wall. We want to be sure that no tripping hazards are created so please work carefully not to leave loose chords or impede on another vendor&apos;s area.</div>
          
          <div className="font-bold">What kind of traffic do you anticipate?</div>
          <div className="pl-[1rem] pb-[1rem]">Since this is our very first year we aren&apos;t able to know for sure but I can tell you what we will be doing to get people in the door. The lodge is in downtown Edmonds which gets a ton of foot traffic but we are also doing our best to market the event. Here&apos;s what we&apos;re doing:
            <ul>
              <li className="mb-[1rem] ml-[2rem] leading-tight">Adding the event to at least 30 online spots (including local online papers, Nextdoor, Craigslist, and event websites like Edmonds Downtown Alliance, and Best Things WA).</li>
              <li className="mb-[1rem] ml-[2rem] leading-tight">I am a part of local groups where I&apos;ll be sharing each show.</li>
              <li className="mb-[1rem] ml-[2rem] leading-tight">Paid Facebook ads will run 6 weeks prior to each show.</li>
              <li className="mb-[1rem] ml-[2rem] leading-tight">The Edmonds Masonic Lodge has offered to also feature our show on their website.</li>
              <li className="mb-[1rem] ml-[2rem] leading-tight">We are posting lawn signs around the area advertising the show.</li>
              <li className="mb-[1rem] ml-[2rem] leading-tight">We&apos;re making flyers and magnets to hand out and post at local establishments.</li>
              <li className="mb-[1rem] ml-[2rem] leading-tight">We have a free raffle with each show. The most entries are given to people who come in and enter. The prize is a $50 gift card to Crow (a shop that sells goods from local artists that is just down the road from our show).</li>
              <li className="mb-[1rem] ml-[2rem] leading-tight">We plan to have a banner hung at the Masonic Lodge advertising a week in advance as well as a bi-fold outside the day of the show.</li>
            </ul> 
          </div>

          <div className="font-bold">Are you monitoring how much of a particular item is sold at an event?</div>
          <div className="pl-[1rem] pb-[1rem]">We&apos;re allowing 2 of each category and a max of 4 jewelry vendors with an attempt to make sure they are of varying styles. When we are full for a particular item I will post it on the group page so please check there prior to signing up.</div>

          <div className="font-bold">How long will it take to get approved?</div>
          <div className="pl-[1rem] pb-[1rem]">Approvals will typically happen on the same day. Zack and I work Monday - Friday so on those days it will likely be in the afternoons.</div>

          <div className="font-bold">What is considered handmade?</div>
          <div className="pl-[1rem] pb-[1rem]">Anything you make using your own two hands. It could be beaded jewelry or food or digital art. I love Scentsy, Color Street, and other vendors like that, but we are just going for a handmade vibe for now.</div>

          <div className="font-bold">How much time will we have for setup and take-down?</div>
          <div className="pl-[1rem] pb-[1rem]">We have the space from 8am to 6pm. The show runs from 10am - 4pm. Zack and I need some time to tape off the spots in the morning so we ask that you start setting up at 8:30am. You&apos;re welcome to get a head start and haul your stuff in as long as it&apos;s out of the way of where we are putting tape.</div>

          <div className="font-bold">Can I sign up for more than one show?</div>
          <div className="pl-[1rem] pb-[1rem]">Yes! You can sign up for one show or every show. You can also purchase multiple spots if you need more room.</div>

          <div className="font-bold">Will we need to bring our own tables and chairs?</div>
          <div className="pl-[1rem] pb-[1rem]">Yes, we ask that you bring your own.</div>
        </div>
    </div>
  )
}
