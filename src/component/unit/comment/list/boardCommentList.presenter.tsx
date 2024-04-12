import * as S from "./boardCommentList.styles";
import { Modal } from "antd";
import type { BoardCommentListUIIProps } from "./boardCommentList.types";

import type { ChangeEvent, MouseEvent } from "react";
import InfiniteScroll from "react-infinite-scroller";
import CommentItem from "../CommentItem";

export default function BoardCommentListUI(
  props: BoardCommentListUIIProps,
): JSX.Element {
  const onClickDeleteBtn = (event: MouseEvent<HTMLButtonElement>): void => {
    props.onToggleModal();
    props.setBoardID(event.currentTarget.id);
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
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments.map((el) => (
          <CommentItem
            key={el._id}
            el={el}
            onClickDeleteBtn={onClickDeleteBtn}
          ></CommentItem>
        )) ?? <></>}
      </InfiniteScroll>
    </S.Wrapper>
  );
}
