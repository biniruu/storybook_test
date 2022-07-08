import React from 'react'
import { ReactVis } from './ReactVis'

export default {
  title: 'Example/ReactVis',
  component: ReactVis,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

const Template = args => <ReactVis {...args} />
export const Data = Template.bind([])
