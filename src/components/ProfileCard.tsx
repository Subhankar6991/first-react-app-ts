import styled from 'styled-components';
import { ProfileCardProps } from '../interfaces/profile-card.props';

const Container = styled.div`
margin: 1vh 1vh;
height: 400px;
width: 300px;
background-color: #2f77b6;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
& > .title {
    text-align: center;
    height: 10%;
    font-size: 25px;
    vertical-align: bottom;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

& > .title > .handle {
    font-size: 13px;
    color: #c3d42c;
    font-weight: bolder;
    font-family: 'Courier New', Courier, monospace;
}

& > img {
    height: 80%;
}
` ;


const StyledButton = styled.button`
height: 10%;
border-radius: 0 0 10px 10px;
`;
function ProfileCard({title,handle,imageUrl}:ProfileCardProps) {
    return (
        <Container>
            <div className='title'>
                {title} 
                <span className='handle'>
                    {handle}
                </span>
            </div>
            <img className='image' src={imageUrl} alt={handle}/>
            <StyledButton>Click Me</StyledButton>
        </Container>
    );
}

export default ProfileCard;