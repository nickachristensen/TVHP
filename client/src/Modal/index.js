import React, { useEffect, useRef } from "react";

import BackgroundImg from "../img/headerbg.jpg"


import { Background, Content } from "./Modal.styles";




const Modal = ({ isOpen, close, children }) => {
    
    const contentRef = useRef();

    useEffect(() => {
        if(!isOpen) return

        function listener(event) {
            if(!contentRef.current.contains(event.target)) {
                close();
            }
        }
        window.addEventListener("click", listener);
        return () => {
            window.removeEventListener("click", listener);
        }
    }, [isOpen, close]);

    if (!isOpen) return null;
    return (
    
    <Background>
        <Content ref={contentRef} img= {BackgroundImg}>
            {children}
        </Content>
    </Background>
    );
};

export default Modal;