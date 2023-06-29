import { NewSection } from '@/src/app/(root)/_template/new-section'

export const Section06Content03 = () => {
  return (
    <NewSection
      heading={
        <>
          headerやfooterなど
          <span className={'font-bold text-red-400'}>再利用しない</span>
          cssの命名考える必要ある？
        </>
      }
      headingLevel={'h3'}
    />
  )
}
