import type { IQuery } from "../../../../commons/types/generated/types";

export interface BoardDetailUIIProps {
  onClickDelete: () => void;
  onClickBoardList: () => void;
  onClickBoardEdit: () => void;
  data?: Pick<IQuery, "fetchBoard">;
}
