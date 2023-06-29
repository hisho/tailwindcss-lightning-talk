import { NewSection } from '@/src/app/(root)/_template/new-section'
import { SyntaxHighlighter } from '@/src/component/syntax-highlighter/syntax-highlighter'

export const Section04Content0105 = () => {
  return (
    <NewSection>
      <div className={'grid grid-cols-1'}>
        <div className={'mx-auto'}>
          <button
            className={
              'rounded-full bg-violet-500 px-5 py-2 text-sm font-semibold leading-5 text-white hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700'
            }
            type={'button'}
          >
            Save changes
          </button>
        </div>
        <SyntaxHighlighter
          code={`<button
  className={
    'rounded-full bg-violet-500 px-5 py-2 text-sm font-semibold leading-5 text-white hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700'
  }
  type={'button'}
>
  Save changes
</button>`}
          lang={'tsx'}
        />
      </div>
    </NewSection>
  )
}
