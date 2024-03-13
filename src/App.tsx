import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import { HomepageHero } from './components/HomepageHero';
import { GlobalStyle } from './globalStyles';
import PromoBanner from './components/PromoBanner';
import Header from './components/Header';
import Footer from './components/Footer';
import ContentSection from './components/ContentSection';
import { AppContainer, MainContentContainer } from './components/Layout';
import { Paragraph } from './components/Typography';

export const HighlightedText = styled.span`
  color: ${({ theme }) => theme.colors.promotionHighlight};
`;

const PromoBannerMessage = (
  <Paragraph>
    NEW CUSTOMERS GET 15% OFF! USE CODE <HighlightedText>WELCOME15</HighlightedText>
  </Paragraph>
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <AppContainer>
        <PromoBanner message={PromoBannerMessage} />
        <Header />
        <HomepageHero />
        <MainContentContainer>
          <ContentSection />
        </MainContentContainer>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
