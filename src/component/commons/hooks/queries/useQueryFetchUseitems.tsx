import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

const FETCH_USED_ITEMS = gql`
  query {
    fetchUseditems(page: 1) {
      _id
      name
      remarks
      contents
      createdAt
    }
  }
`;

export const useQueryFetchUsedItems = () => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  return query;
};
