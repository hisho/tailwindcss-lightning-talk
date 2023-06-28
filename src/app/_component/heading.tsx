import { createFontSize } from '@/src/util/createFontSize/createFontSize'
import { ComponentProps, createElement } from 'react'
import { match } from 'ts-pattern'

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type Props<T extends HeadingTag> = {
  as?: T
} & Pick<ComponentProps<T>, 'children' | 'className'>

export const Heading = <T extends HeadingTag>({
  as,
  children,
  ...props
}: Props<T>) => {
  const tag = as ?? 'h1'
  return createElement(
    tag,
    {
      ...props,
      style: createFontSize(
        match(tag as HeadingTag)
          .with('h1', () => 80)
          .with('h2', () => 64)
          .with('h3', () => 48)
          .with('h4', () => 32)
          .with('h5', () => 24)
          .with('h6', () => 16)
          .exhaustive()
      ),
    },
    children
  )
}
