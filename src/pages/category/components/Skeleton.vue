<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport">
      <view class="search search">
        <view class="input input">
          <text class="icon-search sk-transparent sk-text-14-2857-235 sk-text sk-pseudo sk-pseudo-circle">女靴</text>
        </view>
      </view>
      <view class="categories categories">
        <scroll-view :scroll-y="true" class="primary primary">
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-876 sk-text">居家</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-124 sk-text">美食</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-534 sk-text">服饰</text>
          </view>
          <view class="item active sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-646 sk-text">母婴</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-710 sk-text">个护</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-175 sk-text">严选</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-488 sk-text">数码</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-631 sk-text">运动</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-583 sk-text">杂项</text>
          </view>
        </scroll-view>
        <scroll-view :scroll-y="true" class="secondary secondary">
          <view is="components/CustomSwiper" class="banner banner">
            <view class="carousel CustomSwiper--carousel data-v-98925bff CustomSwiper--data-v-98925bff">
              <swiper :autoplay="false" :circular="true" class="data-v-98925bff CustomSwiper--data-v-98925bff"
                :interval="3000" :current="0">
                <swiper-item class="data-v-98925bff CustomSwiper--data-v-98925bff" style="
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform: translate(100%, 0px) translateZ(0px);
                  ">
                  <navigator class="navigator CustomSwiper--navigator data-v-98925bff CustomSwiper--data-v-98925bff"
                    hover-class="none">
                    <image class="image CustomSwiper--image data-v-98925bff CustomSwiper--data-v-98925bff sk-image"
                      mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
              </swiper>
              <view class="indicator CustomSwiper--indicator data-v-98925bff CustomSwiper--data-v-98925bff">
                <text class="dot CustomSwiper--dot data-v-98925bff CustomSwiper--data-v-98925bff"></text>
                <text
                  class="dot CustomSwiper--dot data-v-98925bff CustomSwiper--data-v-98925bff active CustomSwiper--active"></text>
                <text class="dot CustomSwiper--dot data-v-98925bff CustomSwiper--data-v-98925bff"></text>
                <text class="dot CustomSwiper--dot data-v-98925bff CustomSwiper--data-v-98925bff"></text>
                <text class="dot CustomSwiper--dot data-v-98925bff CustomSwiper--data-v-98925bff"></text>
              </view>
            </view>
          </view>
          <view class="panel panel">
            <view class="title title">
              <text class="name sk-transparent sk-text-26-4706-212 sk-text">T恤/polo/衬衫</text>
              <navigator class="more sk-transparent sk-text-30-8824-42 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none">全部</navigator>
            </view>
            <view class="section section">
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-980 sk-text">趣味小恐龙绣花，男童灯芯绒衬衫</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-956 sk-text">89.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-232 sk-text">纯棉舒适女童印花荷叶袖小衫90-140cm</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-438 sk-text">139.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-655 sk-text">ins风小碎花泡泡袖衬110-160cm</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-398 sk-text">99.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-257 sk-text">经典格子元素，男童格子纯棉衬衫</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-484 sk-text">89.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-683 sk-text">复古格调，儿童灯芯绒衬衫73-130cm</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-831 sk-text">99.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-527 sk-text">经典格子元素，男童加绒格子衬衫</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-82 sk-text">125.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-848 sk-text">田园复古木耳边格纹全棉A字衬衫110-160cm</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-620 sk-text">109.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-633 sk-text">度假风儿童薄款空调短袖衬衫73-130cm</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-652 sk-text">79.00</text>
                </view>
              </navigator>
            </view>
          </view>
          <view class="panel panel">
            <view class="title title">
              <text class="name name"></text>
              <navigator class="more sk-transparent sk-text-30-8824-83 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none">全部</navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

