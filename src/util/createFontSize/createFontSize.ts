import { CSSProperties } from 'react'

export const createFontSize = (
  size: number
): Pick<CSSProperties, 'fontSize'> => {
  return { fontSize: `calc(${size} / 1500 * 100vw)` }
}
