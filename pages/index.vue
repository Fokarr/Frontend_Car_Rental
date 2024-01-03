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
        <div v-for="car in cars" :key="car.id">
          <CarCard :car="car"></CarCard>
        </div>
      </CarCategory>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const cars = ref([]);
const isLoading = ref(false);
const error = ref(null);

cars.value = [
  {
    name: "Honda Accord",
    type: "Sedan",
    gasolineLiter: 65,
    kindOfTransition: "Manual",
    people: 5,
    pricePerDay: 60,
    id: "honda-accord",
    img: "https://dm-assignment-commonshare.koyeb.app/img/1.png",
  },
  {
    name: "Mazda 3",
    type: "Hatchback",
    gasolineLiter: 55,
    kindOfTransition: "Automatic",
    people: 5,
    pricePerDay: 45,
    id: "mazda-3",
    img: "https://dm-assignment-commonshare.koyeb.app/img/2.png",
  },
  {
    name: "Volkswagen Golf",
    type: "Hatchback",
    gasolineLiter: 50,
    kindOfTransition: "Manual",
    people: 5,
    pricePerDay: 55,
    id: "volkswagen-golf",
    img: "https://dm-assignment-commonshare.koyeb.app/img/3.png",
  },
  {
    name: "Audi A4",
    type: "Sedan",
    gasolineLiter: 70,
    kindOfTransition: "Automatic",
    people: 5,
    pricePerDay: 75,
    id: "audi-a4",
    img: "https://dm-assignment-commonshare.koyeb.app/img/4.png",
  },
];

/* onMounted(async () => {
  try {
    const response = await fetch("/api/cars", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    const data = await response.json();
    cars.value = data;
    isLoading.value = false;
  } catch (error) {
    console.error(error);
    isLoading.value = false;
    error.value = error.message;
  }
}); */
</script>
