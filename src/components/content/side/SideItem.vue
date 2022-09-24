<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 82px;
  padding: 30px 0;
  line-height: 44px;
  margin-bottom: 25px;
  text-align: center;
}

.center {
  flex: 1;
  line-height: 1.5em;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
}
</style>