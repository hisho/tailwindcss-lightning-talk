'use client'

import {
  Introduction,
  IntroductionChatGPT,
} from '@/src/app/(root)/_component/introduction'
import { IntroductionSection } from '@/src/app/(root)/_component/introduction-section'
import { PresenterSection } from '@/src/app/(root)/_component/presenter-section'
import { Section01Heading } from '@/src/app/(root)/_component/section-01-heading'
import { Section02Content01 } from '@/src/app/(root)/_component/section-02-content01'
import { Section02Content02 } from '@/src/app/(root)/_component/section-02-content02'
import { Section02Heading } from '@/src/app/(root)/_component/section-02-heading'
import { Section03Content01 } from '@/src/app/(root)/_component/section-03-content01'
import { Section03Heading } from '@/src/app/(root)/_component/section-03-heading'
import { Section04Content01 } from '@/src/app/(root)/_component/section-04-content01'
import { Section04Content0101 } from '@/src/app/(root)/_component/section-04-content01-01'
import { Section04Content0102 } from '@/src/app/(root)/_component/section-04-content01-02'
import { Section04Content0103 } from '@/src/app/(root)/_component/section-04-content01-03'
import { Section04Content0104 } from '@/src/app/(root)/_component/section-04-content01-04'
import { Section04Content0105 } from '@/src/app/(root)/_component/section-04-content01-05'
import { Section04Content0106 } from '@/src/app/(root)/_component/section-04-content01-06'
import { Section04Content0107 } from '@/src/app/(root)/_component/section-04-content01-07'
import { Section04Content0108 } from '@/src/app/(root)/_component/section-04-content01-08'
import { Section04Heading } from '@/src/app/(root)/_component/section-04-heading'
import { Section05Content01 } from '@/src/app/(root)/_component/section-05-content01'
import { Section05Content0101 } from '@/src/app/(root)/_component/section-05-content01-01'
import { Section05Content0201 } from '@/src/app/(root)/_component/section-05-content02-01'
import { Section05Content0202 } from '@/src/app/(root)/_component/section-05-content02-02'
import { Section05Content0301 } from '@/src/app/(root)/_component/section-05-content03-01'
import { Section05Content0302 } from '@/src/app/(root)/_component/section-05-content03-02'
import { Section05Content0401 } from '@/src/app/(root)/_component/section-05-content04-01'
import { Section05Content0402 } from '@/src/app/(root)/_component/section-05-content04-02'
import { Section05Heading } from '@/src/app/(root)/_component/section-05-heading'
import { Section06Content01 } from '@/src/app/(root)/_component/section-06-content01'
import { Section06Content02 } from '@/src/app/(root)/_component/section-06-content02'
import { Section06Content03 } from '@/src/app/(root)/_component/section-06-content03'
import { Section06Content04 } from '@/src/app/(root)/_component/section-06-content04'
import { Section06Heading } from '@/src/app/(root)/_component/section-06-heading'
import { Section07Heading } from '@/src/app/(root)/_component/section-07-heading'
import { cn } from '@/src/util/cn/cn'
import { useEffect } from 'react'
import { useCounter } from 'react-use'
import { match } from 'ts-pattern'

const slides = [
  <IntroductionSection key={'IntroductionSection'} />,
  <Section01Heading key={'Section01'} />,
  <Section02Heading key={'Section02'} />,
  <Section02Content01 key={'Section02Content01'} />,
  <Section02Content02 key={'Section02Content01'} />,
  <Introduction key={'Introduction'} />,
  <IntroductionChatGPT key={'IntroductionChatGPT'} />,
  <PresenterSection key={'PresenterSection'} />,
  <Section03Heading key={'Section03'} />,
  <Section03Content01 key={'Section03Content01'} />,
  <Section04Heading key={'Section04'} />,
  <Section04Content01 key={'Section04Content01'} />,
  <Section04Content01 highlightIndex={0} key={'Section04Content010'} />,
  <Section04Content0101 key={'Section04Content0101'} />,
  <Section04Content0102 key={'Section04Content0102'} />,
  <Section04Content0103 key={'Section04Content0103'} />,
  <Section04Content0104 key={'Section04Content0104'} />,
  <Section04Content01 highlightIndex={1} key={'Section04Content011'} />,
  <Section04Content0105 key={'Section04Content0105'} />,
  <Section04Content0106 key={'Section04Content0106'} />,
  <Section04Content01 highlightIndex={2} key={'Section04Content012'} />,
  <Section04Content0107 key={'Section04Content0107'} />,
  <Section04Content0108 key={'Section04Content0108'} />,
  <Section05Heading key={'Section05'} />,
  <Section05Content01 key={'Section05Content01'} />,
  <Section05Content01 highlightIndex={0} key={'Section05Content010'} />,
  <Section05Content0101 key={'Section05Content0101'} />,
  <Section05Content01 highlightIndex={1} key={'Section05Content011'} />,
  <Section05Content0201 key={'Section05Content0201'} />,
  <Section05Content0202 key={'Section05Content0202'} />,
  <Section05Content01 highlightIndex={2} key={'Section05Content012'} />,
  <Section05Content0301 key={'Section05Content0301'} />,
  <Section05Content0302 key={'Section05Content0302'} />,
  <Section05Content01 highlightIndex={3} key={'Section05Content013'} />,
  <Section05Content0401 key={'Section05Content0401'} />,
  <Section05Content0402 key={'Section05Content0402'} />,
  <Section06Heading key={'Section06'} />,
  <Section06Content01 key={'Section06Content01'} />,
  <Section06Content02 key={'Section06Content02'} />,
  <Section06Content03 key={'Section06Content03'} />,
  <Section06Content04 key={'Section06Content04'} />,
  <Section07Heading key={'Section07'} />,
]

export default function () {
  const [count, { dec, inc }] = useCounter(0, slides.length - 1, 0)
  const increment = () => inc(1)
  const decrement = () => dec(1)
  useEffect(() => {
    const keyDownEvent = (e: globalThis.KeyboardEvent) => {
      match(e.key.toLowerCase())
        .with('ArrowRight'.toLowerCase(), () => increment())
        .with('ArrowLeft'.toLowerCase(), () => decrement())
        .otherwise(() => {})
    }
    window.addEventListener('keydown', keyDownEvent, false)
  }, [])

  return (
    <div
      className={
        'flex h-[100svh] w-full items-center justify-center bg-gray-700'
      }
    >
      <div className={'relative aspect-video w-full'}>
        {slides.map((value, index) => (
          <div
            className={cn(
              'absolute inset-0 bg-gray-800',
              count === index ? 'visible' : 'invisible'
            )}
            style={{
              zIndex: index + 1,
            }}
            key={`slide_${value.key}`}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  )
}