/* 此文件为开发者工具生成，生成时间: 20/06/2024, 14:32:43 在
/Users/franklee/code/heima-shop/dist/dev/mp-weixin/pages/category/category.wxss 中引入样式 ```
@import "./category.skeleton.wxss"; ```
更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html */
.sk-transparent { color: transparent !important; } .sk-text-14-2857-235 { background-image:
linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
background-size: 100% 39.0698rpx; position: relative !important; } .sk-text { background-origin:
content-box !important; background-clip: content-box !important; background-color: transparent
!important; color: transparent !important; background-repeat: repeat-y !important; }
.sk-text-14-2857-876 { background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE
85.7143%, transparent 0%) !important; background-size: 100% 34.1860rpx; position: relative
!important; } .sk-text-14-2857-124 { background-image: linear-gradient(transparent 14.2857%, #EEEEEE
0%, #EEEEEE 85.7143%, transparent 0%) !important; background-size: 100% 34.1860rpx; position:
relative !important; } .sk-text-14-2857-534 { background-image: linear-gradient(transparent
14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important; background-size: 100%
34.1860rpx; position: relative !important; } .sk-text-14-2857-646 { background-image:
linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
background-size: 100% 34.1860rpx; position: relative !important; } .sk-text-14-2857-710 {
background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent
0%) !important; background-size: 100% 34.1860rpx; position: relative !important; }
.sk-text-14-2857-175 { background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE
85.7143%, transparent 0%) !important; background-size: 100% 34.1860rpx; position: relative
!important; } .sk-text-14-2857-488 { background-image: linear-gradient(transparent 14.2857%, #EEEEEE
0%, #EEEEEE 85.7143%, transparent 0%) !important; background-size: 100% 34.1860rpx; position:
relative !important; } .sk-text-14-2857-631 { background-image: linear-gradient(transparent
14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important; background-size: 100%
34.1860rpx; position: relative !important; } .sk-text-14-2857-583 { background-image:
linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
background-size: 100% 34.1860rpx; position: relative !important; } .sk-text-26-4706-212 {
background-image: linear-gradient(transparent 26.4706%, #EEEEEE 0%, #EEEEEE 73.5294%, transparent
0%) !important; background-size: 100% 59.3023rpx; position: relative !important; }
.sk-text-30-8824-42 { background-image: linear-gradient(transparent 30.8824%, #EEEEEE 0%, #EEEEEE
69.1176%, transparent 0%) !important; background-size: 100% 59.3023rpx; position: relative
!important; } .sk-text-14-2857-980 { background-image: linear-gradient(transparent 14.2857%, #EEEEEE
0%, #EEEEEE 85.7143%, transparent 0%) !important; background-size: 100% 29.3023rpx; position:
relative !important; } .sk-opacity { opacity: 0 !important; } .sk-text-14-2857-956 {
background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent
0%) !important; background-size: 100% 31.7442rpx; position: relative !important; }
.sk-text-14-2857-232 { background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE
85.7143%, transparent 0%) !important; background-size: 100% 29.3023rpx; position: relative
!important; } .sk-text-14-2857-438 { background-image: linear-gradient(transparent 14.2857%, #EEEEEE
0%, #EEEEEE 85.7143%, transparent 0%) !important; background-size: 100% 31.7442rpx; position:
relative !important; } .sk-text-14-2857-655 { background-image: linear-gradient(transparent
14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important; background-size: 100%
29.3023rpx; position: relative !important; } .sk-text-14-2857-398 { background-image:
linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
background-size: 100% 31.7442rpx; position: relative !important; } .sk-text-14-2857-257 {
background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent
0%) !important; background-size: 100% 29.3023rpx; position: relative !important; }
.sk-text-14-2857-484 { background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE
85.7143%, transparent 0%) !important; background-size: 100% 31.7442rpx; position: relative
!important; } .sk-text-14-2857-683 { background-image: linear-gradient(transparent 14.2857%, #EEEEEE
0%, #EEEEEE 85.7143%, transparent 0%) !important; background-size: 100% 29.3023rpx; position:
relative !important; } .sk-text-14-2857-831 { background-image: linear-gradient(transparent
14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important; background-size: 100%
31.7442rpx; position: relative !important; } .sk-text-14-2857-527 { background-image:
linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
background-size: 100% 29.3023rpx; position: relative !important; } .sk-text-14-2857-82 {
background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent
0%) !important; background-size: 100% 31.7442rpx; position: relative !important; }
.sk-text-14-2857-848 { background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE
85.7143%, transparent 0%) !important; background-size: 100% 29.3023rpx; position: relative
!important; } .sk-text-14-2857-620 { background-image: linear-gradient(transparent 14.2857%, #EEEEEE
0%, #EEEEEE 85.7143%, transparent 0%) !important; background-size: 100% 31.7442rpx; position:
relative !important; } .sk-text-14-2857-633 { background-image: linear-gradient(transparent
14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important; background-size: 100%
29.3023rpx; position: relative !important; } .sk-text-14-2857-652 { background-image:
linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
background-size: 100% 31.7442rpx; position: relative !important; } .sk-text-30-8824-83 {
background-image: linear-gradient(transparent 30.8824%, #EEEEEE 0%, #EEEEEE 69.1176%, transparent
0%) !important; background-size: 100% 59.3023rpx; position: relative !important; } .sk-image {
background: #EFEFEF !important; } .sk-pseudo::before, .sk-pseudo::after { background: #EFEFEF
!important; background-image: none !important; color: transparent !important; border-color:
transparent !important; } .sk-pseudo-rect::before, .sk-pseudo-rect::after { border-radius: 0
!important; } .sk-pseudo-circle::before, .sk-pseudo-circle::after { border-radius: 50% !important; }
.sk-container { position: absolute; left: 0; top: 0; width: 100%; height: 100%; overflow: hidden;
background-color: transparent; }