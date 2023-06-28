import { createFontSize } from '@/src/util/createFontSize/createFontSize'
import { Children, ReactNode, useId } from 'react'

type Props = {
  items: ReactNode
}

export const UnorderedList = ({ items }: Props) => {
  const children = Children.toArray(items)
  const id = useId()

  return (
    <ul className={'list-disc leading-normal'} style={createFontSize(40)}>
      {children.map((child, index) => (
        <li key={`UnorderedList_Item_${id}_${index}`}>{child}</li>
      ))}
    </ul>
  )
}
