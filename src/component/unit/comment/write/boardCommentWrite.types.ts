import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import type { IBoardComment } from "../../../../commons/types/generated/types";

export interface IBoardCommentWriteUIIProps {
  onchangeWriter?: (event: ChangeEvent<HTMLInputElement>) => void;
  onchangePassword?: (event: ChangeEvent<HTMLInputElement>) => void;
  onchangeContents?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCommentWrite?: () => void;
  onClickCommentUpdate?: (event: MouseEvent<HTMLButtonElement>) => void;
  setRating?: Dispatch<SetStateAction<number>>;
  el?: IBoardComment;
  writer?: string;
  password?: string;
  contents?: string;
  isEdit?: boolean;
  rating?: number;
  aaa?: (value: number) => void;
}
