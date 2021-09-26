import React,{ useState,useEffect } from 'react';
import {BtnWrap} from './BackToTop';
import {FaAngleUp} from 'react-icons/fa'

const BackToTop = () => {
    const [scrollBack, setScrollBack] = useState(false);
    const changeBackToTop = ()=>{
        if(window.scrollY >= 50) {
            setScrollBack(true);
        }else{
            setScrollBack(false);
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',changeBackToTop )
    },[])
    return (
        <BtnWrap scrollBack={scrollBack}
            to='hero'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-120}
        >
            <FaAngleUp size={26}/>
        </BtnWrap>
    );
};

export default BackToTop;