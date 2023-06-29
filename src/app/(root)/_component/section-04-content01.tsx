import { NewSection } from '@/src/app/(root)/_template/new-section'
import { UnorderedList } from '@/src/app/_component/unordered-list'
import { cn } from '@/src/util/cn/cn'
import { isNotUndefined } from 'typesafe-utils'

type Props = {
  highlightIndex?: number
}

export const Section04Content01 = ({ highlightIndex }: Props) => {
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
            key={`Section04Content01_0`}
          >
            tailwindcss独自の書き方を覚える必要がある😇
          </span>,
          <span
            className={cn(
              isNotUndefined(highlightIndex) &&
                highlightIndex !== 1 &&
                'opacity-30'
            )}
            key={`Section04Content01_1`}
          >
            HTMLが汚くなるんでしょ🤨
          </span>,
          <span
            className={cn(
              isNotUndefined(highlightIndex) &&
                highlightIndex !== 2 &&
                'opacity-30'
            )}
            key={`Section04Content01_2`}
          >
            同じclassのコピペだるい😡
          </span>,
        ]}
      />
    </NewSection>
  )
}
