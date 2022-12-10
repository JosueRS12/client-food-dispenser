<template>
  <button id="add-alarm-btn" @click="popUpVisible">
    +
  </button>
  <div v-if="enable">
    <div class="modal active" :class="enable" id="add-alarm-modal">
      <div class="content">
        <div class="head">
          <div class="title">Add Alarm</div>
            <button class="close" @click="closePopUp">
              x
            </button>
        </div>
        <div class="body">
          <div class="name">
            <b-form-input v-model="alarmLabel" placeholder="Mi alarma"></b-form-input>
          </div>
          <div class="time">
            <b-form-spin-button 
              id="sb-vertical" 
              v-model="hours" 
              vertical
              max=23
              min=0
            >
            </b-form-spin-button>
            <b-form-spin-button 
              id="sb-vertical" 
              v-model="minutes" 
              vertical
              max=59
              min=0
            >
            </b-form-spin-button>
          </div>
          <b-form-radio-group
          id="radio-group-1"
          v-model="repeatSelected"
          :options="repeatOptions"
          name="radio-options"
          ></b-form-radio-group>
          <!--
          <b-form-checkbox-group
            v-model="repeatSelected"
            :options="repeatOptions"
            class="mb-3 days day"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-checkbox-group>
          -->
          <b-button @click="createAlarm" variant="success">Guardar</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
export default {
  name: 'AddAlarm',
  components: { },
  props: {
  },
  data () {
    return {
      enable: false,
      hours: ref(0),
      minutes: ref(0),
      repeatSelected: ref(['once']),
      repeatOptions: [
        {value: 'once', text: 'Una vez'},
        {value: 'daily', text: 'Diario'}
        /*{item: 'Monday', name: 'Lunes'},*/
        /*{item: 'Tuesday', name: 'Martes'},*/
        /*{item: 'Wednesday', name: 'Miércoles'},*/
        /*{item: 'Thursday', name: 'Jueves'},*/
        /*{item: 'Friday', name: 'Viernes'},*/
        /*{item: 'Saturday', name: 'Sábado'},*/
        /*{item: 'Sunday', name: 'Domingo'},*/
      ],
      alarmLabel: ref('')
    }
  },
  computed: {},
  methods: {
    closePopUp: function(){
      this.enable = false;
    }, 
    popUpVisible: function(){
      this.enable = true;  
    },
    createAlarm: async function(){
      /*console.log(`hours: ${this.hours}`)*/
      /*console.log(`minutes: ${this.minutes}`)*/
      /*console.log(`hours: ${this.repeatSelected}`)*/
      /*console.log(`hours: ${this.alarmLabel}`)*/
      let alarmParams = {
        alarm: {
          user_id: 123123,
          hour: this.hours,
          minute: this.minutes,
          repeat: this.repeatSelected.toString(),
          status: true,
          label: this.alarmLabel
        }
      }
      const res = await fetch('http://localhost:8000/api/alarm/create',{
        headers: {
          'Content-Type': 'application/json'  
        },
        method: 'POST',
        body: JSON.stringify(alarmParams) 
      });
      const data = await res.json();
      console.log(data.data)
      window.alert("Alarma creada");
    }
  }
}
</script>

<style lang="sass" scoped>

</style>

