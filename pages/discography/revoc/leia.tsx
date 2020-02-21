import * as React from "react";
import { Layout } from "../../../components/Layout";
import { Container } from "../../../components/Container";
import { Lyric } from "../../../components/Lyric";
import { Credit } from "../../../components/Credit";

const Page: React.FunctionComponent = () => (
  <Layout title="REVOC - Leia">
    <Container>
      <h1>Leia</h1>
      <br />
      <br />
      <Credit
        credit={{
          Title: "Leia",
          Original: "Yuyoyuppe ft. Megurine Luka",
          Vocal: "Mayuko",
          Arrangement: "Era"
        }}
      />
      <br />
      <br />
      <br />
      <Lyric
        original={[
          [
            "君の声を聞かせて　澱よどむ心を祓はらって",
            "偽りのキャンバスを　塗りつぶしてくんだ",
            "今日も"
          ],
          [
            "終末のない幻想に　触れた気がした",
            "「なんて呼べばいいんだろう」　変わらない温度",
            "微笑が内臓を　食いつぶす前に",
            "今日を閉じ込めたよ　馳せる未来は灰色"
          ],
          ["望むなら空想　寂れた嘘", "叶うならもっと　聞かせて"],
          [
            "心から溢れてた　愛しさをちりばめて",
            "君の声に重ねた　恍惚こうこつは遥か",
            "形あるものならば　崩れゆくものならば",
            "この両目は要らない　僕を包んで"
          ],
          ["Leia…"],
          [
            "終末のない幻想は　悲しく笑った",
            "「なんて呼べばいいんだろう」　響く言葉は灰色"
          ],
          [
            "永遠はそっと　息をとめて",
            "僕を置いてった　絶望へと",
            "針の音が止まれば　この世界は終わるよ",
            "願うだけの言葉は　意味をもたなかった",
            "もう少しだけ笑って　もう少しだけ祈って",
            "聞こえないならもういっそ　僕を殺してよ"
          ],
          [
            "君の声を聞かせて　澱よどむ心を祓はらって",
            "偽りのキャンバスを　君と葬るんだ",
            "君と僕の証を　残す術がないなら",
            "温もりを焼きつけて　僕を殺して"
          ],
          ["Leia...", "Leia..."]
        ]}
        meaning={[
          [
            `Let me hear your voice, getting rid of this sunken heart`,
            `I'm hiding away the canvas of falseness`,
            `again today`
          ],
          [
            `It feels like I have touched the endless illusion`,
            `"What should I call it" The unchanging temperature`,
            `Before the smile chews up my insides`,
            `I locked up today, my racing future is ash colored`
          ],
          [
            `If I wish for it, it's just my imagination; Rust-covered lies`,
            `If it comes true, tell me about it`
          ],
          [
            `Adorning the loveliness overflowed from my heart`,
            `I piled it with your voice, bliss is far away`,
            `If it's something with shape, if it's something breaking down`,
            `These eyes are useless, hold me`
          ],
          ["Leia…"],
          [
            `The endless illusion laughed sadly`,
            `"What should I call it" Resounding words are ash colored`
          ],
          [
            `Softly, eternity stopped breathing`,
            `and left me in despair`,
            `When the ticking stops this world will end`,
            `Words that can only wish couldn't have meaning`,
            `Smile a little, pray a little`,
            `If it isn't heard, just kill me`
          ],
          [
            `Let me hear your voice, please get rid of this sunken heart`,
            `I'm going to hide the canvas of falseness with you`,
            `If I can't leave the evidence for your and my existence`,
            `Engrave me with warmth and kill me`
          ],
          ["Leia...", "Leia..."]
        ]}
      />
    </Container>
  </Layout>
);

export default Page;
