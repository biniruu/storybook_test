import React from 'react'

import { Nivo } from './Nivo'

export default {
  title: 'Example/Nivo',
  component: Nivo,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

const Template = args => <Nivo {...args} />
export const Data = Template.bind([])
Data.args = [
  {
    country: 'AD',
    'hot dog': 106,
    'hot dogColor': 'hsl(177, 70%, 50%)',
    burger: 140,
    burgerColor: 'hsl(66, 70%, 50%)',
    sandwich: 144,
    sandwichColor: 'hsl(218, 70%, 50%)',
    kebab: 190,
    kebabColor: 'hsl(326, 70%, 50%)',
    fries: 141,
    friesColor: 'hsl(158, 70%, 50%)',
    donut: 173,
    donutColor: 'hsl(223, 70%, 50%)',
  },
  {
    country: 'AE',
    'hot dog': 73,
    'hot dogColor': 'hsl(87, 70%, 50%)',
    burger: 62,
    burgerColor: 'hsl(229, 70%, 50%)',
    sandwich: 26,
    sandwichColor: 'hsl(113, 70%, 50%)',
    kebab: 137,
    kebabColor: 'hsl(295, 70%, 50%)',
    fries: 165,
    friesColor: 'hsl(231, 70%, 50%)',
    donut: 18,
    donutColor: 'hsl(168, 70%, 50%)',
  },
  {
    country: 'AF',
    'hot dog': 4,
    'hot dogColor': 'hsl(129, 70%, 50%)',
    burger: 169,
    burgerColor: 'hsl(68, 70%, 50%)',
    sandwich: 182,
    sandwichColor: 'hsl(327, 70%, 50%)',
    kebab: 174,
    kebabColor: 'hsl(78, 70%, 50%)',
    fries: 83,
    friesColor: 'hsl(61, 70%, 50%)',
    donut: 169,
    donutColor: 'hsl(100, 70%, 50%)',
  },
  {
    country: 'AG',
    'hot dog': 104,
    'hot dogColor': 'hsl(2, 70%, 50%)',
    burger: 24,
    burgerColor: 'hsl(193, 70%, 50%)',
    sandwich: 25,
    sandwichColor: 'hsl(234, 70%, 50%)',
    kebab: 47,
    kebabColor: 'hsl(142, 70%, 50%)',
    fries: 59,
    friesColor: 'hsl(205, 70%, 50%)',
    donut: 163,
    donutColor: 'hsl(98, 70%, 50%)',
  },
  {
    country: 'AI',
    'hot dog': 161,
    'hot dogColor': 'hsl(16, 70%, 50%)',
    burger: 124,
    burgerColor: 'hsl(223, 70%, 50%)',
    sandwich: 44,
    sandwichColor: 'hsl(126, 70%, 50%)',
    kebab: 94,
    kebabColor: 'hsl(240, 70%, 50%)',
    fries: 68,
    friesColor: 'hsl(90, 70%, 50%)',
    donut: 35,
    donutColor: 'hsl(323, 70%, 50%)',
  },
  {
    country: 'AL',
    'hot dog': 89,
    'hot dogColor': 'hsl(107, 70%, 50%)',
    burger: 171,
    burgerColor: 'hsl(217, 70%, 50%)',
    sandwich: 38,
    sandwichColor: 'hsl(7, 70%, 50%)',
    kebab: 18,
    kebabColor: 'hsl(138, 70%, 50%)',
    fries: 133,
    friesColor: 'hsl(241, 70%, 50%)',
    donut: 51,
    donutColor: 'hsl(341, 70%, 50%)',
  },
  {
    country: 'AM',
    'hot dog': 26,
    'hot dogColor': 'hsl(51, 70%, 50%)',
    burger: 170,
    burgerColor: 'hsl(3, 70%, 50%)',
    sandwich: 37,
    sandwichColor: 'hsl(92, 70%, 50%)',
    kebab: 123,
    kebabColor: 'hsl(349, 70%, 50%)',
    fries: 24,
    friesColor: 'hsl(113, 70%, 50%)',
    donut: 137,
    donutColor: 'hsl(38, 70%, 50%)',
  },
]
