import type { ChangeEvent } from "react";
import type { Address } from "react-daum-postcode";

export interface BoardWriteUIIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  onClickBoardEdit: () => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrl: (file: string, index: number) => void;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  isActive: boolean;
  isEdit: boolean;
  data: any;
  zipcode: string;
  isModalOpen: boolean;
  address: string;
  imgUrL?: string[];
  onClickToggle: () => void;
  handleComplete: (data: Address) => void;
}

export interface ISubmitBtnProps {
  isActive: boolean;
}

export interface BoardWriteIProps {
  isEdit: boolean;
  data?: any;
}
