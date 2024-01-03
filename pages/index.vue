<template>
  <div>
    <div class="flex gap-x-8">
      <HeaderCard class="w-full md:1/2"></HeaderCard>
      <HeaderCard
        :darkBlueBG="true"
        heading="Sports car with the best design and acceleration"
        subheading="Safety and comfort while driving a futuristic and elegant sports car"
        class="w-1/2 hidden md:block"
      ></HeaderCard>
    </div>
    <div v-if="isLoading">
      <p>Loading...</p>
    </div>
    <div v-else-if="error">
      <p>Error fetching data.</p>
    </div>
    <div v-else>
      <CarCategory heading="Popular Cars">
        <div v-for="car in cars.data" :key="car.id">
          <CarCard :car="car"></CarCard>
        </div>
      </CarCategory>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isLoading = ref(false);

const { data: cars, pending, error, refresh } = await useAsyncData(
  'cars',
  () => $fetch('/api/cars')
)


</script>
