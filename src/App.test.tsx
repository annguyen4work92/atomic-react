import React, { useEffect } from 'react'
import { render, screen, renderHook, waitFor, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { EndPoint, getApiUrl } from 'configs'
import renderer from 'react-test-renderer'
import { useUserFetcher } from 'hooks/api-fetch/useUserFetcher'
import { act } from 'react-dom/test-utils'
import ListUserPage from 'pages/list-user'
// import axios from 'axios'
// jest.mock('axios');
// const mockAxios = axios as jest.Mocked<typeof axios>;

afterAll(cleanup);
// beforeEach(() => console.log('Start a test'));

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

test('renders learn react link', () => {
  act(() => {
    render(<App />)
  })
  const linkElement = screen.getByText(/Here is the header/i)
  expect(linkElement).toBeInTheDocument()

  const id = screen.getByTestId('testid'); // data-testid
  expect(id).toBeInTheDocument()
  expect(id).toBeEnabled();
  const disabledInput = screen.getByTestId('disabled-input'); // data-testid
  expect(disabledInput).toBeInTheDocument()
  expect(disabledInput).toBeInTheDocument()
  expect(disabledInput).toBeDisabled(); // Check item is enabled.
})

test('App snapshot', async () => {
  // mockAxios.get.mockResolvedValue({
  //   data: {"userId":1,"id":1,"title":"delectus aut autem","completed":false}
  // })
  const appRenderer = await act(() => renderer.create(<ListUserPage />));
  // console.log(new Date());
  const { result } = await renderHook(() => useUserFetcher());
  console.log(new Date())
  await waitFor(async () => {
    console.log(new Date())
    await sleep(1000);
    // console.log('>>>', new Date());
    expect(appRenderer.toJSON()).toMatchSnapshot()
    expect(result.current.dataSource).toMatchSnapshot();
    // const data = await result.current.fetchUser();
    // expect(data).toMatchSnapshot();
    // const data = await result.current.fetchUser();
    // console.log('>>>>', result);
  }, {timeout: 1500})
})

test('renders learn react Button', () => {
  act(() => {
    render(<App />)
  })
  const ButtonElement = screen.getByText(/Hehes/i)
  expect(ButtonElement).toBeInTheDocument()
})

test('renders data', async () => {
  act(() => {
    render(<ListUserPage />)
  })
  await waitFor(() => {
    const ButtonElement = screen.getByText(/"userId":/i)
    expect(ButtonElement).toBeInTheDocument()
  })
})
