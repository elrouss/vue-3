<template>
  <div class="posts">
    <article class="post" v-for="post in posts" :key="post.id">
      <header>
        <h3 class="post__heading">Название: {{ post.heading }}</h3>
      </header>
      <p class="post__paragraph">Описание: {{ post.body }}</p>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.posts {
  margin-top: 40px;
}

.post {
  width: 700px;
  padding: 10px;
  border: 2px solid green;

  &:not(:first-child) {
    margin-top: 15px;
  }

  &__heading,
  &__paragraph {
    text-align: center;
  }
}
</style>
