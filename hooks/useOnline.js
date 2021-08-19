import { useEffect, useState } from 'react'

const getOnLineStatus = () =>
  typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean' ? navigator.onLine : true

const useOnline = () => {
  const [isOnLine, setIsOnLine] = useState(getOnLineStatus())

  useEffect(() => {
    window.addEventListener('online', () => setIsOnLine(true))
    window.addEventListener('offline', () => setIsOnLine(false))

    return () => {
      window.removeEventListener('online', () => setIsOnLine(true))
      window.removeEventListener('offline', () => setIsOnLine(false))
    }
  }, [])

  return isOnLine
}

export default useOnline
