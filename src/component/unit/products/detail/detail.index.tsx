import { useEffect } from "react";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { useQueryIdChecker } from "../../../commons/hooks/customs/useQueryIdChecker";
import { useUsedItem } from "../../../commons/hooks/customs/useUsedItem";
import { useQueryFetchUsedItem } from "../../../commons/hooks/queries/useQueryFetchUseditem";
import * as S from "./detail.styles";
import { getMap } from "../../../commons/getMap";
import DOMPurify from "dompurify";
export default function ProductDetail() {
  const { id } = useQueryIdChecker("productId");

  const { data } = useQueryFetchUsedItem(id);

  const { onclickDeleteUsedItem } = useUsedItem(id);
  const { onclickMoveToPage } = useMoveToPage();

  useEffect(() => {
    getMap();
  }, []);

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
