import { useMutation } from "@apollo/client";
import BoardCommentWriteUI from "./boardCommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./boardCommentWrite.queries";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../list/boardCommentList.queries";
import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import type {
  IBoardComment,
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";

interface IBoardCommentWriteProps {
  el?: IBoardComment;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  isEdit?: boolean;
}

export default function BoardCommentWrite(
  props: IBoardCommentWriteProps,
): JSX.Element {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0.0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const onchangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };
  const onchangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };
  const onchangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);
  };

  const aaa = (value: number): void => {
    setRating(value);
    console.log(value);
  };

  const onClickCommentWrite = async (): Promise<void> => {
    console.log(rating);
    try {
      if (typeof router.query.boardId !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
    setWriter("");
    setPassword("");
    setContents("");
    setRating(0.0);
  };

  const onClickCommentUpdate = async (
    event: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    const password = prompt("비밀번호를 입력하세요");
    await updateBoardComment({
      variables: {
        updateBoardCommentInput: { contents },
        password,
        boardCommentId: event.currentTarget.id,
      },

      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: {
            boardId: router.query.boardId,
          },
        },
      ],
    });
    props.setIsEdit?.(false);
  };

  return (
    <>
      <BoardCommentWriteUI
        onchangeWriter={onchangeWriter}
        onchangePassword={onchangePassword}
        onchangeContents={onchangeContents}
        onClickCommentWrite={onClickCommentWrite}
        onClickCommentUpdate={onClickCommentUpdate}
        setRating={setRating}
        rating={rating}
        aaa={aaa}
        isEdit={props.isEdit}
        el={props.el}
        writer={writer}
        password={password}
        contents={contents}
      ></BoardCommentWriteUI>
    </>
  );
}
