import { ChangeEvent, useCallback, useEffect, useRef } from 'react'

type Timer = number | null
// type SomeFunction = (...args: unknown[]) => void
type SomeFunction = (event: ChangeEvent<HTMLFormElement>) => void

export default function useDebounce<Func extends SomeFunction>(
  func: Func,
  delay = 1000,
  setLoading: (loading: boolean) => void,
) {
  const timer = useRef<Timer>(null)

  useEffect(() => {
    return () => {
      if (timer.current !== null) {
        clearTimeout(timer.current)
      }
    }
  }, [])

  const debouncedFunction = useCallback(
    ((...args) => {
      if (timer.current !== null) {
        clearTimeout(timer.current)
      }
      setLoading(true)
      timer.current = window.setTimeout(() => {
        func(...args)
      }, delay)
    }) as Func,
    [delay, setLoading, func],
  )

  return debouncedFunction
}
