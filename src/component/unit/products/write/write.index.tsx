import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./write.validation";
import * as S from "./write.styles";
import { useQueryIdChecker } from "../../../commons/hooks/customs/useQueryIdChecker";
import { useUsedItem } from "../../../commons/hooks/customs/useUsedItem";
import type { FormInput, IProductWriteProps } from "./write.types";
import { useEffect, useMemo } from "react";
import { getMap } from "../../../commons/getMap";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function ProductWrite(props: IProductWriteProps): JSX.Element {
  const { id } = useQueryIdChecker("productId");
  const { onclickCreateUsedItem, onclickUpdateUsedItem } = useUsedItem(id);
  const {
    register,
    handleSubmit,
    formState: { dirtyFields, errors },
    setValue,
    trigger,
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    getMap();
  }, []);

  const onUpdate = (data: any) => {
    const updatedData: Record<string, any> = {};
    Object.keys(dirtyFields).forEach((key) => {
      updatedData[key] = data[key];
    });

    void onclickUpdateUsedItem(updatedData);
  };

  const onchangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);

    void trigger("contents");
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
        ],
      },
    }),
    [],
  );

  return (
    <>
      <form
        onSubmit={handleSubmit(props.isEdit ? onUpdate : onclickCreateUsedItem)}
      >
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
            {!props.isEdit && <S.Error>{errors.name?.message}</S.Error>}
          </S.innerWrapper>
          <S.innerWrapper>
            <S.Label>한줄요약</S.Label>
            <S.Input
              type="text"
              {...register("remarks")}
              placeholder="상품명을 입력하세요."
              defaultValue={props.data?.fetchUseditem?.remarks}
            />
            {/* {!props.isEdit && <S.Error>{errors.remarks?.message}</S.Error>} */}
          </S.innerWrapper>
          <S.innerWrapper>
            <S.Label>상품설명</S.Label>
            <ReactQuill
              placeholder="상품을 설명해주세요."
              modules={modules}
              theme="snow"
              onChange={onchangeContents}
              style={{ width: 800, height: 300 }}
            ></ReactQuill>
          </S.innerWrapper>
          <S.innerWrapper style={{ marginTop: "40px" }}>
            <S.Label>판매가격</S.Label>
            <S.Input
              type="text"
              {...register("price", { required: true })}
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
            <S.Label>거래 위치</S.Label>
            <S.Map id="map"></S.Map>
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
    </>
  );
}
