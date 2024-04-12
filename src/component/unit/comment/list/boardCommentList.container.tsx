import { useMutation, useQuery } from "@apollo/client";
import BoardCommentListUI from "./boardCommentList.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./boardCommentList.queries";
import { useRouter } from "next/router";
import type { MouseEvent } from "react";
import { useState } from "react";
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardCommentList(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [boardID, setBoardId] = useState("");

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onToggleModal = (): void => {
    setIsModalOpen((prev) => !prev);
  };

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10) + 1,
        boardId: router.query.boardId,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  const aaa = (): void => {
    console.log(data?.fetchBoardComments.length);
  };

  const onClickDeleteComment = async (
    event: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    onToggleModal();
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: boardID,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (err) {
      if (err instanceof Error) alert(err.message);
    }
  };

  return (
    <BoardCommentListUI
      data={data}
      onClickDeleteComment={onClickDeleteComment}
      isModalOpen={isModalOpen}
      onToggleModal={onToggleModal}
      boardID={boardID}
      setBoardID={setBoardId}
      setPassword={setPassword}
      aaa={aaa}
      onLoadMore={onLoadMore}
    />
  );
}
