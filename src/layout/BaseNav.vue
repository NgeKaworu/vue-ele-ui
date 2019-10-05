<script>
import { Menu, Submenu, MenuItem } from "element-ui";
export default {
  name: "CusNav",
  components: { Submenu, MenuItem, Menu },
  props: ["routes"],
  computed: {
    hasChildren: () => route => {
      const { children } = route;
      return children && children.length;
    }
  },
  methods: {
    recursion(h, routes) {
      return routes.map(route => {
        const { path, children, name, icon } = route;
        console.log(icon);
        return this.hasChildren(route) ? (
          <Submenu index={path}>
            <template slot="title">
              <i class={icon} />
              {name}
            </template>
            {this.recursion(h, children)}
          </Submenu>
        ) : (
          <MenuItem index={path}>
            <icon />

            <i class={icon} />
            {name}
          </MenuItem>
        );
      });
    }
  },
  render(h) {
    return (
      <Menu mode="horizontal" defaultActive={this.$route.path} router={true}>
        {this.recursion(h, this.routes)}
      </Menu>
    );
  }
};
</script>
