import Link from "next/link"
import styles from "../styles/vendor-contract.module.css"

export default async function Page() {
  return (
    <div className="pr-[1rem] pl-[1rem] sm:pr-20 sm:pl-20 max-w-[2000px] mx-auto mt-[2rem]">
      <Link href="/vendor-info" className="mb-[2rem] max-w-[1000px] mx-auto">
        &larr; Back to Vendor Info
      </Link>
      <h1 className="font-Forum text-[1.5rem] md:text-6xl md:pb-[2rem] text-center">
        Vendor Contract
      </h1>
      <iframe className={styles.contractIframe} src="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCY0OHV3OirGTYJZepumUtcsPa7_JIaGFwe4Rhb3NPssuEdCAoDPw37WGQ-4l6Tjg0*&hosted=false" width="100%" height="100%" style={{border: 0, overflow: "hidden", minHeight: "80vh", minWidth: "100%"}}></iframe>
    </div>
  )
}
