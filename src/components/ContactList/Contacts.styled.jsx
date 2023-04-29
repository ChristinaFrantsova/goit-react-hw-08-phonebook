import styled from 'styled-components';

export const Div = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  margin: 20px 0px 0px 0px;
`;

export const Item = styled.li`
  width: 400px;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px 20px;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  transition: transform linear 250ms;
  background: linear-gradient(10deg, rgb(126 185 191), rgb(255, 255, 255) 50%);
  box-shadow: rgb(223 234 235) 0rem 1.25rem 2.625rem 0.375rem;
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  background: inherit;
  outline: none;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 5px 15px;
  color: inherit;
  transition: all 0.3s ease;
  &:hover {
    background: linear-gradient(45deg, #79bfc9, #274b54);
    color: #79bfc9;
    background-size: cover;
  }
`;
