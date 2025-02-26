export function formatTime(date: Date) {
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const amOrPm = hours < 12 ? 'AM' : 'PM'

  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
  return `${hours}:${formattedMinutes} ${amOrPm}`
}
