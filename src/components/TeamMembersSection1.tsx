import { FunctionComponent } from "react";
import SectionTitle from "./SectionTitle";
import FileCard from "./FileCard";
import styled from "styled-components";
import { fileData } from "../utils";
export type TeamMembersSection1Type = {
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

const TeamMembersSection1: FunctionComponent<TeamMembersSection1Type> = ({
  className = "",
}) => {
  return (
    <TeamMembersSectionRoot className={className}>
      <SectionTitle title="Files" number={fileData.length} />
      {fileData.map((file, index) => (
        <FileCard
          key={index}
          iconsaxLinearclipboardtex={file.iconsaxLinearclipboardtex}
          title={file.title}
          type={file.type}
          size={file.size}
        />
      ))}
    </TeamMembersSectionRoot>
  );
};

export default TeamMembersSection1;
