import image2 from '@/src/app/(root)/_image/intro-chatgpt.png'
import image1 from '@/src/app/(root)/_image/tsugaku_boy.png'
import { NewSection } from '@/src/app/(root)/_template/new-section'
import Image from 'next/image'

export const Introduction = () => {
  return (
    <NewSection heading={'tailwindcss学校3年生hishoです'} headingLevel={'h3'}>
      <div className={'relative aspect-[508/614] w-full'}>
        <Image alt={''} fill src={image1} />
      </div>
    </NewSection>
  )
}

export const IntroductionChatGPT = () => {
  return (
    <NewSection>
      <div className={'relative aspect-[3634/1338] w-full'}>
        <Image alt={''} fill src={image2} />
      </div>
    </NewSection>
  )
}
