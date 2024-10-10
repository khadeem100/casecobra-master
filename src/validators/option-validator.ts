// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from '@/config/products'

export const COLORS = [
  { label: 'Black', value: 'black', tw: 'zinc-900' },
  {
    label: 'Azure',
    value: 'blue',
    tw: 'blue-950',
  },
  {
    label: 'Azure',
    value: 'blue',
    tw: 'blue-950',
  },
  {
    label: 'Azure',
    value: 'blue',
    tw: 'blue-950',
  },
  {
    label: 'Azure',
    value: 'blue',
    tw: 'blue-950',
  },
  {
    label: 'Azure',
    value: 'blue',
    tw: 'blue-950',
  },
  {
    label: 'Azure',
    value: 'blue',
    tw: 'blue-950',
  },
  {
    label: 'Azure',
    value: 'blue',
    tw: 'blue-950',
  },
  {
    label: 'Azure',
    value: 'blue',
    tw: 'blue-950',
  },
  {
    label: 'Azure',
    value: 'blue',
    tw: 'blue-950',
  },
  {
    label: 'Azure',
    value: 'blue',
    tw: 'blue-950',
  },
  { label: 'Rose', value: 'rose', tw: 'rose-950' },
] as const

export const MODELS = {
  name: 'Size Break',
  options: [
    {
      label: 'Extra Small',
      value: 'iphonex',
    },
    {
      label: 'Small',
      value: 'iphone11',
    },
    {
      label: 'Medium',
      value: 'iphone12',
    },
    {
      label: 'Large',
      value: 'iphone13',
    },
    {
      label: 'Extra Large',
      value: 'iphone14',
    },
    {
      label: 'Extra Extra Large',
      value: 'iphone15',
    },
  ],
} as const

export const MATERIALS = {
  name: 'material',
  options: [
    {
      label: 'Silicone',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: 'Soft Polycarbonate',
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
