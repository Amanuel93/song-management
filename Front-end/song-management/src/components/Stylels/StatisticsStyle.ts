import styled from 'styled-components';

export const Container = styled.div`
  padding:  0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
//  width:100%;
  margin: 0 auto;
 background-color: #2e4053;
  @media (max-width: 600px) {
    padding: 0 30px;
  }
`;

export const Title = styled.h4`
  font-size: 2rem;
  margin-bottom: 2rem;
  display: flex;
  color: #fff;
  justify-content-center;
  align-items: center;

  svg {
    margin-right: 0.5rem;
    color: #fea;
  }
    @media (max-width: 768px) {
      font-size: 1.5rem;

    }
`;

export const Card = styled.div`
  background: #fee;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 0 1rem;
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 600px) {
   padding:1rem;
  }
`;

export const StatTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #333;
`;

export const StatValue = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #555;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: 600px){
   flex-direction: column;
   padding: 0 10px;
   background-color: #fab;
  }
`;

export const Error = styled.p`
  color: red;
  font-weight: bold;
`;