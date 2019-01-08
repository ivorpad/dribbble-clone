import styled from 'styled-components'

export const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input, textarea {
    border: none;
    padding: 10px;
    background: #e4e4e4;
    border-radius: 3px;
    margin-bottom: 20px;
    width: 100%;
    box-shadow: 0 1px 3px 0 hsla(0,0%, 0%, 0.1) inset;
    &:focus {
      background: white;
    }
  }
`;

export const Button = styled.button`
  background: ${props => props.theme.pink};
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  color: white;
  width: 200px;
`;
