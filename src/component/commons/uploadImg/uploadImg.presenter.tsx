import * as S from "./uploadImg.styles";
import { useRef } from "react";
import type { IUploadUIProps } from "./uploadImg.types";

export default function UploadImgUI(props: IUploadUIProps): JSX.Element {
  const inputEl = useRef<HTMLInputElement>(null);
  const handleFileBtn = (event: any): void => {
    inputEl.current?.click();
  };

  return (
    <>
      {props.imgUrl !== "" ? (
        <>
          <S.UploadImg
            onClick={handleFileBtn}
            src={`https://storage.googleapis.com/${props.imgUrl}`}
          ></S.UploadImg>
          <S.HiddenInput
            type="file"
            onChange={props.onChangeFile}
            ref={inputEl}
            hidden={true}
          />
        </>
      ) : (
        <>
          <S.ImgBox onClick={handleFileBtn}>
            <>+</>
          </S.ImgBox>
          <S.HiddenInput
            type="file"
            onChange={props.onChangeFile}
            ref={inputEl}
            hidden={true}
          />
        </>
      )}
    </>
  );
}
