import styled from "styled-components";

const  Frame95 = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
gap: 6.3125rem;
`
const  Frame32 = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 2.5rem;
`
const  Group9 = styled.div`
height: 157px;
width: 648px;
`
const  Text1 = styled.div`
text-align: left;
vertical-align: top;
font-size: 64px;
font-family: Inter;
letter-spacing: -4%;
line-height: 125.99999904632568%;
color: #070807;
`
const  text2 = styled.div`
text-align: left;
vertical-align: top;
font-size: 21px;
font-family: Inter;
line-height: 150.80000162124634%;
color: #000000;
`
const  Button = styled.div`
border-radius: 0.375rem;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0rem 1.5rem;
gap: 0.5rem;
background-color: #3182ce;
`
const  text3 = styled.div`
text-align: left;
vertical-align: middle;
font-size: 18px;
font-family: Inter;
line-height: 28%;
color: #ffffff;
`
const  Image = styled.div`
height: 358px;
width: 518px;
background-color: #ffffff;
`
const  img4 = styled.div`
height: 358px;
width: 518px;
`
const  text5 = styled.div`
text-align: right;
vertical-align: top;
font-size: 1px;
font-family: Inter;
line-height: auto;
color: #000000;
`
const  text6 = styled.div`
text-align: right;
vertical-align: top;
font-size: 1px;
font-family: Inter;
line-height: auto;
color: #000000;
`
export default function Figma() {
    return (
        <Frame95>
          <Frame32>
            <Group9>
              <Text1>Send crypto straight to your personal wallet</Text1>
            </Group9>
            <Text1>Use a cryptocurrency exchange or a peer-to-peer platform to send the cryptocurrency to your personal wallet.</Text1>
            <Button>
              <Text1>Start deploying</Text1>
            </Button>
          </Frame32>
          <Image>
            <img src="https://images.unsplash.com/photo-1614787913553-8aa43d6fc7f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" />
            <Text1></Text1>
            <Text1>Crypto-wallet</Text1>
          </Image>
        </Frame95>
    )
}