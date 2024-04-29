import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore/lite";
import type { DocumentData } from "firebase/firestore/lite";
import { firebaseapp } from "../../../../commons/libraries/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function MyBoardDetail(): JSX.Element {
  const router = useRouter();
  const [data, setData] = useState<DocumentData>({});
  const board = collection(getFirestore(firebaseapp), "board");

  useEffect(() => {
    const onclickDoc = async (): Promise<void> => {
      if (typeof router.query.boardId !== "string") return;
      const docRef = doc(board, router.query.boardId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const result = docSnap.data();
        setData(result);
      }
    };
    void onclickDoc();
  }, []);

  const onclickDelete = (): void => {
    if (typeof router.query.boardId !== "string") return;
    void deleteDoc(doc(board, router.query.boardId));
    void router.push("/myboards");
  };

  const onclickMoveToList = (): void => {
    void router.push("/myboards");
  };

  const onclickUpdate = (): void => {
    if (typeof router.query.boardId !== "string") return;

    void router.push(`/myboards/${router.query.boardId}/edit`);
  };

  return (
    <>
      <div>{data.writer}</div>
      <div>{data.title}</div>
      <div>{data.contents}</div>
      <button
        style={{ width: "70px", height: "30px", marginRight: "15px" }}
        onClick={onclickMoveToList}
      >
        목록으로
      </button>
      <button
        style={{ width: "70px", height: "30px", marginRight: "15px" }}
        onClick={onclickUpdate}
      >
        수정하기
      </button>
      <button
        style={{ width: "70px", height: "30px", marginRight: "15px" }}
        onClick={onclickDelete}
      >
        삭제하기
      </button>
    </>
  );
}
