import type { BoardWriteUIIProps } from "./boardWrite.types";
import * as S from "./boardWrite.styles";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import UploadImage from "../../commons/uploadImg/uploadImg.container";

export default function BoardWriteUI(props: BoardWriteUIIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Title>{props.isEdit ? "게시물 수정" : "게시물 등록"}</S.Title>
      <S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>작성자</S.Label>
          <S.Writer
            placeholder="이름을 적어주세요."
            type="text"
            onChange={props.onChangeWriter}
            defaultValue={props.data?.fetchBoard?.writer ?? ""}
            readOnly={Boolean(props.data?.fetchBoard?.writer)}
          ></S.Writer>
          <S.ErrorMsg>{props.writerError}</S.ErrorMsg>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password
            placeholder="비밀번호를 적어주세요."
            type="password"
            onChange={props.onChangePassword}
          ></S.Password>
          <S.ErrorMsg>{props.passwordError}</S.ErrorMsg>
        </S.InputWrapper>
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject
          placeholder="제목을 작성해주세요"
          type="text"
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard?.title}
        />
        <S.ErrorMsg>{props.titleError}</S.ErrorMsg>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Content
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard?.contents}
        />
        <S.ErrorMsg>{props.contentsError}</S.ErrorMsg>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>주소</S.Label>
        <S.ZipCodeWrapper>
          <S.ZipCode
            value={
              props.zipcode !== ""
                ? props.zipcode
                : props.data?.fetchBoard?.boardAddress?.zipcode ?? ""
            }
          ></S.ZipCode>
          <S.SearchButton onClick={props.onClickToggle}>
            우편번호검색
          </S.SearchButton>
          {props.isModalOpen && (
            <Modal
              open={true}
              onOk={props.onClickToggle}
              onCancel={props.onClickToggle}
            >
              <DaumPostcodeEmbed onComplete={props.handleComplete} />
            </Modal>
          )}
        </S.ZipCodeWrapper>
        <S.Address
          value={
            props.address !== ""
              ? props.address
              : props.data?.fetchBoard?.boardAddress?.address
          }
        ></S.Address>
        <S.AddressDetail
          onChange={props.onChangeAddressDetail}
          defaultValue={props.data?.fetchBoard?.boardAddress?.addressDetail}
        />
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Label>유투브</S.Label>
        <S.YoutubeLink
          onChange={props.onChangeYoutubeUrl}
          defaultValue={props.data?.fetchBoard?.youtubeUrl}
        ></S.YoutubeLink>
      </S.InputWrapper>
      <S.ImageWrapper>
        <S.Label>사진첨부</S.Label>
        <div style={{ display: "flex" }}>
          {props.imgUrL?.map((el, index) => (
            <UploadImage
              key={index}
              index={index}
              imgUrl={el}
              onChangeFileUrl={props.onChangeFileUrl}
            />
          ))}
        </div>
      </S.ImageWrapper>
      <S.OptionWrapper>
        <S.Label>메인설정</S.Label>
        <S.RadioInput type="radio" />
        <S.RadioLabel>유투브</S.RadioLabel>
        <S.RadioInput type="radio" />
        <S.RadioLabel>사진</S.RadioLabel>
      </S.OptionWrapper>

      <S.SubmitBtn
        onClick={props.isEdit ? props.onClickBoardEdit : props.onClickSubmit}
        isActive={props.isEdit ? true : props.isActive}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </S.SubmitBtn>
    </S.Wrapper>
  );
}
