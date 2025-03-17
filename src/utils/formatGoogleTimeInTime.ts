export function formatGoogleTimeInTime(time: string) {
  const date = new Date(time)
  const hours = date.getUTCHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}
