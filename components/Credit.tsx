import React from "react";

type Props = {
  credit: {
    [key: string]: string;
  };
};

export const Credit: React.FunctionComponent<Props> = ({ credit }) => {
  return (
    <div>
      <table className="credit">
        {Object.entries(credit).map(val => (
          <tr>
            <td>{val[0]}</td>
            <td>:</td>
            <td>{val[1]}</td>
          </tr>
        ))}
      </table>
      <style jsx>
        {`
          .credit {
          }
        `}
      </style>
    </div>
  );
};
