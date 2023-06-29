import { NewSection } from '@/src/app/(root)/_template/new-section'

export const IntroductionSection = () => {
  return (
    <NewSection
      heading={
        <>
          <strong className={'text-sky-400'}>スタイリングの風</strong> :
          クラス名の<span className={'text-red-400'}>断捨離</span>へ
        </>
      }
    />
  )
}
