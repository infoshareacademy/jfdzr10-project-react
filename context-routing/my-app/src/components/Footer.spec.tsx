import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

test('should render proper content for Footer component', () => {
  render(<Footer />)
  expect(screen.getByText(/^Footer$/)).toBeInTheDocument()
})
