<template>
  <section class="container form">
    <h2>
      ¿Cuánto alimento deseas darle a tu mascota?
    </h2>
    <p>
      Dependiendo del tamaño de tu mascota, el dispensador automático de comida
      determinará cuanto suministrar.
    </p>
    <b-form-select
      v-model="selectedItems"
      :options="selectOptions"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-select>
    <b-button @click="setBreed" variant="success">Guardar</b-button>
  </section>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'ConfigurationPage',
  components: {},
  data () {
    return {
      selectedItems: ref(''),
      selectOptions: [
        {item: 'little', name: 'Raza pequeña'},
        {item: 'mid', name: 'Raza mediana'},
        {item: 'big', name: 'Raza grande'}, 
      ]
    }
  },
  methods: {
    setBreed: async function(){
      let userId=123123
      let alarmParams = {
        alarm: {
          breed: this.selectedItems
        }
      }
      console.log(this.selectedItems)
      const res = await fetch(`http://localhost:8000/api/alarm/set-breed/${userId}`,{
        headers: {
          'Content-Type': 'application/json'  
        },
        method: 'POST',
        body: JSON.stringify(alarmParams) 
      });
      const data = await res.json();
      console.log(data.data)
      window.alert("Raza Guardada");
    }
  },
  mounted: function(){
  },
  beforeUpdate: function(){
  }
}


  </script>
  
<style lang="scss" scoped>
  .form{
    padding-top: 10rem
  }
</style>
