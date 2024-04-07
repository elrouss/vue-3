<template>
  <div class="posts">
    <h3>Список пользователей:</h3>
    <post-item v-for="post in posts" :key="post.id" :post="post"></post-item>
  </div>
</template>

<script>
import PostItem from '@/components/PostItem';

export default {
  components: { PostItem },

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
</style>
