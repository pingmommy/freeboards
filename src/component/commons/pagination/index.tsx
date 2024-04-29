import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

interface IPaginationProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;

  count?: number;
}

export default function Pagination(props: IPaginationProps): JSX.Element {
  const [startPage, setStartPage] = useState(1);

  const lastPage = Math.ceil((props.count ?? 10) / 10);

  useEffect(() => {
    setStartPage(1);
  }, [props.count]);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void props.refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;

    setStartPage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    if (lastPage >= startPage + 10) {
      setStartPage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
    console.log(lastPage);
  };

  return (
    <div>
      <span
        onClick={onClickPrevPage}
        style={{ margin: "0 10px", fontSize: "20px" }}
      >
        이전
      </span>
      {new Array(10).fill(0).map(
        (_, index) =>
          lastPage >= startPage + index && (
            <span
              onClick={onClickPage}
              id={String(index + startPage)}
              key={index + startPage}
              style={{ margin: "0 10px", fontSize: "30px" }}
            >
              {index + startPage}
            </span>
          ),
      )}
      <span
        onClick={onClickNextPage}
        style={{ margin: "0 10px", fontSize: "20px" }}
      >
        다음
      </span>
    </div>
  );
}
