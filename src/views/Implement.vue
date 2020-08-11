<template>
  <div class="implement">
    <div class="implement-left">
      <div class="env">
        <div class="title">技术集成示范及环境监测</div>
        <div class="chemistrys">
          <div
            :class="
              chemistry === 'organic' ? 'chemistrycell-active' : 'chemistrycell'
            "
            @click="setChemistry('organic')"
          >
            <div class="chemistry">
              <img src="../assets/homePage/implement/organic.png" alt="" />
            </div>
            <span>有机质变化</span>
          </div>
          <div
            :class="
              chemistry === 'nitrogen'
                ? 'chemistrycell-active'
                : 'chemistrycell'
            "
            @click="setChemistry('nitrogen')"
          >
            <div class="chemistry">
              <img src="../assets/homePage/implement/nitrogen.png" alt="" />
            </div>
            <span>全氮变化</span>
          </div>
          <div
            :class="
              chemistry === 'potassium'
                ? 'chemistrycell-active'
                : 'chemistrycell'
            "
            @click="setChemistry('potassium')"
          >
            <div class="chemistry">
              <img src="../assets/homePage/implement/potassium.png" alt="" />
            </div>
            <span>速效钾变化</span>
          </div>
          <div
            :class="
              chemistry === 'phosphorus'
                ? 'chemistrycell-active'
                : 'chemistrycell'
            "
            @click="setChemistry('phosphorus')"
          >
            <div class="chemistry">
              <img src="../assets/homePage/implement/phosphorus.png" alt="" />
            </div>
            <span>有效磷变化</span>
          </div>
        </div>
        <div class="btns">
          <div
            :class="village === 'donglin' ? 'btn-active' : 'btn'"
            @click="setVillage('donglin')"
          >
            东林村
          </div>
          <div
            :class="village === 'wanfeng' ? 'btn-active' : 'btn'"
            @click="setVillage('wanfeng')"
          >
            万丰村
          </div>
          <div
            :class="village === 'qingfeng' ? 'btn-active' : 'btn'"
            @click="setVillage('qingfeng')"
          >
            庆丰村
          </div>
          <div
            :class="village === 'zhonghe' ? 'btn-active' : 'btn'"
            @click="setVillage('zhonghe')"
          >
            中荷村
          </div>
          <div
            :class="village === 'tangqiao' ? 'btn-active' : 'btn'"
            @click="setVillage('tangqiao')"
          >
            塘桥村
          </div>
          <div
            :class="village === 'shengli' ? 'btn-active' : 'btn'"
            @click="setVillage('shengli')"
          >
            胜利村
          </div>
        </div>
        <div class="charts">
          <v-chart :options="mapOption" />
        </div>
      </div>
      <div class="reducepollu">
        <div class="title">养殖业污染减排</div>
        <div class="reducepollu-body">
          <div class="fish">
            <span>水产养殖循环利用系统</span>
          </div>
          <div class="pig">
            <span>万头养猪场废水的湿地塘净化工程</span>
          </div>
          <div class="tree">
            <span>规模化养羊场的粪污减排净化工程</span>
          </div>
          <div class="build">
            <span>废弃畜禽养殖场的生态化改造工程</span>
          </div>
          <div class="leaf">
            <span>养殖场周边生态隔离带</span>
          </div>
        </div>
      </div>
    </div>
    <div class="implement-mid">
      <div class="farmlandpollu">
        <div class="farmlandpollu-title">
          农田面源污染防治
        </div>
        <div class="farmlandpollu-body">
          <div class="bigtree"></div>
          <div class="fertilizer" @click="gotoDetail('fertilizerre')">
            <div class="fertilizer-img"></div>
            <span>化肥减施工程</span>
          </div>
          <div class="saving">
            <div class="saving-img"></div>
            <span>农田节水工程</span>
          </div>
          <div class="pesticide">
            <div class="pesticide-img"></div>
            <span>农田减药工程</span>
          </div>
          <div class="waste">
            <div class="waste-img"></div>
            <span>农业废弃物利用工程</span>
          </div>
          <div class="purify">
            <div class="purify-img"></div>
            <span>农田排水氮磷拦截净化工程</span>
          </div>
        </div>
      </div>
      <div class="implement-mid-bot">
        <div class="demonstration">
          <div class="demonstration-title">
            <div class="rect"></div>
            <span>示范区配套建设</span>
          </div>
          <div class="demonstration-body">
            <div class="cement">
              <div class="plan">建设水泥路</div>
              <div class="unit">17900m²</div>
            </div>
            <div class="stone">
              <div class="plan">砂石路</div>
              <div class="unit">8333米</div>
            </div>
            <div class="farmland">
              <div class="plan">改造平整农田</div>
              <div class="unit">1400亩</div>
            </div>
            <div class="sewage">
              <div class="plan">农村生活污水集中设备</div>
              <div class="unit">50座</div>
            </div>
          </div>
        </div>
        <div class="specification">
          <div class="specification-title">
            <div class="rect"></div>
            <span>技术模式及标准规范</span>
          </div>
          <div class="specification-body">
            <div class="model">
              <img
                src="../assets/homePage/implement/slices/technology.png"
                alt=""
              />
              <div class="num">3份</div>
              <div class="title">单项治理技术规范</div>
            </div>
            <div class="model">
              <img
                src="../assets/homePage/implement/slices/technology.png"
                alt=""
              />
              <div class="num">4份</div>
              <div class="title">申报技术专利</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="implement-right">
      <div class="waterqua">
        <div class="waterqua-title">
          水质改善效果
        </div>
        <div class="waterqua-body">
          <div class="waterqua-btns">
            <div
              :class="waterqua === 'nitrogen' ? 'btn-act' : 'btn'"
              @click="checkWaterqua('nitrogen')"
            >
              总氮
            </div>
            <div
              :class="waterqua === 'phosphorus' ? 'btn-act' : 'btn'"
              @click="checkWaterqua('phosphorus')"
            >
              总磷
            </div>
            <div
              :class="waterqua === 'ammonia' ? 'btn-act' : 'btn'"
              @click="checkWaterqua('ammonia')"
            >
              氨氮
            </div>
            <div
              :class="waterqua === 'nitrate' ? 'btn-act' : 'btn'"
              @click="checkWaterqua('nitrate')"
            >
              硝态氮
            </div>
            <div
              :class="waterqua === 'cod' ? 'btn-act' : 'btn'"
              @click="checkWaterqua('cod')"
            >
              化学需氧量
            </div>
            <div
              :class="waterqua === 'oxygen' ? 'btn-act' : 'btn'"
              @click="checkWaterqua('oxygen')"
            >
              生化需氧量
            </div>
            <div
              :class="waterqua === 'matter' ? 'btn-act' : 'btn'"
              @click="checkWaterqua('matter')"
            >
              总悬浮物
            </div>
          </div>
        </div>
      </div>
      <div class="sewage">
        <div class="sewage-title">
          地表径流污水净化利用
        </div>
        <div class="sewage-desc">
          项目区域内主要以农田为主，因此地表径流污水主要包括农田地表径流、村镇地表径流以及部分农村生活污水尾水，这些都直接排入了周边的河道，从而对区域内水质造成影响。
        </div>
        <div class="sewage-body">
          <div class="domesticsewage">
            <span>
              生活污水净化利用工程
            </span>
          </div>
          <div class="riverecology">
            <span>
              地表径流河道生态拦截工程
            </span>
          </div>
          <div class="resources">
            <span>
              水生植物资源化利用
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      waterqua: 'nitrogen',
      chemistry: 'organic',
      village: 'donglin',
      mapOption: {
        color: ['#38B8C5', '#3F75FF', '#769BFE'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          show: true,
          data: ['220KV', '110KV', '15KV'],
          right: 10,
          textStyle: {
            color: '#fff',
          },
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 35,
        },
        grid: {
          top: '10%',
          left: '3%',
          right: '3%',
          bottom: '5%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: ['武汉市', '黄石市', '十堰市', '宜昌市', '襄阳市', '鄂州市'],
            axisLine: {
              show: true,
              lineStyle: {
                color: '#134C9E',
                width: 1,
                type: 'solid',
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#FFF',
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value} ',
              color: '#FFF',
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#134C9E',
                width: 1,
                type: 'solid',
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: '220KV',
            type: 'bar',
            data: [20, 50, 80, 58, 83, 68],
            barWidth: 10, //柱子宽度
            barGap: 0.3, //柱子之间间距
          },
          {
            name: '110KV',
            type: 'bar',
            data: [50, 70, 60, 61, 75, 87],
            barWidth: 10,
            barGap: 0.3,
          },
          {
            name: '15KV',
            type: 'bar',
            data: [70, 48, 73, 68, 53, 47],
            barWidth: 10,
            barGap: 0.3,
          },
        ],
      },
    }
  },
  methods: {
    setChemistry(tag) {
      this.chemistry = tag
    },
    setVillage(tag) {
      this.village = tag
    },
    checkWaterqua(tag) {
      this.waterqua = tag
    },
    gotoDetail(page) {
      this.$router.push(`/pollutionpre/${page}`)
    },
  },
}
</script>

