import React from 'react';
import classNames from 'classnames';

type RichTextProps = {
    keepMarginTop?: boolean;
    keepMarginBottom?: boolean;
}

const RichText: React.FC<RichTextProps> = function ({ children, keepMarginTop, keepMarginBottom }) {
  return (
    <div
      className={classNames('s-typography', {
        '-keep-margin-top': keepMarginTop,
        '-keep-margin-bottom': keepMarginBottom,
      })}
    >
      { children }
    </div>
  );
};

RichText.defaultProps = {
  keepMarginTop: false,
  keepMarginBottom: false,
};

export default RichText;
