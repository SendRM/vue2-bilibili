<template>
  <div>
    <el-col :sm="6" :md="7" :lg="6" class="box">
      <div class="grid-content bg-purple"><side :showArr="data"></side></div>
    </el-col>
  </div>
</template>

<script>
import Side from "@/components/content/side/Side";

export default {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Side,
  },
};
</script>

<style scoped>
.box {
  position: absolute;
  top: 100px;
  right: 30px;
}
.bg-purple {
  border: 0;
  height: 600px;
  border-radius: 10px;
  background: #fff;
}
</style>