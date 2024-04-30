import ProductWrite from "../../../src/component/unit/products/write/write.index";

export default function ProductsWritePage(): JSX.Element {
  return <ProductWrite isEdit={false} />;
}

/* 검증은 yup 폼은 리액드 훅 폼 

리액트훅품이랑 엽은 리졸버 프로퍼티에 스키마를 넣으면 되는데 ...

리액트 훅 폼은 useForm()

setState = register
submit = handleSubmit
에러나 isValid는 formState 

*/
