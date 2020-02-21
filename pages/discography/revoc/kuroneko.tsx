import * as React from "react";
import { Layout } from "../../../components/Layout";
import { Container } from "../../../components/Container";
import { Lyric } from "../../../components/Lyric";
import { Credit } from "../../../components/Credit";

const Page: React.FunctionComponent = () => (
  <Layout title="REVOC - Kuroneko">
    <Container>
      <h1>Kuroneko</h1>
      <h3>Black Cat</h3>
      <br />
      <br />
      <Credit
        credit={{
          Title: "黒猫 / Kuroneko / Black Cat",
          Original: "Akagami feat. GUMI",
          Vocal: "A i k a",
          Arrangement: "Era"
        }}
      />
      <br />
      <br />
      <br />
      <Lyric
        original={[
          [
            "このまま　気付かないの？",
            "それだって構わないと誓ったのに",
            "その声　匂いが　近づいてくると",
            "駆けだしている"
          ],
          [
            "同じことば話し　同じ星見ていた頃",
            "隣にいればそれだけで",
            "愛にあくびする　仔猫になれた気がした"
          ],
          [
            "通りすぎないで　お願い　ボクはここにいるよ",
            "キミに出逢う　その為に生まれたよ",
            "願いの星が流れた宇宙ソラで"
          ],
          [
            "遠くなってくキミの影　走って追いかける",
            "届くように　声の限りに鳴くよ",
            "どうか振り向いて欲しい　この奇跡に",
            "あの日のボクは見てた　森の中　何度も何度も",
            "慟哭どうこくに揺れた背中",
            "時は過ぎ　キミはすべて忘れてしまった",
            "ボクがいた世界なんて　記憶の彼方へ",
            "そうボクだって願ってたけど"
          ],

          [
            "通りすぎないで　お願い　ボクはここにいるよ",
            "キミに出逢う　その為に生まれたよ",
            "願いの星が流れた宇宙ソラで"
          ],
          [
            "もう力尽きていいと　走って追いかけて",
            "絡んだ足　涙などなく泣いた",
            "壊れそうな影だけが　知る奇跡に"
          ]
        ]}
        meaning={[
          [
            `At this rate,won't you notice me?`,
            `While I vowed that I would not even care about that,`,
            `I am starting to run when that voice and smell`,
            `Are getting closer.`
          ],
          [
            `A story in the same words about when I was looking at the same stars,`,
            `Just only being next to you`,
            `I had a feeling that I could be a kitten who yawned in love.`
          ],
          [
            `Do not pass by me, I beg you. I am right here.`,
            `I was born for the sake to meet you`,
            `In the cosmos (SKY) where a wishing star flowed--`
          ],
          [
            `Is the shadow of you who is growing distant. I run and chase after you.`,
            `I cry in the limits of my voice, so that it will reach You`,
            `Please, I want you to turn around, to this miracle.`,
            `Me of that day was watching, within the forest, many times, many times.`,
            `The back that swayed in lamentation.`,
            `Time passing, I totally forgot everything about you.`,
            `The world where I was or something beyond my memory--`,
            `Though even I was wishing so--`
          ],

          [
            `Do not pass by me, I beg you. I am right here.`,
            `I was born for the sake to meet you`,
            `In the cosmos (SKY) where a wishing star flowed--`
          ],
          [
            `Saying it's fine if I use up all of my strength, my legs that ran and chased after you`,
            `And got tangled. I cried without any tears or the like,`,
            `In the miracle that only a shadow that likely to break knew.`
          ]
        ]}
      />
    </Container>
  </Layout>
);

export default Page;
