import * as React from "react";
import { Layout } from "../../../components/Layout";
import { Container } from "../../../components/Container";
import { Lyric } from "../../../components/Lyric";
import { Credit } from "../../../components/Credit";

const Page: React.FunctionComponent = () => (
  <Layout title="REVOC - Koi wa Sensou">
    <Container>
      <h1>Asu no Yozora Shoukaihan</h1>
      <h3>Night Sky Patrol of Tommorow</h3>
      <br />
      <br />
      <Credit
        credit={{
          Title:
            "アスノヨゾラ哨戒班 / Asu no Yozora Shoukaihan / Night Sky Patrol of Tomorrow",
          Original: "Orangestar ft. IA",
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
            "気分次第です僕は",
            "敵を選んで戦う少年",
            "叶えたい未来も無くて",
            "夢に描かれるのを待ってた",
            "そのくせ未来が怖くて",
            "明日を嫌って過去に願って",
            "もう如何どうしようも無くなって叫ぶんだ",
            "明日よ明日よもう来ないでよって"
          ],
          [
            "そんな僕を置いて",
            "月は沈み陽は昇る",
            "けどその夜よは違ったんだ",
            "君は僕の手を"
          ],
          [
            "空へ舞う　世界の彼方",
            "闇を照らす魁星かいせい",
            "「君と僕もさ、",
            "また明日へ向かっていこう」"
          ],
          [
            "夢で終わってしまうのならば",
            "昨日を変えさせて",
            "なんて言わないから",
            "また明日も君とこうやって",
            "笑わせて"
          ],
          [
            "あれから世界は変わったって",
            "本気で思ったって",
            "期待したって変えようとしたって",
            "未来は残酷で",
            "それでもいつだって君と見ていた",
            "世界は本当に綺麗だった",
            "忘れてないさ",
            "思い出せるように仕舞ってるの"
          ],
          [
            "君がいてもいなくても翔べるなんて妄想",
            "独りじゃ歩くことさえ僕は",
            "しないまま藍色の風に吐いた幻想",
            "壊してくれって願って踠もがいたって"
          ],
          ["願ったんなら叶えてしまえやって", "Eh...　君は言って"],
          [
            "また明日の夜に",
            "逢いに行こうと思うが",
            "どうかな君はいないかな",
            "それでもいつまでも僕ら一つだから",
            "またね　Sky Arrow　笑ってよう",
            "未来を少しでも君といたいから",
            "叫ぼう",
            "今日の日をいつか思い出せ",
            "未来の僕ら"
          ]
        ]}
        meaning={[
          [
            "I'm a boy who picks out his enemies to fight",
            "depending on whatever suits my mood.",
            "No hopes for the future,",
            "I wanted to be drawn in a dream",
            "and yet I fear the future,",
            "hating tomorrow, wishing towards the past",
            "There's no longer anything I can do, so I shout,",
            '"Tomorrow, tomorrow, please, don\'t come,"'
          ],
          [
            "Leaving the old me behind,",
            "the moon sets, and the sun rises",
            "but that night was different from all the others.",
            "You took my hand…"
          ],
          [
            "The Big Dipper's first star illuminates the darkness,",
            "dancing into the sky and beyond this world",
            "\"Let's start facing towards tomorrow again,",
            'both you and me"'
          ],
          [
            '"If this is to end as a dream,',
            'at least allow me to change yesterday..."',
            "I won't say anything like that,",
            "so let me keep smiling together with you,",
            "tomorrow as well"
          ],
          [
            "Even if I think that",
            "the world truly changed,",
            "and even if I tried to hope or change,",
            "the future was cruel",
            "even so, the world I always watched",
            "with you was truly beautiful",
            "I still haven't forgotten that,",
            "I've placed it in my heart so I can remember"
          ],
          [
            "daydreaming about flying with or without you,",
            "or even just taking a walk alone",
            "I can't do either of those; and begged for someone to break down",
            "the illusions formed from the indigo wind"
          ],
          [
            '"If you want it, then make it come true yourself,"',
            "Eh... you said that…"
          ],
          [
            `I think about I want`,
            `to go see you again tomorrow night,`,
            `but I don't know, maybe you won't be there`,
            `but even so, we will always be one`,
            `So, see you later, Sky Arrow let's smile on`,
            `I want to be together with you in the future, however short our time may be,`,
            `So I'll shout out`,
            `"Remember this day someday in the future,`,
            `whoever we are then..."`
          ]
        ]}
      />
    </Container>
  </Layout>
);

export default Page;
