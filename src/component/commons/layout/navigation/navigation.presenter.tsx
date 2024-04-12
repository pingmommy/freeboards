import * as S from "./navigation.styles";
import type { MouseEvent } from "react";

interface ILayoutNavigationUIProps {
  onclickMenu: (event: MouseEvent<HTMLDivElement>) => void;
}

export default function LayoutNavigationUI(
  props: ILayoutNavigationUIProps,
): JSX.Element {
  const menu = [
    { menuName: "자유게시판", clickFC: props.onclickMenu, _id: "boards" },
    { menuName: "중고마켓", clickFC: props.onclickMenu, _id: "boards" },
    { menuName: "마이페이지", clickFC: props.onclickMenu, _id: "boards" },
    { menuName: "강아지사진", clickFC: props.onclickMenu, _id: "dogs" },
  ];

  return (
    <S.Wrapper>
      {menu.map((el, index) => (
        <S.CategoryBox key={index} onClick={el.clickFC} id={el._id}>
          {el.menuName}
        </S.CategoryBox>
      ))}
    </S.Wrapper>
  );
}
