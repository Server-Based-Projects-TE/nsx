import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import ArrowButton from './ArrowButton'

const meta: ComponentMeta<typeof ArrowButton> = {
  title: 'Components/ArrowButton',
  component: ArrowButton,
}

export default meta

const Template: ComponentStory<typeof ArrowButton> = (props) => (
  <ArrowButton {...props} />
)

export const Right = Template.bind({})
Right.args = {
  direction: 'right',
}

export const Left = Template.bind({})
Left.args = {
  direction: 'left',
}