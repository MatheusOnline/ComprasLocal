import styled from "styled-components"

type AssessmentProps = {
  percentage: number // 0 a 100
}

export function Assessment({ percentage }: AssessmentProps) {
  const safePercentage = Math.max(0, Math.min(10, percentage))

  return (
    <Wrapper>
      <StarsBackground>★★★★★★</StarsBackground>
      <StarsFill style={{ width: `${safePercentage}%` }}>
        ★★★★★★
      </StarsFill>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  font-size: 18px;
  line-height: 1;
`

const StarsBackground = styled.div`
  color: #ccc;
`

const StarsFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  color: #f5a623;
`