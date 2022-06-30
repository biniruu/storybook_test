import React from 'react'

import { Chartjs } from './Chartjs'

export default {
  title: 'Example/Chartjs',
  component: Chartjs,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

const Template = args => <Chartjs {...args} />
export const Data = Template.bind([])
