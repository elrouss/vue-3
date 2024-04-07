<template>
  <button class="btn" type="button"><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'my-btn',
});
</script>

<style lang="scss" scoped>
.btn {
  padding: 6px 10px;
  color: teal;
  background: none;
  border: 1px solid teal;
}
</style>
