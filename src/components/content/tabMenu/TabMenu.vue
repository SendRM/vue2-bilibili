<template>
  <div>
    <el-col :span="12" :sm="4" :md="2" :lg="2">
      <el-menu
        default-active="0"
        class="el-menu-vertical-demo menu"
        @select="handleSelect"
      >
        <!-- <el-submenu index="1">
          <el-menu-item slot="title">
            <i class="el-icon-location"></i>
            <span>类型</span>
          </el-menu-item>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
          </el-menu-item-group>
        </el-submenu> -->
        <el-menu-item index="0">
          <i class="el-icon-ice-cream-round"></i>
          <span slot="title">番剧</span>
        </el-menu-item>
        <el-menu-item index="1">
          <i class="el-icon-lollipop"></i>
          <span slot="title">纪录片</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-sugar"></i>
          <span slot="title">国创</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-ice-cream"></i>
          <span slot="title">电影</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-dessert"></i>
          <span slot="title">电视</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-goblet-square-full"></i>
          <span slot="title">综艺</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    category: {
      type: Array,
    },
  },
  methods: {
    created() {},
    handleSelect(index) {
      let type = [
        "anime",
        "documentary",
        "guochuang",
        "movie",
        "tv",
        "variety",
      ];
      this.$router.push({
        path: "/category",
        query: {
          type: type[index],
        },
      });
      // console.log(type[index]);
    },
  },
};
</script>

<style scoped>
.menu {
  position: sticky;
  top: 0;
  left: 0;
}
.el-col {
  margin: 2rem 0 0 1.5rem;
}
.el-menu-item-group__title,
.el-menu .el-menu-item,
.el-menu,
.el-menu-item-group,
.el-menu-item-group__title,
ul.el-menu--inline,
.el-menu-vertical-demo .is-opened .el-menu ul.el-menu li.is-opened,
li.el-submenu ul.el-menu,
ul.el-menu {
  background-color: var(--extension-background-gray) !important;
}
.el-menu-item {
  height: 48px;
}
.el-menu {
  border: 0;
  font-weight: 700;
  text-align: left;
  margin-top: 20px;
  margin-left: 3rem;
}
.el-menu i {
  font-size: 26px;
  margin-right: 15px;
}
.el-menu-item-group__title,
.el-menu .el-menu-item {
  margin: 1.25rem -3.6625rem;
  font-size: var(--heading-m16-w18-size);
  line-height: var(--heading-m16-w18-line-height);
  padding-top: 0.25rem;
}
.el-menu .is-active {
  background-color: #fff !important;
  color: var(--primary-tap-blue);
  border-radius: 38px;
}
.bg-purple {
  background: #d3dce6;
}
i.el-submenu__icon-arrow {
  right: 10.125rem;
}
.el-menu-item-group > ul {
  margin-left: 0.625rem;
}
</style>
