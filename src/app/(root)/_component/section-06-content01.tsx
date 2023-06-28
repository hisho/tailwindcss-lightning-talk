import { NewSection } from '@/src/app/(root)/_template/new-section'

export const Section06Content01 = () => {
  return (
    <NewSection
      heading={
        <>component以外にはcss設計をする必要がない ≒ tailwindcssの設計</>
      }
      headingLevel={'h3'}
    />
  )
}
