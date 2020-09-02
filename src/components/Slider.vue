<template>
  <div class="thumb-example">
    <div class="title">
      {{ title }}
    </div>

    <div class="body">
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
          <div class="img-name">
            {{ item.name }}
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
  </div>
</template>

<script>
export default {
  props: ['projectIndex'],

  data() {
    return {
      swiperOptionTop: {
        direction: 'vertical',
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 35,
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
      carouselArr: [],
      title: '稻田病虫害物理防治示范区（杀虫灯和诱虫黄板）',
      data: {
        physical: {
          title: '稻田病虫害物理防治示范区（杀虫灯和诱虫黄板）',
          carouselArr: [
            {
              img: require('../assets/swiper/reducedrug/p-1.jpg'),
              name: '中荷诱虫黄板使用',
            },
            {
              img: require('../assets/swiper/reducedrug/p-2.jpg'),
              name: '杀虫灯',
            },
          ],
        },
        chemistry: {
          title: '高效植保机械在示范区稻田和麦田作业场景',
          carouselArr: [
            {
              img: require('../assets/swiper/reducedrug/c-1.jpg'),
              name: '东林高效植保机',
            },
            {
              img: require('../assets/swiper/reducedrug/c-2.png'),
              name: '高效植保机2',
            },
          ],
        },
        biological: {
          title: '性诱捕器',
          carouselArr: [
            {
              img: require('../assets/swiper/reducedrug/s-1.png'),
              name: '生物防治',
            },
            {
              img: require('../assets/swiper/reducedrug/s-2.jpg'),
              name: '生物防治2',
            },
          ],
        },
      },
    }
  },
  watch: {
    //监听value的变化，进行相应的操作即可
    projectIndex: function(a, b) {
      //a是value的新值，b是旧值
      if (a !== b) {
        this.title = this.data[a].title
        // this.carouselArr.length = 0
        this.carouselArr = [...this.data[a].carouselArr]
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }, 1000)

    this.title = this.data[this.projectIndex].title
    this.carouselArr = [...this.data[this.projectIndex].carouselArr]
  },
}
</script>

<style lang="less" scoped>
.thumb-example {
  width: 100%;
  height: 100%;
}
.title {
  box-sizing: border-box;
  padding: 10px;
  height: 70px;
  width: 100%;
  line-height: 70px;
  text-align: center;
  font-size: 24px;
  color: rgba(112, 226, 230, 1);
}

.body {
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  overflow: hidden;
}
.swiper {
  .img-name {
    text-align: center;
    margin-top: -40px;
    font-size: 24px;
    line-height: 28px;
    color: rgba(255, 255, 255, 1);
    z-index: 100;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
  .img-border {
    width: 660px;
    height: 490px;
  }

  .slidethumb {
    width: 150px;
    height: 110px;
    transform: rotate(-90deg);
  }

  &.gallery-top {
    top: 25px;
    left: 15px;

    // height: 80%;
    // width: 100%;
    width: 660px;
    height: 490px;
    overflow: visible;
    .swiper-slide-active {
      border: 4px solid rgba(126, 250, 252, 1);
      border-radius: 12px;
    }
  }
  &.gallery-thumbs {
    left: -190px;
    height: 490px;
    width: 160px;
    overflow: visible;

    // width: 100%;
    box-sizing: border-box;
    // padding: 10px 0;
    transform: rotate(90deg);

    .swiper-slide {
      // width: 100%;
      width: 150px;
      height: 490px;
      // height: 100%;
      opacity: 0.4;
    }

    .swiper-slide-active {
      opacity: 1;

      .slidethumb {
        position: relative;
        border: 4px solid rgba(126, 250, 252, 1);
        border-radius: 8px;
        background-color: rgba(126, 250, 252, 1);
      }
      .slidethumb:after,
      .slidethumb:before {
        right: 100%;
        top: 50%;
        border: solid transparent;
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
      }

      .slidethumb:after {
        border-color: rgba(136, 183, 213, 0);
        border-right-color: rgba(126, 250, 252, 1);
        border-width: 10px;
        margin-top: -10px;
      }
      .slidethumb:before {
        border-color: rgba(194, 225, 245, 0);
        border-right-color: #c2e1f5;
        border-width: 13px;
        margin-top: -13px;
      }
    }
  }
  &.gallery-thumbs &.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}
</style>
