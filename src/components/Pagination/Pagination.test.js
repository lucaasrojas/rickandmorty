import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Pagination from "./Pagination"

jest.mock("../../app/api");
const mockedOnNext = jest.fn()
const mockedOnPrev = jest.fn()

describe('Pagination', () => {

  test('should trigger on next on click', async () => {
    await render(<Pagination onNext={mockedOnNext} onPrev={mockedOnPrev} isNextDisabled={false} isPrevDisabled={false} />)
    const button = await screen.getByTestId('next-btn')
    await fireEvent.click(button)
    expect(mockedOnNext).toHaveBeenCalled()
  })

})