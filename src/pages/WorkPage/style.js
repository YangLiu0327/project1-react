import styled from 'styled-components';

export const Wrap = styled.div`
width: 100%;
padding: 30px 120px;
height: auto;
display: flex;
justify-content: center;
flex: 1;
flex-wrap: wrap;
text-align: start;
cursor: pointer;
`

export const Socialmedia = styled.div`
width: 100%;
height: 30px;
display: flex;
justify-content: space-between;
padding: 10px 40px;
font-size: 25px;
&:hover{
    color: #007bff;
    cursor: pointer;
    text-decoration: none;
    // transform: translateY(-6px);
}
`

export const Left = styled.div`
padding: 20px;
margin: 20px;
flex: 1;
border-radius: 15px;
background-color: white;
border-radius: 20px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`


export const Right = styled.div`
padding:  30px 60px;
margin: 20px;
flex: 2.5;
background-color: white;
border-radius: 15px;
border-radius: 20px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
margin-bottom: 50px;
`


export const Img = styled.img`
margin-top: 0;
width: 100%;    
height: 200px;
`

export const Title = styled.h4`
  font-size: 18px; 
  margin-top: 20px;
  `

export const P = styled.p`
padding: 0;
line-height: 5px;
`
export const Selected = styled.p`
color: blueviolet;`

export const Button = styled.button`
  margin-top: 10px;
  text-transform: uppercase;
  color: #007bff;
  font-weight: bold;
  border-radius: 10px;
  border: none;
//   background-color: #B0C4DE;
  position: relative;
  padding: 10px;
  width: 80%;
  font-size: 14px;
  &:hover{
    background-color: #f5e5f1;
  }
 `
export const Para = styled.p`
  padding: 0 15px;
  margin: 0;
    `

export const RightTitle = styled.h3`
padding 10px 5px;
font-weight: 600;
font-size: 20px;
margin-top: 20px;
text-shadow: 2px 2px 2px #007bff;
`

export const Skill = styled.div`
    display: flex;
    flex-direction: column;
     `


export const Liststyle = styled.div`
    margin-left: 50px;
    font-size: 14px;
    justify-content: flex-start;
    padding: 12px 0;
    &:hover{
        font-weight: 600;
    }
    `
export const ListMedia = styled.div`
width: 30px;
height:50px;
font-size: 30px;
color: #B0C4DE;
margin-left: -10px;
&:hover{
    transform: translateY(-6px);
}
`
export const SKillItem = styled.div`
    width: 100%;
    margin: 0 20px;
    padding: 10px;  
    display: flex;
    flex-direction: raw;
    `