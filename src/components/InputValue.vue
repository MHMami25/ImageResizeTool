<template>
  <div id="inputvalue">
    <div class="inputvalue-inputarea">
      <input
        type="checkbox"
        class="inputvalue-checkbox"
        id="inputvalue-sizeratio"
        @change="checkSizeRatioChecked"
        v-model="sizeratiochecked"
      />
      <label for="inputvalue-sizeratio">比率を保つ</label>
      <input
        type="number"
        min="0"
        class="inputvalue-form"
        placeholder="例： 640"
        @change="changeInputWidthValue"
        v-model="size.width"
        :disabled="percentusechecked"
      />
      <input
        type="number"
        min="0"
        class="inputvalue-form"
        placeholder="例： 0（自動）"
        @change="changeInputHeightValue"
        v-model="size.height"
        :disabled="percentusechecked"
      />
      <input
        type="checkbox"
        value="1"
        class="inputvalue-checkbox"
        id="inputvalue-percentuse"
        @change="checkPercentuseChecked"
        v-model="percentusechecked"
      />
      <label for="inputvalue-percentuse">パーセントで指定</label>
      <input
        type="number"
        min="0"
        max="100"
        class="inputvalue-form"
        placeholder="例：
      0（自動）"
        @change="changeInputPercentValue"
        v-model="size.percent"
        :disabled="!percentusechecked"
      />
    </div>
    <button class="inputvalue-button" @click="doResize">リサイズ</button>
  </div>
</template>

<script lang="ts" src="./InputValue.ts"></script>

<style lang="sass">
#inputvalue
  width: 100%
  height: 40%
</style>