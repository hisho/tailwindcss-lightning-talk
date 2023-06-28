import { Heading, HeadingTag } from '@/src/app/_component/heading'
import { Section } from '@/src/component/section/section'
import { ComponentProps, ReactNode } from 'react'

type Props = {
  heading?: ReactNode
  headingClassName?: string
  headingLevel?: HeadingTag
} & Pick<ComponentProps<'div'>, 'children'>

export const NewSection = ({
  children,
  heading,
  headingClassName,
  headingLevel,
}: Props) => {
  return (
    <Section>
      <div className={'flex h-full items-center justify-center'}>
        {heading && (
          <Heading as={headingLevel ?? 'h1'} className={headingClassName}>
            {heading}
          </Heading>
        )}
        <>{children}</>
      </div>
    </Section>
  )
}
