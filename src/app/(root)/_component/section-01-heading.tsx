import { NewSection } from '@/src/app/(root)/_template/new-section'

export const Section01Heading = () => {
  return (
    <NewSection
      heading={'⚠一部過激な内容が含まれます⚠'}
      headingClassName={'text-red-500'}
      headingLevel={'h4'}
    />
  )
}

export const Section01Heading01 = () => {
  return (
    <NewSection
      heading={'tailwind cssはご存知ですか？🙋‍♂️'}
      headingLevel={'h2'}
    />
  )
}
