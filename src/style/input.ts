import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  width: ${({ width }) => width || '300px'};
  height: 35px;
  border: none;
  border-bottom: ${({ theme: { borderColor } }) => `1px solid ${borderColor}`};
  background: none;
  margin: 10px;
  padding: 10px 15px;
  outline: none;
  color: ${({ theme: { fontColor } }) => fontColor};

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${({ theme: { backgroundColor } }) => backgroundColor}
      inset !important;
    -webkit-text-fill-color: ${({ theme: { fontColor } }) => fontColor} !important;
  }
`;
