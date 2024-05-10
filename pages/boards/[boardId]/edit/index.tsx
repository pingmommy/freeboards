import { useRouter } from "next/router";
import BoardWrite from "../../../../src/component/unit/boards/write/boardWrite.container";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD } from "../../../../src/component/unit/boards/detail/boardDetail.queries";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";

export default function BoardEditPage(): JSX.Element {
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

  return <BoardWrite isEdit={true} data={data} />;
}
