import { NewSection } from '@/src/app/(root)/_template/new-section'

export const Section01 = () => {
  return (
    <NewSection
      heading={'⚠一部過激な内容が含まれます⚠'}
      headingClassName={'text-red-500'}
      headingLevel={'h4'}
    />
  )
}
