<template>
  <div class="home">
    <tab-menu></tab-menu>
  </div>
</template>

<script>
import TabMenu from "@/components/content/tabMenu/TabMenu";

export default {
  name: "Home",
  components: {
    TabMenu,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
