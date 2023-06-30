import { NewSection } from '@/src/app/(root)/_template/new-section'
import { TailwindcssIcon } from '@/src/icon/tailwindcss'

export const Closing1 = () => {
  return <NewSection heading={'それが'} headingLevel={'h2'} />
}

export const Closing2 = () => {
  return (
    <NewSection
      heading={
        <>
          スタイリングの<span className={'text-sky-400'}>風</span>
        </>
      }
    />
  )
}

export const Closing3 = () => {
  return (
    <NewSection
      heading={
        <div className={'w-full'}>
          <TailwindcssIcon />
        </div>
      }
      headingClassName={'w-full'}
    />
  )
}
