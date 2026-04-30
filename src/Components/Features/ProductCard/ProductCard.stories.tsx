import type { Meta, StoryObj } from '@storybook/react'
import { ProductCard } from './ProductCard'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '../../../style/theme'
const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
}

export default meta

type Story = StoryObj<typeof ProductCard>

export const Default: Story = {
  render: () => <ThemeProvider theme={defaultTheme}><ProductCard /></ThemeProvider>,
}