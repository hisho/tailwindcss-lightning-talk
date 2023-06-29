import { NewSection } from '@/src/app/(root)/_template/new-section'

export const Section05Content0101 = () => {
  return (
    <NewSection
      heading={
        <span className={'text-center'}>
          <span className={'block'}>
            <strong className={'text-red-400'}>display: flex;</strong>
            &nbsp;=&nbsp;
            <strong className={'text-red-400'}>flex</strong>
          </span>
          <span className={'block'} style={{ marginTop: '2%' }}>
            <strong className={'text-red-400'}>width: 16px;</strong>
            &nbsp;=&nbsp;
            <strong className={'text-red-400'}>w-4</strong>
          </span>
        </span>
      }
      headingLevel={'h3'}
    />
  )
}
