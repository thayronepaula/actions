/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sonarjs/no-identical-functions */
import React from 'react'
import { render } from '@testing-library/react'

import MainHeading from './main-heading'

// Just a sample test.
describe('Index Page', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<MainHeading />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders hello world', () => {
    // Given
    const { getByTestId } = render(<MainHeading>Hello World</MainHeading>)

    // When
    const ACTUAL = getByTestId('main-heading-h1').textContent
    const ACTUAL_CLASSNAMES = getByTestId('main-heading-h1').className

    // Then
    expect(1).toBe(1)
    expect(10).toBe(10)
    expect(ACTUAL).toEqual('Hello World')
    expect(ACTUAL_CLASSNAMES).toBe('text-xl text-gray-900')
  })

  it('renders hello world', () => {
    // Given
    const { getByTestId } = render(<MainHeading>Hello World</MainHeading>)

    // When
    const ACTUAL = getByTestId('main-heading-h1').textContent
    const ACTUAL_CLASSNAMES = getByTestId('main-heading-h1').className

    // Then
    expect(1).toBe(1)
    expect(10).toBe(10)
    expect(ACTUAL).toEqual('Hello World')
    expect(ACTUAL_CLASSNAMES).toBe('text-xl text-gray-900')
  })
})
