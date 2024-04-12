export interface ILikeBoardUIProps {
  onClickLikeBoard: () => Promise<void>;
  onClickDislikeBoard: () => Promise<void>;
  propsLikeNumber?: number;
  propsDisLikeNumber?: number;
  likeNumber: number;
  dislikeNumber: number;
}

export interface ILikeBoardProps {
  likeNumber?: number;
  dislikeNumber?: number;
}
