<template>
  <div class="biological">
    <div class="biological-left">
      <div class="round">
        <div class="arrowdown"></div>
        <div class="value">
          25%
        </div>
        <div class="name">
          农药使用量
        </div>
      </div>
    </div>
    <div class="biological-right">
      <div class="top">
        <div class="cylinders">
          <div class="cylinder"></div>
          <div class="cylinder"></div>
          <div class="cylinder"></div>
          <div class="cylinder"></div>
        </div>
        <div class="top-desc">
          高效植保机4台
        </div>
      </div>
      <div class="bot">
        <div class="bot-cylinders">
          <div class="cylinder"></div>
          <div class="cylinder"></div>
          <div class="cylinder"></div>
          <div class="cylinder"></div>
          <div class="cylinder"></div>
          <div class="cylinder"></div>
          <div class="cylinder"></div>
          <div class="cylinder"></div>
          <div class="cylinder"></div>
          <div class="cylinder"></div>
          <div class="cylinder"></div>
          <div class="cylinder"></div>
          <div class="cylinder"></div>
          <div class="cylinder"></div>
          <div class="cylinder"></div>
        </div>
        <div class="bot-desc">
          植保联防机械15台
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.biological {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 40px 100px;

  &-left {
    .round {
      width: 180px;
      height: 180px;
      background-color: #ffc183;
      border-radius: 50%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      .name {
        font-size: 16px;
        text-align: center;
      }
      .value {
        font-size: 32px;
      }
      .arrowdown {
        width: 41px;
        height: 44px;
        background: url('../../assets/pollutionPrevent/arrow-down.png')
          no-repeat;
        background-size: 100% 100%;
      }
    }
  }

  &-right {
    .top {
      // display: flex;
      .cylinders {
        display: flex;
        .cylinder {
          margin-left: 5px;
          width: 12px;
          height: 46px;
          background: linear-gradient(
            360deg,
            rgba(28, 191, 136, 1) 0%,
            rgba(28, 227, 170, 1) 67%
          );
          opacity: 1;
          border-radius: 6px;
        }
      }

      &-desc {
        font-size: 24px;
        line-height: 42px;
        color: rgba(112, 226, 230, 1);
      }
    }
  }

  .bot {
    // display: flex;
    &-cylinders {
      display: flex;
      .cylinder {
        margin-left: 5px;
        width: 12px;
        height: 46px;
        background: linear-gradient(
          360deg,
          rgba(162, 111, 250, 1) 0%,
          rgba(210, 131, 248, 1) 78%
        );
        opacity: 1;
        border-radius: 6px;
      }
    }

    &-desc {
      font-size: 24px;
      line-height: 42px;
      color: rgba(112, 226, 230, 1);
    }
  }
}
</style>
