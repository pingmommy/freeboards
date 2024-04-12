import type { BoardDetailUIIProps } from "./boardDetail.types";
import * as S from "./boardDetail.styles";
import ReactPlayer from "react-player";
import { Tooltip } from "antd";
import LikeBoard from "../likeBoard/likeBoard.container";
export default function BoardDetailUI(props: BoardDetailUIIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png"></S.Avatar>
            <S.Info>
              <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
              <S.CreateAt>{props.data?.fetchBoard?.createdAt}</S.CreateAt>
            </S.Info>
            <S.img src="/images/ic_link-24px.png" />
            <Tooltip
              title={`${props.data?.fetchBoard?.boardAddress?.address} ${props.data?.fetchBoard?.boardAddress?.addressDetail}`}
            >
              <S.img src="/images/ic_location_on-24px.png" />
            </Tooltip>
          </S.AvatarWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
          {props.data?.fetchBoard.images
            ?.filter((el) => el)
            .map((el) => (
              <S.UploadImg
                src={`https://storage.googleapis.com/${el}`}
                key={el}
              />
            ))}
          <ReactPlayer url={props.data?.fetchBoard?.youtubeUrl ?? ""} />
        </S.Body>
        <LikeBoard
          likeNumber={props.data?.fetchBoard?.likeCount}
          dislikeNumber={props.data?.fetchBoard?.dislikeCount}
        />
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickBoardList}>목록으로</S.Button>
        <S.Button onClick={props.onClickBoardEdit}>수정하기</S.Button>
        <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
