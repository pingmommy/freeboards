import { useEffect, useState } from "react";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { useQueryFetchUsedItems } from "../../../commons/hooks/queries/useQueryFetchUseitems";
import * as S from "./list.styles";
import type { IUseditem } from "../../../../commons/types/generated/types";

export default function ProductList() {
  const { onclickMoveToPage } = useMoveToPage();
  const [product, setVisitedProduct] = useState<IUseditem[]>();
  const { data, refetch } = useQueryFetchUsedItems();

  useEffect(() => {
    void refetch();
    const qq = localStorage.getItem("visitedProducts");
    const visitedProduct: IUseditem[] = JSON.parse(qq ?? "");
    setVisitedProduct(visitedProduct);
  }, [data]);

  return (
    <S.Wrapper>
      <S.Header></S.Header>
      <S.Body>
        <S.listWrapper>
          <S.DividingLine></S.DividingLine>
          <S.Row>
            <S.TopColumnBasic>글번호</S.TopColumnBasic>
            <S.TopColumnTitle>상품명</S.TopColumnTitle>
            <S.TopColumnTitle>한줄요약</S.TopColumnTitle>
            <S.TopColumnBasic>작성날짜</S.TopColumnBasic>
          </S.Row>

          {data?.fetchUseditems.map((el) => (
            <S.Row key={el._id}>
              <S.ColumnBasic>{el._id.slice(-4).toUpperCase()}</S.ColumnBasic>
              <S.ColumnTitle onClick={onclickMoveToPage(`/products/${el._id}`)}>
                {el.name}
              </S.ColumnTitle>
              <S.ColumnTitle>{el.remarks}</S.ColumnTitle>
              <S.ColumnBasic>{String(el.createdAt).slice(0, 10)}</S.ColumnBasic>
            </S.Row>
          ))}
        </S.listWrapper>
        <S.visitedProductWrapper>
          {product?.map((el) => <div key={el._id}>{el.name}</div>)}
        </S.visitedProductWrapper>
      </S.Body>
      <S.Footer>
        <S.Button onClick={onclickMoveToPage("/products/write")}>
          상품 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
