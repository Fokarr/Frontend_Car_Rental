<template>
  <div>
    <div class="md:flex md:gap-x-8">
      <!-- gallery -->
      <div class="">
        <HeaderCard
          :showCta="false"
          :carImageUrl="car.img"
          :darkBlueBG="true"
          heading="Sports car with the best design and acceleration"
          subheading="Safety and comfort while driving a futuristic and elegant sports car"
          class="sm:max-w-full"
        ></HeaderCard>

        <div class="flex w-full mt-4 gap-x-4 max-w md:max-w-sm lg:max-w-2xl">
          <div class="flex-1">
            <HeaderCard
              :showCta="false"
              :carImageUrl="car.img"
              :darkBlueBG="true"
              heading=""
              subheading=""
              class=""
            ></HeaderCard>
          </div>

          <div v-for="image in car.images" :key="image.id" class="flex-1">
            <img :src="image.url" class="rounded-lg h-full object-cover" alt="" />
          </div>
        </div>
      </div>

      <!-- car details card -->
      <div
        class="rounded-lg bg-primary-0 p-4 shadow-md my-12 flex flex-col justify-between md:my-0 md:w-full"
      >
        <div>
          <div class="flex justify-between">
            <div class="text-2xl font-black">{{ car.name }}</div>
            <Icon
              name="mdi:heart"
              class="w-8 h-8"
              :class="carsStore.isCarLiked(car) ? 'text-red-500' : 'text-secondary-300'"
              @click="toggleLike"
            ></Icon>
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
            {{ car.description }}
          </p>

          <!-- attributes -->
          <div class="text-sm mb-8">
            <div class="flex justify-between gap-x-4 my-4">
              <div class="w-2/5 flex justify-between">
                <span class="text-secondary-300">Type Car</span
                ><span class="text-secondary-400">{{ car.type }}</span>
              </div>
              <div class="w-2/5 flex justify-between">
                <span class="text-secondary-300">Capacity</span
                ><span class="text-secondary-400">{{ car.capacity }} Person</span>
              </div>
            </div>

            <div class="flex justify-between w-full my-2">
              <div class="w-2/5 flex justify-between">
                <span class="text-secondary-300">Steering</span
                ><span class="text-secondary-400">{{ car.kindOfTransition }}</span>
              </div>
              <div class="w-2/5 flex justify-between">
                <span class="text-secondary-300">Gasoline</span
                ><span class="text-secondary-400">{{ car.gasolineLiter }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- price and cta -->
        <div class="flex justify-between items-end">
          <!-- car price -->
          <div class="font-bold text-xl">
            <div>
              ${{ car.pricePerDay }}/
              <span class="text-secondary-300 text-base">day</span>
            </div>
            <div class="line-through text-secondary-300 text-base mt-1 hidden">
              ${{ car.pricePerDay }}
            </div>
          </div>

          <!-- cta button -->
          <CtaButton></CtaButton>
        </div>
      </div>
    </div>
    <!-- recommendations -->
    <CarCategory heading="Recommendated Cars">
      <!--       <CarCard></CarCard>
      <CarCard></CarCard>
      <CarCard></CarCard>
      <CarCard></CarCard> -->
    </CarCategory>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import { useCarsStore } from "@/stores/cars";
const carsStore = useCarsStore();

const route = useRoute();
const car = ref(null);

function toggleLike() {
  if (carsStore.isCarLiked(car.value)) {
    carsStore.unlikeCar(car.value);
  } else {
    carsStore.likeCar(car.value);
  }
}

car.value = {
  name: "Volkswagen Golf",
  type: "Hatchback",
  description:
    "The Volkswagen Golf is a hatchback that is known for its fuel efficiency and practicality. It is also available as a wagon. The Golf is available in a variety of trim levels, including the base S, the sporty GTI, and the luxurious Golf R.",
  gasolineLiter: 50,
  kindOfTransition: "Manual",
  people: 5,
  pricePerDay: 55,
  id: "volkswagen-golf",
  img: "https://dm-assignment-commonshare.koyeb.app/img/25.webp",
  images: [
    { url: "https://dm-assignment-commonshare.koyeb.app/img/car-image.jpg" },
    { url: "https://dm-assignment-commonshare.koyeb.app/img/car-inside.jpg" },
  ],
};

/* onMounted(async () => {
  try {
    const response = await fetch(`/api/cars/${route.params.id}`)
    if (response.ok) {
      car.value = await response.json()
    } else {
      console.error('Failed to fetch car data')
    }
  } catch (error) {
    console.error('Failed to fetch car data:', error)
  }
}) */
</script>

<style lang="scss" scoped></style>
