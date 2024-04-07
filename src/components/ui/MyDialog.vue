<template>
  <div class="dialog" :class="{ dialog_visible: isShown }" @click="hide">
    <div class="dialog__wrapper" @click.stop><slot></slot></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'my-dialog',

  props: {
    isShown: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    hide() {
      this.$emit('update:isShown', false);
    },
  },
});
</script>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(black, 0.33);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &_visible {
    opacity: 1;
    visibility: visible;
  }

  &__wrapper {
    padding: 25px;
    border-radius: 12px;
    background-color: #fff;
  }
}
</style>
