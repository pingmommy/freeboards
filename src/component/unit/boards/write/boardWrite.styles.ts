import styled from "@emotion/styled";
import type { ISubmitBtnProps } from "./boardWrite.types";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 102px;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 0;
  padding-bottom: 40px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 16px;
`;

export const Writer = styled.input`
  border: 1px solid #bdbdbd;
  width: 486px;
  height: 52px;
  margin-right: 10px;
  padding-left: 15px;
`;

export const Password = styled.input`
  border: 1px solid #bdbdbd;
  width: 486px;
  height: 52px;
  padding-left: 15px;
`;

export const InputWrapper = styled.div`
  padding-bottom: 30px;
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
  padding-top: 20px;
  padding-left: 15px;
`;

export const SubmitBtn = styled.button`
  width: 179px;
  height: 52px;
  background-color: ${(props: ISubmitBtnProps) =>
    props.isActive ? "#ffd600" : "none"};
  padding: 14px 60px;
  border: none;
`;

export const ZipCodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
  justify-items: center;
  align-items: center;
`;
export const ZipCode = styled.input`
  border: 1px solid #bdbdbd;
  width: 77px;
  height: 52px;
  margin-right: 10px;
  line-height: 52px;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  background-color: black;
  color: white;
  text-align: center;
  padding: 14px 16px;
`;

export const Address = styled.input`
  border: 1px solid #bdbdbd;
  width: 998px;
  height: 52px;
  margin-bottom: 20px;
  line-height: 52px;
`;

export const AddressDetail = styled.input`
  border: 1px solid #bdbdbd;
  width: 998px;
  height: 52px;
  margin-bottom: 20px;
  line-height: 52px;
`;

export const YoutubeLink = styled.input`
  border: 1px solid #bdbdbd;
  width: 996px;
  height: 52px;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-bottom: 30px;
`;

export const UploadButton = styled.div`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  color: #4f4f4f;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-bottom: 30px;
`;

export const RadioInput = styled.input`
  padding: 10px;
`;

export const RadioLabel = styled.label`
  margin-left: 10px;
  margin-right: 10px;
`;

export const ErrorMsg = styled.div`
  color: red;
  font-size: 13px;
`;
