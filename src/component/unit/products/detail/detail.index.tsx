import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { useUsedItem } from "../../../commons/hooks/customs/useUsedItem";
import { useQueryFetchUsedItem } from "../../../commons/hooks/queries/useQueryFetchUseditem";
import * as S from "./detail.styles";

export default function ProductDetail() {
  const { data } = useQueryFetchUsedItem();
  // console.log(data);

  const { onclickDeleteUsedItem } = useUsedItem();
  const { onclickMoveToPage } = useMoveToPage();

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
        <S.Contents>{data?.fetchUseditem?.contents}</S.Contents>
      </S.Body>
      <S.Footer>
        <S.ButtonWrapper>
          <S.Button>목록으로</S.Button>
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
