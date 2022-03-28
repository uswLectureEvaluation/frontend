import { memo } from "react";
import * as Styled from "./styled";
import ReactLoading from "react-loading";

const Loader = () => {
  return (
    <Styled.LoaderWrap>
      <ReactLoading type="spin" color='#3dd3c4' />
    </Styled.LoaderWrap>
  );
};

export default memo(Loader);