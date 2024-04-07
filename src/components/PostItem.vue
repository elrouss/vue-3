<template>
  <article class="post">
    <header>
      <h3 class="post__heading">Название: {{ post.heading }}</h3>
    </header>
    <p class="post__paragraph">Описание: {{ post.body }}</p>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
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
