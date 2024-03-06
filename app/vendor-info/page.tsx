import { Spacer } from "@/components/spacer"
import Link from "next/link"
import { ZoomImage } from "@/components/image-zoom"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <h1 className="font-Forum text-[2.5rem] md:text-6xl pb-[2rem] text-center">Vendor Information</h1>
      <p className="mb-[2rem]">
        <span className="text-[#bc5738]">**Important**</span> Please be sure to take these steps prior to purchasing booth space.
      </p>
      <div className="flex flex-col">
          <div className="flex justify-between items-center border border-[#bc5738]">
            <p className="p-[.5rem] min-w-[10%] text-center">Step 1</p>
            <span className="min-w-[90%] text-[1.5rem] p-[.5rem] border-l border-[#bc5738]">Read through the vendor guidelines below to see if Northwest Handmade Market is a good fit for you.</span>
          </div>
          <div className="flex justify-between items-center border border-[#bc5738] mt-[-1px] mb-[-1px]">
            <p className="p-[.5rem] min-w-[10%] text-center">Step 2</p>
            <span className="min-w-[90%] text-[1.5rem] p-[.5rem] border-l border-[#bc5738]">Download the vendor contract. Review, initial and sign it and send it back to northwesthandmademarket@gmail.com. It doesn&apos;t need to be scanned if you don&apos;t have a scanner. A photo works just fine.</span>
          </div>
          <div className="flex justify-between items-center border border-[#bc5738]">
            <p className="p-[.5rem] min-w-[10%] text-center">Step 3</p>
            <span className="min-w-[90%] text-[1.5rem] p-[.5rem] border-l border-[#bc5738]">You&apos;ll receive the go-ahead from either Becky or Zack letting you know you&apos;ve been approved. We don&apos;t charge for applications and this is not a juried show. We just want to make sure you will be a good fit for the market we are trying to create.</span>
          </div>
          <div className="flex justify-between items-center border border-[#bc5738]">
            <p className="p-[.5rem] min-w-[10%] text-center">Step 4</p>
            <span className="min-w-[90%] text-[1.5rem] p-[.5rem] border-l border-[#bc5738]">After purchasing a space we will ask you to send photos that will help represent your business on our website.</span>
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
            <Link className="border border-[#ff8f6d] text-[1.3rem] p-[.5rem]" href="https://drive.google.com/file/d/1Tto0xRNIQtW5IEb-PZyYgQpKklNO2Vd9/view?usp=drive_link" target="_blank">Download Contract</Link>
          </div>
          <div className="flex flex-col justify-start items-center my-[1rem] md:my-0">
            <h2 className="text-[2rem] text-center">Booth Fees 2024</h2>
            <p className="text-center">6&apos; x 5&apos; -- $50</p>
            <p className="text-center">6&apos; x 8.5&apos; -- $70</p>
          </div>
          <div className="flex flex-col justify-start items-center">
            <h2 className="text-[2rem] md:mb-[1rem] text-center">Purchase Space</h2>
            <Link className="border border-[#ff8f6d] text-[1.3rem] p-[.5rem]" href="/purchase-booths" target="_blank">Purchase Booths</Link>
          </div>
        </div>
        <div className="flex justify-center gap-6">
          <div>
            <span>Numbered Map</span>
            <ZoomImage src="/images/vendor-map-numbers.png" alt="graphical image of vendor spots and associated numbers" />
          </div>
          
          <div>
            <span>Booth Measurements</span>
            <ZoomImage src="/images/vendor-map-sizes.png" alt="graphical image of vendor spots and associated measurements" />
          </div>
        </div>
    </div>
  )
}
