import React from 'react';
import { MaxContainer } from '../Layout';
import Icon from '../Icon';
import { ReactComponent as Cart } from 'assets/icons/cart.svg';
import { ReactComponent as Person } from 'assets/icons/person.svg';
import { ReactComponent as Loop } from 'assets/icons/loop.svg';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Button } from '../Buttons';
import { ButtonsWrapper, Content, IconsWrapper, OuterWrapper } from './styles';

const Header: React.FC = () => {
  return (
    <OuterWrapper>
      <MaxContainer>
        <Content>
          <ButtonsWrapper>
            <Button active={true}>Home</Button>
            <Button>About</Button>
            <Button>Products</Button>
          </ButtonsWrapper>

          <Logo />

          <IconsWrapper>
            <Icon icon={<Cart />} />
            <Icon icon={<Person />} />
            <Icon icon={<Loop />} />
          </IconsWrapper>
        </Content>
      </MaxContainer>
    </OuterWrapper>
  );
};

export default Header;
