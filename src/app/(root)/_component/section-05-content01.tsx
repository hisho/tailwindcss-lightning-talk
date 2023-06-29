import { NewSection } from '@/src/app/(root)/_template/new-section'
import { UnorderedList } from '@/src/app/_component/unordered-list'
import { cn } from '@/src/util/cn/cn'
import { isNotUndefined } from 'typesafe-utils'

type Props = {
  highlightIndex?: number
}

export const Section05Content01 = ({ highlightIndex }: Props) => {
  return (
    <NewSection>
      <UnorderedList
        items={[
          <span
            className={cn(
              isNotUndefined(highlightIndex) &&
                highlightIndex !== 0 &&
                'opacity-30'
            )}
            key={`Section05Content01_0`}
          >
            cssが書ければかける😁
          </span>,
          <span
            className={cn(
              isNotUndefined(highlightIndex) &&
                highlightIndex !== 1 &&
                'opacity-30'
            )}
            key={`Section05Content01_3`}
          >
            再利用しないコードに名前をつけなくてよい🥰
          </span>,
          <span
            className={cn(
              isNotUndefined(highlightIndex) &&
                highlightIndex !== 2 &&
                'opacity-30'
            )}
            key={`Section05Content01_2`}
          >
            めんどいファイル移動をしなくてよい😽
          </span>,
          <span
            className={cn(
              isNotUndefined(highlightIndex) &&
                highlightIndex !== 3 &&
                'opacity-30'
            )}
            key={`Section05Content01_1`}
          >
            命名を考える必要がない😎
          </span>,
        ]}
      />
    </NewSection>
  )
}
