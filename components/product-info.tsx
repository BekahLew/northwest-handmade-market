"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"
import styled from "styled-components"

import { SanityProduct } from "@/config/inventory"
import { getSizeName } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface Props {
  product: SanityProduct
}

const CTA = styled.button`
position: relative;
font-size: 1.6rem;
margin-bottom: 1.3rem;
margin-top: 1rem;
padding: .2rem .4rem;
border-radius: 2px;
border: 1px solid #BC5738;

&:hover {
    transition: all .3s ease;
    &::before {
        top: 2.8rem;
    }

    &::after {
        height: 45px;
        transition: all .3s ease;
    }
}

&::before {
    content: '';
    position: absolute;
    top: 2.2rem;
    width: 160px;
    height: 33px;
    background: url('/images/decoration.png');
    background-size: contain;
    background-repeat: no-repeat;
    left: 50%;
    transform: translateX(-50%);
    transition: all .3s ease;
}

&::after {
    content: '';
    position: absolute;
    background: #BC5738;
    border-radius: 2px;
    width: 101%;
    height: 0;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    transition: all .3s ease;
}
`

export function ProductInfo({ product}: Props) {
  const [selectedSize, setSelectedSize] = useState(product.boothSize[0])
  const { addItem, incrementItem, cartDetails } = useShoppingCart()
  const { toast } = useToast()
  const isInCart = !!cartDetails?.[product._id]

  function addToCart() {
    const item = {
      ...product,
      product_data: {
        boothSize: selectedSize
      }
    }
    isInCart ? incrementItem(item._id) : addItem(item)
    toast({
      title: `${item.name} (${getSizeName(selectedSize)})`,
      description: "Product added to cart",
      action: (
        <Link href="/cart">
          <Button variant="link" className="gap-x-2 whitespace-nowrap">
            <span>Open cart</span>
            <ArrowRight className="h5 w-5" />
          </Button>
        </Link>
      )
    })
  }

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight">{formatCurrencyString({ value: product.price, currency: product.currency })}</p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base">{product.description}</div>
      </div>

      <div className="mt-4">
        <p>
          Booth Size: <strong>{selectedSize === "large" ? "6' x 8.5'" : "6' x 5'"}</strong>
        </p>
        {/* {product.boothSize.map((boothSize) => (
          <Button onClick={() => setSelectedSize(boothSize)} key={boothSize} variant={selectedSize === boothSize ? "default" : "outline"} className="mr-2 mt-4">
            {getSizeName(boothSize)}
          </Button>
        ))} */}
      </div>

      <form className="mt-6">
        <div className="mt-4 flex justify-center">
          <CTA
            type="button"
            onClick={addToCart}
            className="w-[60%]"
          >
            Add to Cart
          </CTA>
        </div>
      </form>
    </div>
  )
}
