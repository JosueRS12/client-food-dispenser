<template>
  <section class="container">
      <!-- alarm card  -->
    <!-- >
    <button id="add-alarm-btn" @click="popUpVisible">
      +
    </button>
    -->
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
      enable: false,
    }
  },
  computed: {
  },
  methods: {
    popUpVisible: function(){
      this.enable = true;  
    },
    obtainData: async function(){
      const reference = this.$fire.firestore.collection('store_products');
      const data = await reference.get().then(
                  response => response
                  .docs
                  .map( e => {return e.data()})
    ).catch( error => console.error(error) );
      this.products = data;
    }
  },
  beforeMount: function(){
    this.obtainData();
  }
}










// Pille Josu se supone que este es el codigo para las 
// funciones de la alarma pero no pude configuralo


// alarms.forEach((alarm) => {
//     let dayMatch = false;
//     //check thorugh all days of alram any day matches today then true
//     alarm.days.forEach((day) => {
//       if (day === today) {
//         dayMatch = true;
//       }
//     });

//     if (
//       alarm.time === `${hoursString}:${minutesString}` &&
//       alarm.active &&
//       dayMatch &&
//       alarmRinging === false
//     )
//       //if all conditon match
//       ringAlarm();
//   });

//   //play sound
//   const tick = new Audio("tick.mp3");
//   tick.play();
// }

// function ringAlarm() {
//   alarmRinging = true;
//   const audio = new Audio("alarm.mp3");
//   audio.play();
//   audio.addEventListener("ended", () => {
//     alarmRinging = false;
//   });
// }

// const alarms = [
//   {
//     id: 1,
//     time: "13:13",
//     name: "Wake up",
//     days: [0, 1, 2, 3, 4, 5, 6],
//     active: true,
//   },
//   {
//     id: 2,
//     time: "12:00",
//     name: "Wake up",
//     days: [1, 2, 3, 4, 5],
//     active: true,
//   },
//   {
//     id: 3,
//     time: "12:00",
//     name: "Wake up",
//     days: [1, 2, 3, 4, 5],
//     active: true,
//   },
//   {
//     id: 4,
//     time: "12:00",
//     name: "Wake up",
//     days: [1, 2, 3, 4, 5],
//     active: false,
//   },
//   {
//     id: 5,
//     time: "12:00",
//     name: "Wake up",
//     days: [1, 2, 3, 4, 5],
//     active: false,
//   },
//   {
//     id: 6,
//     time: "12:00",
//     name: "Wake up",
//     days: [1, 2, 3, 4, 5],
//     active: false,
//   },
// ];

// const alarmList = document.querySelector(".alarms");

// function initAlarms() {
//   //if alarm array has any alarm show
//   if (alarms.length) {
//     alarms.forEach((alarm) => {
//       const alarmElement = document.createElement("div");
//       alarmElement.classList.add("alarm");
//       alarmElement.dataset.id = alarm.id;
//       let alarmDays = "";
//       alarm.days.forEach((day) => {
//         //day name is a function to convert numbers in to day first letter
//         dayLetter = dayName(day);
//         alarmDays += `<div class="day">${dayLetter}</div>`;
//       });
//       active = alarm.active ? "checked" : "";
//       alarmElement.innerHTML = `
        
//         <div class="head">
//             <div class="name">${alarm.name}</div>
//           </div>
//           <div class="body">
//             <div class="left">
//               <div class="time">${alarm.time}</div>
//               <label class="toggle">
//                 <input type="checkbox" class="checkbox" hidden ${active} />
//                 <div class="track"></div>
//                 <div class="thumb"></div>
//               </label>
//             </div>
//             <div class="days">
//               ${alarmDays}
//             </div>
//           </div>
//           <div class="delete">
//             <img src="icons/delete.png" alt="" />
//           </div>
        
//         `;

//       alarmList.appendChild(alarmElement);
//     });
//   } else {
//     //if no alarms
//     alarmList.innerHTML = `<div class="no-alarms">No Alarms, Click on below + button to add one</div>`;
//   }
// }

// initAlarms();

// function dayName(day) {
//   return ["M", "T", "W", "T", "F", "S", "S"][day];
// }

// //functionality to delete alarm or active inactive

