import type { ChangeEvent } from "react";

export interface UploadImageProps {
  index: number;
  onChangeFileUrl: (file: string, index: number) => void;
  imgUrl: string;
}

export interface IUploadUIProps {
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  imgUrl: string;
}
