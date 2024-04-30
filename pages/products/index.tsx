import { useRouter } from "next/router";

export default function ProductListPage(): JSX.Element {
  const router = useRouter();
  const onclickMoveToWrite = (): void => {
    void router.push("/products/write");
  };

  return (
    <>
      <div>상품목록페이지</div>
      <button
        style={{ width: "200px", margin: "10px" }}
        onClick={onclickMoveToWrite}
      >
        상품등록
      </button>
    </>
  );
}
