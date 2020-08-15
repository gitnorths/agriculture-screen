<template>
  <div class="purify">
    <div class="purify-left">
      <div class="header">
        <img src="../../assets/pollutionPrevent/dot1.png" alt="" />
        <span>农田排水氮磷拦截净化工程</span>
        <img src="../../assets/pollutionPrevent/dot2.png" alt="" />
      </div>
      <div class="words" lang="ch">
        项目建设农田促沉池，安装农田排水强化净化反应器60个，生态沟渠24个，总长3967m，覆盖农田面积1200亩。基于农田排水促沉-生态沟渠拦截-末端强化净化的综合系统可保证对TN和TP的去除率在50%以上，并能农田排水达到地表水V类水标准
        (TN &lt; 2 mg/L)。
        项目建立22182m²汇水区湿地系统，汇水区种植乔木0.44万棵、灌木13.39万m²、挺水植物6.92万m²、浮水植物0.44万m²，每年植物体内富集C、N、P量为83.79t、8.38t、0.84t；改造11840m²生态塘，整理绿化用地9756m²，种植375株垂柳、900株灌木柳、铺种1125.75m²菖蒲、铺种1125.75m²鸢尾、铺种9756m²百慕大加播黑麦草，每年植物体内富集C、N、P量为4.278t、0.43t、0.043t；建设水生植物栅格7000，种植菖蒲、再力花等植物24000m²，可富集C、N、P量为0.72t、0.072t、0.007t；建设农田排水促沉净化装置60个，填充大小粒径沸石、生物炭、半软性组合填料、其他高效吸附环境材料等500m³，进一步增强农田尾水排放的沉淀和净化效率。
        建设农田生态隔离带12947m²，包括15661株红叶石楠，3422株意杨，铺种31322m²黑麦草；建设生态防护林10亩，种植2000株香樟、2000株意杨，种植933.3米法国冬青，可通过对气流结构和风速的影响，使风速在有效防护距离内与空旷农地相比，平均降低17%~24%，从而使区域水分蒸发速率降低3%-6%。在台风、干旱灾害严重的年份，林带的增产效果更为显著。同时生态带，也可提供一定的林副产品，还可以美化环境和净化空气，降低地下水水位及防止田间水土流失。
      </div>
    </div>
    <div class="purify-mid">
      <swiper
        class="swiper gallery-top"
        :options="swiperOptionTop"
        ref="swiperTop"
      >
        <swiper-slide
          class="swiper-slide"
          v-for="(item, index) in carouselArr"
          :key="index"
        >
          <div class="img-border">
            <img :src="item.img" width="100%" height="100%" />
          </div>
        </swiper-slide>
      </swiper>
      <swiper
        class="swiper gallery-thumbs"
        :options="swiperOptionThumbs"
        ref="swiperThumbs"
      >
        <swiper-slide v-for="(item, index) in carouselArr" :key="index + 'a'">
          <div class="slidethumb">
            <img :src="item.img" width="100%" height="100%" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="purify-right">
      <div class="header">
        <img src="../../assets/pollutionPrevent/dot1.png" alt="" />
        <span>项目实施效果</span>
        <img src="../../assets/pollutionPrevent/dot2.png" alt="" />
      </div>

      <div class="effect">
        <div class="bar1">
          <div class="bar-left">万丰村生态沟渠</div>
          <div class="bar-right">2400m</div>
        </div>
        <div class="bar2">
          <div class="bar-left">汇水区湿地系统</div>
          <div class="bar-right">22182㎡</div>
        </div>
        <div class="bar3">
          <div class="bar-left">生态塘改造</div>
          <div class="bar-right">10485㎡</div>
        </div>
        <div class="bar4">
          <div class="bar-left">水生植物格栅</div>
          <div class="bar-right">7000㎡</div>
        </div>
        <div class="bar5">
          <div class="bar-left">生态隔离带</div>
          <div class="bar-right">12947㎡</div>
        </div>
        <div class="bar6">
          <div class="bar-left">生态防护林</div>
          <div class="bar-right">10亩</div>
        </div>
        <div class="bar7">
          <div class="bar-left">农田排水促沉净化装置</div>
          <div class="bar-right">60个</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 5,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 5,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
      carouselArr: [
        {
          img: require('../../assets/swiper/p/1.jpg'),
        },
        {
          img: require('../../assets/swiper/p/2.jpg'),
        },
        {
          img: require('../../assets/swiper/p/3.jpg'),
        },
        {
          img: require('../../assets/swiper/p/4.jpg'),
        },
        {
          img: require('../../assets/swiper/p/5.jpg'),
        },
        {
          img: require('../../assets/swiper/p/6.jpg'),
        },
        {
          img: require('../../assets/swiper/p/7.jpg'),
        },
        {
          img: require('../../assets/swiper/p/8.jpg'),
        },
        {
          img: require('../../assets/swiper/p/9.jpg'),
        },
        {
          img: require('../../assets/swiper/p/10.jpg'),
        },
        {
          img: require('../../assets/swiper/p/11.jpg'),
        },
        {
          img: require('../../assets/swiper/p/12.jpg'),
        },
        {
          img: require('../../assets/swiper/p/13.jpg'),
        },
        {
          img: require('../../assets/swiper/p/14.jpg'),
        },
        {
          img: require('../../assets/swiper/p/15.jpg'),
        },
        {
          img: require('../../assets/swiper/p/16.jpg'),
        },
      ],
    }
  },

  mounted() {
    setTimeout(() => {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }, 100)
  },
}
</script>

