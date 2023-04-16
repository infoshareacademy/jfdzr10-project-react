/* eslint-disable testing-library/no-wait-for-side-effects */
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { AddPost } from './AddPost'
import {
  MemoryRouter,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom'
import { AuthProvider } from '../../providers/auth/AuthProvider'
import userEvent from '@testing-library/user-event'
import { Home } from '../Home'
import { AppRoutes } from '../../routing/AppRoutes'

it('should render auth guard message', () => {
  render(
    <MemoryRouter initialEntries={['/dodaj-post']}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </MemoryRouter>,
  )
  expect(screen.getByText(/^Prosze się zalogować$/)).toBeInTheDocument()
})

it('should render add post form, when logged in', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </MemoryRouter>,
  )

  await waitFor(() => fireEvent.click(screen.getByText(/login/)))
  await waitFor(() => fireEvent.click(screen.getByText(/Dodaj post/)))

  screen.getByText(/Dodaj nowy post/)
})
