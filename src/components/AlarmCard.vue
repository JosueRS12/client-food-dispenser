<template>
  <div class="alarms">
    <div class="alarm"> 
      <div class="head">
        <div class="name">Alarm</div>
      </div>
      <div class="body">
        <div class="left">
          <div class="time">12:00</div>
          <label class="toggle">
            <input type="checkbox" class="checkbox" hidden/>
            <div class="track"></div>
            <div class="thumb"></div>
          </label>
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
        <div class="delete">
          <img src="../assets/delete.png" alt="" />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlarmCard',
  components: { },
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>



