import image from '@/src/app/(root)/_image/profile.jpg'
import { Presenter } from '@/src/app/(root)/_template/presenter'
import { createFontSize } from '@/src/util/createFontSize/createFontSize'

export const PresenterSection = () => {
  return (
    <Presenter imageSrc={image}>
      <div>
        <div className={'w-fit'}>
          <h1 className={'font-bold leading-tight'} style={createFontSize(80)}>
            Hisho Ohmasu
          </h1>
          <p className={'text-center font-bold'} style={createFontSize(32)}>
            Frontend Developer
          </p>
        </div>
        <div className={'mt-[5%] leading-relaxed'}>
          <p style={createFontSize(28)}>
            TypeScriptとNext.jsのApp RouterとGraphQLが好き
          </p>
          <p style={createFontSize(28)}>
            趣味は音楽で、よくライブやフェスに行きます🤟
          </p>
          <p style={createFontSize(28)}>
            最近の推しアーティストははPEOPLE 1です🐶
          </p>
        </div>
      </div>
    </Presenter>
  )
}
