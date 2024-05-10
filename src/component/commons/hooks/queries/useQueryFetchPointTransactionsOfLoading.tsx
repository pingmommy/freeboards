import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchPointTransactionsOfLoadingArgs,
} from "../../../../commons/types/generated/types";

const FETCH_POINTTRANSACTIONSOFLOADING = gql`
  query {
    fetchPointTransactionsOfLoading {
      _id
      impUid
      amount
      balance
      status
      createdAt
    }
  }
`;

export const useQueryFetchPointTransactionsOfLoading = () => {
  const query = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfLoading">,
    IQueryFetchPointTransactionsOfLoadingArgs
  >(FETCH_POINTTRANSACTIONSOFLOADING);

  return query;
};
