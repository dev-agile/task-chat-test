import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type MessageComponentType = {
  className?: string;
  userMessageItemContainer?: string;
  fullNameHere?: string;
  m?: string;
  enterYourMessageHere?: string;
  title?: string;
  title1?: string;
  showLabel?: boolean;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const UserMessageItemContainer = styled.img`
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
  position: relative;
  line-height: 150%;
  font-weight: 600;
  color: var(--color-gray-100);
  display: inline-block;
  min-width: 29px;
  margin-right:20px
`;
const UserMessageSummary = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs);
`;
const EnterYourMessage = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-xs);
  line-height: 150%;
  font-weight: 600;
  color: var(--color-gray-400);
`;
const UserMessageContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Title = styled.div`
  position: relative;
  line-height: 150%;
  font-weight: 600;
  display: inline-block;
  min-width: 53px;
`;
const Label = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--orange-orange200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-5xs);
`;
const Title1 = styled.div`
  position: relative;
  line-height: 150%;
  font-weight: 600;
  display: inline-block;
  min-width: 74px;
`;
const Label1 = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--green-green200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-5xs);
  white-space: nowrap;
  color: var(--green-green600);
`;
const UserMessageDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--font-size-xs);
  color: var(--orange-orange600);
`;
const UserMessageInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const MessageComponentRoot = styled.div<{
  propBorderRadius?: CSSProperties["borderRadius"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
}>`align-self: stretch;
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
  border-radius: ${(p) => p.propBorderRadius}
  background-color: ${(p) => p.propBackgroundColor}
`;

const MessageComponent: FunctionComponent<MessageComponentType> = ({
  className = "",
  userMessageItemContainer,
  fullNameHere,
  m,
  enterYourMessageHere,
  title,
  title1,
  showLabel,
  propBorderRadius,
  propBackgroundColor,
}) => {
  return (
    <MessageComponentRoot
      propBorderRadius={propBorderRadius}
      propBackgroundColor={propBackgroundColor}
      className={className}
    >
      <UserMessageItemContainer
        loading="lazy"
        alt=""
        src={userMessageItemContainer}
      />
      <UserMessageInfo>
        <UserMessageContent>
          <UserMessageSummary>
            <FullNameHere>{fullNameHere}</FullNameHere>
            <M>{m}</M>
          </UserMessageSummary>
          <EnterYourMessage>{enterYourMessageHere}</EnterYourMessage>
        </UserMessageContent>
        <UserMessageDetails>
          {showLabel && (
            <Label>
              <Title>{title}</Title>
            </Label>
          )}
          <Label1>
            <Title1>{title1}</Title1>
          </Label1>
        </UserMessageDetails>
      </UserMessageInfo>
    </MessageComponentRoot>
  );
};

export default MessageComponent;
