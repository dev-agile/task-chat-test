import { FunctionComponent } from "react";
import styled from "styled-components";

export type FileCardType = {
  className?: string;
  iconsaxLinearclipboardtex?: string;
  title?: string;
  type?: string;
  size?: string;
};

const Iconsaxlinearclipboardtext = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const FileIcon = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--red-red100);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs);
`;
const Title = styled.div`
  flex: 1;
  position: relative;
  line-height: 150%;
  font-weight: 600;
`;
const FileTitle = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Type = styled.div`
  position: relative;
  line-height: 150%;
  font-weight: 600;
  display: inline-block;
  min-width: 24px;
`;
const Size = styled.div`
  position: relative;
  line-height: 150%;
  font-weight: 600;
  display: inline-block;
  min-width: 27px;
`;
const MetaDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  font-size: var(--font-size-xs);
  color: var(--color-gray-400);
`;
const FileMeta = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Title1 = styled.div`
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
const Title2 = styled.div`
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
const FileInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Iconsax = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const FileCardRoot = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xs);
  gap: var(--gap-base);
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--black);
  font-family: var(--font-inter);
`;

const FileCard: FunctionComponent<FileCardType> = ({
  className = "",
  iconsaxLinearclipboardtex,
  title,
  type,
  size,
}) => {
  return (
    <FileCardRoot className={className}>
      <FileIcon>
        <Iconsaxlinearclipboardtext alt="" src={iconsaxLinearclipboardtex} />
      </FileIcon>
      <FileInfo>
        <FileMeta>
          <FileTitle>
            <Title>{title}</Title>
          </FileTitle>
          <MetaDetails>
            <Type>{type}</Type>
            <Size>{size}</Size>
          </MetaDetails>
        </FileMeta>
        <LabelParent>
          <Label>
            <Title1>Question</Title1>
          </Label>
          <Label1>
            <Title2>Help wanted</Title2>
          </Label1>
        </LabelParent>
      </FileInfo>
      <Iconsax alt="" src="/iconsax-10.svg" />
    </FileCardRoot>
  );
};

export default FileCard;
