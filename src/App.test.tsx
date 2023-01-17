import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { EndPoint, getApiUrl } from 'configs'

// beforeAll(() => console.log('Start testing'));
// afterAll(() => console.log('End testing'));
// beforeEach(() => console.log('Start a test'));
// afterEach(() => console.log('End a test'))



test('renders learn react link', () => {
  const {container, baseElement} = render(<App />)
  const linkElement = screen.getByText(/Here is the header/i)
  console.log(container, baseElement)
  expect(linkElement).toBeInTheDocument()

  const id = screen.getByTestId('testid'); // data-testid
  expect(id).toBeInTheDocument()
  expect(id).toBeEnabled();
  const disabledInput = screen.getByTestId('disabled-input'); // data-testid
  expect(disabledInput).toBeInTheDocument()
  expect(disabledInput).toBeInTheDocument()
  expect(disabledInput).toBeDisabled(); // Check item is enabled.
})

test('renders learn react Button', () => {
  render(<App />)
  const ButtonElement = screen.getByText(/Hehes/i)
  expect(ButtonElement).toBeInTheDocument()
})

test('Call api', async () => {
  const data = await fetch(getApiUrl(EndPoint.GetList)).then(res => res.json()).then(data => data);
  console.log(data);
  // expect(data.completed).toBe(false);
  expect(Array.isArray(data)).toBe(false);
  expect(data).toHaveProperty('completed', false)
  expect(data).toHaveProperty('title', 'delectus aut autem')
  expect(data).toHaveProperty('id', 1)
  expect(data).toHaveProperty('userId', 1)
  // console.log(data)
})

test('To have data from api', async () => {
  const data = await fetch(getApiUrl(EndPoint.GetList)).then(res => res.json()).then(data => data);
  // expect(data).toHaveLength;
  expect(data).toBeDefined();
  // console.log(data)
})
