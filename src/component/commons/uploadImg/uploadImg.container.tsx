import type { ChangeEvent } from "react";
import UploadImgUI from "./uploadImg.presenter";
import { checkValidationFile } from "../../../commons/libraries/validation";
import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../commons/types/generated/types";
import type { UploadImageProps } from "./uploadImg.types";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function UploadImage(props: UploadImageProps): JSX.Element {
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.[0];
    console.log(file);

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({
      variables: {
        file,
      },
    });
    console.log(result.data?.uploadFile.url);
    props.onChangeFileUrl(result.data?.uploadFile?.url ?? "", props.index);
  };

  return <UploadImgUI onChangeFile={onChangeFile} imgUrl={props.imgUrl} />;
}
