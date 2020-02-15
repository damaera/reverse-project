import React from "react";

type Props = {};

export const Container: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div>
      <div className="container">{children}</div>
      <style jsx>
        {`
          .container {
            max-width: 960px;
            width: 100%;
            margin: 0 auto;
          }
        `}
      </style>
    </div>
  );
};
