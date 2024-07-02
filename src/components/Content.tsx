import { FunctionComponent } from "react";
import styled from "styled-components";

export type ContentType = {
  className?: string;
};

const AngleDown = styled.div`
  width: 85px;
  position: relative;
  display: none;
`;
const Directory = styled.div`
  position: relative;
  line-height: 150%;
  font-weight: 600;
  display: inline-block;
  min-width: 91px;
`;
const TeamHeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px 0px;
`;
const Iconsaxboldmorecircle = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: contain;
`;
const TeamAvatars = styled.div`
  width: 4px;
  height: 4px;
  position: relative;
  border-radius: 50%;
  background-color: var(--primary);
`;
const Avatars = styled.div`
  position: absolute;
  top: 11px;
  left: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xs);
  z-index: 1;
`;
const IconsaxboldmorecircleParent = styled.div`
  height: 40px;
  width: 40px;
  position: relative;
`;
const TeamHeaderInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const TeamHeader = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xl);
  font-size: var(--font-size-xl);
`;
const Div = styled.div`
  align-self: stretch;
  height: 18px;
  position: relative;
  line-height: 150%;
  font-weight: 600;
  display: inline-block;
`;
const Wrapper = styled.div`
  width: 24px;
  border-radius: var(--br-5xl);
  background-color: var(--gray-gray200);
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-5xs);
  box-sizing: border-box;
  font-size: var(--font-size-xs);
`;
const Divider = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  background-color: var(--color-gray-300);
  flex-shrink: 0;
`;
const ContentRoot = styled.div`
  align-self: stretch;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) 0px;
  box-sizing: border-box;
  gap: var(--gap-xl);
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-mini);
  color: var(--black);
  font-family: var(--font-inter);
`;

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <ContentRoot className={className}>
      <AngleDown>angle-down</AngleDown>
      <TeamHeader>
        <TeamHeaderInfo>
          <TeamHeaderTitle>
            <Directory>Directory</Directory>
          </TeamHeaderTitle>
          <IconsaxboldmorecircleParent>
            <Iconsaxboldmorecircle alt="" src="/iconsaxboldmorecircle@2x.png" />
            <Avatars>
              <TeamAvatars />
              <TeamAvatars />
              <TeamAvatars />
            </Avatars>
          </IconsaxboldmorecircleParent>
        </TeamHeaderInfo>
      </TeamHeader>
      <Wrapper>
        <Div>6</Div>
      </Wrapper>
      <Divider />
    </ContentRoot>
  );
};

export default Content;
