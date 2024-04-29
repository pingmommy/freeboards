import axios from "axios";
import { useEffect, useState } from "react";

export default function DogPicturesPage(): JSX.Element {
  const [dogImg, setDogImg] = useState<string[]>([]);

  useEffect(() => {
    const dogPicture = async (): Promise<void> => {
      new Array(9).fill(1).forEach(async () => {
        const result = await axios.get(
          "https://dog.ceo/api/breeds/image/random",
        );
        setDogImg((prev) => [...prev, result?.data?.message]);
      });
    };

    void dogPicture();
  }, []);

  return (
    <>
      {dogImg.map((el) => (
        <img key={el} src={el} alt="" />
      ))}
    </>
  );
}
