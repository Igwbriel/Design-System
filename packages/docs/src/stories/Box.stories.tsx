import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text> testando </Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  tags: ['autodocs'],
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
