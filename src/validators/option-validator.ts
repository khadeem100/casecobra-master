// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from '@/config/products'

export const COLORS = [
  { label: 'Female', value: 'black', tw: 'rose-950' },
  {
    label: 'Male',
    value: 'blue',
    tw: 'blue-950',
  },
] as const

export const MODELS = {
  name: 'colors',
  options: [
    {
      label: 'Azure',
      value: 'iphonex',
    },
    {
      label: 'Black',
      value: 'iphone11',
    },
    {
      label: 'Magenta',
      value: 'iphone12',
    },
    {
      label: 'Neon Yellow',
      value: 'iphone13',
    },
    {
      label: 'Lime',
      value: 'iphone14',
    },
    {
      label: 'Sun Yellow',
      value: 'iphone15',
    },
    {
      label: 'Orange',
      value: 'iphone15',
    },
    {
      label: 'Violet',
      value: 'iphone15',
    },
    {
      label: 'Royal Blue',
      value: 'iphone15',
    },
    {
      label: 'Green',
      value: 'iphone15',
    },
    {
      label: 'Red',
      value: 'iphone15',
    },
    {
      label: 'White',
      value: 'iphone15',
    },
  ],
} as const

export const MATERIALS = {
  name: 'sizebreak',
  options: [
    {
      label: 'Extra Small',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
      quantity: 1,
    },
    {
      label: 'Small',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
      quantity: 1,
    },
    {
      label: 'Medium',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
      quantity: 1,
    },
    {
      label: 'Large',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
      quantity: 1,
    },
    {
      label: 'Extra Large',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
      quantity: 1,
    },
    {
      label: 'Extra Extra large',
      value: 'polycarbonate',
      description: undefined,
      price: PRODUCT_PRICES.material.polycarbonate,
      quantity: 1,
    },
  ],
} as const

export const FINISHES = {
  name: 'print',
  options: [
    {
      label: 'Front Print',
      value: 'smooth',
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: 'Back Print',
      value: 'textured',
      description: undefined,
      price: PRODUCT_PRICES.finish.textured,
    },
    {
      label: 'Left Sleeve Print',
      value: 'smooth',
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: 'Right Sleeve Print',
      value: 'textured',
      description: undefined,
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const
