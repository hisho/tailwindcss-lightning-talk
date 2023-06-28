import { NewSection } from '@/src/app/(root)/_template/new-section'

export const Section02Content02 = () => {
  return (
    <NewSection
      heading={
        <span className={'text-center'}>
          <span className={'block'}>
            <strong className={'text-red-400'}>flex</strong>&nbsp;=&nbsp;
            <strong className={'text-red-400'}>display: flex;</strong>
          </span>
          <span className={'block'} style={{ marginTop: '2%' }}>
            <strong className={'text-red-400'}>pt-4</strong>&nbsp;=&nbsp;
            <strong className={'text-red-400'}>padding-top: 1rem;</strong>
          </span>
        </span>
      }
      headingLevel={'h3'}
    />
  )
}
