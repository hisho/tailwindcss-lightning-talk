import { NewSection } from '@/src/app/(root)/_template/new-section'

export const Section04Content0101 = () => {
  return (
    <NewSection
      heading={
        <span className={'text-center'}>
          <span className={'block'}>
            <strong className={'text-red-400'}>leading-tight</strong>
            &nbsp;=&nbsp;
            <strong className={'text-red-400'}>line-height: 1.25;</strong>
          </span>
        </span>
      }
      headingLevel={'h3'}
    />
  )
}
