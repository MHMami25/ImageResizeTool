<template>
  <div id="message">
    <div id="message-outputarea">
      <h4 class="message-filename">{{ filename }}</h4>
      <div class="message-resultmessage" v-if="resultflag">
        <p>{{ resultmessage }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Message.ts"></script>

<style lang="scss">
#message {
  width: 100%;
  height: auto;
  display: flex;
  align-items: start;
  justify-content: start;
}

h4 {
  position: relative;
  color: #333;
  text-shadow: 0 0 2px white;
}
h4:before {
  content: "";
  position: absolute;
  background: #5ee3ec;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 50%;
  /* border: dashed 1px white; */
  left: -15px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: -1;
}

.message-resultmessage {
  padding: 0.5em 1em;
  margin: 1em 0;
  color: #232323;
  background: #c5faee;
  border-left: solid 10px #36b962;
}
.message-resultmessage p {
  margin: 0;
  padding: 0;
}
</style>