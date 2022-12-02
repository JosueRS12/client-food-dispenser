<template>
  <div class="modal active" id="add-alarm-modal">
    <div class="content">
      <div class="head">
        <div class="title">Add Alarm</div>
        <div class="close">x</div>
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
          <div class="day active">M</div>
          <div class="day active">T</div>
          <div class="day active">W</div>
          <div class="day active">T</div>
          <div class="day active">F</div>
          <div class="day active">S</div>
          <div class="day active">S</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddAlarm',
  components: { },
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>
