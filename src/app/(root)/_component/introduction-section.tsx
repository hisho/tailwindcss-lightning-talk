import { NewSection } from '@/src/app/(root)/_template/new-section'

export const IntroductionSection = () => {
  return (
    <NewSection
      heading={
        <>
          <strong className={'text-sky-400'}>スタイリングの風</strong> :
          <span className={'text-gray-300'}>クラス名の断捨離へ</span>
        </>
      }
    />
  )
}
