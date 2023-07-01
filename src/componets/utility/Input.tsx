import styled from 'styled-components';
import React from 'react';
const InputWrapper = styled.div<{$topValue: string, $fontSize: string}>`
  position: relative;
  display: inline-block;
  margin-right: 30px;
  height: 60px;
  width: 200px;
& > input {
    position: absolute;
    top:40%;
    height: 30px;
    width: 200px;
    font-size: 20px;
}

& > input:focus + label {
    top:10%;
    font-size: 15px;
}


& > label {
    position: absolute;
    top: ${(props) => props.$topValue};
    left: 1%;
    height: 30px;
    font-size: ${ (props) => props.$fontSize };
    z-index: 1000;
    transition: font-size 0.3s, top 0.3s;
}
`;

export default function Input(): React.JSX.Element {
    const [top, setTop] = React.useState('50%');
    const [fontSize, setFontSize] = React.useState('20px');
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value.length);
        if(e.currentTarget.value.length > 0) {
            setTop('10%');
            setFontSize('15px');
        }
        else {
            setTop('50%');
            setFontSize('20px');
        }
        
    };
    return (
            <InputWrapper $topValue = {top} $fontSize={fontSize}>
                <input id='d' type="text" onChange={changeHandler} defaultValue={''}/>
                <label htmlFor='d'>Name</label>
            </InputWrapper>
        );
}