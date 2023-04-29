import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 40px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  background: #e2e2e2;
  padding: 0 10px 0 10px;
  outline: none;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  height: 30px;
  color: #201717;
  width: 400px;
  margin-top: 5px;
  &:focus {
    border-color: #76b5be;
  }
`;

export const Title = styled.span`
  font-weight: 600;
  color: #201717;
`;

export const Button = styled.button`
  outline: none;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 10px 25px;
  color: #201717;
  transition: all 0.3s ease;
  background: linear-gradient(10deg, rgb(126 185 191), rgb(255, 255, 255) 50%);
  &:hover {
    background: linear-gradient(45deg, #79bfc9, #274b54);
    color: #79bfc9;
  }
`;
