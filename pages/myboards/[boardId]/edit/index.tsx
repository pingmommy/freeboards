import { collection, doc, getDoc, getFirestore } from "firebase/firestore/lite";
import type { DocumentData } from "firebase/firestore/lite";
import MyBoardWrite from "../../../../src/component/unit/myBoards/write";
import { firebaseapp } from "../../../../src/commons/libraries/firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MyBoardEditPage(): JSX.Element {
  const router = useRouter();
  const [data, setData] = useState<DocumentData>({});
  const board = collection(getFirestore(firebaseapp), "board");

  useEffect(() => {
    const getData = async (): Promise<void> => {
      if (typeof router.query.boardId !== "string") return;
      const result = await getDoc(doc(board, router.query.boardId));
      setData(result.data() ?? {});
    };
    void getData();
  }, []);

  return <MyBoardWrite isEdit={true} data={data} />;
}
