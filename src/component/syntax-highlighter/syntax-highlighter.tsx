import { Prism as ReactSyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
type Props = {
  code: string
  lang: 'tsx'
}
export const SyntaxHighlighter = ({ code, lang }: Props) => {
  return (
    <ReactSyntaxHighlighter language={lang} style={tomorrow}>
      {code}
    </ReactSyntaxHighlighter>
  )
}
