<template>
  <form class="form" @submit.prevent>
    <h2>Добавить новый пост</h2>
    <input
      class="input"
      type="text"
      placeholder="Название"
      v-model="post.heading"
    />
    <input
      class="input"
      type="text"
      placeholder="Описание"
      v-model="post.body"
    />
    <button class="btn" @click="createPost">Создать</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        heading: '',
        body: '',
      },
      methods: {
        createPost() {
          this.post.id = Date.now();
          this.$emit('create', this.post);
          this.post = {
            heading: '',
            body: '',
          };
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 30%;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

.btn {
  align-self: flex-end;
  padding: 6px 10px;
  margin-top: 15px;
  color: teal;
  background: none;
  border: 1px solid teal;
}
</style>
