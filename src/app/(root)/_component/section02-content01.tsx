import { NewSection } from '@/src/app/(root)/_template/new-section'

export const Section02Content01 = () => {
  return (
    <NewSection
      heading={
        <>
          <strong className={'text-red-400'}>Zero Runtime</strong>の
          <strong className={'text-red-400'}>
            utility-first CSS framework
          </strong>
        </>
      }
      headingLevel={'h3'}
    />
  )
}
