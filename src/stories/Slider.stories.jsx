import React from 'react'
import { SliderOnly } from './SliderOnly'

export default {
  title: 'Example/SliderOnly',
  component: SliderOnly,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

const Template = args => <SliderOnly {...args} />
export const Data = Template.bind([])
