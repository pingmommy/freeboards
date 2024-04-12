import axios from "axios";
import { useEffect, useState } from "react";

export default function DogPicturesPage(): JSX.Element {
  const [dog, setDog] = useState("");

  useEffect(() => {
    const DogPictures = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDog(String(result.data.message));
    };

    void DogPictures();
  }, []);

  return (
    <>
      <img src={dog} alt="" />
    </>
  );
}
