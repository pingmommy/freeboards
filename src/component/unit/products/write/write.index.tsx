import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./write.validation";
import * as S from "./write.styles";
import { useUsedItem } from "../../../commons/hooks/customs/useUsedItem";
import type { IQuery } from "../../../../commons/types/generated/types";

interface IProductWriteProps {
  data?: Pick<IQuery, "fetchUseditem">;
  isEdit: boolean;
}

export default function ProductWrite(props: IProductWriteProps): JSX.Element {
  const { onclickCreateUsedItem } = useUsedItem();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    // mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(onclickCreateUsedItem)}>
      <S.wrapper>
        <S.titleWrapper>
          <S.PageTitle>
            {props.isEdit ? "상품 수정하기" : "상품 등록하기"}
          </S.PageTitle>
        </S.titleWrapper>
        <S.innerWrapper>
          <S.Label>상품명</S.Label>
          <S.Input
            type="text"
            {...register("name")}
            placeholder="상품명을 입력하세요."
            defaultValue={props.data?.fetchUseditem?.name}
          />
          <S.Error>{formState?.errors.name?.message}</S.Error>
        </S.innerWrapper>
        <S.innerWrapper>
          <S.Label>한줄요약</S.Label>
          <S.Input
            type="text"
            {...register("remarks")}
            placeholder="상품명을 입력하세요."
            defaultValue={props.data?.fetchUseditem?.remarks}
          />
          <S.Error>{formState?.errors.remarks?.message}</S.Error>
        </S.innerWrapper>
        <S.innerWrapper>
          <S.Label>상품설명</S.Label>
          <S.Contents
            {...register("contents")}
            placeholder="상품을 설명해주세요."
            defaultValue={props.data?.fetchUseditem?.contents}
          />
          <S.Error>{formState?.errors.contents?.message}</S.Error>
        </S.innerWrapper>
        <S.innerWrapper>
          <S.Label>판매가격</S.Label>
          <S.Input
            type="text"
            {...register("price")}
            placeholder="판매가격을 입력하세요."
            defaultValue={props.data?.fetchUseditem?.price ?? ""}
          />
          <S.Error></S.Error>
        </S.innerWrapper>
        <S.innerWrapper>
          <S.Label>태그입력</S.Label>
          <S.Input placeholder="#태그 #태그 #태그" />
          <S.Error></S.Error>
        </S.innerWrapper>
        <S.innerWrapper>
          <S.Label>사진첨부</S.Label>
        </S.innerWrapper>
        <S.innerWrapper>
          <S.Label>메인 사진 설정</S.Label>
        </S.innerWrapper>
        <S.Button>{props.isEdit ? "수정하기" : "등록하기"}</S.Button>
      </S.wrapper>
    </form>
  );
}
