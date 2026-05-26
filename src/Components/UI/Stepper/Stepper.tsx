import { styled } from "styled-components";
import { Button } from "@components/UI/Button";
import { Text } from "@components/UI/Text";
import { Flex } from "@components/UI/Flex";

type StepperProps = {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
};

export const Stepper = ({ value, onChange, min = 1, max }: StepperProps) => {
    const increment = () => {
        if (max !== undefined && value >= max) return;
        onChange(value + 1);
    };

    const decrement = () => {
        if (value <= min) return;
        onChange(value - 1);
    };

    return (
        <BorderColor>
            <StepperStyled gap="12px" alignItems="center">
                <Button variant="outlined" palette="neutral" onclick={decrement}>
                    <Text color="primary">-</Text>
                </Button>

                <ValueContainer>
                    <Text>{value}</Text>
                </ValueContainer>

                <Button variant="outlined" palette="neutral" onclick={increment}>
                    <Text color="primary">+</Text>
                </Button>
            </StepperStyled>
        </BorderColor>
    );
};

const BorderColor = styled.div`
    border: 1px solid #E0E0E0;
    max-width: fit-content;
    border-radius: 4px;
`;

const StepperStyled = styled(Flex)`
    width: fit-content;
    border: 1px solid #E0E0E0;
`;

const ValueContainer = styled.div`
    min-width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;