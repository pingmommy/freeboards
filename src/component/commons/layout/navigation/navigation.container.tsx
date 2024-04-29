import type { MouseEvent } from "react";
import LayoutNavigationUI from "./navigation.presenter";
import { useRouter } from "next/router";

export default function LayoutNavigation(): JSX.Element {
  const router = useRouter();

  const onclickMenu = (event: MouseEvent<HTMLDivElement>): void => {
    console.log(event.currentTarget.id);

    void router.push(`${event.currentTarget.id}`);
  };
  return <LayoutNavigationUI onclickMenu={onclickMenu} />;
}
