import { NewSection } from '@/src/app/(root)/_template/new-section'
import { UnorderedList } from '@/src/app/_component/unordered-list'

export const Section04Content01 = () => {
  return (
    <NewSection>
      <UnorderedList
        items={[
          'tailwindcss独自の書き方を覚える必要がある😇',
          'HTMLが汚くなるんでしょ🤨',
          '同じclassのコピペだるい😡',
        ]}
      />
    </NewSection>
  )
}
