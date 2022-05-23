import { memo } from "react";
import ReactLoading from "react-loading";
import * as Styled from './style';

const Loader = () => {
  return (
    <Styled.LoaderWrap>
      <ReactLoading type="spin" color="#346cfd" />
    </Styled.LoaderWrap>
  );
};

export default memo(Loader);
