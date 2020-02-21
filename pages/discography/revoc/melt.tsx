import * as React from "react";
import { Layout } from "../../../components/Layout";
import { Container } from "../../../components/Container";
import { Lyric } from "../../../components/Lyric";
import { Credit } from "../../../components/Credit";

const Page: React.FunctionComponent = () => (
  <Layout title="REVOC - Melt">
    <Container>
      <h1>Melt</h1>
      <br />
      <br />
      <Credit
        credit={{
          Title: "メルト / Melt",
          Original: "Supercell ft. Hatsune Miku",
          Vocal: "Giita",
          Arrangement: "Era"
        }}
      />
      <br />
      <br />
      <br />
      <Lyric
        original={[
          [
            "朝目が覚めて真っ先に思い浮かぶ君のこと。",
            "思い切って前髪を切った「どうしたの？」って聞かれたくて。"
          ],
          [
            "ピンクのスカートお花の髪飾りさして出かけるの",
            "の今日の私はかわいいのよ！"
          ],
          [
            "メルト　溶けてしまいそう",
            "好きだなんて絶対に言えない。。。",
            "だけど　メルト",
            "目も会わせられない",
            "恋に恋なんてしないわ私",
            "だって　君のことが。。。好きなの"
          ],
          [
            "天気予報がウソをついた土砂降りの雨が降る。",
            "カバンに入れたままのオリタタミ傘うれしくない ためいきをついた そんなとき"
          ],
          [
            "「しょうがないから入ってやる」なんて",
            "隣にいる君が笑う",
            "恋に落ちる音がした"
          ],
          [
            "メルト　息が詰まりそう",
            "君に触れてる右手が震える",
            "高鳴る胸",
            "はんぶんこの傘",
            "手を伸ばせば届く距離",
            "どうしよう？！",
            "想いよ届け君に"
          ],
          ["お願い時間をとめてめ泣きそうなの", "でも嬉しくて死んでしまうわ！"],
          [
            "メルト　駅についてしまう。。。",
            "もう会えない近くて遠いよ",
            "だから　メルト",
            "手をつないで歩きたい！",
            "もうバイバイしなくちゃいけないの？",
            "今すぐ私を抱きしめて！",
            "。。。なんてね"
          ]
        ]}
        meaning={[
          [
            `When I woke up this morning, the first thing I thought of was you`,
            `I made up my mind, and cut my bangs short, just so you'd ask me "Why?"`
          ],

          [
            `Pink skirt, flower pin in my hair`,
            `I'm going out. I'm looking cute today!`
          ],
          [
            `Melt! I feel like I'm gonna melt away`,
            `I can't tell you I like you, but then I...`,
            `Melt!`,
            `I can't even look you in the eye`,
            `I won't fall for love, not me`,
            `It's just that... I really do like you`
          ],
          [
            `The weather report lied, it's pouring down`,
            `My umbrella still folded in my bag won't do So I gave a sigh`
          ],
          [
            `"I guess I'll have to let you in"`,
            `Beside me you say, laughing`,
            `That was the sound that made me fall in love`
          ],
          [
            `Melt! I can hardly breathe`,
            `My hand, touching yours, is trembling`,
            `My heart is racing`,
            `under this half of the umbrella`,
            `If you should stretch out your hand to close the distance`,
            `What'll I do...?!`,
            `My feelings will reach you`
          ],
          [
            `I wish time would stop, I feel like I could cry`,
            `So happy, I feel like I could die!`
          ],
          [
            `Melt! Pulling into the station`,
            `The end of the line for us, so near, so far`,
            `Melt!`,
            `I want to hold your hand in mine`,
            `Do we already have to say goodbye?`,
            `I want you to take me in your arms!`,
            `...You wish!`
          ]
        ]}
      />
    </Container>
  </Layout>
);

export default Page;
