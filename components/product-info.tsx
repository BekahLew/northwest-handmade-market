"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"
import styles from "styles/Button.module.css";

import { SanityProduct } from "@/config/inventory"
import { getSizeName } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface Props {
  product: SanityProduct
}

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
          <button
            type="button"
            onClick={addToCart}
            className={styles.button + " w-[60%]"}
          >
            Add to Cart
          </button>
        </div>
      </form>
    </div>
  )
}
