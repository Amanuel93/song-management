import styled from "styled-components";

export const Nav  = styled.nav`
  display:flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1b2631;
  width:100%;
  color: #fff;
  font-family: Arial, sans-serif;
  a {
    color: #fff;
    text-decoration: none;
    margin-left: 1rem;
  }
    .logo {
    font-size: 2rem;
    width: 50px;
    height:50px;
    border-radius:100%;
  }
    .links {
    display: flex;
  }
  .links a {
    margin-right: 1rem;
  }
    .search {
    border: none;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: #ddd;
    color: #333;
    font-size: 1rem;
  }

  /* Responsive styles */
  @media (max-width: 600px) {
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6px 4px;
   .links {
      // flex-direction: column;
    }
   .links a {
      margin: 0 6px;
    }
   .search {
      margin-bottom: 0.5rem;
    }
  };
`

export const Search = styled.div`
 display:flex;
 align-items:center;
 padding:10px 0;
 input{
  outline:none;
  padding:10px 52px 10px 10px;
  border-radius:5px;
 }
  .search{
   color:white;
   background-color:green;
   height:100%;
   padding:0 10px;
   border-radius:5px;
  }
`