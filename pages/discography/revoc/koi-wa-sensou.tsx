import * as React from "react";
import { Layout } from "../../../components/Layout";
import { Container } from "../../../components/Container";
import { Lyric } from "../../../components/Lyric";
import { Credit } from "../../../components/Credit";

const Page: React.FunctionComponent = () => (
  <Layout title="REVOC - Koi wa Sensou">
    <Container>
      <h1>Koi wa Sensou</h1>
      <h3>Love is War</h3>
      <br />
      <br />
      <Credit
        credit={{
          Title: "恋は戦争 / Koi wa Sensou / Love is War",
          Original: "Supercell ft. Hatsune Miku",
          Vocal: "A i k a",
          Arrangement: "Era"
        }}
      />
      <br />
      <br />
      <br />
      <Lyric
        original={[
          ["もう行く場がないわ　この恋の熱量", "Ahh..."],
          [
            "灰色の雲　モノクロの喧騒",
            "日差しはかげり",
            "夕暮れは色を変えていく"
          ],
          ["嗚呼　世界がにじんで", "それでも好きでいられるかなんて"],
          ["わかってる　けどどうすればいいの", "どうしたら　どうすれば"],
          ["バカだな　わたし・・・・・・"],
          [
            "始めるのよ　これは戦争",
            "嬉しそうなキミをみるなんて",
            "切なる恋　それは罪",
            "見せてあげる　わたしの想いを"
          ],
          ["叫んでみた　メガホンは壊れたの"],
          ["どれだけ背伸びしたって", "君の視界に入らない"],
          ["嗚呼　いつの間にか晴れた空", "全然似合わない"],
          ["気持ちが抑えられなくて", "どうしたら　どうすれば"],
          ["泣いてなんか　ないんだからね", "大好き"],
          [
            "たたかうのよ　ハートを撃て",
            "手段なんて　選んでられない",
            "スカート　ひらり　見せ付けるのよ",
            "君の視線奪ってみせるの"
          ],
          ["迎撃用意", "戦況は未だ不利なのです"],
          ["恋は盲目", "君の口づけて目が覚めるの！"]
        ]}
        meaning={[
          ["Now there's no where to go, in the heat of this love", "Ahh..."],
          [
            "Gray clouds, monochrome bustles",
            "Sunlight cast shadows",
            "Dusk is changing its color"
          ],
          ["Ahh...The world is blurred", "Even so I will still love you"],
          [
            "I know this, though what should I do?",
            "What can I...How can I..."
          ],
          ["What a fool...I am..."],
          [
            "Let's begin, this is war!",
            "Oh, to see you pleased with someone else!",
            "Earnest love, that is sin",
            "I will show how I feel"
          ],
          ["The Megaphone I tried shouting in was broken"],
          [
            "How hard I try to overreach myself",
            "I would fail to get into your sight"
          ],
          ["Ahh, a clear sky slid by", "But it doesn't suit at all"],
          ["I couldn't get a hold of my feelings", "How can I...What can I..."],
          ["Crying...no, I'm not...", "I love you"],
          [
            "Fight it out, shoot right to the heart",
            "I don't have a choice",
            "Show off my skirt flap",
            "I shall make you gaze upon me"
          ],
          ["Get ready to intercept", "War situation still a drawback"],
          ["Love is blind…", "Yes, I'll be awaken by your kiss"]
        ]}
      />
    </Container>
  </Layout>
);

export default Page;
