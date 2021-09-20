<template>
  <div id="message">
    <div id="message-outputarea">
      <h4 class="message-messagearea">{{ filename }}</h4>
      <h5 class="message-messagearea">{{ resultmessage }}</h5>
    </div>
  </div>
</template>

<script lang="ts" src="./Message.ts"></script>

<style lang="scss">
#message {
  width: 100%;
  height: 10%;
  display: flex;
  align-items: start;
  justify-content: center;
}

.message-messagearea {
  font-size: 15px;
}
</style>