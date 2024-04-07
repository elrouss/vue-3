<template>
  <form class="form" @submit.prevent>
    <h2>Добавить новый пост</h2>
    <my-input placeholder="Название" v-model:value="post.heading" />
    <my-input placeholder="Описание" v-model:value="post.body" />
    <my-btn class="btn" @click="createPost">Создать</my-btn>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      post: {
        id: '',
        heading: '',
        body: '',
      },
    };
  },

  methods: {
    createPost() {
      this.post.id = String(Math.random());
      this.$emit('create', this.post);
      this.post = {
        id: '',
        heading: '',
        body: '',
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 500px;
}

.btn {
  align-self: flex-end;
  margin-top: 15px;
}
</style>
