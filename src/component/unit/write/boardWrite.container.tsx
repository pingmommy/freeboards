import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./boardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./boardWrite.queries";
import type { BoardWriteIProps } from "./boardWrite.types";
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "../../../commons/types/generated/types";
import type { Address } from "react-daum-postcode";
// import { Modal } from "antd";
export default function BoardWrite(props: BoardWriteIProps): JSX.Element {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [imgUrL, setImgUrl] = useState(["", "", ""]);

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  // ///////////////////////  onChangeEventHandler  ////////////////////////////////////////////////////

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    event.target.value !== "" &&
    password !== "" &&
    title !== "" &&
    contents !== ""
      ? setIsActive(true)
      : setIsActive(false);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    event.target.value !== "" &&
    writer !== "" &&
    title !== "" &&
    contents !== ""
      ? setIsActive(true)
      : setIsActive(false);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    event.target.value !== "" &&
    writer !== "" &&
    password !== "" &&
    contents !== ""
      ? setIsActive(true)
      : setIsActive(false);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
    event.target.value !== "" &&
    writer !== "" &&
    password !== "" &&
    title !== ""
      ? setIsActive(true)
      : setIsActive(false);
  };

  const onChangeAddressDetail = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setAddressDetail(event.currentTarget.value);
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>): void => {
    setYoutubeUrl(event.target.value);
  };

  const onChangeFileUrl = (file: string, index: number): void => {
    const qqq = [...imgUrL];
    qqq[index] = file;
    setImgUrl(qqq);
  };
  useEffect(() => {
    const images = props.data?.fetchBoard?.images;
    if (images !== undefined && images !== null) setImgUrl([...images]);
  }, [props.data]);
  // ///////////////////////////////////////////////////////////////////////////

  const onClickToggle = (): void => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data: Address): void => {
    setAddress(data.address);
    setZipCode(data.zonecode);
    onClickToggle();
  };

  // //////////////////////////// Query ///////////////////////////////////////////////

  const onClickSubmit = async (): Promise<void> => {
    if (writer !== "") {
      setWriterError("이름을 입력하세요!");
    }
    if (password !== "") {
      setPasswordError("비밀번호를 입력하세요!");
    }
    if (title !== "") {
      setTitleError("제목을 입력하세요!");
    }
    if (contents !== "") {
      setContentsError("내용을 입력하세요!");
    }
    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              boardAddress: { zipcode, address, addressDetail },
              youtubeUrl,
              images: [...imgUrL],
            },
          },
        });
        void router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickBoardEdit = async (): Promise<void> => {
    if (title === "" && contents === "" && youtubeUrl === "") {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (password === "") {
      alert("비밀번호를 입력하세요");
      return;
    }

    const dataUrl = JSON.stringify(props.data.fetchBoard.images);
    const stateUrl = JSON.stringify(imgUrL);

    const updateBoardInput: IUpdateBoardInput = {};
    if (title !== "") updateBoardInput.title = title;
    if (contents !== "") updateBoardInput.contents = contents;
    if (youtubeUrl !== "") updateBoardInput.youtubeUrl = youtubeUrl;
    if (address !== "") {
      updateBoardInput.boardAddress = {};
      updateBoardInput.boardAddress.address = address;
      updateBoardInput.boardAddress.zipcode = zipcode;
    }
    if (addressDetail !== "") {
      updateBoardInput.boardAddress = {};
      updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    if (dataUrl !== stateUrl) {
      updateBoardInput.images = [...imgUrL];
    }

    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput,
          password,
          boardId: String(router.query.boardId),
        },
      });
      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickToggle={onClickToggle}
      onClickSubmit={onClickSubmit}
      onClickBoardEdit={onClickBoardEdit}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeFileUrl={onChangeFileUrl}
      handleComplete={handleComplete}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      isActive={isActive}
      isModalOpen={isModalOpen}
      zipcode={zipcode}
      address={address}
      imgUrL={imgUrL}
      isEdit={props.isEdit}
      data={props.data}
    ></BoardWriteUI>
  );
}
