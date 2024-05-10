import { useMutationCreateUsedItem } from "../mutations/useMutationCreateUseditem";
import { UseMutationDeleteUsedItem } from "../mutations/useMutationDeleteUsedItem";
import { useMutationUpdateUsedItem } from "../mutations/useMutationUpdateUsedItem";
import { useMoveToPage } from "./useMoveToPage";

interface IUseUsedItemReturn {
  onclickCreateUsedItem: (data: any) => Promise<void>;
  onclickDeleteUsedItem: () => void;
  onclickUpdateUsedItem: (data: any) => Promise<void>;
  // onclickUpdateUsedItem: (data: any) => Promise<void>;
}
export const useUsedItem = (id?: string): IUseUsedItemReturn => {
  const { movePage } = useMoveToPage();
  const [createUsedItem] = useMutationCreateUsedItem();
  const [deleteUsedItem] = UseMutationDeleteUsedItem();
  const [updateUsedItem] = useMutationUpdateUsedItem();

  const onclickDeleteUsedItem = () => {
    try {
      void deleteUsedItem({
        variables: { useditemId: id ?? "" },
      });
      movePage("/products");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onclickCreateUsedItem = async (data: any): Promise<void> => {
    try {
      const result = await createUsedItem({
        variables: { createUseditemInput: { ...data } },
      });
      movePage(`/products/${result?.data?.createUseditem?._id}`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onclickUpdateUsedItem = async (data: any) => {
    try {
      const result = await updateUsedItem({
        variables: {
          updateUseditemInput: {
            ...data,
          },
          useditemId: id ?? "",
        },
      });

      movePage(`/products/${result?.data?.updateUseditem?._id}`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return {
    onclickCreateUsedItem,
    onclickDeleteUsedItem,
    onclickUpdateUsedItem,
  };
};
