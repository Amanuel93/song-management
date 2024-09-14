import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #2e4053;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width:100%;
    padding: 5px 10px;
  }

  @media (max-width: 600px) {
    padding: 5px 10px;
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    
    padding: 5px 0;
  }

  @media (max-width: 320px) {
    padding: 8px 0; 
  }
 @media (max-width: 220px) {
    padding: 8px 0; 
  }

`;

export const Title = styled.h2`
  text-align: center;
  color: #fff;
`;

export const Form = styled.form`
  display: flex;
  padding:10px 10px;
  flex-direction: column;
  background-color: #2e4053;
  @media (max-width:600px){
   padding:10px
  }
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const FileInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;