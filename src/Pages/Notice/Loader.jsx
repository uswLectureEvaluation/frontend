import { memo } from "react";
import * as Styled from "./styled";
import ReactLoading from "react-loading";

const Loader = () => {
  return (
    <Styled.LoaderWrap>
      <ReactLoading type="spin" color="#A593E0" />
    </Styled.LoaderWrap>
  );
};

export default memo(Loader);