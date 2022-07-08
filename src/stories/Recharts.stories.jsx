import React from 'react'
import { Recharts } from './Recharts'

export default {
  title: 'Example/Recharts',
  component: Recharts,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

const Template = args => <Recharts {...args} />
export const Data = Template.bind([])
