import { NewSection } from '@/src/app/(root)/_template/new-section'
import { SyntaxHighlighter } from '@/src/component/syntax-highlighter/syntax-highlighter'
import { createFontSize } from '@/src/util/createFontSize/createFontSize'

export const Section05Content0401 = () => {
  return (
    <NewSection>
      <div className={'flex items-center gap-4'}>
        <SyntaxHighlighter
          code={`<div>
  <ul className={'list'}>
    <li className={'listItem'}>
      <div className={'hogeCard'}>this is card component</div>
    </li>
  </ul>
</div>`}
          lang={'tsx'}
        />
        <p style={createFontSize(80)}>→</p>
        <SyntaxHighlighter
          code={`<div>
  <ul className={'flex gap-2'}>
    <li>
      <div className={'h-full flex flex-col'}>this is card component</div>
    </li>
  </ul>
</div>`}
          lang={'tsx'}
        />
      </div>
    </NewSection>
  )
}
