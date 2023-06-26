※過激な内容が含まれます

- tailwind cssとはなにか
- tailwind cssをなぜ採用したのか
  - css設計は破綻する
  - web制作からwebアプリ制作まで利用できる
  - scssが使いづらくなってしまった
- tailwind cssのデメリット
  - tailwind独自の書き方を覚える必要がある(学習コストがかかる)
    - エンジニアで学習コストって言ってるやついる？
  - htmlが汚くなるんでしょ？
    - きちんとしたcss設計ができれば汚くならない
  - ループが使えない？
    - 今すぐにJamstackでコーディングしよう
- tailwind cssのメリット
  - cssが書ければかける
  - 命名を考える必要がない
  - ファイル移動がめんどい
  - 他人の書いたコードを見たくない
  - 再利用しないコードに名前をつけなくてよい
- css設計を放棄してるんでしょ？
  - component以外にはcss設計をする必要がない ≒ tailwindのdesign
- 具体的な例を出す
  - headerやfooterなど再利用しない部分の命名考えるのだるくね？ 
  - 例えばよく見るカードレイアウトのリストをカードの部分
  - ul liはただ横並びになっているだけなのでここのclass名を考えるのがめんどくさい
  - そこでtailwind cssを使うとどうなるか
  - 逆にcard componentは独立しているのでtailwind cssでもいいしcss modulesでもいい
- vs shadow DOM
  - shadow DOMが使える時代が来ればいいですね
  - そしたら我々はtailwind cssを捨てるだけです

```tsx
const Page = () => {
  return <div>
    <ul>
      <li>
        <article>
          <div>
            <img src="" alt="" />
          </div>
          <header>
            <h1>this is card component</h1>
            <time>2030.06.30</time>
          </header>
          <div>
            <p>test</p>
          </div>
          <footer>
            footer
          </footer>
        </article>
      </li>
    </ul>
  </div>
}
```