<template>
  <div id="inputvalue">
    <div class="inputvalue-inputarea">
      <input
        type="number"
        min="0"
        class="inputvalue-form"
        placeholder="例： 640"
        v-model="size.width"
      />
      <input
        type="number"
        min="0"
        class="inputvalue-form"
        placeholder="例： 0（自動）"
        v-model="size.height"
      />
      <input
        type="number"
        min="0"
        class="inputvalue-form"
        placeholder="例：
      0（自動）"
        v-model="size.percent"
      />
    </div>
      <button class="inputvalue-button" @click="doResize">リサイズ</button>
  </div>
</template>

<script lang="ts" src="./InputValue.ts"></script>

<style lang="scss">
</style>