import { FunctionComponent } from "react";
import styled from "styled-components";

export type SectionTitleType = {
  className?: string;
  title?: string;
  number?: number;
};

const Title = styled.div`
  position: relative;
  line-height: 150%;
  font-weight: 600;
  display: inline-block;
  min-width: 105px;
`;
const Number1 = styled.div`
  position: relative;
  line-height: 150%;
  font-weight: 600;
  display: inline-block;
  min-width: 8px;
`;
const TeamMemberCount = styled.div`
  border-radius: var(--br-5xl);
  background-color: var(--gray-gray200);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-5xs);
  font-size: var(--font-size-xs);
`;
const SectionTitleRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
  gap: var(--gap-5xs);
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--black);
  font-family: var(--font-inter);
`;

const SectionTitle: FunctionComponent<SectionTitleType> = ({
  className = "",
  title,
  number,
}) => {
  return (
    <SectionTitleRoot className={className}>
      <Title>{title}</Title>
      <TeamMemberCount>
        <Number1>{number}</Number1>
      </TeamMemberCount>
    </SectionTitleRoot>
  );
};

export default SectionTitle;
