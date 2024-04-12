import * as S from "./boardCommentList.styles";
import { Modal, Rate } from "antd";
import type { BoardCommentListUIIProps } from "./boardCommentList.types";
import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";
import InfiniteScroll from "react-infinite-scroller";
import CommentItem from "../CommentItem";

export default function BoardCommentListUI(
  props: BoardCommentListUIIProps,
): JSX.Element {
  const [myIndex, setIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onClickDeleteBtn = (event: MouseEvent<HTMLButtonElement>): void => {
    props.onToggleModal();
    props.setBoardID(event.currentTarget.id);
  };

  const onClickEditBtn = (event: MouseEvent<HTMLButtonElement>): void => {
    const qqq = [...myIndex];
    qqq[Number(event.currentTarget.id)] = true;
    setIndex(qqq);
  };

  const onChangePassWord = (event: ChangeEvent<HTMLInputElement>): void => {
    props.setPassword(event.currentTarget.value);
  };

  return (
    <S.Wrapper>
      {props.isModalOpen && (
        <Modal
          open={true}
          onOk={props.onClickDeleteComment}
          onCancel={props.onToggleModal}
        >
          비밀번호를 입력하세요.
          <input type="password" onChange={onChangePassWord} />
        </Modal>
      )}

      {props.data?.fetchBoardComments.map((el, index) => (
        <div key={index}>
          <S.InnerWrapper>
            <S.Avatar src="/images/avatar.png"></S.Avatar>
            <S.ContentsWrapper>
              <S.WriterWrapper>
                <S.Writer>{el.writer}</S.Writer>
                <Rate value={el?.rating} />
              </S.WriterWrapper>
              <S.Contents>{el.contents}</S.Contents>
              <S.CreatedAt>{el.createdAt.slice(0, 10)}</S.CreatedAt>
            </S.ContentsWrapper>
            <S.ButtonWrapper>
              <S.Button id={el._id} onClick={onClickDeleteBtn}>
                <S.ButtonImg src="/images/delete.png"></S.ButtonImg>
              </S.Button>

              <S.Button id={String(index)} onClick={onClickEditBtn}>
                <S.ButtonImg src="/images/edit.png"></S.ButtonImg>
              </S.Button>
            </S.ButtonWrapper>
          </S.InnerWrapper>
          <S.BottomLine></S.BottomLine>
        </div>
      ))}
    </S.Wrapper>
  );
}
