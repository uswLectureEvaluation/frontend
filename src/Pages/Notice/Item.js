import { memo } from "react";
import * as Styled from "./styled";

const Item = ({ number }) => {

    const onClick = () => {
        alert(number)
    }
  return (
    <div style={{ width: "50%" }} onClick={onClick}>
      <div
        style={{
          border: "1.5px solid #f1f1f1",
          padding: "0 25px 20px 25px",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      >
        <div style={{ marginBottom: "15px" }} />
        <Styled.TitleWrapper>
          <Styled.TitleWrapper>
            <Styled.Title>{number}</Styled.Title>
          </Styled.TitleWrapper>
          <Styled.Option>{number}</Styled.Option>
        </Styled.TitleWrapper>
      </div>
    </div>
  );
};

export default memo(Item);
