import { getVendorOverviewPages } from "@/sanity/schemas/sanity-utils"

export default async function Page() {
    const vendorOverviewPages = await getVendorOverviewPages();

  return (
    <>
      Vendor Overview
      {vendorOverviewPages.map((vendorOverviewPage) => ( 
        <div key={vendorOverviewPage._id}>
          {vendorOverviewPage.title}
        </div>
      ))}
    </>
  )
}
