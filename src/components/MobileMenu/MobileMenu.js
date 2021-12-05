/* eslint-disable no-unused-vars */
import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink style={{ "--delay-order": 0 }} href="/sale">
            Sale
          </NavLink>
          <NavLink style={{ "--delay-order": 1 }} href="/new">
            New&nbsp;Releases
          </NavLink>
          <NavLink style={{ "--delay-order": 2 }} href="/men">
            Men
          </NavLink>
          <NavLink style={{ "--delay-order": 3 }} href="/women">
            Women
          </NavLink>
          <NavLink style={{ "--delay-order": 4 }} href="/kids">
            Kids
          </NavLink>
          <NavLink style={{ "--delay-order": 5 }} href="/collections">
            Collections
          </NavLink>
        </Nav>
        <Footer>
          <SubLink style={{ "--delay-order": 6 }} href="/terms">
            Terms and Conditions
          </SubLink>
          <SubLink style={{ "--delay-order": 7 }} href="/privacy">
            Privacy Policy
          </SubLink>
          <SubLink style={{ "--delay-order": 8 }} href="/contact">
            Contact Us
          </SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateY(0%);
  }
`;

const fadeAndSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(20%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;

  animation: ${fadeIn} 200ms both;
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;

  animation: ${slideIn} 200ms both cubic-bezier(1, 0.01, 0.67, 0.92);
  animation-delay: 100ms;

  & > * {
    animation: ${fadeIn} 200ms both;
    animation-delay: 350ms;
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }

  animation: ${fadeAndSlideIn} 150ms both ease-out;
  animation-delay: calc(var(--delay-order) * 75ms + 350ms);
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;

  animation: ${fadeAndSlideIn} 150ms both ease-out;
  animation-delay: calc(var(--delay-order) * 75ms + 350ms);
`;

export default MobileMenu;
