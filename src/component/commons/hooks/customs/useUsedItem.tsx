import { useMutationCreateUsedItem } from "../mutations/useMutationCreateUseditem";
import { UseMutationDeleteUsedItem } from "../mutations/useMutationDeleteUsedItem";
import { useMutationUpdateUsedItem } from "../mutations/useMutationUpdateUsedItem";
import { useMoveToPage } from "./useMoveToPage";

interface IUseUsedItemReturn {
  onclickCreateUsedItem: (data: any) => Promise<void>;
  onclickDeleteUsedItem: () => void;
  onclickUpdateUsedItem: (data: any, path: string) => Promise<void>;
}

export const useUsedItem = (): IUseUsedItemReturn => {
  const { movePage } = useMoveToPage();
  const [createUsedItem] = useMutationCreateUsedItem();
  const [deleteUsedItem] = UseMutationDeleteUsedItem();
  const [updateUsedItem] = useMutationUpdateUsedItem();

  const onclickDeleteUsedItem = () => {
    try {
      void deleteUsedItem();
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

  const onclickUpdateUsedItem = async (data: any, path: string) => {
    try {
      const result = await updateUsedItem({
        variables: {
          updateUseditemInput: {
            contents: "작은컵이에요.",
            name: "컵 팔아요.",
          },
          useditemId: path,
        },
      });
      console.log(result);
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
