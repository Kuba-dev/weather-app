const constants = {
  noon: 12,
  zeroAddBoundary: 10,
}

export function formatTime(date: Date) {
  const { noon, zeroAddBoundary } = constants

  const hours = date.getHours()
  const minutes = date.getMinutes()
  const amOrPm = hours < noon ? 'AM' : 'PM'

  const formattedMinutes = minutes < zeroAddBoundary ? '0' + minutes : minutes

  return `${hours}:${formattedMinutes} ${amOrPm}`
}
