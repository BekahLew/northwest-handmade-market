
"use client"
import styled from "styled-components"

const CTA = styled.a`
position: relative;
font-size: 1.6rem;
margin-bottom: 1.3rem;
margin-top: 1rem;
padding: .2rem .4rem;
border-radius: 2px;
border: 1px solid #BC5738;

&:hover {
    transition: all .3s ease;
    &::before {
        top: 2.8rem;
    }

    &::after {
        height: 45px;
        transition: all .3s ease;
    }
}

&::before {
    content: '';
    position: absolute;
    top: 2.2rem;
    width: 160px;
    height: 33px;
    background: url('/images/decoration.png');
    background-size: contain;
    background-repeat: no-repeat;
    left: 50%;
    transform: translateX(-50%);
    transition: all .3s ease;
}

&::after {
    content: '';
    position: absolute;
    background: #BC5738;
    border-radius: 2px;
    width: 101%;
    height: 0;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    transition: all .3s ease;
}
`

export function CustomButton({ text, link } : { text: string, link: string }) {
    return (
        <CTA href={ link }>{ text }</CTA>
    );
}