import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { LIKE_BOARD, DISLIKE_BOARD } from "./likeBoard.queries";
import LikeBoardUI from "./likeBoard.presenter";
import type {
  IMutation,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
} from "../../../commons/types/generated/types";
import type { ILikeBoardProps } from "./likeBoard.types";

export default function LikeBoard(props: ILikeBoardProps): JSX.Element {
  const router = useRouter();

  const [likeNumber, setLikeNumber] = useState(0);
  const [dislikeNumber, setDislikeNumber] = useState(0);

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const onClickLikeBoard = async (): Promise<void> => {
    if (typeof router.query.boardId !== "string") return;
    const result = await likeBoard({
      variables: {
        boardId: router.query.boardId,
      },
    });

    setLikeNumber(result?.data?.likeBoard ?? 0);
    console.log(props.likeNumber);
  };

  const onClickDislikeBoard = async (): Promise<void> => {
    if (typeof router.query.boardId !== "string") return;

    const result = await dislikeBoard({
      variables: {
        boardId: router.query.boardId,
      },
    });

    setDislikeNumber(result?.data?.dislikeBoard ?? 0);
  };

  return (
    <LikeBoardUI
      onClickLikeBoard={onClickLikeBoard}
      onClickDislikeBoard={onClickDislikeBoard}
      likeNumber={likeNumber}
      dislikeNumber={dislikeNumber}
      propsLikeNumber={props.likeNumber}
      propsDisLikeNumber={props.dislikeNumber}
    />
  );
}
