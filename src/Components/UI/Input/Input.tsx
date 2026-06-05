import styled from "styled-components";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
 
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
      <Container>
          {label && <Label>{label}</Label>}
          <StyledInput {...props} />
      </Container>
  );
};

const Container = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
    width: 100%;
`;

const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.colors.neutro_color_300};
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.brand_color_500};
  }
`;
