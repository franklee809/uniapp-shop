import CustomGuess from '@/components/CustomGuess.vue'
/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    //
  }
}

export type CustomGuessInstance = InstanceType<typeof CustomGuess>
