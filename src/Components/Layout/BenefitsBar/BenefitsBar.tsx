import  {BenefitsCard}  from "../../Features/BenefitsCard";
import { Flex } from "../../UI/Flex/Flex";
import { Line } from "../../UI/Line/Line";
export function BenefitsBar() {
    return(
        <Flex flexDirection="row"  fullWidth={true} justifyContent="space-between" >
            <BenefitsCard variant="delivery" />
            <Line direction="vertical" />   
            
            <BenefitsCard variant="payment" />
            <Line direction="vertical" />   
            
            <BenefitsCard variant="support" />
            <Line direction="vertical" />   
            
            <BenefitsCard variant="refund" />
        </Flex>
    )
}