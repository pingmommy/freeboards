import Pagination from "../../commons/pagination";
import * as S from "./boardList.styles";
import type { BoardListUIIProps } from "./boardList.types";

export default function BoardListUI(props: BoardListUIIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.TableTop></S.TableTop>
      <S.Row>
        <S.HeaderBasic>번호</S.HeaderBasic>
        <S.HeaderTitle>제목</S.HeaderTitle>
        <S.HeaderBasic>이름</S.HeaderBasic>
        <S.HeaderBasic>작성날짜</S.HeaderBasic>
      </S.Row>
      {props.data?.fetchBoards?.map((el) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>{el._id.slice(-5)}</S.ColumnBasic>
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.ColumnBasic>{el.createdAt.slice(0, 10)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom></S.TableBottom>
      <S.Footer>
        <Pagination refetch={props.refetch} boardCount={props.boardCount} />
        <S.Button onClick={props.onClickMoveToBoardNew}>
          게시물 등록쓰기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
