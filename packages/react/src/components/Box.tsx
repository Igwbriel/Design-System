import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray600',
  border: '1px solid $gray600',
})

export type BoxProps = ComponentProps<typeof Box>
