import type { IBoardComment } from "../../../../commons/types/generated/types";
import * as S from "./commentItem.styles";
import { Rate } from "antd";
import type { MouseEvent } from "react";
import { useState } from "react";
import BoardCommentWrite from "../write/boardCommentWrite.container";

interface ICommentItemProps {
  el: IBoardComment;
  onClickDeleteBtn: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function CommentItem(props: ICommentItemProps): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEditBtn = (): void => {
    setIsEdit(true);
  };

  return (
    <div style={{ width: "1200px" }}>
      {!isEdit ? (
        <>
          <S.InnerWrapper>
            <S.Avatar src="/images/avatar.png"></S.Avatar>
            <S.ContentsWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el.writer}</S.Writer>
                <Rate value={props.el?.rating} disabled />
              </S.WriterWrapper>
              <S.Contents>{props.el.contents}</S.Contents>
              <S.CreatedAt>{props.el.createdAt.slice(0, 10)}</S.CreatedAt>
            </S.ContentsWrapper>
            <S.ButtonWrapper>
              <S.Button id={props.el._id} onClick={props.onClickDeleteBtn}>
                <S.ButtonImg src="/images/delete.png"></S.ButtonImg>
              </S.Button>
              <S.Button onClick={onClickEditBtn}>
                <S.ButtonImg src="/images/edit.png"></S.ButtonImg>
              </S.Button>
            </S.ButtonWrapper>
          </S.InnerWrapper>
          <S.BottomLine></S.BottomLine>
        </>
      ) : (
        <BoardCommentWrite
          isEdit={isEdit}
          el={props.el}
          setIsEdit={setIsEdit}
        />
      )}
    </div>
  );
}
