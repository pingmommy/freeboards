import type {
  IMutation,
  IMutationDeleteUseditemArgs,
} from "../../../../commons/types/generated/types";
import { gql, useMutation } from "@apollo/client";

const DELETE_USED_ITEM = gql`
  mutation {
    deleteUseditem(useditemId: "6630390b5d6eaa0029f7ef56")
  }
`;

export const UseMutationDeleteUsedItem = () => {
  const mutation = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  return mutation;
};
