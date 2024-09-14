import styled from "styled-components";

interface StyledDivProps {
    color?: string;
    width?: string;
    padding?:string;
    direction?:string;
    text?:string;
    items?:string;
  }

export const Container = styled.div<StyledDivProps>`
  width:100vw;
  height:100vh;
  overflow-x:hidden;
  background-color:#2e4053;
`

export const FormHandle = styled.div<StyledDivProps>`
  width:100vw;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#2e4053;
  overflow-y:auto;
`


export const Flex = styled.div<StyledDivProps>`
 display:flex;
 flex-direction:${props => props.direction || 'row'};
 justify-content: ${props => props.content || "center"};
 align-items:${props => props.items || "center"};
 padding:${props => props.padding || "4px"};
 background-color:${props => props.color};
 width:${props => props.width || ''};
 .logo {
    font-size: 2rem;
    width: 50px;
    height:50px;
    border-radius:100%;
    margin-right:10px;
  }

img{
 width:50px;
 height:50px;
 border-radius:100%;
 box-shadow:0 4px 8px rgba(0, 0, 0, 0.2);
}
  p{
  color:white;
  padding:0;
  margin-top:0;
  margin-bottom:0;
  margin-left:15px;
  }
  span{
   margin-right:20px;
  }
   h1{
    color:#2c1137;
   }
    @media (max-width: 600px){
     h1{
      font-size:2rem;
      }
      icon{
       font-size:10px;
      }
       padding:8px 0;
    }
   @media (max-width: 768px){
     h1{
      font-size:2rem;
      }
      icon{
       font-size:10px;
      }
       padding:8px 0;
    }
`
export const Songcontainer = styled.div`
 display:flex;
 justify-content:start;
 align-items:center;
 flex-direction:column;
 height:100vh;
 width:100vw;
 background-color:#2e4053;
 overflow-y:auto;
 overflow-x:hidden;
 padding:10px 5px;
 
 ul{
 display:flex;
 flex-direction:column;
 align-items:center;
 list-style-type:none;
 width:100%;
  li{
  width:100%;
  margin-top:15px;
   
  &:hover{
  background-color:#17202a;
 }
}
`

