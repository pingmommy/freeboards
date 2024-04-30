import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

const FETCH_USED_ITEM = gql`
  query {
    fetchUseditem(useditemId: "66303a3a5d6eaa0029f7ef57") {
      _id
      name
      remarks
      contents
    }
  }
`;

export const useQueryFetchUsedItem = () => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM);

  return query;
};
