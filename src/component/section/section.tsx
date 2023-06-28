import { cn } from '@/src/util/cn/cn'
import { ComponentProps } from 'react'

type Props = Pick<ComponentProps<'section'>, 'children' | 'className'>

export const Section = ({ children, className }: Props) => {
  return (
    <section className={cn('h-full overflow-hidden p-[3%]', className)}>
      {children}
    </section>
  )
}
