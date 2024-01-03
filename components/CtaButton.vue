<template>
  <div>
    <NuxtLink :to="route" class="bg-primary-500 rounded-md p-3 px-6 text-primary-0 font-base">
      Rental Now
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  route: {
    type: String,
    default: "/",
  },
});
</script>

<style lang="scss" scoped></style>
