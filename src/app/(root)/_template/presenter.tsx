import { Section } from '@/src/component/section/section'
import { StaticImageData } from 'next/dist/client/image'
import Image from 'next/image'
import { ComponentProps } from 'react'

type Props = {
  imageSrc: StaticImageData
} & Pick<ComponentProps<'div'>, 'children'>

export const Presenter = ({ children, imageSrc }: Props) => {
  return (
    <Section className={'grid grid-cols-2'}>
      <div className={'flex items-center justify-center'}>
        <div className={'relative aspect-square w-[60%]'}>
          <Image
            className={
              'rounded-full border-8 border-green-600 object-cover object-center'
            }
            alt={''}
            fill
            src={imageSrc}
          />
        </div>
      </div>
      <div className={'flex flex-col py-[20%]'}>{children}</div>
    </Section>
  )
}
