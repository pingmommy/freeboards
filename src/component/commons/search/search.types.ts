import type { ChangeEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

export interface ISearchKeywordProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  onchangeKeyword: (value: string) => void;
}

export interface ISearchKeywordUIProps {
  onchangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onclickSearch: () => void;
}
