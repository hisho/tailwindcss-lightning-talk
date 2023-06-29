import { NewSection } from '@/src/app/(root)/_template/new-section'
import { SyntaxHighlighter } from '@/src/component/syntax-highlighter/syntax-highlighter'

const Example = () => {
  return (
    <ul className="divide-y divide-slate-200 p-6" role="list">
      <li className="flex py-4 first:pt-0 last:pb-0">
        <img
          alt=""
          className="h-10 w-10 rounded-full"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
        />
        <div className="ml-3 overflow-hidden">
          <p className="text-sm font-medium text-slate-900">Kristen Ramos</p>
          <p className="truncate text-sm text-slate-500">
            kristen.ramos@example.com
          </p>
        </div>
      </li>
      <li className="flex py-4 first:pt-0 last:pb-0">
        <img
          alt=""
          className="h-10 w-10 rounded-full"
          src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
        />
        <div className="ml-3 overflow-hidden">
          <p className="text-sm font-medium text-slate-900">Floyd Miles</p>
          <p className="truncate text-sm text-slate-500">
            floyd.miles@example.com
          </p>
        </div>
      </li>
    </ul>
  )
}

export const Section04Content0107 = () => {
  return (
    <NewSection>
      <div className={'grid grid-cols-1'}>
        <div className={'bg-white'}>
          <Example />
        </div>
        <SyntaxHighlighter
          code={`<ul className="divide-y divide-slate-200 p-6" role="list">
  <li className="flex py-4 first:pt-0 last:pb-0">
    <img
      alt=""
      className="h-10 w-10 rounded-full"
      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
    />
    <div className="ml-3 overflow-hidden">
      <p className="text-sm font-medium text-slate-900">Kristen Ramos</p>
      <p className="truncate text-sm text-slate-500">
        kristen.ramos@example.com
      </p>
    </div>
  </li>
  <li className="flex py-4 first:pt-0 last:pb-0">
    <img
      alt=""
      className="h-10 w-10 rounded-full"
      src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
    />
    <div className="ml-3 overflow-hidden">
      <p className="text-sm font-medium text-slate-900">Floyd Miles</p>
      <p className="truncate text-sm text-slate-500">
        floyd.miles@example.com
      </p>
    </div>
  </li>
</ul>`}
          lang={'tsx'}
        />
      </div>
    </NewSection>
  )
}
