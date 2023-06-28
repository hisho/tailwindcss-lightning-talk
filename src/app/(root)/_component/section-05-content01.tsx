import { NewSection } from '@/src/app/(root)/_template/new-section'
import { UnorderedList } from '@/src/app/_component/unordered-list'

export const Section05Content01 = () => {
  return (
    <NewSection>
      <UnorderedList
        items={[
          'cssが書ければかける😁',
          '命名を考える必要がない😎',
          'めんどいファイル移動をしなくてよい😽',
          '再利用しないコードに名前をつけなくてよい🥰',
        ]}
      />
    </NewSection>
  )
}
