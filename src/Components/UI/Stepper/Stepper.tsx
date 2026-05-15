import { useState } from "react";
import styled from "styled-components";

import { Button } from "@components/UI/Button";
import { Text } from "@components/UI/Text";
import { Flex } from "@components/UI/Flex";

export const Stepper = () => {
    const [value, setValue] = useState(1);

    const increment = () => {
        setValue(prev => prev + 1);
    };

    const decrement = () => {
        if (value > 1) {
            setValue(prev => prev - 1);
        }
    };

    return (
        <BorderColor>
        <StepperStyled gap="12px" alignItems="center">
            <Button
                variant="contained"
                palette="primary"
                onclick={decrement}
            >
                <Text color="white">-</Text>
            </Button>

            <ValueContainer>
                <Text >
                    {value}
                </Text>
            </ValueContainer>

            <Button
                variant="outlined"
                palette="primary"
                onclick={increment}
            >
                <Text color="brand">+</Text>
            </Button>
        </StepperStyled>
        </BorderColor>  
    );
};

const BorderColor = styled.div`
    border: 1px solid #E0E0E0;
    max-width: fit-content;
    border-radius: 4px;
`

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