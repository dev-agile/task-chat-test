import { FunctionComponent } from "react";
import styled from "styled-components";
import { iconData } from "../utils";
export type SidebarType = {
  className?: string;
};

const Q = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 32px;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  min-width: 16px;
`;
const Logo = styled.div`
  border-radius: var(--br-sm);
  background-color: var(--primary);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi-3) var(--padding-lgi) var(--padding-xs-7)
    var(--padding-xl);
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const SideBarIconList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
`;
const SideBarIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-base) var(--padding-541xl);
`;
const Iconsax1 = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const SideBarButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-base);
`;
const SidebarRoot = styled.div`
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-base) var(--padding-5xl);
  gap: var(--gap-29xl);
  text-align: left;
  font-size: var(--font-size-2xl);
  color: var(--white);
  box-shadow: 0px 10px 15px -3px #00000014;
`;

const Sidebar: FunctionComponent<SidebarType> = ({ className = "" }) => {
  return (
    <SidebarRoot className={className}>
      <Logo>
        <Q>Q</Q>
      </Logo>
      <SideBarIcons>
        <SideBarIconList>
          {iconData.map((icon, index) => (
            <Icon key={index} alt={icon.alt} src={icon.src} />
          ))}
        </SideBarIconList>
      </SideBarIcons>
    </SidebarRoot>
  );
};

export default Sidebar;
