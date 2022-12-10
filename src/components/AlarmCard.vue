<template>
  <div class="alarms">
    <div class="alarm"> 
      <div class="head">
        <div class="name">{{label}}</div>
      </div>
      <div class="body">
        <div class="left">
          <div class="time">{{time}}</div>
          <b-form-checkbox 
            @click = "changeStatusAlarm"
            v-model="checked"
            switch 
            size="lg" 
            class="checkbox toggle" 
          />
        </div>
        <div class="days">
          <div class="day active">{{repeat}}</div>
          <div class="day active">{{breed}}</div>
        </div>
      </div>
      <button @click="deleteAlarm" class="delete">
        <div class="delete">
            <img src="../assets/delete.png" alt="" />
        </div>
      </button>
    </div>
  </div>
</template>

<script>
/*import {ref} from 'vue'*/
export default {
  name: 'AlarmCard',
  props: {
    time: String,
    status: Boolean,
    label: String,
    repeat: String,
    id: String,
    breed: String
  },
  data () {
    return {
      checked: this.status
    }
  },
  methods: {
    changeStatusAlarm: async function(){
      let alarmParams = {
        alarm: {
          status: !this.checked,
        }
      }
      const res = await fetch(`http://localhost:8000/api/alarm/status/${this.id}`,{
        headers: {
          'Content-Type': 'application/json'  
        },
        method: 'PUT',
        body: JSON.stringify(alarmParams) 
      });
      const data = await res.json();
      console.log(data.data)
    },

    deleteAlarm: async function(){
      const res = await fetch(`http://localhost:8000/api/alarm/remove/${this.id}`,{
        headers: {
          'Content-Type': 'application/json'  
        },
        method: 'DELETE'
      });
      const data = await res.json();
      console.log(data.data);
      window.alert("Alarma Eliminada");
    }
  }
}
</script>



