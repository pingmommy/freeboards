import BoardDetailUI from "./boardDetail.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARD, DELETE_BOARD } from "./boardDetail.queries";
import type {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: router.query.boardId,
      },
    },
  );

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickBoardList = (): void => {
    void router.push("/boards");
  };

  const onClickDelete = (): void => {
    if (typeof router.query.boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }

    void deleteBoard({
      variables: {
        boardId: router.query.boardId,
      },
    });
    void router.push("/boards");
  };

  const onClickBoardEdit = (): void => {
    if (typeof router.query.boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    void router.push(`/boards/${router.query.boardId}/edit`);
  };

  console.log(data?.fetchBoard.images?.[0]);
  return (
    <BoardDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickBoardList={onClickBoardList}
      onClickBoardEdit={onClickBoardEdit}
    ></BoardDetailUI>
  );
}