// alarmList.addEventListener("click", (e) => {
//   if (e.target.classList.contains("checkbox")) {
//     const alarmId =
//       e.target.parentElement.parentElement.parentElement.parentElement.dataset
//         .id;
//     const alarm = alarms.find((alarm) => alarm.id == alarmId);
//     alarm.active = !alarm.active;
//   }
//   if (e.target.classList.contains("delete")) {
//     const alarmId = e.target.parentElement.dataset.id;
//     const alarm = alarms.find((alarm) => alarm.id == alarmId);
//     alarms.splice(alarms.indexOf(alarm), 1);
//     alarmList.innerHTML = "";
//     initAlarms();
//   }
// });


  </script>
  
  <style lang="scss" scoped>
    /*.container {*/
        /*width: auto;*/
        /*height: auto;*/
        /*border-radius: 10px;*/
        /*padding: 20px;*/
        /*background-color: #fff;*/
    /*}*/
  
    /*.alarms {*/
        /*position: relative;*/
        /*margin-top: 80px;*/
        /*height: 350px;*/
        /*overflow: auto;*/
        /*overflow-x: hidden;*/
        /*padding: 10px 20px;*/
        /*display: grid;*/
        /*gap: 10px;*/
        /*grid-template-columns: repeat(2, 1fr);*/
    /*}*/

    /*.alarms .alarm {*/
        /*position: relative;*/
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: center;*/
        /*flex-direction: column;*/
        /*max-height: 150px;*/
        /*gap: 10px;*/
        /*padding: 20px;*/
        /*border-radius: 10px;*/
        /*background-color: #fff;*/
        /*box-shadow: 0 0 0 1px #228f7621, 0 3px 5px #228f7663;*/
        /*transition: 0.3s ease all;*/
    /*}*/

    /*.alarms .alarm:hover {*/
        /*transform: scale(1.02);*/
    /*}*/

    /*.alarm .head {*/
        /*width: 100%;*/
        /*display: flex;*/
        /*justify-content: space-between;*/
    /*}*/

    /*.alarm .name {*/
        /*font-size: 12px;*/
        /*font-weight: 700;*/
        /*color: #40b89c;*/
    /*}*/

    /*.alarm .body {*/
        /*width: 100%;*/
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: space-between;*/
        /*gap: 10px;*/
    /*}*/

    /*.alarm .time {*/
        /*font-size: 30px;*/
        /*font-weight: 700;*/
        /*margin-bottom: 20px;*/
        /*color: #40b89c;*/
    /*}*/

    /*.alarm .days .day {*/
        /*font-size: 12px;*/
        /*font-weight: 700;*/
        /*color: #40b89c;*/
    /*}*/

    /*.alarm .delete {*/
        /*position: absolute;*/
        /*top: -5px;*/
        /*right: -5px;*/
        /*width: 20px;*/
        /*height: 20px;*/
        /*border-radius: 50%;*/
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: center;*/
        /*cursor: pointer;*/
        /*opacity: 0;*/
        /*visibility: hidden;*/
        /*background-color: #40b89c;*/
        /*color: #fff;*/
        /*transition: .3s ease all;*/
    /*}*/

    /*.alarm .delete img {*/
        /*pointer-events: none;*/
        /*width: 60%;*/
    /*}*/

    /*.alarm:hover .delete {*/
        /*opacity: 1;*/
        /*visibility: visible;*/
    /*}*/

    /*#add-alarm-btn {*/
        /*position: absolute;*/
        /*bottom: 30px;*/
        /*right: 30px;*/
        /*width: 60px;*/
        /*border-radius: 50%;*/
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: center;*/
        /*font-size: 30px;*/
        /*font-weight: 700;*/
        /*color: #fff;*/
        /*cursor: pointer;*/
        /*text-transform: uppercase;*/
        /*background-color: #40b89c;*/
    /*}*/

    /*.toggle {*/
        /*position: relative;*/
        /*width: max-content;*/
    /*}*/

    /*.toggle .track {*/
        /*width: 50px;*/
        /*height: 25px;*/
        /*border-radius: 25px;*/
        /*background-color: #228f763d;*/
        /*cursor: pointer;*/
        /*transition: .3s ease all;*/
    /*}*/

    /*.toggle .thumb {*/
        /*position: absolute;*/
        /*width: 20px;*/
        /*height: 20px;*/
        /*border-radius: 50%;*/
        /*background-color: #40b89c;*/
        /*top: 50%;*/
        /*left: 2px;*/
        /*cursor: pointer;*/
        /*transform: translate(0, -50%);*/
        /*transition: .3s ease all;*/
        /*z-index: 1;*/
    /*}*/

    /*.toggle .checkbox:checked ~ .thumb {*/
        /*left: 28px;*/
        /*background-color: #fff;*/
    /*}*/

    /*.toggle .checkbox:checked ~ .track {*/
        /*background-color: #40b89c;*/
    /*}*/

    /*.modal {*/
        /*position: fixed;*/
        /*top: 0;*/
        /*left: 0;*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*background-color: #228f763d;*/
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: center;*/
        /*z-index: 99;*/
        /*opacity: 0;*/
        /*visibility: hidden;*/
        /*transition: .3s ease all;*/
    /*}*/

    /*.modal.active {*/
        /*opacity: 1;*/
        /*visibility: visible;*/
    /*}*/

    /*.modal .content {*/
        /*position: relative;*/
        /*width: 400px;*/
        /*background-color: #fff;*/
        /*border-radius: 10px;*/
        /*padding: 20px;*/
        /*box-shadow: 0 0 0 1px #228f7621, 0 3px 15px #228f7663;*/
    /*}*/

    /*.modal .content .head {*/
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: space-between;*/
        /*gap: 10px;*/
        /*margin-bottom: 20px;*/
    /*}*/

    /*.modal .head {*/
        /*font-size: 20px;*/
        /*font-weight: 700;*/
        /*color: #40b89c;*/
    /*}*/

    /*.modal .close {*/
        /*cursor: pointer;*/
    /*}*/

    /*.modal .body {*/
        /*display: flex;*/
        /*align-items: center;*/
        /*flex-direction: column;*/
        /*gap: 10px;*/
    /*}*/

    /*.modal .time {*/
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: space-between;*/
        /*gap: 10px;*/
    /*}*/

    /*.modal .time > div {*/
        /*display: flex;*/
        /*flex-direction: column;*/
        /*align-items: center;*/
        /*font-size: 30px;*/
        /*font-weight: 700;*/
        /*color: #40b89c;*/
    /*}*/

    /*.modal .time > div div:not(.number) {*/
        /*cursor: pointer;*/
    /*}*/

    /*.modal .days {*/
        /*display: flex;*/
        /*gap: 10px;*/
    /*}*/

    /*.modal .day {*/
        /*width: 20px;*/
        /*height: 20px;*/
        /*border-radius: 50%;*/
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: center;*/
        /*cursor: pointer;*/
        /*font-size: 12px;*/
        /*font-weight: 700;*/
        /*color: #40b89c;*/
    /*}*/

    /*.modal .day.active {*/
        /*color: #40b89c;*/
        /*background-color: #fff;*/
    /*}*/

    /*.modal .footer {*/
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: flex-end;*/
        /*gap: 10px;*/
        /*margin-top: 20px;*/
    /*}*/

    /*.modal .footer .btn {*/
        /*font-size: 12px;*/
        /*font-weight: 700;*/
        /*padding: 10px 20px;*/
        /*border-radius: 5px;*/
        /*color: #40b89c;*/
        /*cursor: pointer;*/
        /*text-transform: uppercase;*/
    /*}*/

    /*.modal .footer .btn.save {*/
        /*color: #fff;*/
        /*background-color: #40b89c;*/
    /*}*/

    /*.modal .footer .btn.cancel {*/
        /*color: #40b89c;*/
        /*background-color: #228f763d;*/
    /*}*/

    /*.modal input[type="text"] {*/
        /*width: 100%;*/
        /*height: 40px;*/
        /*border-radius: 5px;*/
        /*padding: 0 10px;*/
        /*border: 1px solid #228f7621;*/
        /*font-size: 14px;*/
        /*font-weight: 700;*/
        /*color: #40b89c;*/
        /*outline: none;*/
        /*transition: .3s ease all;*/
    /*}*/
  </style>
