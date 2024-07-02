import React, {
  FunctionComponent,
  useCallback,
  useState,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import styled from "styled-components";
import { User } from "../pages/ChatWebAppUIKit";
import { FaEdit, FaTrash } from "react-icons/fa";
import { timeAgo } from "../utils";

export type ContactHeaderAreaType = {
  className?: string;
  selectedUser?: User;
  comments: Comment[];
  handleDeleteClick: (message: Comment) => void;
  handleEditSubmit: (message: Comment, newText: string) => void;
};

export type Comment = {
  id: string;
  name: string;
  text: string;
  dateEdited: number;
};

const ContactStatusIcon = styled.img`
  height: 40px;
  width: 40px;
  position: relative;
  border-radius: var(--br-3xs);
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
`;

const FlorencioDorrance = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 125%;
  font-weight: 600;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 20px;
  }
`;

const Avatar = styled.div`
  width: 10px;
  height: 10px;
  position: relative;
  border-radius: 50%;
  background-color: var(--green-green400);
`;

const ContactAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
`;

const Online = styled.div`
  position: relative;
  line-height: 150%;
  font-weight: 600;
  display: inline-block;
  min-width: 38px;
`;

const ContactAvatarParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--font-size-xs);
  color: var(--color-gray-200);
`;

const ContactNameArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: flex-start;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;

const Iconsaxboldcall = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 24px;
`;

const Call = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 125%;
  font-weight: 600;
  font-family: var(--font-inter);
  color: var(--primary);
  text-align: left;
  display: inline-block;
  min-width: 30px;
`;

const CallLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
`;

const CallButton = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-3xs) var(--padding-base);
  background-color: var(--primary-10);
  border-radius: var(--br-5xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;

const PanelHeader = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-lg) var(--padding-5xl);
  gap: var(--gap-xl);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;

const Divider = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  background-color: var(--color-gray-300);
`;

const MessageContentGoes = styled.div`
  position: relative;
  line-height: 150%;
  display: inline-block;
  min-width: 90px;
`;

const MessageItem = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-base);
  white-space: nowrap;
  margin-bottom: 10px;
  position: relative;
  &:hover .toolbar {
    opacity: 1;
    visibility: visible;
  }
`;

const NewMessageActions = styled.img`
  height: 40px;
  width: 40px;
  position: relative;
  border-radius: 8.33px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  min-height: 40px;
`;

const NewMessage = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 0px var(--padding-395xl);
  gap: var(--gap-base);
`;

const MessageList = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  gap: var(--gap-13xl);
  font-size: var(--font-size-sm);
  color: var(--white);
  height: 80vh;
  overflow: scroll;
`;

const ContactHeaderAreaRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--black);
  font-family: var(--font-inter);
`;

const Toolbar = styled.div`
  position: absolute;
  top: 50%;
  width: 80px;
  right: 10px;
  left: -100px;
  display: flex;
  gap: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  transform: translateY(-50%);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  color: black;
`;

const Time = styled.div`
  font-size: 10px;
  color: black;
  margin-bottom: 3px;
`;

const ContactHeaderArea: FunctionComponent<ContactHeaderAreaType> = ({
  className = "",
  selectedUser,
  comments = [],
  handleDeleteClick,
  handleEditSubmit,
}) => {
  const [editedMessage, setEditedMessage] = useState<Comment | null>(null);
  const [editedValue, setEditedValue] = useState("");

  const handleEditClick = (message: Comment) => {
    setEditedMessage(message);
    setEditedValue(message.text);
  };

  const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedValue(e.target.value);
  };

  const handleBlur = () => {
    if (editedMessage) {
      handleEditSubmit(editedMessage, editedValue);
    }
    setEditedMessage(null);
    setEditedValue("");
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    message: Comment
  ) => {
    if (e.key === "Enter") {
      handleBlur();
      handleEditSubmit(message, editedValue);
    }
  };

  const getUserMessage = useCallback(() => {
    return (
      comments?.filter((comment) => comment.name === selectedUser?.name) || []
    );
  }, [comments, selectedUser?.name]);

  return (
    <ContactHeaderAreaRoot className={className}>
      <PanelHeader>
        <ContactInfo>
          <ContactStatusIcon loading="lazy" alt="" src={selectedUser?.img} />
          <ContactNameArea>
            <FlorencioDorrance>{selectedUser?.name}</FlorencioDorrance>
            <ContactAvatarParent>
              <ContactAvatar>
                <Avatar />
              </ContactAvatar>
              <Online>Online</Online>
            </ContactAvatarParent>
          </ContactNameArea>
        </ContactInfo>
        <CallButton>
          <Iconsaxboldcall alt="" src={selectedUser?.img} />
          <CallLabel>
            <Call>Call</Call>
          </CallLabel>
        </CallButton>
      </PanelHeader>
      <Divider />
      <MessageList>
        <NewMessage>
          <ContactNameArea>
            {getUserMessage().map((message) => (
              <React.Fragment key={message.id}>
                <Time>{timeAgo(message.dateEdited)}</Time>
                <MessageItem>
                  {editedMessage?.id === message.id ? (
                    <input
                      value={editedValue}
                      onChange={handleEdit}
                      onBlur={handleBlur}
                      onKeyDown={(e) => handleKeyDown(e, message)}
                    />
                  ) : (
                    <MessageContentGoes>{message.text}</MessageContentGoes>
                  )}
                  <Toolbar className="toolbar">
                    <IconWrapper>
                      <FaEdit
                        size={20}
                        onClick={() => handleEditClick(message)}
                      />
                    </IconWrapper>
                    <IconWrapper>
                      <FaTrash
                        size={20}
                        color="red"
                        onClick={() => handleDeleteClick(message)}
                      />
                    </IconWrapper>
                  </Toolbar>
                </MessageItem>
              </React.Fragment>
            ))}
          </ContactNameArea>
          <NewMessageActions loading="lazy" alt="" src="/frame-10-7@2x.png" />
        </NewMessage>
      </MessageList>
    </ContactHeaderAreaRoot>
  );
};

export default ContactHeaderArea;
