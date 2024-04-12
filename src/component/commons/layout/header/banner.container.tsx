import { useRouter } from "next/router";
import LayoutHeaderUI from "./banner.presenter";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();

  const onclickGoToMenu = (): void => {
    void router.push("/boards");
  };

  return <LayoutHeaderUI onclickGoToMenu={onclickGoToMenu} />;
}
