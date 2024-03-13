import React from 'react';
import styled from 'styled-components';

const size = '40px';

const IconWrapper = styled.div`
  width: ${size};
  height: ${size};
  border-radius: ${size};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderButton};
  cursor: pointer;
  transition: background ${({ theme }) => theme.transitionTime} ease;

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundSecondaryHover};
  }
`;

interface IconProps {
  icon: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  return <IconWrapper>{icon}</IconWrapper>;
};

export default Icon;
