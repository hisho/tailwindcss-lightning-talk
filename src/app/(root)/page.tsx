'use client'

import { cn } from '@/src/util/cn/cn'
import { useEffect } from 'react'
import { useCounter } from 'react-use'
import { match } from 'ts-pattern'

const slides = [...Array(5)].map((_, i) => i)

export default function () {
  const [count, { dec, inc }] = useCounter(0, slides.length - 1, 0)
  const increment = () => inc(0.5)
  const decrement = () => dec(0.5)
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
        {slides.map((value) => (
          <div
            className={cn(
              'absolute inset-0 bg-gray-800',
              count === value ? 'block' : 'hidden'
            )}
            style={{
              zIndex: value + 1,
            }}
            key={`slide_${value}`}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  )
}
