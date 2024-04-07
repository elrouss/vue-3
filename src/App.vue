<template>
  <div class="wrapper">
    <post-form @create="createPost" />
    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import { IPost } from './types';

export default defineComponent({
  components: { PostForm, PostList },

  data() {
    return {
      posts: [] as IPost[],
    };
  },

  methods: {
    createPost(post: IPost) {
      this.posts.push(post);
    },

    removePost(post: IPost) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
  },
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

button {
  border: none;
  cursor: pointer;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
