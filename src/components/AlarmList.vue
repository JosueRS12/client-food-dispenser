<template>
  <section class="container">
      <!-- alarm card  -->
    <!-- >
    <button id="add-alarm-btn" @click="popUpVisible">
      +
    </button>
    -->
    <div v-for="alarm in alarmList.body" :key="alarm.id">
      <AlarmCard 
        :time="formatTime(alarm.hour, alarm.minute)" 
        :status="alarm.status"
        :label="alarm.label"
        :repeat="translateRepeat(alarm.repeat)"
        :id = "alarm._id"
        :breed = "translateBreed(alarm.breed)"
      />
    </div>
    <AddAlarm />
      <!-- add alarm button  -->

      <!-- add alarm component  -->
    <!-- <AlarmCard /> -->
    <!-- Josu aca ya esta tambien la visual para agregar una nueva alarma con los stilos 
     <div class="modal active" id="add-alarm-modal"> agregue "active" en este tag para que 
    se active la vista faltaria agregar la funcion para activar el boton XD-->
  </section>
</template>

<script>
import AddAlarm from '@/components/AddAlarm.vue';
import AlarmCard from '@/components/AlarmCard.vue';

 
export default {
  name: 'AlarmList',
  components: { AddAlarm, AlarmCard },
  data () {
    return {
      alarmList: {},
    }
  },
  methods: {
    fetchAlarms: async function(){
      const res = await fetch('http://localhost:8000/api/alarm/list',{
        headers: {
          'Content-Type': 'application/json'  
        },
        method: 'GET'
      });
      let data = await res.json();
      this.alarmList = data.data;
    },
    formatTime: function(hour, minute){
      let timeDay = hour >= 12 ? 'Pm' : 'Am';
      hour = (hour % 12) || 12;
      let formatedTime = `${hour}:${minute} ${timeDay}`; 
      return formatedTime
    },
    translateRepeat: function(repeatValue){
      switch(repeatValue){
        case 'once':
          return "Una vez"
        case 'daily':
          return "Diario"
        default:
          return "Diario"
      }
    },
    translateBreed: function(breedSize){
      switch(breedSize){
        case 'little':
          return "Raza pequeña"
        case 'mid':
          return "Raza mediana"
        case 'big':
          return "Raza grande"
        default:
          return "No se ha especificado la raza"
      }

    }
  },
  mounted: function(){
    this.fetchAlarms();
  },
  beforeUpdate: function(){
   this.fetchAlarms(); 
  }
}


  </script>
  
  <style lang="scss" scoped>
  </style>
