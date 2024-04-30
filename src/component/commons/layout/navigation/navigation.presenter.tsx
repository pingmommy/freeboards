import * as S from "./navigation.styles";
import type { MouseEvent } from "react";

interface ILayoutNavigationUIProps {
  onclickMenu: (event: MouseEvent<HTMLDivElement>) => void;
}

export default function LayoutNavigationUI(
  props: ILayoutNavigationUIProps,
): JSX.Element {
  const menu = [
    { menuName: "자유게시판", _id: "/boards" },
    { menuName: "중고마켓", _id: "/products" },
    { menuName: "마이페이지", _id: "/myboards" },
    { menuName: "강아지사진", _id: "/dogs" },
  ];

  return (
    <S.Wrapper>
      {menu.map((el, index) => (
        <S.CategoryBox key={index} onClick={props.onclickMenu} id={el._id}>
          {el.menuName}
        </S.CategoryBox>
      ))}
    </S.Wrapper>
  );
}
