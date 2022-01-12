import { FC } from "react";
import styled from "styled-components";

type Props = {
  memos: string[];
  onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = (props) => {
  const { memos, onClickDelete } = props;

  return (
    <SContainer>
      <p style={{ marginLeft: "16px" }}>TODO一覧</p>
      <ul>
        {memos.map((memo, index) => (
          <li key={memo}>
            <SMemoWrapper>
              <p style={{ marginLeft: "16px" }}>{memo}</p>
              <SButton onClick={() => onClickDelete(index)}>削除</SButton>
            </SMemoWrapper>
          </li>
        ))}
      </ul>
    </SContainer>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;
const SContainer = styled.div`
  border: solid 1px #ccc;
  paddin: 16px;
  margin: ;
`;
const SMemoWrapper = styled.div`
display: flex
alight-items: center
`;
