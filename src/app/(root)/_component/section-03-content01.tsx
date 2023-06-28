import { NewSection } from '@/src/app/(root)/_template/new-section'
import { UnorderedList } from '@/src/app/_component/unordered-list'

export const Section03Content01 = () => {
  return (
    <NewSection>
      <UnorderedList
        items={[
          'css設計は破綻する💥',
          'scssが使いづらくなってしまった👎',
          'web制作でも使える😎',
        ]}
      />
    </NewSection>
  )
}
