import { useQueryFetchPointTransactionsOfLoading } from "../../../commons/hooks/queries/useQueryFetchPointTransactionsOfLoading";
import * as S from "./point.complete.styles";

export default function ListOfLoadingPoint(): JSX.Element {
  const { data } = useQueryFetchPointTransactionsOfLoading();

  console.log(data);
  return (
    <S.Wrapper>
      <S.Header></S.Header>
      <S.Body>
        <S.DividingLine></S.DividingLine>
        <S.Row>
          <S.TopColumn20>충전일</S.TopColumn20>
          <S.TopColumn30>결제 ID</S.TopColumn30>
          <S.TopColumn30>충전내역</S.TopColumn30>
          <S.TopColumn20>충전 후 잔액</S.TopColumn20>
        </S.Row>
        {data?.fetchPointTransactionsOfLoading.map((el) => (
          <S.Row key={el._id}>
            <S.Column20>{el.createdAt.slice(0, 10)}</S.Column20>
            <S.Column30>{el.impUid}</S.Column30>
            <S.ColumnAmount>{`+${el.amount}`}</S.ColumnAmount>
            <S.ColumnBalance>{el.balance}</S.ColumnBalance>
          </S.Row>
        ))}
      </S.Body>
    </S.Wrapper>
  );
}
