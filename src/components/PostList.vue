<template>
  <div class="posts">
    <h3>Список постов:</h3>
    <div v-if="posts.length">
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      ></post-item>
    </div>
    <h4 v-else>Пусто</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IPost } from '@/types';
import PostItem from '@/components/PostItem.vue';

export default defineComponent({
  components: { PostItem },

  props: {
    posts: {
      type: Array as PropType<IPost[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.posts {
  margin-top: 40px;
}
</style>
