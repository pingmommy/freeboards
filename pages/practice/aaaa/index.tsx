import { Modal } from "antd";
import { useState } from "react";

export default function aaa():JSX.Element{
    const [ isModalOpen, setIsModalOpen ]=useState(false);

    const onToggleModal =():void=>{
      setIsModalOpen((prev)=>!prev);
    }

  

    return(
        <>
        <button onClick={onToggleModal}>itisopen</button>
        <Modal open={isModalOpen} onOk={onToggleModal} onCancel={onToggleModal}>
            창이 열려요</Modal>                    

        

        </>
    )
  
}