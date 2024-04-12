import LayoutBanner from "./banner/banner.container";
import LayoutFooter from "./footer";
import LayoutHeader from "./header/banner.container";
import LayoutNavigation from "./navigation/navigation.container";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <div>
        <LayoutHeader />
        <LayoutBanner />
        <LayoutNavigation />
        <div>{props.children}</div>
        <LayoutFooter />
      </div>
      ;
    </>
  );
}
