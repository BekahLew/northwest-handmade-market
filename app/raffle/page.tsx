import { Spacer } from "@/components/spacer"

export default async function Page() {
    return (
      <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[1000px] mx-auto mt-[2rem]">
        <h1 className="text-center text-[2.5rem] leading-9 mb-[1rem]">Northwest Handmade Market Raffle</h1>
        <h2 className="text-[2rem]">How to enter:</h2>
        <div className="flex flex-col max-w-[1000px] mx-auto">
          <div className="flex justify-between items-center border border-[#bc5738]">
            <p className="p-[.5rem] min-w-[78%] border-r border-[#bc5738]">Sign up, in-person, at the show (on the stage)</p>
            <span className="min-w-[22%] text-[1.5rem] text-center leading-6">1 entry</span>
          </div>
            <div className="pt-[1rem]">Note: Entries are now only taken from the signups in-person and will not be taken from event RSVP or comments. Please email us if you have any questions.</div>
        </div>
        <div className="md:pt-[4rem] pt-[2rem] md:pb-[4rem] pb-[2rem]"><Spacer /></div>
        <div>
          <h2 className="text-[2rem]">Contest Rules/ Details</h2>
          <p className="text-[1.2rem] pl-[1rem]">1. Must be a resident of the Northwest. This contest is for local contestants only.</p>
          <p className="text-[1.2rem] pl-[1rem]">2. If the winner is not reachable through facebook messenger, telephone or email within 10 days of the contest drawing there will be another drawing until a winner is successfully picked.</p>
          <p className="text-[1.2rem] pl-[1rem]">3. The prize is one gift card to the local Edmonds shop, Crow, for the amount of $50.</p>
          <p className="text-[1.2rem] pl-[1rem]">4. Gift card will be mailed out to the winner or available for pickup at one of our shows by Handmade Northwest Market.</p>
          <p className="text-[1.2rem] pl-[1rem]">5. No purchase necessary to enter.</p>
          <p className="text-[1.2rem] pl-[1rem]">6. We do not use your information in any way except for the raffle drawing. Data is protected and then destroyed after each drawing. We will not sell your data or use it for solicitation.</p>
        </div>
      </div>
    )
  }