<style lang="less" scoped>
.implement {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 28px 20px 25px 20px;
  display: flex;

  .titlepub(@font-size:18px) {
    height: 43px;
    width: 100%;
    text-align: center;
    font-size: @font-size;
    font-weight: 400;
    color: rgba(156, 250, 252, 1);
    line-height: 43px;
  }

  &-left {
    width: 550px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    .env {
      width: 550px;
      height: 458px;
      background-image: url('../assets/homePage/implement/frame.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      padding: 2px;
      box-sizing: border-box;

      .title {
        .titlepub();
      }

      .chemistrys {
        padding: 15px;
        display: flex;
        justify-content: space-around;
        border-bottom: 2px dashed #35727d;
        // box-shadow: 0px 1px 0px 0px transparent inset,
        //   -10px 0px 0px 0px transparent, 10px 0px 0px 0px transparent,
        //   0px -1px 2px 0px #35727d inset;

        .chemistrypub(@background-image: url('../assets/homePage/implement/chemistry-bg.png'),@color: #7efafc) {
          cursor: pointer;
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
          .chemistry {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            background-image: @background-image;
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          span {
            margin-top: 5px;
            color: @color;
            font-size: 14px;
            font-weight: 400;
          }
        }

        .chemistrycell-active {
          .chemistrypub(
            @background-image:
              url('../assets/homePage/implement/chemistry-act.png'),
            @color: #7efafc
          );
        }
        .chemistrycell {
          .chemistrypub(
            @background-image:
              url('../assets/homePage/implement/chemistry-bg.png'),
            @color: #fff
          );
        }
      }

      .btns {
        display: flex;
        justify-content: space-around;
        padding: 10px 50px;
        height: 45px;
        .btndefault(@color:#66cfd4, @background-color: #042233) {
          cursor: pointer;
          width: 50px;
          height: 25px;
          background-color: @background-color;
          color: @color;
          font-size: 12px;
          border: 1px solid #023646;
          line-height: 25px;
          text-align: center;
        }
        .btn {
          .btndefault(@color: #66cfd4);
        }
        .btn-active {
          .btndefault(@color:#153444, @background-color:#7EFAFC);
        }
      }

      .charts {
        width: 100%;
        height: calc(100% - 224px);
      }
    }

    .reducepollu {
      width: 550px;
      // height: 448px;
      height: calc(100% - 478px);
      background-image: url('../assets/homePage/implement/frame.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      padding: 2px;
      box-sizing: border-box;

      .title {
        .titlepub();
      }
      &-body {
        height: calc(100% - 43px);
        width: 100%;
        padding: 30px 0px;
        box-sizing: border-box;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;

        .bar(@background-image: url('../assets/homePage/implement/slices/tree.png')) {
          width: 460px;
          height: 54px;
          background-image: @background-image;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          font-size: 22px;
          color: #fff;
          font-weight: bold;
          line-height: 54px;
          span {
            padding-left: 80px;
          }
        }
        .fish {
          .bar(
            @background-image:
              url('../assets/homePage/implement/slices/fish.png')
          );
        }
        .pig {
          .bar(
            @background-image:
              url('../assets/homePage/implement/slices/pig.png')
          );
        }
        .tree {
          .bar(
            @background-image:
              url('../assets/homePage/implement/slices/tree.png')
          );
        }
        .build {
          .bar(
            @background-image:
              url('../assets/homePage/implement/slices/build.png')
          );
        }
        .leaf {
          .bar(
            @background-image:
              url('../assets/homePage/implement/slices/leaf.png')
          );
        }
      }
    }
  }

  &-mid {
    margin-left: 30px;
    width: 730px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    .farmlandpollu {
      width: 100%;
      // height: 610px;
      height: calc(100% - 330px);
      background-image: url('../assets/homePage/implement/slices/frame2.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      padding: 2px;
      box-sizing: border-box;

      &-title {
        .titlepub(@font-size:18px);
      }

      &-body {
        width: 100%;
        height: calc(100% - 43px);
        position: relative;

        .bigtree {
          position: absolute;
          background-image: url('../assets/homePage/implement/slices/bigtree.png');
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: 475px;
          height: 529px;
          left: 123px;
          top: -20px;
        }

        .project(@top:120px,@left:74px, @background-image: url('../assets/homePage/implement/slices/fertilizer.png')) {
          position: absolute;
          top: @top;
          left: @left;
          color: #7efafc;
          font-size: 16px;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          &-img {
            background-image: @background-image;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: 112px;
            height: 112px;
          }
          &-img:hover {
            transform: scale(1.1);
          }
        }
        .fertilizer {
          .project();
        }
        .saving {
          .project(
            @top:10px,
            @left:497px,
            @background-image:
              url('../assets/homePage/implement/slices/saving.png')
          );
        }

        .pesticide {
          .project(
            @top:344px,
            @left:110px,
            @background-image:
              url('../assets/homePage/implement/slices/pesticide.png')
          );
        }
        .waste {
          .project(
            @top:200px,
            @left:520px,
            @background-image:
              url('../assets/homePage/implement/slices/waste.png')
          );
        }
        .purify {
          .project(
            @top:344px,
            @left:430px,
            @background-image:
              url('../assets/homePage/implement/slices/purify.png')
          );
        }
      }
    }

    &-bot {
      width: 100%;
      // height: calc(100% - 610px);
      height: 315px;
      display: flex;
      .titles() {
        color: #7efafc;
        font-size: 20px;
        font-weight: 400;
      }

      .demonstration {
        width: 350px;
        height: 310px;
        border: 1px solid #7efafc;
        padding: 20px;
        box-sizing: border-box;

        .rect {
          width: 4px;
          height: 22px;
          background: rgba(126, 250, 252, 1);
        }

        .road(@background-image: url('../assets/homePage/implement/slices/rect-green.png')) {
          width: 284px;
          height: 51px;
          background-image: @background-image;
          display: flex;
          justify-content: space-between;
          .plan {
            width: 140px;
            height: 51px;
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 40px;
          }
          .unit {
            line-height: 51px;
            width: 84px;
            height: 51px;
            font-size: 20px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
          }
        }
        &-title {
          display: flex;
          .titles();
          span {
            padding-left: 10px;
          }
        }
        &-body {
          padding: 30px 0px;
          box-sizing: border-box;
          display: flex;
          flex-flow: column;
          justify-content: space-between;
          align-items: center;
          .cement {
            .road(
              @background-image:
                url('../assets/homePage/implement/slices/rect-green.png')
            );
          }
          .stone {
            .road(
              @background-image:
                url('../assets/homePage/implement/slices/rect-blue.png')
            );
          }
          .farmland {
            .road(
              @background-image:
                url('../assets/homePage/implement/slices/rect-org.png')
            );
          }
          .sewage {
            .road(
              @background-image:
                url('../assets/homePage/implement/slices/rect-purple.png')
            );
          }
        }
      }

      .specification {
        margin-left: 25px;
        width: 350px;
        height: 310px;
        border: 1px solid #7efafc;
        padding: 20px;
        box-sizing: border-box;

        .rect {
          width: 4px;
          height: 22px;
          background: rgba(126, 250, 252, 1);
        }
        &-title {
          display: flex;
          .titles();
          span {
            padding-left: 10px;
          }
        }

        &-body {
          padding: 30px 0px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .model {
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            align-items: center;

            .num {
              margin-top: 10px;
              font-size: 25px;
              font-family: PingFang SC;
              font-weight: 800;
              color: rgba(255, 255, 255, 1);
            }

            .title {
              margin-top: 10px;
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
            }
          }
        }
      }
    }
  }

  &-right {
    margin-left: 30px;
    width: 550px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    .waterqua {
      width: 100%;
      height: 449px;
      background-image: url('../assets/homePage/implement/frame.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      padding: 2px;
      box-sizing: border-box;

      &-title {
        .titlepub();
      }

      &-body {
        width: 100%;
        height: calc(100% - 43px);

        .waterqua-btns {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 0px 20px;
          height: 90px;
          .btn {
            cursor: pointer;
            margin-top: 10px;
            width: 117px;
            height: 43px;
            text-align: center;
            line-height: 43px;
            background: rgba(4, 34, 51, 1);
            border: 1px solid rgba(2, 55, 72, 1);
            font-size: 16px;
            font-family: 'FZLanTingHei-DB-GBK';
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
          }
          .btn-act {
            cursor: pointer;
            margin-top: 10px;
            width: 117px;
            height: 43px;
            text-align: center;
            line-height: 43px;
            background: rgba(1, 201, 252, 1);
            border: 1px solid rgba(1, 201, 252, 1);
            font-size: 16px;
            font-family: 'FZLanTingHei-DB-GBK';
            font-weight: 400;
            color: rgba(5, 22, 40, 1);
          }
        }
        .waterqua-btns:after {
          content: '';
          width: 117px;
        }
      }
    }
    .sewage {
      width: 100%;
      // height: 448px;
      height: calc(100% - 469px);
      background-image: url('../assets/homePage/implement/frame.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      padding: 2px 35px;
      box-sizing: border-box;

      &-title {
        .titlepub();
      }

      &-desc {
        margin-top: 30px;
        text-indent: 2em;
        width: 100%;
        height: 70px;
        font-size: 16px;
        font-family: 'PingFang SC';
        font-weight: 400;
        color: rgba(126, 250, 252, 1);
        line-height: 26px;
      }

      &-body {
        width: 100%;
        height: calc(100% - 150px);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .box(@background-image: url('../assets/homePage/implement/slices/sewage-green.png')) {
          background-image: @background-image;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          width: 150px;
          height: 216px;
          box-sizing: border-box;
          padding: 130px 20px 10px 20px;
          text-align: center;
          span {
            font-size: 20px;
            font-family: 'PingFang SC';
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
          }
        }
        .domesticsewage {
          .box();
        }
        .riverecology {
          .box(
            @background-image:
              url('../assets/homePage/implement/slices/sewage-blue.png')
          );
        }
        .resources {
          .box(
            @background-image:
              url('../assets/homePage/implement/slices/sewage-purple.png')
          );
        }
      }
    }
  }
}
.echarts {
  width: 100%;
  height: 100%;
}
</style>
