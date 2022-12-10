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
            <input type="text" id="name" value="alarm" />
          </div>
          <div class="time">
            <div class="hour">
              <div class="up">+</div>
              <div class="number">12</div>
              <div class="down">-</div>
            </div>
            <div class="minute">
              <div class="up">+</div>
              <div class="number">00</div>
              <div class="down">-</div>
            </div>
          </div>
          <div class="days">
            <div class="day active">una vez</div>
            <div class="day active">diario</div>
            <div class="day active">L</div>
            <div class="day active">M</div>
            <div class="day active">Mi</div>
            <div class="day active">J</div>
            <div class="day active">V</div>
            <div class="day active">S</div>
            <div class="day active">D</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddAlarm',
  components: { },
  props: {
  },
  data () {
    return {
      open: 'active',
      close: '',
      enable: false
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
  }
}
</script>
