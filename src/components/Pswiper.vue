<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide style="background:#00800005;">
      <div style="text-align:center;height:100%;display:flex;justify-content:center;align-items: center;flex-direction:column;">
        <h1 style="color:rgb(1, 110, 74);">来自一个程序员</h1>
        <h1 style="color:rgb(1, 110, 74);">一个不一样的生活自述</h1>
        <h1 style="color:rgb(1, 110, 74);">https://www.zhoujun.vip</h1>
      </div>
    </swiper-slide>
    <swiper-slide style="background:#0000ff17;">
      <div style="text-align:center;height:100%;display:flex;justify-content:center;align-items: center;flex-direction:column;">
        <h1 style="font-size:80px;color:rgb(170, 126, 4);">
          <Icon type="logo-html5" />
          <Icon type="logo-css3" />
          <Icon type="logo-python" />
          <Icon type="logo-javascript" />
        </h1>
        <h1 style="color:rgb(104, 89, 3);">可以给我发邮件</h1>
        <h1 style="color:rgb(104, 89, 3);">进行项目外包洽谈</h1>
        <h1 style="color:rgb(104, 89, 3);">
          <Icon type="ios-at-outline" /> : 87538812@qq.com</h1>
      </div>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>-->
  </swiper>
</template>

<script>
  import "swiper/dist/css/swiper.css";
  import {
    swiper,
    swiperSlide
  } from "vue-awesome-swiper";
  export default {
    name: "Pswiper",
    data() {
      return {
        swiperOption: {
          autoplay: true,
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          }
        }
      };
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log("this is current swiper instance object", this.swiper);
      // this.swiper.slideTo(3, 1000, false);
    }
  };
</script>