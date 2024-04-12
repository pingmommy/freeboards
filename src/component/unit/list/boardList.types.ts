import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

export interface BoardListUIIProps {
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  data?: Pick<IQuery, "fetchBoards">;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  boardCount?: Pick<IQuery, "fetchBoardsCount">;
}
