import * as S from "./likeBoard.styles";
import type { ILikeBoardUIProps } from "./likeBoard.types";

export default function LikeBoardUI(props: ILikeBoardUIProps): JSX.Element {
  return (
    <S.flexWrapper>
      <S.likeWrapper>
        <S.img
          src="/images/thumb_up.png"
          onClick={props.onClickLikeBoard}
        ></S.img>
        <S.thumbUpNumber>
          {props.likeNumber === 0 ? props.propsLikeNumber : props.likeNumber}
        </S.thumbUpNumber>
      </S.likeWrapper>
      <S.likeWrapper>
        <S.img
          src="/images/thumb_down.png"
          onClick={props.onClickDislikeBoard}
        ></S.img>
        <S.thumbDownNumber>
          {props.dislikeNumber === 0
            ? props.propsDisLikeNumber
            : props.dislikeNumber}
        </S.thumbDownNumber>
      </S.likeWrapper>
    </S.flexWrapper>
  );
}
