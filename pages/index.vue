<template>
  <div>
    <HeaderCard></HeaderCard>

    <CarCategory heading="Popular Cars">
      <div v-if="isLoading">
        <p>Loading...</p>
      </div>
      <div v-else-if="error">
        <p>Error fetching data.</p>
      </div>
      <div v-else>
        <div v-for="car in cars" :key="car.id">
          <CarCard :car="car"></CarCard>
        </div>
      </div>
    </CarCategory>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const cars = ref([]);
const isLoading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://dm-assignment-commonshare.koyeb.app/api/cars/popular",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const data = await response.json();
    cars.value = data;
    isLoading.value = false;
  } catch (error) {
    console.error(error);
    isLoading.value = false;
    error.value = error.message;
  }
});
</script>