<style lang="less" scoped>
.purify {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 73px 41px;

  &-left {
    width: 450px;
    height: 720px;
    box-sizing: border-box;
    background: url('../../assets/pollutionPrevent/bg1.png') no-repeat;
    background-size: 100% 100%;
    .header {
      box-sizing: border-box;
      padding: 10px;
      height: 80px;
      line-height: 80px;
      width: 100%;
      text-align: center;
      font-size: 24px;
      color: rgba(112, 226, 230, 1);
      span {
        padding: 0 10px;
      }
    }

    .words {
      width: 100%;
      height: calc(100% - 80px);
      font-size: 16px;
      line-height: 22px;
      color: #fff;
      box-sizing: border-box;
      padding: 0 40px;
      text-indent: 2em;
      text-align-last: left;
      text-align: justify;
    }
  }

  &-mid {
    width: calc(100% - 982px);
    height: 720px;
    background: url('../../assets/pollutionPrevent/bg2.png') no-repeat;
    background-size: 100% 100%;

    .img-border {
      width: 780px;
      height: 440px;
    }

    .slidethumb {
      width: 150px;
      height: 110px;
    }

    .gallery-top {
      .swiper-slide {
        top: 70px;
        left: 40px;
      }

      .swiper-slide-active {
        .img-border {
          border: 4px solid rgba(126, 250, 252, 1);
          border-radius: 12px;
        }
      }
    }
    .swiper {
      .swiper-slide {
        background-size: cover;
        background-position: center;
      }
      &.gallery-top {
        height: 78%;
        width: 100%;
      }
      &.gallery-thumbs {
        top: -10px;
        height: 25%;
        box-sizing: border-box;
        overflow-y: auto;
        padding: 10px 0;
      }
      &.gallery-thumbs .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
      }
      &.gallery-thumbs .swiper-slide-active {
        .slidethumb {
          position: relative;
          border: 4px solid rgba(126, 250, 252, 1);
          border-radius: 8px;
          background-color: rgba(126, 250, 252, 1);
        }
        .slidethumb:after,
        .slidethumb:before {
          bottom: 100%;
          left: 50%;
          border: solid transparent;
          content: ' ';
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
        }

        .slidethumb:after {
          border-color: rgba(136, 183, 213, 0);
          border-bottom-color: rgba(126, 250, 252, 1);
          border-width: 10px;
          margin-left: -10px;
        }
        .slidethumb:before {
          border-color: rgba(194, 225, 245, 0);
          border-bottom-color: #c2e1f5;
          border-width: 13px;
          margin-left: -13px;
        }
        opacity: 1;
      }
    }
  }
  &-right {
    width: 450px;
    height: 720px;
    box-sizing: border-box;
    background: url('../../assets/pollutionPrevent/bg1.png') no-repeat;
    background-size: 100% 100%;
    .header {
      box-sizing: border-box;
      padding: 10px;
      height: 80px;
      line-height: 80px;
      width: 100%;
      text-align: center;
      font-size: 24px;
      color: rgba(112, 226, 230, 1);
      span {
        padding: 0 10px;
      }
    }

    .effect {
      width: 100%;
      height: calc(100% - 80px);
      box-sizing: border-box;
      padding: 30px 25px;
      display: flex;
      flex-flow: column;
      justify-content: space-between;

      .bar(@background:url('../../assets/pollutionPrevent/bar-1.png')) {
        background-repeat: no-repeat;
        width: 400px;
        height: 60px;
        background-size: 100% 100%;
        background: @background;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 0 26px;
        font-size: 18px;
        color: #fff;
      }

      .bar1 {
        .bar();
      }
      .bar2 {
        .bar(@background: url('../../assets/pollutionPrevent/bar-2.png'));
      }
      .bar3 {
        .bar(@background: url('../../assets/pollutionPrevent/bar-3.png'));
      }
      .bar4 {
        .bar(@background: url('../../assets/pollutionPrevent/bar-4.png'));
      }
      .bar5 {
        .bar(@background: url('../../assets/pollutionPrevent/bar-5.png'));
      }
      .bar6 {
        .bar(@background: url('../../assets/pollutionPrevent/bar-6.png'));
      }
      .bar7 {
        .bar(@background: url('../../assets/pollutionPrevent/bar-7.png'));
      }
    }
  }
}
</style>
