import * as React from "react";
import { Layout } from "../../../components/Layout";
import { Container } from "../../../components/Container";
import { Lyric } from "../../../components/Lyric";
import { Credit } from "../../../components/Credit";

const Page: React.FunctionComponent = () => (
  <Layout title="REVOC - Tell your World">
    <Container>
      <h1>Tell your World</h1>
      <br />
      <br />
      <Credit
        credit={{
          Title: "Tell your World",
          Original: "livetune ft. Hatsune Miku",
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
            "形のない気持ち忘れないように",
            "決まりきったレイアウトを消した",
            "ふと口ずさんだフレーズを掴まえて",
            "胸に秘めた言葉乗せ空に解き放つの"
          ],
          [
            "君に伝えたいことが",
            "君に届けたいことが",
            "たくさんの点は線になって",
            "遠く彼方へと響く"
          ],
          [
            "君に伝えたい言葉",
            "君に届けたい音が",
            "いくつもの線は円になって",
            "全て繋げてく　どこにだって"
          ],
          [
            "真っ白に澄んだ光は君のよう",
            "かざした手の隙間を伝う声が",
            "ふと動いた指先刻むリズムに",
            "ありったけの言葉乗せ空に解き放つの"
          ],
          [
            "君に伝えたいことが",
            "君に届けたいことが",
            "たくさんの点は線になって",
            "遠く彼方まで穿つ"
          ],
          [
            "君に伝えたいことが",
            "君に届けたい音が",
            "いくつもの線は円になって",
            "全て繋げてく　どこにだって",
            "奏でていた変わらない日々を疑わずに",
            "朝は誰かがくれるものだと思っていた",
            "一瞬でも信じた音　景色を揺らすの",
            "教えてよ　君だけの世界"
          ],
          [
            "君が伝えたいことが",
            "君が届けたいことが",
            "たくさんの点は線になって",
            "遠く彼方へと響く"
          ],
          [
            "君が伝えたい言葉",
            "君が届けたい音は",
            "いくつもの線は円になって",
            "全て繋げてく　どこにだって"
          ]
        ]}
        meaning={[
          [
            `Not to forget the intangible feelings`,
            `I deleted the routine layout`,
            `Grasp the phrase I happened to be humming`,
            `Spread secret words of the heart into the sky`
          ],
          [
            `I want to tell you`,
            `I want to give you`,
            `Nodes of feelings form a link`,
            `Echoing to the faraway distance`
          ],
          [
            `Words I want to tell you`,
            `Sounds I want to give you`,
            `Links of feelings form a world`,
            `Connecting everything Connecting to everywhere`
          ],
          [
            `The pure white light feels like you`,
            `The voice flows through my hand held against the light`,
            `On the rhythm my fingertips suddenly make`,
            `Spread all words of the heart into the sky`
          ],
          [
            `I want to tell you`,
            `I want to give you`,
            `Nodes of feelings form a link`,
            `Reaching over the faraway distance`
          ],
          [
            `Words I want to tell you`,
            `Sounds I want to give you`,
            `Links of feelings form a world`,
            `Connecting everything Connecting to everywhere`,
            `I had been playing the tune without a doubt about the rhythm of my days`,
            `I had thought the coming of mornings is a given`,
            `The sounds I believe in even for a second, shift my sceneries`,
            `Tell your world`
          ],
          [
            `You want to tell`,
            `You want to give`,
            `Nodes of feelings form a link`,
            `Echoing to the faraway distance`
          ],
          [
            `Words you want to tell`,
            `Sounds you want to give`,
            `Links of feelings form a world`,
            `Connecting everything Connecting to everywhere`
          ]
        ]}
      />
    </Container>
  </Layout>
);

export default Page;
