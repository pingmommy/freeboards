import { gql, useMutation } from "@apollo/client";

const CREATE_POINTTRANSACTIONOFLOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      amount
      balance
      status
      updatedAt
    }
  }
`;

export const useMutationCreatePointTransactionOfLoading = () => {
  const mutation = useMutation(CREATE_POINTTRANSACTIONOFLOADING);

  return mutation;
};
