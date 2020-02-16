import React from "react";

type Props = {
  original: string[][];
  meaning: string[][];
};

export const Lyric: React.FunctionComponent<Props> = ({
  original,
  meaning
}) => {
  const zipLyric = original.map((originalSection, i) => {
    const meaningSection = meaning[i] ? meaning[i] : [];
    return {
      original: originalSection,
      meaning: meaningSection
    };
  });
  return (
    <div>
      <table className="lyric">
        {zipLyric.map(section => (
          <tr>
            <td>
              {section.original.map(line => (
                <div>{line}</div>
              ))}
            </td>
            <td>
              {section.meaning.map(line => (
                <div>{line}</div>
              ))}
            </td>
          </tr>
        ))}
      </table>
      <style jsx>
        {`
          .lyric {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};
