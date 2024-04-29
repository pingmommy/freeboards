import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import type { DocumentData } from "firebase/firestore/lite";
import { firebaseapp } from "../../../../commons/libraries/firebase";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { useRouter } from "next/router";

export default function MyboardList(): JSX.Element {
  const router = useRouter();
  const [data, setData] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchDocs = async (): Promise<void> => {
      const board = collection(getFirestore(firebaseapp), "board");

      const result = await getDocs(board);

      const datas = result.docs.map((el) => {
        const qqq = { ...el.data() };
        qqq.id = el.id;
        return qqq;
      });
      setData(datas);
    };
    void fetchDocs();
  }, []);

  const onclickWrite = (): void => {
    void router.push("/myboards/new");
  };

  const onclickMoveToDetailPage = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(`/myboards/${event.currentTarget.id}`);
  };

  return (
    <>
      <div>
        {data.map((el) => (
          <>
            <div style={{ display: "flex" }}>
              <div style={{ width: "100px", height: "45px" }}>
                {String(el.id).slice(0, 4).toUpperCase()}
              </div>
              <div style={{ width: "200px", height: "45px" }}>{el.writer}</div>
              <div
                style={{ width: "300px", height: "45px", cursor: "pointer" }}
                id={el.id}
                onClick={onclickMoveToDetailPage}
              >
                {el.title}
              </div>
            </div>
          </>
        ))}
        <button onClick={onclickWrite}>게시글등록</button>
      </div>
    </>
  );
}
