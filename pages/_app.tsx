import type { AppProps } from "next/app";
import "../styles/globals.css";
import ApolloSetting from "../src/component/commons/apollo";
import Layout from "../src/component/commons/layout";
import { Global } from "@emotion/react";
import { GlobalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={GlobalStyles} />
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
