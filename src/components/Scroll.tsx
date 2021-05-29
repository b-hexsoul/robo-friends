import * as React from 'react';

type Props = {
  children?: JSX.Element
}

const Scroll = (props: Props) => {
  return (
    <div >
      {props.children}
    </div>
  );
};

export default Scroll;