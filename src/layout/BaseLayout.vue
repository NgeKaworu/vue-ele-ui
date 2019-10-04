<template>
  <Container direction="vertical">
    <Header>
      <BaseNav :routes="routes" />
    </Header>
    <Main>
      <RouterView />
    </Main>
  </Container>
</template>

<script>
import { Container, Header, Main } from "element-ui";
import BaseNav from "./BaseNav";
import routes from "@/router/router.config";
export default {
  name: "BaseLayout",
  data: () => ({
    routes
  }),
  components: {
    Container,
    Header,
    Main,
    BaseNav
  }
};
</script>
