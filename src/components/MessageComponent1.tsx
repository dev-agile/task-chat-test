import { FunctionComponent } from "react";
import styled from "styled-components";

export type MessageComponent1Type = {
  className?: string;
  teamMemberContainer?: string;
  fullNameHere?: string;
  m?: string;
  job?: string;
  title?: string;
  title1?: string;
  showLabel?: boolean;
};

const TeamMemberContainer = styled.img`
  height: 48px;
  width: 48px;
  position: relative;
  border-radius: var(--br-xs);
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const FullNameHere = styled.div`
  flex: 1;
  position: relative;
  line-height: 150%;
  font-weight: 600;
`;
const M = styled.div`
  align-self: stretch;
  width: 28px;
  position: relative;
  line-height: 150%;
  font-weight: 600;
  display: none;
  opacity: 0.3;
`;
const TeamMemberSummary = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const Job = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-xs);
  line-height: 150%;
  font-weight: 600;
  color: var(--color-gray-400);
`;
const TeamMemberContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Title = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 150%;
  font-weight: 600;
`;
const Label = styled.div`
  height: 22px;
  border-radius: var(--br-xs);
  background-color: var(--orange-orange200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-5xs);
  box-sizing: border-box;
`;
const Title1 = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  line-height: 150%;
  font-weight: 600;
`;
const Label1 = styled.div`
  height: 22px;
  flex: 1;
  border-radius: var(--br-xs);
  background-color: var(--green-green200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-5xs);
  box-sizing: border-box;
  white-space: nowrap;
  color: var(--green-green600);
`;
const LabelParent = styled.div`
  width: 168px;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--font-size-xs);
  color: var(--orange-orange600);
`;
const TeamMemberInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const MessageComponentRoot = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs);
  gap: var(--gap-base);
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--black);
  font-family: var(--font-inter);
`;

const MessageComponent1: FunctionComponent<MessageComponent1Type> = ({
  className = "",
  teamMemberContainer,
  fullNameHere,
  m,
  job,
  title,
  title1,
  showLabel,
}) => {
  return (
    <MessageComponentRoot className={className}>
      <TeamMemberContainer loading="lazy" alt="" src={teamMemberContainer} />
      <TeamMemberInfo>
        <TeamMemberContent>
          <TeamMemberSummary>
            <FullNameHere>{fullNameHere}</FullNameHere>
            <M>{m}</M>
          </TeamMemberSummary>
          <Job>{job}</Job>
        </TeamMemberContent>
        <LabelParent>
          {showLabel && (
            <Label>
              <Title>{title}</Title>
            </Label>
          )}
          <Label1>
            <Title1>{title1}</Title1>
          </Label1>
        </LabelParent>
      </TeamMemberInfo>
    </MessageComponentRoot>
  );
};

export default MessageComponent1;
