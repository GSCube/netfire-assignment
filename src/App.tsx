import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { HomepageHero } from './components/HomepageHero';
import { GlobalStyle } from './globalStyles';
import PromoBanner from './components/PromoBanner';
import Header from './components/Header';
import Footer from './components/Footer';
import ContentSection from './components/ContentSection';
import { AppContainer, MainContentContainer } from './components/Layout';
import {
  GradientText,
  Heading2,
  HighlightedText,
  Paragraph,
} from './components/Typography';

const PromoBannerMessage = (
  <Paragraph $variant={'p2'}>
    NEW CUSTOMERS GET 15% OFF! USE CODE <HighlightedText>WELCOME15</HighlightedText>
  </Paragraph>
);

const ContentSectionText = (
  <Heading2>
    Lorem{' '}
    <GradientText>
      ipsum dolor sit amet consectetur adipiscing elit etiam molestie ex vel
    </GradientText>{' '}
    massa lacinia ultricies. Suspendisse lobortis vehicula eros, sed sodales eros mollis
    eget. Morbi vitae libero in nunc sodales.
  </Heading2>
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
          <ContentSection text={ContentSectionText} />
        </MainContentContainer>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
