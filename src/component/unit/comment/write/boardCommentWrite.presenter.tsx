import * as S from "./boardCommentWrite.styles";
import type { IBoardCommentWriteUIIProps } from "./boardCommentWrite.types";
import { Rate } from "antd";

export default function BoardCommentWriteUI(
  props: IBoardCommentWriteUIIProps,
): JSX.Element {
  // const aaa=(value:number):void=>{
  //   console.log(value)
  // }

  return (
    <S.Wrapper>
      <S.TopLine></S.TopLine>
      <S.Header>
        <S.Writer
          type="text"
          placeholder="작성자"
          onChange={props.onchangeWriter}
          value={props.writer !== "" ? props.writer : props.el?.writer ?? ""}
        />
        <S.Password
          type="password"
          placeholder="비밀번호"
          onChange={props.onchangePassword}
          value={props.password !== "" ? props.password : ""}
        />
        <Rate
          onChange={props.aaa}
          value={props.rating !== 0.0 ? props.rating : 0.0}
        />
      </S.Header>
      <S.Body>
        <S.Contents
          placeholder="개인정보에 대한 책임은 게시자에게 있습니다."
          onChange={props.onchangeContents}
          value={
            props.contents !== "" ? props.contents : props.el?.contents ?? ""
          }
        />
        <S.Footer>
          <S.SubmitButton
            onClick={
              props.isEdit ?? false
                ? props.onClickCommentUpdate
                : props.onClickCommentWrite
            }
            id={props.el?._id}
          >
            {props.isEdit ?? false ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.Footer>
      </S.Body>
    </S.Wrapper>
  );
}
