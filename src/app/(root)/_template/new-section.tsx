import { Section } from '@/src/component/section/section'
import { createFontSize } from '@/src/util/createFontSize/createFontSize'
import { ComponentProps } from 'react'

type Props = { heading?: string } & Pick<ComponentProps<'h1'>, 'children'>

export const NewSection = ({ children, heading }: Props) => {
  return (
    <Section>
      <div className={'flex h-full items-center justify-center'}>
        {heading && <h1 style={createFontSize(80)}>{heading}</h1>}
        <div>{children}</div>
      </div>
    </Section>
  )
}
