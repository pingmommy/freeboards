import {
  collection,
  addDoc,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore/lite";
import type { DocumentData } from "firebase/firestore/lite";

import { firebaseapp } from "../../../../commons/libraries/firebase";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { useRouter } from "next/router";

interface IMyBoardWriteProps {
  data?: DocumentData;
  isEdit?: boolean;
}

export default function MyBoardWrite(props: IMyBoardWriteProps): JSX.Element {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const board = collection(getFirestore(firebaseapp), "board");

  const onclickSubmit = async (): Promise<void> => {
    const docRef = await addDoc(board, {
      writer,
      title,
      contents,
    });

    void router.push(`/myboards/${docRef.id}`);
  };
  interface IUpdateInput {
    title?: string;
    contents?: string;
  }
  const UpdateInput: IUpdateInput = {};
  if (title !== "") {
    UpdateInput.title = title;
  }

  if (contents !== "") {
    UpdateInput.contents = contents;
  }
  const onclickUpdate = async (): Promise<void> => {
    if (typeof router.query.boardId !== "string") return;
    const editData = doc(board, router.query.boardId);
    await updateDoc(editData, { ...UpdateInput });
    void router.push(`/myboards/${router.query.boardId}`);
  };

  const onchangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };

  const onchangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };
  const onchangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.target.value);
  };

  return (
    <div style={{ margin: "200px" }}>
      작성자:
      <input
        style={{ width: "200px", height: "40px" }}
        onChange={onchangeWriter}
        defaultValue={props.data?.writer}
      />
      제 목:
      <input
        style={{ width: "200px", height: "40px" }}
        onChange={onchangeTitle}
        defaultValue={props.data?.title}
      />
      <div style={{ margin: "20px 0" }}>
        내 용:
        <input
          style={{ width: "450px", height: "100px" }}
          onChange={onchangeContents}
          defaultValue={props.data?.contents}
        />
      </div>
      <button onClick={props.isEdit === true ? onclickUpdate : onclickSubmit}>
        {props.isEdit === true ? "게시글수정" : "게시글등록"}
      </button>
    </div>
  );
}
