<template>
  <div>
    <div class="md:flex md:gap-x-8 ">
      <!-- gallery -->
      <div class="">
        <HeaderCard :showCta="false" class="sm:max-w-full"></HeaderCard>

        <div class="flex w-full mt-4 gap-x-4 max-w md:max-w-sm lg:max-w-2xl">
          <div class="flex-1">
            <img
              src="/interior_placeholder.jpg"
              class="rounded-lg border-primary-500 border-2"
              alt=""
            />
          </div>
          <div class="flex-1">
            <img src="/interior_placeholder.jpg" class="rounded-lg" alt="" />
          </div>
          <div class="flex-1">
            <img src="/interior_placeholder.jpg" class="rounded-lg" alt="" />
          </div>
        </div>
      </div>

      <!-- car details card -->
      <div
        class="rounded-lg bg-primary-0 p-4 shadow-md my-12 flex flex-col justify-between md:my-0 md:w-full"
      >
        <div>
          <div class="flex justify-between">
            <div class="text-2xl font-black">Nissan GT-R</div>
            <Icon name="mdi:heart" class="w-8 h-8"></Icon>
          </div>
          <div class="flex items-center text-primary-500 mb-4 mt-2">
            <Icon name="mdi:star"></Icon>
            <Icon name="mdi:star"></Icon>
            <Icon name="mdi:star"></Icon>
            <Icon name="mdi:star"></Icon>
            <Icon name="mdi:star"></Icon>

            <div class="text-secondary-300 text-sm ml-2">440+ Reviewer</div>
          </div>

          <!-- description -->
          <p class="text-secondary-300 text-sm leading-loose">
            NISMO has become the embodiment of Nissan's outstanding performance, inspired
            by the most unforgiving proving ground, the "race track"
          </p>

          <!-- attributes -->
          <div class="text-sm mb-8">
            <div class="flex justify-between gap-x-4 my-4">
              <div class="w-2/5 flex justify-between">
                <span class="text-secondary-300">Type Car</span><span>Sport</span>
              </div>
              <div class="w-2/5 flex justify-between">
                <span class="text-secondary-300">Capacity</span><span>Sport</span>
              </div>
            </div>

            <div class="flex justify-between w-full my-2">
              <div class="w-2/5 flex justify-between">
                <span class="text-secondary-300">Steering</span><span>Sport</span>
              </div>
              <div class="w-2/5 flex justify-between">
                <span class="text-secondary-300">Gasoline</span><span>Sport</span>
              </div>
            </div>
          </div>
        </div>
        <!-- price and cta -->
        <div class="flex justify-between items-end">
          <!-- car price -->
          <div class="font-bold text-xl">
            <div>$99.00/ <span class="text-secondary-300 text-base">day</span></div>
            <div class="line-through text-secondary-300 text-base mt-1 hidden">
              $120.00
            </div>
          </div>

          <!-- cta button -->
          <CtaButton></CtaButton>
        </div>
      </div>
    </div>
    <!-- recommendations -->
    <CarCategory heading="Recommendated Cars">
      <CarCard></CarCard>
      <CarCard></CarCard>
      <CarCard></CarCard>
      <CarCard></CarCard>
    </CarCategory>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
