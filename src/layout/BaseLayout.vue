<template>
  <Container direction="vertical">
    <Header>
      <BaseNav />
    </Header>
    <Main>
      <RouterView />
    </Main>
    <Footer>Footer</Footer>
  </Container>
</template>

<script>
import { Container, Header, Main, Footer } from "element-ui";
import BaseNav from "./BaseNav";
export default {
  name: "BaseLayout",
  components: {
    Container,
    Header,
    Main,
    Footer,
    BaseNav
  }
};
</script>
