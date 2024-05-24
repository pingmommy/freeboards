import styled from "@emotion/styled";
import type { ISubmitBtnProps } from "./boardWrite.types";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  // padding: 80px 102px 100px 102px;
  padding-top: 80px;
  padding-left: 102px;
  padding-right: 102px;
  padding-bottom: 100px;
  box-shadow: 0px 0px 10px gray;
  margin: 70px auto;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 0;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const Writer = styled.input`
  border: 1px solid #bdbdbd;
  width: 486px;
  height: 52px;
  padding-left: 15px;
`;

export const Password = styled.input`
  border: 1px solid #bdbdbd;
  width: 486px;
  height: 52px;
  padding-left: 15px;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 16px;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const Subject = styled.input`
  border: 1px solid #bdbdbd;
  width: 996px;
  height: 52px;
  padding-left: 15px;
`;

export const Content = styled.textarea`
  border: 1px solid #bdbdbd;
  width: 996px;
  height: 520px;
  padding: 14px;
`;

export const ZipCodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ZipCode = styled.input`
  border: 1px solid #bdbdbd;
  width: 77px;
  height: 52px;
  padding-left: 15px;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  background-color: black;
  color: white;
  margin-left: 16px;
`;

export const Address = styled.input`
  border: 1px solid #bdbdbd;
  width: 998px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
`;
export const YoutubeLink = styled.input`
  border: 1px solid #bdbdbd;
  width: 996px;
  height: 52px;
  padding-left: 16px;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const ImageBox = styled.div`
  display: flex;
`;

export const UploadButton = styled.div`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  color: #4f4f4f;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const RadioInput = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 10px;
  margin-right: 10px;
`;

export const ErrorMsg = styled.div`
  color: red;
  font-size: 13px;
`;

// mt
// export const ButtonWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   padding-top: 80px;
// `;

export const SubmitBtn = styled.button`
  width: 179px;
  height: 52px;
  background-color: ${(props: ISubmitBtnProps) =>
    props.isActive ? "#ffd600" : "none"};
  padding: 14px 60px;
  border: none;
  // mt - margin-left: 12px;
  //mt - margin-right: 12px;
`;

// export const AddressModal = styled(Modal)``;

// export const AddressSearchInput = styled(DaumPostcode)``;
