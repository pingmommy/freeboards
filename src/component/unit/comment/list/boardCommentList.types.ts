import type { Dispatch, MouseEvent, SetStateAction } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface BoardCommentListUIIProps {
  // onChangePassWord: (event:ChangeEvent<HTMLInputElement>)=>void;
  onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onToggleModal: () => void;
  boardID: string;
  setBoardID: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  aaa: () => void;
  isModalOpen: boolean;
  data?: Pick<IQuery, "fetchBoardComments">;
  onLoadMore: () => void;
}
