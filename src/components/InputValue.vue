<template>
  <div id="inputvalue">
    <div class="inputvalue-inputarea">
      <div class="inputvalue-inputarea-row">
        <input
          type="checkbox"
          class="inputvalue-checkbox"
          @change="checkSizeRatioChecked"
          v-model="sizeratiochecked"
        />
        <label class="inputvalue-checkobx-label" for="inputvalue-sizeratio"
          >比率を保つ</label
        >
        <label class="inputvalue-label">幅：</label>
        <input
          type="number"
          min="0"
          class="inputvalue-form"
          placeholder="例： 640"
          @change="changeInputWidthValue"
          v-model="size.width"
          :disabled="percentusechecked"
        />
        <label class="inputvalue-label">高さ：</label>
        <input
          type="number"
          min="0"
          class="inputvalue-form"
          placeholder="例： 0（自動）"
          @change="changeInputHeightValue"
          v-model="size.height"
          :disabled="percentusechecked"
        />
      </div>
      <div class="inputvalue-inputarea-row">
        <input
          type="checkbox"
          value="1"
          class="inputvalue-checkbox"
          @change="checkPercentuseChecked"
          v-model="percentusechecked"
        />
        <label class="inputvalue-checkobx-label" for="inputvalue-percentuse"
          >パーセントで指定</label
        >
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
    </div>
    <div class="inputvalue-buttonarea">
      <button class="inputvalue-button" @click="doResize">リサイズ</button>
    </div>
  </div>
</template>

<script lang="ts" src="./InputValue.ts"></script>

<style lang="scss">
#inputvalue {
  width: 100%;
  height: 30%;
  display: flex;
  align-items: start;
  justify-content: center;
}

.inputvalue-inputarea {
  display: flex;
  flex-direction: column;
  align-content: center;

  .inputvalue-checkobx-label {
    font-size: 12px;
    margin-right: 15px;
  }

  .inputvalue-label {
    font-size: 15px;
  }

  .inputvalue-form {
    width: 80px;
    height: 15px;
    margin-right: 10px;
  }
}

.inputvalue-buttonarea {
  display: flex;
  flex-wrap: wrap;
  align-content: center;

  .inputvalue-button {
    width: 80px;
    height: 20px;
  }
}
</style>