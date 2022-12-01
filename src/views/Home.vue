<template>
    <div class="home">
      <section class="hero">
        <div class="hero-text">
          <h4>Alarm Manager</h4>
          <hr />
          <h2>
            SetUp <br />
            Your Alarms
          </h2>
          <hr />
        </div>
        <div class="clock-wrapper">
          <div class="clock">
            <div class="hand hour-hand"></div>
            <div class="hand minute-hand"></div>
            <div class="hand second-hand"></div>
            <div class="center"></div>
            <div class="numbers"></div>
            <div class="lines"></div>
            <div class="am-pm">
              <div class="am active">AM</div>
              <div class="pm">PM</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>

  </script>
  
  <style lang="scss" scoped>
  
  .hero {
    padding: 90px;
    display: flex;
    flex-direction: row;
    background-color: #000;
    background-attachment: fixed;
    position: relative;
    height: 100vh;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
    .hero-text {
      padding: 90px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #fff;
      h4 {
        text-transform: uppercase;
        font-size: 22px;
        padding-bottom: 4px;
      }
      h2 {
        font-size: 50px;
        @media (min-width: 550px) {
          font-size: 80px;
        }
      }
      hr:nth-child(2) {
        max-width: 365px;
        margin-bottom: 16px;
      }
      hr:nth-child(4) {
        height: 6px;
        background-color: #fff;
        border: none;
        max-width: 85px;
        margin-top: 16px;
      }
    }
  }


.clock-wrapper {
  position: relative;
  width: 100%;
  margin-top: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.clock-wrapper .clock {
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #228f7621, 0 5px 15px #228f7663;
}
.clock .hand {
  width: 2px;
  height: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  transform-origin: top;
  background-color: #40b89c;
  z-index: 1;
}
.clock .hand.hour-hand {
  height: 25%;
  transform: rotate(-90deg);
}
.clock .hand.minute-hand {
  height: 30%;
  transform: rotate(90deg);
}
.clock .hand.second-hand {
  height: 35%;
  transform: rotate(180deg);
}
.clock .center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 2px solid #40b89c;
  background-color: #000;
  z-index: 1;
}
.clock .numbers {
  position: absolute;
  width: 90%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
}
.clock .number {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  transform: rotate(calc(var(--i) * 30deg));
}
.clock .number span {
  position: relative;
  color: #40b89c;
  font-size: 12px;
  font-weight: 800;
  transform: rotate(calc(var(--i) * -30deg - 90deg));
}
.clock .number:nth-child(3n) span {
  font-size: 20px;
  font-weight: 700;
}
.clock .lines {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%) rotate(45deg);
}
.clock .line {
  position: absolute;
  width: 1px;
  height: 90%;
  display: flex;
  align-items: center;
  transform: rotate(calc(var(--i) * 30deg));
  background-color: #40b89c;
}
.clock .line::after {
  content: "";
  position: absolute;
  width: 500%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000;
}
.clock-wrapper .am-pm {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 30px;
  margin-top: 40px;
  font-size: 10px;
  font-weight: 500;
  color: #40b89c;
}
.am-pm div {
  position: relative;
}
.am-pm div::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #000;
  transform: translate(-50%, -50%);
  z-index: -1;
}
.am-pm div.active {
  color: #000;
}
.am-pm div.active::before {
  background-color: #40b89c;
}
  </style>