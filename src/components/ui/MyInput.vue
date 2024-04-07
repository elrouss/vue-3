<template>
  <input class="input" type="text" :value="value" @input="updateValue" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'my-input',

  props: {
    value: [String, Number],
  },

  methods: {
    updateValue(e: Event) {
      this.$emit('update:value', (e.target as HTMLInputElement).value);
    },
  },
});
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
