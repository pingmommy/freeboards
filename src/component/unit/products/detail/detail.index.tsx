import { useEffect } from "react";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { useQueryIdChecker } from "../../../commons/hooks/customs/useQueryIdChecker";
import { useUsedItem } from "../../../commons/hooks/customs/useUsedItem";
import { useQueryFetchUsedItem } from "../../../commons/hooks/queries/useQueryFetchUseditem";
import * as S from "./detail.styles";
import { getMap } from "../../../commons/getMap";
import DOMPurify from "dompurify";
import type { IUseditem } from "../../../../commons/types/generated/types";

export default function ProductDetail() {
  const { id } = useQueryIdChecker("productId");

  const { onclickDeleteUsedItem } = useUsedItem(id);
  const { onclickMoveToPage } = useMoveToPage();

  const { data } = useQueryFetchUsedItem(id); //  쿼리를 통해 데이터가 들어오고 나서 qqq()를 실행해야 되는데..?

  const qqq = (Ndata: IUseditem) => {
    const products: IUseditem[] = JSON.parse(
      localStorage.getItem("visitedProducts") ?? "[]",
    );

    const temp = products.filter((el) => el._id === Ndata._id);
    if (temp.length >= 1) return;

    products.push(Ndata);
    localStorage.setItem("visitedProducts", JSON.stringify(products));
  };

  useEffect(() => {
    getMap();
    if (data !== undefined) qqq(data.fetchUseditem);
  }, [data]);

  return (
    <S.Wrapper>
      <S.Header>
        <S.Avatar src="/images/avatar.png"></S.Avatar>
        <S.InfoWrapper>
          <S.Writer>판매자</S.Writer>
          <S.CreateAt>204.04.30</S.CreateAt>
        </S.InfoWrapper>
        <S.IconWrapper>
          <S.img src="/images/ic_link-24px.png" />
          <S.img src="/images/ic_location_on-24px.png" />
        </S.IconWrapper>
      </S.Header>
      <S.Body>
        <S.Title>{data?.fetchUseditem?.name}</S.Title>
        {typeof window !== "undefined" && (
          <S.Contents
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.fetchUseditem?.contents ?? ""),
            }}
          ></S.Contents>
        )}
        <S.Map id="map"></S.Map>
      </S.Body>
      <S.Footer>
        <S.ButtonWrapper>
          <S.Button onClick={onclickMoveToPage("/products")}>목록으로</S.Button>
          <S.Button
            onClick={onclickMoveToPage(
              `/products/${data?.fetchUseditem?._id}/edit`,
            )}
          >
            수정하기
          </S.Button>
          <S.Button onClick={onclickDeleteUsedItem}>삭제하기</S.Button>
        </S.ButtonWrapper>
      </S.Footer>
    </S.Wrapper>
  );
}
