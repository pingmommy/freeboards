import { useRouter } from "next/router";

interface IUseMoveToPageReturn {
  movePage: (path: string) => void;
  onclickMoveToPage: (path: string) => () => void;
}
export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();

  const movePage = (path: string): void => {
    void router.push(path);
  };

  const onclickMoveToPage = (path: string) => () => {
    void router.push(path);
  };

  return {
    movePage,
    onclickMoveToPage,
  };
};
