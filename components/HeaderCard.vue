<template>
  <div
    class="rounded-lg shadow-md p-4 relative flex flex-col gap-4 max-w sm:max-w-sm lg:max-w-2xl lg:p-8"
    :class="darkBlueBG ? 'bg-primary-500' : 'bg-information-500'"
  >
    <h3 class="text-white font-semibold lg:text-2xl lg:w-1/2">
      {{ heading }}
    </h3>
    <div class="text-white text-sm w-4/5 lg:w-1/2">
      {{ subheading }}
    </div>
    <div class="my-4" :class="heading.length === 0 ? 'm-0' : 'lg:mb-28'">
      <button
        v-if="showCta"
        class="rounded-md p-4 px-8 text-primary-0 font-base"
        :class="darkBlueBG ? 'bg-information-500' : 'bg-primary-500'"
      >
        Rental Now
      </button>
    </div>
    <img
      :src="carImageUrl"
      class="mx-auto lg:absolute lg:bottom-0 lg:left-0 lg:right-0"
      alt=""
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  showCta: {
    type: Boolean,
    default: true,
  },
  carImageUrl: {
    type: String,
    default: "/placeholder.png",
  },
  darkBlueBG: {
    type: Boolean,
    default: false,
  },
  heading: {
    type: String,
    default: "The Best Platform for Car Rental",
  },
  subheading: {
    type: String,
    default: "Ease of doing a car rental safely and reliably. Of course at a low price.",
  },
});
</script>

<style lang="scss" scoped></style>
