import { FunctionComponent } from "react";
import SectionTitle from "./SectionTitle";
import MessageComponent1 from "./MessageComponent1";
import styled from "styled-components";
import { teamMember } from "../utils";
export type TeamMembersSectionType = {
  className?: string;
};

const TeamMembersSectionRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-base);
  gap: var(--gap-5xs);
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--black);
  font-family: var(--font-inter);
`;

const TeamMembersSection: FunctionComponent<TeamMembersSectionType> = ({
  className = "",
}) => {
  return (
    <TeamMembersSectionRoot className={className}>
      <SectionTitle title="Team Members" number={teamMember.length} />
      {teamMember.map((member, index) => (
        <MessageComponent1
          key={index}
          teamMemberContainer={member.teamMemberContainer}
          fullNameHere={member.fullNameHere}
          m={member.m}
          job={member.job}
        />
      ))}
    </TeamMembersSectionRoot>
  );
};

export default TeamMembersSection;
