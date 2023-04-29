import styled from 'styled-components';

export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  color: #76b5be;
`;

export const Input = styled.input`
  background: #e2e2e2;
  margin-top: 15px;
  padding: 0px 10px;
  outline: none;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  width: 400px;
  height: 30px;
  &:focus {
    border-color: #76b5be;
  }
`;
