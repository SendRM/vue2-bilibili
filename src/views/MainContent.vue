<template>
  <div>
    <el-col
      :span="20"
      :sm="10"
      :md="10"
      :lg="10"
      class="main"
      :style="{ width: '300px', height: '300px' }"
    >
      <h1>Bilibili数据可视化展示</h1>
      <div class="panel">
        <div class="main2"></div>
        <h2>{{ type[this.$route.query.type] }}播放量前五</h2>
      </div>
      <div class="panel">
        <div class="main4"></div>
        <h2>播放前五弹幕占比</h2>
      </div>
      <div class="panel">
        <div id="main"></div>
        <h2>播放占比</h2>
      </div>
      <div class="panel">
        <div class="main3"></div>
        <h2>长短评占比</h2>
      </div>
    </el-col>
    <el-col :span="14" :sm="2" :md="10" :lg="10" class="hidden-md-and-down">
      <slide-box :data="dataArr.top5"></slide-box>
    </el-col>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/display.css";
import SlideBox from "./childComps/SlideBox";
import axios from "axios";
export default {
  data() {
    return {
      dataArr: [],
      top: [],
      type: {
        guochuang: "国创",
        anime: "番剧",
        tv: "电视剧",
        movie: "电影",
        variety: "综艺",
        documentary: "纪录片",
      },
    };
  },
  components: {
    SlideBox,
  },
  created() {
    let url = "http://localhost:3000/category";
    let type = this.$route.query.type ? this.$route.query.type : "anime";
    axios
      .get(url, {
        params: {
          type,
        },
      })
      .then((res) => {
        this.dataArr = res.data.data;
        this.dataArr.top5.forEach((item) => {
          this.top.push({
            filterPlay: item.filterPlay,
            name: item.name,
            filterLabel: item.filterPlay,
          });
          console.log(this.dataArr);
        });
      });
  },
  mounted() {
    setTimeout(() => {
      var myChart1 = this.$echarts.init(document.getElementById("main"));
      myChart1.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["10k以下", "10k-100k", "100k-1000k", "1000k以上"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "播放总数",
            type: "line",
            stack: "Total",
            label: {
              show: true,
              position: "top",
            },
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [
              this.dataArr.playPercent[0],
              this.dataArr.playPercent[1],
              this.dataArr.playPercent[2],
              this.dataArr.playPercent[3],
            ],
          },
        ],
      });
      var myChart2 = this.$echarts.init(document.querySelector(".main2"));
      myChart2.setOption({
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "总播放量",
            type: "pie",
            radius: "80%",
            data: [
              {
                value: this.top[0].filterPlay,
                name: this.top[0].name,
              },
              {
                value: this.top[1].filterPlay,
                name: this.top[1].name,
              },
              {
                value: this.top[2].filterPlay,
                name: this.top[2].name,
              },
              {
                value: this.top[3].filterPlay,
                name: this.top[3].name,
              },
              {
                value: this.top[4].filterPlay,
                name: this.top[4].name + "\n",
              },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
      var myChart3 = this.$echarts.init(document.querySelector(".main3"));
      const posList = [
        "left",
        "right",
        "top",
        "bottom",
        "inside",
        "insideTop",
        "insideLeft",
        "insideRight",
        "insideBottom",
        "insideTopLeft",
        "insideTopRight",
        "insideBottomLeft",
        "insideBottomRight",
      ];
      app.configParameters = {
        rotate: {
          min: -90,
          max: 90,
        },
        align: {
          options: {
            left: "left",
            center: "center",
            right: "right",
          },
        },
        verticalAlign: {
          options: {
            top: "top",
            middle: "middle",
            bottom: "bottom",
          },
        },
        position: {
          options: posList.reduce(function (map, pos) {
            map[pos] = pos;
            return map;
          }, {}),
        },
        distance: {
          min: 0,
          max: 100,
        },
      };
      app.config = {
        rotate: 90,
        align: "left",
        verticalAlign: "middle",
        position: "insideBottom",
        distance: 15,
        onChange: function () {
          const labelOption = {
            rotate: app.config.rotate,
            align: app.config.align,
            verticalAlign: app.config.verticalAlign,
            position: app.config.position,
            distance: app.config.distance,
          };
          myChart.setOption({
            series: [
              {
                label: labelOption,
              },
              {
                label: labelOption,
              },
              {
                label: labelOption,
              },
              {
                label: labelOption,
              },
            ],
          });
        },
      };
      const labelOption = {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: "{c}  {name|{a}}",
        fontSize: 16,
        rich: {
          name: {},
        },
      };
      myChart3.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        xAxis: [
          {
            type: "category",
            axisTick: { show: false },
            data: ["0-100", "100-500", "2014", "500-1000"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "长评",
            type: "bar",
            barGap: 0,
            label: labelOption,
            emphasis: {
              focus: "series",
            },
            data: this.dataArr.comments.long,
          },
          {
            name: "短评",
            type: "bar",
            label: labelOption,
            emphasis: {
              focus: "series",
            },
            data: this.dataArr.comments.short,
          },
        ],
      });
      var myChart4 = this.$echarts.init(document.querySelector(".main4"));
      myChart4.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        xAxis: {
          type: "category",
          data: [
            this.top[0].name,
            this.top[1].name,
            this.top[2].name,
            this.top[3].name,
            this.top[4].name,
          ],
          axisLabel: {
            interval: 0,
            formatter: function (value, index) {
              debugger;
              if (index % 2 != 0) {
                return " " + value;
              } else {
                return value;
              }
            },
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [
              this.top[0].filterLabel,
              this.top[1].filterLabel,
              this.top[2].filterLabel,
              this.top[3].filterLabel,
              this.top[4].filterLabel,
            ],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      });
    }, 500);
  },
};
</script>

<style scoped>
h1 {
  width: 300%;
  color: #008ac5;
}
.panel {
  width: 800px;
  height: 410px;
  margin-left: 80px;
  padding-left: 30px;
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}
h2 {
  padding-top: 10px;
}
.el-col {
  margin: 0 1.3rem;
}
.bg-purple-light {
  background: #e5e9f2;
}
#main,
.main2,
.main3,
.main4 {
  width: 800px;
  height: 355px;
  margin: auto;
  margin-left: -26px;
}
</style>
