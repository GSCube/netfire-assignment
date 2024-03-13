import React from 'react';
import { MaxContainer } from '../Layout';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { AccentBar } from '../AccentBar';
import {
  BrandName,
  Content,
  Disclaimer,
  Highlight,
  LogoWrapper,
  OuterWrapper,
} from './styles';

const Footer: React.FC = () => {
  return (
    <OuterWrapper>
      <AccentBar />
      <MaxContainer>
        <Content>
          <LogoWrapper>
            <Logo />
            <BrandName>Brand Name</BrandName>
          </LogoWrapper>
          <Disclaimer>
            © 2024 <Highlight>Brand Name</Highlight> All rights reserved. Unauthorized
            use or copying of this brand is strictly prohibited. No part of this website
            may be reproduced, distributed, or transmitted in any form or by any means,
            including photocopying, recording, or other electronic or mechanical methods,
            without the prior written permission of Brand Name, except in the case of
            brief quotations embodied in critical reviews and certain other non-commercial
            uses permitted by copyright law.
          </Disclaimer>
        </Content>
      </MaxContainer>
    </OuterWrapper>
  );
};

export default Footer;
