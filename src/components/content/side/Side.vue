<template>
  <div class="side">
    <h3>热门</h3>
    <slide-item v-for="item in showArr" :key="item.filterLabel">
      <template v-slot:left>
        <img :src="'https://images.weserv.nl/?url=' + item.imgUrl" alt="" />
      </template>
      <template v-slot:center>
        <div>{{ item.name }}</div>
        <div class="play">{{ item.info }}</div>
      </template>
      <template v-slot:right>
        <div class="score" v-if="item.score">
          <i class="el-icon-star-on"></i>
          <h2>{{ item.score }}</h2>
        </div>
        <h4 v-else class="none">暂无评分</h4>
      </template>
    </slide-item>
  </div>
</template>

<script>
import SlideItem from "./SideItem.vue";
export default {
  props: {
    showArr: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    SlideItem,
  },
};
</script>

<style scoped>
.side {
  padding: 0 16px;
}
h2,
h4 {
  color: var(--primary-tap-blue);
}
h3 {
  padding: 10px 0;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
img {
  width: 82px;
  height: 82px;
  border-radius: 5px;
}
.play {
  font-weight: 400;
  font-size: 14px;
  line-height: 5em;
}
.score {
  position: relative;
}
.score i {
  position: absolute;
  left: -26px;
  top: 12px;
  font-size: 22px;
  color: var(--primary-tap-blue);
}
</style>