import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

const theme = {
  maxWidth: "1000px",
  pink: "#ea4c89"
};

const PageContainer = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <PageContainer>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </PageContainer>
      </ThemeProvider>
    );
  }
}

export default Page;
