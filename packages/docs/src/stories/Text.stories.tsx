import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typegraph/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum nesciunt sequi perferendis nam hic vel, natus, officia aut amet unde quo enim doloremque quisquam obcaecati placeat quaerat ratione dolorem?',
  },
  tags: ['autodocs'],
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
