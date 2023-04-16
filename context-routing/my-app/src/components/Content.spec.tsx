import { render, screen } from '@testing-library/react'
import { Content } from './Content'

it('should render proper content for <Content />', () => {
  render(<Content />)

  expect(screen.getByText(/^Content$/)).toBeInTheDocument()
})
