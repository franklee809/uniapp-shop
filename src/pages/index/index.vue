<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import CustomGuess from '../../components/CustomGuess.vue'
import CustomSwiper from '../../components/CustomSwiper.vue'
import { getHomeBannerAPI, getCategoryAPI, getHotItemAPI } from '../../services/home'
import { onLoad } from '@dcloudio/uni-app'
import { reactive, ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { CustomGuessInstance } from '@/types/component'
import Skeleton from './components/Skeleton.vue'

const bannerList = ref<BannerItem[]>([])

const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()

  bannerList.value = res.result
}

const categoryList = ref<CategoryItem[]>([])

const getHomeCategoryData = async () => {
  const res = await getCategoryAPI()
  categoryList.value = res.result
}

const hotItemList = ref<HotItem[]>([])

const getHotItemData = async () => {
  const res = await getHotItemAPI()
  hotItemList.value = res.result
}
const isLoading = ref(false)

onLoad(async () => {
  isLoading.value = true
  await Promise.allSettled([getHomeBannerData(), getHomeCategoryData(), getHotItemData()])
  isLoading.value = false
})

const onScrollToLower = () => {
  console.log('user reached the bottom')
  guessRef.value?.getMore()
}

const guessRef = ref<CustomGuessInstance>()

const isTriggered = ref(false)
const onRefresh = async () => {
  isTriggered.value = true
  guessRef.value?.resetData()
  await Promise.allSettled([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHotItemData(),
    guessRef.value?.getMore(),
  ])

  isTriggered.value = false
}
</script>

<template>
  <CustomNavbar />
  <scroll-view refresher-enabled @scrolltolower="onScrollToLower" @refresherrefresh="onRefresh"
    :refresher-triggered="isTriggered" class="scroll-view" scroll-y>
    <Skeleton v-if="isLoading" />
    <template v-else>
      <CustomSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="hotItemList" />
      <CustomGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
