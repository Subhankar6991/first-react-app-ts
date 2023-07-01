import React from "react";
import styled from "styled-components";

const Container = styled.div`
margin-bottom: 10px;
& > .heading {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background-color: transparent;
    width: 100%;
}

& > .content {
    height: 0;
    opacity: 0;
    transition: opacity 1s ease-in-out, height 1s ease-in-out;
    overflow: hidden;
}

& > .content.active {
    height: 70px;
    opacity: 1;
}
`;

export default function Accordion() {

    const [isOpen, setIsOpen] = React.useState(false);

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        // e.preventDefault();
        setIsOpen(!isOpen);
    }
    return (
            <Container>
                <button className="heading" onClick={clickHandler}>This is a Heading</button>
                <div className={`content ${isOpen && 'active' }`}>
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    Nunc eget blandit ex. Donec eu sem vitae lectus porttitor volutpat. Proin nec tellus eget eros 
                    luctus ullamcorper et et diam. Orci varius natoque penatibus et magnis dis parturient montes, 
                    nascetur ridiculus mus. Vivamus molestie, quam ac condimentum dignissim, turpis justo auctor ex, 
                    a mollis dui velit eget enim. Maecenas quis quam vel eros imperdiet dapibus eu quis eros. 
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                     Nam risus erat, vestibulum at iaculis vitae, aliquet in sapien. Vestibulum ante ipsum primis 
                     in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse mi nisl, aliquam efficitur
                      arcu nec, venenatis consequat ipsum. Proin vitae ipsum diam.
                </div>
            </Container>
        );
}