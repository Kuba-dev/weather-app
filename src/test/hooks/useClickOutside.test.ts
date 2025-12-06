import useClickOutside from '@src/hooks/useClickOutside'

import { fireEvent, renderHook } from '@testing-library/react'

describe('useClickOutside', () => {
  test('should handle outside click', () => {
    const target = document.createElement('div')
    document.body.appendChild(target)

    const outside = document.createElement('div')
    document.body.appendChild(outside)

    const ref = {
      current: target,
    }
    const callback = jest.fn()

    const view = renderHook(() => useClickOutside(ref, callback))

    expect(callback).toHaveBeenCalledTimes(0)
    fireEvent.mouseDown(outside)
    expect(callback).toHaveBeenCalledTimes(1)

    jest.spyOn(document, 'removeEventListener')

    view.unmount()
    expect(document.removeEventListener).toHaveBeenCalledTimes(1)

    fireEvent.mouseDown(outside)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  test('should do nothing after click on the target element', () => {
    const target = document.createElement('div')
    document.body.appendChild(target)

    const ref = {
      current: target,
    }
    const callback = jest.fn()

    renderHook(() => useClickOutside(ref, callback))

    expect(callback).toHaveBeenCalledTimes(0)
    fireEvent.mouseDown(target)
    expect(callback).toHaveBeenCalledTimes(0)
  })
})
