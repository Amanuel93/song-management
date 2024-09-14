import styled from 'styled-components';

interface StyledButtonProps {
  
  width?:string;
}
export const Button = styled.button<StyledButtonProps>`
  display:flex;
  width: ${props => props.width || ''};
  justify-content:center;
  background-color: green;
  color: white;
  font-weight:thin;
  padding: 10px 10px;
  cursor: pointer;
`;