<template>
  <article class="post">
    <div class="post__content">
      <header>
        <h3 class="post__heading">
          <strong>Название:</strong> {{ post.heading }}
        </h3>
      </header>
      <p class="post__paragraph"><strong>Описание:</strong> {{ post.body }}</p>
    </div>
    <div class="post__btns">
      <my-btn @click="$emit('remove', post)">Удалить</my-btn>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IPost } from '@/types';

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<IPost>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  padding: 10px;
  border: 2px solid green;

  &:not(:first-child) {
    margin-top: 15px;
  }

  &__heading {
    font-weight: 400;
  }
}
</style>
