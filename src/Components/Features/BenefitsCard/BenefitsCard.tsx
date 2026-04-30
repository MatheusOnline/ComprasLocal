import styled from "styled-components"
import { Text } from "../../UI/Text"

import box from "../../../assets/icons/box.svg"
import creditCard from "../../../assets/icons/creditCard.svg"
import headphone from "../../../assets/icons/headphone.svg"
import verifild from "../../../assets/icons/verifild.svg"


const variations = {
  delivery: {
    icon: box,
    title: "ENTREGA RÁPIDA",
    description: "Entrega 24h"
  },
  payment: {
    icon: creditCard,
    title: "PAGAMENTO SEGURO",
    description: "Seu dinheiro está seguro"
  },
  support: {
    icon: headphone,
    title: "SUPORTE 24/7",
    description: "Atendimento em tempo real"
  },
  refund: {
    icon: verifild,
    title: "DEVOLUÇÃO EM 24 HORAS",
    description: "Garantia de reembolso de 100%"
  }
} as const

type BenefitVariant = keyof typeof variations

type BenefitsCardProps = {
  variant?: BenefitVariant
}

export function BenefitsCard({ variant = "delivery" }: BenefitsCardProps) {
    const data = variations[variant]

    return (
        <BenifitsCardStyled>
            <img src={data.icon} alt={data.title} />
            <div>
                <Text fontWeight="semi-bold" fontSize="normal">
                {data.title}
                </Text>
                <Text fontWeight="normal" fontSize="small" color="secondary">
                    {data.description}
                </Text>
            </div>
        </BenifitsCardStyled>
    )
}

const BenifitsCardStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`


