import { Modal } from "antd";

export const checkValidationFile = (file?: File): boolean => {
  // 1. 파일이 있나?
  if (typeof file === "undefined") {
    Modal.error({ content: "파일이 없습니다." });
    return false;
  }

  // 2.사이즈가 5mb이하
  if (file.size > 5 * 1024 * 1024) {
    Modal.error({ content: "파일 용량은 5mb 이하여야 합니다." });
    return false;
  }

  // 3.jpeg or png타입만 가능
  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("타입체크");
    return false;
  }

  return true;
};
