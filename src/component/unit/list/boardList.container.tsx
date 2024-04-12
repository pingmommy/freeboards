import { useQuery } from "@apollo/client";
import BoardListUI from "./boardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./boardList.queries";
import { useRouter } from "next/router";
import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";

export default function BoardList(): JSX.Element {
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: boardCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickMoveToBoardNew = (): void => {
    void router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (
    event: MouseEvent<HTMLDivElement>,
  ): void => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };
  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      refetch={refetch}
      boardCount={boardCount}
    />
  );
}
