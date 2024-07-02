import {
  FunctionComponent,
  useEffect,
  useState,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import MessagesPanel from "../components/MessagesPanel";
import ContactHeaderArea from "../components/ContactHeaderArea";
import Content from "../components/Content";
import TeamMembersSection from "../components/TeamMembersSection";
import TeamMembersSection1 from "../components/TeamMembersSection1";
import { userList } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducer";
import {
  fetchCommentsRequest,
  sendCommentsRequest,
  deleteCommentsRequest,
  editCommentsRequest,
} from "../store/action";

export type User = {
  name: string;
  tag: string[];
  img: string;
};

const ChatWebAppUiKitChild = styled.div`
  height: 1024px;
  width: 1px;
  position: relative;
  background-color: var(--color-gray-300);
  display: none;
`;

const Iconsax = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;

const InputElements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) 0px 0px;
`;

const Iconsax1 = styled.img`
  height: 24px;
  width: 24px;
  position: absolute;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 24px;
  right: 15px;
  top: 14px;
`;

const InputField = styled.input`
  flex: 1;
  height: 48px;
  border-radius: var(--br-xs);
  background-color: var(--white);
  border: 2px solid var(--gray-gray300);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-4xs) 22px var(--padding-4xs) var(--padding-lg);
  min-width: 132px;
  max-width: 100%;
  gap: var(--gap-xl);
  width: 100%;
`;

const InputControls = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;

const MessageInput = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xl);
  box-sizing: border-box;
  max-width: 100%;
  margin-bottom: 30px;
`;

const MessagePanel = styled.div`
  flex: 1;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 416px;
  max-width: 100%;
  height: 100vh;
  justify-content: space-between;
  border-left: 1px solid var(--color-gray-300);
`;

const FrameChild = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  background-color: var(--color-gray-300);
  flex-shrink: 0;
`;

const ContentParent = styled.div`
  width: 362px;
  box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.08);
  background-color: var(--white);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  gap: 24.3px;
  max-width: 100%;
  border-left: 1px solid var(--color-gray-300);
  height: 100vh;
`;

const ChatWebAppUiKitRoot = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.3px;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-gray-400);
  font-family: var(--font-inter);
`;

const InputFieldWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ChatWebAppUIKit: FunctionComponent = () => {
  const [selectedUser, setSelected] = useState<User>(userList[0]);
  const [message, setMessage] = useState<string>("");

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.comments
  );

  const handlePress = (item: User) => {
    setSelected(item);
  };

  useEffect(() => {
    dispatch(fetchCommentsRequest());
  }, [dispatch]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleMessageSend = async () => {
    setMessage("");
    const data = {
      name: selectedUser.name,
      text: message,
    };
    await dispatch(sendCommentsRequest(data));
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleMessageSend();
    }
  };

  const handleDeleteClick = (message: { id: string }) => {
    dispatch(deleteCommentsRequest(message.id));
  };

  const handleEditSubmit = (message: { id: string }, editedValue: string) => {
    const data = {
      id: message.id,
      name: selectedUser.name,
      text: editedValue,
    };
    dispatch(editCommentsRequest(data));
  };

  return (
    <ChatWebAppUiKitRoot>
      <Sidebar />
      <ChatWebAppUiKitChild />
      <MessagesPanel
        handlePress={handlePress}
        userList={userList}
        comments={data}
        selectedUser={selectedUser}
      />
      <MessagePanel>
        <ContactHeaderArea
          selectedUser={selectedUser}
          comments={data}
          handleEditSubmit={handleEditSubmit}
          handleDeleteClick={handleDeleteClick}
        />
        <MessageInput>
          <InputControls>
            <InputElements>
              <Iconsax alt="" src="/iconsax-8.svg" />
            </InputElements>
            <InputFieldWrapper>
              <InputField
                type="text"
                placeholder="Type a message"
                onChange={handleChange}
                value={message}
                onKeyDown={handleKeyPress}
              />
              <Iconsax1
                alt=""
                src="/iconsax-9.svg"
                onClick={handleMessageSend}
              />
            </InputFieldWrapper>
          </InputControls>
        </MessageInput>
      </MessagePanel>
      <ContentParent>
        <Content />
        <TeamMembersSection />
        <FrameChild />
        <TeamMembersSection1 />
      </ContentParent>
    </ChatWebAppUiKitRoot>
  );
};

export default ChatWebAppUIKit;
