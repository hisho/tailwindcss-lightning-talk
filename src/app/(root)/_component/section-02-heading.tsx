import { NewSection } from '@/src/app/(root)/_template/new-section'
import { TailwindcssIcon } from '@/src/icon/tailwindcss'

export const Section02Heading = () => {
  return (
    <NewSection
      heading={
        <span className={'flex items-center justify-center'}>
          <TailwindcssIcon className={'w-full max-w-xl'} />
          <span className={'shrink-0'}>とはなにか</span>
        </span>
      }
      headingClassName={'w-full text-center'}
      headingLevel={'h2'}
    />
  )
}
