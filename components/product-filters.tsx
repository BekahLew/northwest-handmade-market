"use client"

import { useRouter, useSearchParams } from "next/navigation"
import styled from "styled-components"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

const filters = [
  {
    id: "showDate",
    name: "Show Date",
    options: [
      { value: "may", label: "May 25th, 2024" },
      { value: "june", label: "June 15th, 2024" },
      { value: "july", label: "July 6th, 2024" },
      { value: "august", label: "August 3rd, 2024" },
      { value: "september", label: "September 7th, 2024" },
      { value: "october", label: "October 5th, 2024" },
      { value: "november", label: "November 2nd, 2024" },
    ],
  },
  {
    id: "boothSize",
    name: "Booth Size",
    options: [
      { value: "small", label: "6' x 5' booth" },
      { value: "large", label: "6' x 8.5' booth" },
    ],
  },
  {
    id: "location",
    name: "Location",
    options: [
      { value: "edmondsMasonic", label: "Edmonds Masonic Center" },
    ],
  },
]

const AccordionForm = styled.form`
  div button {
    justify-content: flex-start;
  }
`

export function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams() as unknown as URLSearchParams
  const searchValues = Array.from(searchParams.entries())


  return (
    <AccordionForm className="sticky top-20 sm:grid sm:grid-cols-3 lg:block">
      <h3 className="sr-only">Show Dates</h3>

      {filters.map((section, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger>
              <span>
                {section.name}
                <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
                  {searchParams.get(section.id) ? `(${searchParams.get(section.id)})` : ""}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {section.options.map((option, optionIdx) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={`filter-${section.id}-${optionIdx}`}
                      checked={searchValues.some(([key, value]) => key === section.id && value === option.value)}
                      onClick={(event) => {
                        const params = new URLSearchParams(searchParams)
                        const checked =
                          event.currentTarget.dataset.state === "checked"
                        checked
                          ? params.delete(section.id)
                          : params.set(section.id, option.value)
                        router.replace(`/purchase-booths?${params.toString()}`)
                        setTimeout(() => { document.getElementById('product-grid')?.scrollIntoView({ behavior: 'smooth' })}, 500)
                      }}
                    />
                    <label
                      htmlFor={`filter-${section.id}-${optionIdx}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </AccordionForm>
  )
}
