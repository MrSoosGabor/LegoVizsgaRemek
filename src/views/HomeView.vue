<script setup>
import DataService from "../services/dataservice";
import { ref, onMounted } from "vue";

const kategoriak = ref([]);
const keszletek = ref([]);
const valasztottKategoriaId = ref();
const kiválasztottKeszletek = ref([]);

onMounted(() => {
  // Ez akkor fut le, amikor betöltődik a HomeView komponens
}),
  DataService.getAllThemes()
    .then((resp) => {
      kategoriak.value = resp;
      //console.log(kategoriak.value);
    })
    .catch((err) => {
      console.log(err);
    });

DataService.getAllSets()
  .then((resp) => {
    keszletek.value = resp;
    //console.log(keszletek.value);
  })
  .catch((err) => {
    console.log(err);
  });

const valaszto = () => {
  console.log("ok");
  kiválasztottKeszletek.value = keszletek.value.filter(
    (k) => k.themeId === valasztottKategoriaId.value
  );
  console.log(kiválasztottKeszletek.value);

  // ha van megfelelő végpont (és kellene, hogy legyen) akkor használjuk azt (:
};
</script>

<template>
  <select v-model="valasztottKategoriaId" @change="valaszto">
    <option v-for="kategoria in kategoriak" :value="kategoria.id">{{ kategoria.name }}</option>
  </select>
  {{ valasztottKategoriaId }}
  <ul class="m-4">
    <li v-for="keszlet in kiválasztottKeszletek">{{ keszlet.setName }}</li>
  </ul>
</template>
