<template>
  <div
    class="bg-primary-0 rounded-lg shadow-md p-4 m-4 flex flex-col gap-8 max-w sm:max-w-sm"
  >
    <!-- top part of card -->
    <div>
      <div class="flex justify-between items-center">
        <div class="font-bold text-xl">Koeningsegg</div>
        <Icon name="mdi:heart" class="w-8 h-8 text-red-500"></Icon>
      </div>

      <div class="text-secondary-300 text-lg font-medium">Sport</div>
    </div>
    <div class="relative w-4/5 mx-auto">
      <img src="/placeholder.png" alt="" class="" />
      <div
        class="absolute bottom-0 h-1/2 inset-x-0 bg-gradient-to-t from-white to-transparent"
      ></div>
    </div>
    <!-- car attributes -->
    <div class="flex justify-between text-secondary-300 font-medium">
      <!-- tank capacity -->
      <div class="flex items-center gap-x-1">
        <Icon name="mdi:gas-station" class="w-5 h-5" />
        <div>90L</div>
      </div>
      <!-- driving type -->
      <div class="flex items-center gap-x-1">
        <Icon name="mdi:steering" class="w-5 h-5"></Icon>
        <div>Manual</div>
      </div>
      <!-- seat number -->
      <div class="flex items-center gap-x-1">
        <Icon name="mdi:account-multiple" class="w-5 h-5"></Icon>
        <div>4 People</div>
      </div>
    </div>

    <!-- price and cta button -->
    <div class="flex justify-between items-end">
      <!-- car price -->
      <div class="font-bold text-xl">
        $99.00/ <span class="text-secondary-300 text-base">day</span>
      </div>

      <!-- cta button -->
      <CtaButton></CtaButton>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped></style>
