import { render, screen } from '@testing-library/react'
import { Header } from './Header'
import { MemoryRouter } from 'react-router-dom'

test('should render proper content for Header component', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Header />
    </MemoryRouter>,
  )
  expect(screen.getByText(/^Nowa aplikacja$/)).toBeInTheDocument()
})
