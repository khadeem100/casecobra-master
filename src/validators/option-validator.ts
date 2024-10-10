// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from '@/config/products'

export const COLORS = [
  { label: 'Male', value: 'black', tw: 'zinc-900' },
  {
    label: 'Female',
    value: 'blue',
    tw: 'blue-950',
  },
] as const

export const MODELS = {
  name: 'Colors',
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
  name: 'Size Break',
  options: [
    {
      label: 'Extra Small',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: 'Small',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: 'Medium',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: 'Large',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: 'Extra Large',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: 'Extra Extra large',
      value: 'polycarbonate',
      description: 'Scratch-resistant coating',
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const

export const FINISHES = {
  name: 'finish',
  options: [
    {
      label: 'Smooth Finish',
      value: 'smooth',
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: 'Textured Finish',
      value: 'textured',
      description: 'Soft grippy texture',
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const
