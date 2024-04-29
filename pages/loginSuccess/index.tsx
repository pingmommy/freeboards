import { gql, useQuery } from "@apollo/client";
import { WithAuth } from "../../src/component/commons/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      name
      email
    }
  }
`;

function SuccessPage(): JSX.Element {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const name: string = data?.fetchUserLoggedIn?.name ?? "";

  return <div>{`${name}님 반갑습니다!!`}</div>;
}

export default WithAuth(SuccessPage);
