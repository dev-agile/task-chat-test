import { FunctionComponent, useCallback } from "react";
import styled from "styled-components";
import MessageComponent from "./MessageComponent";
import { User } from "../pages/ChatWebAppUIKit";
import { timeAgo } from "../utils";

export type MessagesPanelType = {
  className?: string;
  handlePress?: (item: User) => void;
  userList: Array<User>;
  comments: Comment[];
  selectedUser: User;
};

export type Comment = {
  id: string;
  name: string;
  text: string;
  dateEdited: number;
};

const Messages = styled.div`
  position: relative;
  line-height: 150%;
  font-weight: 600;
  display: inline-block;
  min-width: 99px;
`;
const Iconsax = styled.img`
  height: 16px;
  width: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const UserMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const Div = styled.div`
  position: relative;
  line-height: 150%;
  font-weight: 600;
  display: inline-block;
  min-width: 14px;
`;
const MessageDate = styled.div`
  border-radius: var(--br-5xl);
  background-color: var(--gray-gray200);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-5xs);
  font-size: var(--font-size-xs);
`;
const MessageInputArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const Iconsax1 = styled.img`
  height: 40px;
  width: 40px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Content = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-5xl);
  gap: var(--gap-xl);
`;
const Divider = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  background-color: var(--color-gray-300);
`;
const Search = styled.input`
  border: none;
  outline: none;
  font-family: var(--font-inter);
  font-size: var(--font-size-sm);
  background-color: transparent;
  height: 17px;
  position: relative;
  color: var(--color-gray-400);
  text-align: left;
  display: inline-block;
  padding: 0;
`;
const SearchMessages = styled.input`
  position: relative;
  line-height: 150%;
  display: inline-block;
  min-width: 117px;
  white-space: nowrap;
`;
const SearchBar = styled.div`
  align-self: stretch;
  border-radius: var(--br-xs);
  background-color: var(--color-whitesmoke-100);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-sm-5) var(--padding-90xl) var(--padding-sm-5)
    var(--padding-xl);
  gap: var(--gap-3xs);
`;
const SearchArea = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-5xl);
  top: 0;
  z-index: 99;
  position: sticky;
`;
const MessageComponentChild = styled.img`
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
  min-width: 20px;
`;
const FullNameHereParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const EnterYourMessage = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-xs);
  line-height: 150%;
  font-weight: 600;
  color: var(--color-gray-400);
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Title = styled.div`
  height: 18px;
  position: relative;
  line-height: 150%;
  font-weight: 600;
  display: inline-block;
  white-space: nowrap;
`;
const Label = styled.div`
  border-radius: var(--br-xs);
  border: 1px solid var(--gray-gray400);
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xs);
  white-space: nowrap;
`;
const Title1 = styled.div`
  position: relative;
  line-height: 150%;
  font-weight: 600;
  display: inline-block;
  min-width: 56px;
`;
const Label1 = styled.div`
  flex: 1;
  border-radius: var(--br-xs);
  border: 1px solid var(--gray-gray400);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-6xs);
  white-space: nowrap;
`;
const LabelParent = styled.div`
  width: 72px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--font-size-xs);
  color: var(--gray-gray600);
`;
const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const MessageComponent1 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs);
  gap: var(--gap-base);
`;
const MessageList = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-base);
  gap: var(--gap-5xs);
  color: var(--black);
`;
const GlobalList = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-sm);
  color: var(--color-gray-400);
`;
const MessagesPanelRoot = styled.div`
  width: 349px;
  box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.08);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-246xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--black);
  font-family: var(--font-inter);
`;
const UserWrapper = styled.div<{ isSelected: boolean }>`
  width: 100%;
  background-color: ${(props) => (props.isSelected ? "#615EF00F" : "white")};
  border-radius: 12px;
`;

const MessagesPanel: FunctionComponent<MessagesPanelType> = ({
  className = "",
  handlePress,
  userList,
  comments,
  selectedUser,
}) => {
  const getUserMessage = useCallback(
    (user: User) => {
      return comments?.filter((comment) => comment.name === user?.name) || [];
    },
    [comments]
  );

  return (
    <MessagesPanelRoot className={className}>
      <Content>
        <MessageInputArea>
          <UserMessage>
            <Messages>Messages</Messages>
            <Iconsax alt="" src="/iconsax-6.svg" />
          </UserMessage>
          <MessageDate>
            <Div>12</Div>
          </MessageDate>
        </MessageInputArea>
        <Iconsax1 loading="lazy" alt="" src="/iconsax-7.svg" />
      </Content>
      <Divider />
      <GlobalList>
        <SearchArea>
          <SearchBar>
            <Search placeholder="Search messages" type="text" />
          </SearchBar>
        </SearchArea>
        <MessageList>
          {userList.map((item, index) => {
            const userMsg = getUserMessage(item);
            const lastMsg = userMsg[userMsg.length - 1];
            return (
              <UserWrapper
                onClick={() => handlePress?.(item)}
                key={index}
                isSelected={item.name === selectedUser.name}
              >
                <MessageComponent
                  userMessageItemContainer={item.img}
                  fullNameHere={item.name}
                  m={timeAgo(lastMsg?.dateEdited)}
                  enterYourMessageHere={lastMsg?.text}
                  title="Question"
                  title1="Help wanted"
                  showLabel
                />
              </UserWrapper>
            );
          })}
        </MessageList>
      </GlobalList>
    </MessagesPanelRoot>
  );
};

export default MessagesPanel;
