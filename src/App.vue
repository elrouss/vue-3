<template>
  <div class="wrapper">
    <h1>Страница с постами</h1>
    <my-btn style="margin-top: 15px" @click="showDialog">Создать пост</my-btn>
    <post-list :posts="posts" @remove="removePost" />
    <my-dialog v-model:isShown="isDialogVisible"
      ><post-form @create="createPost"
    /></my-dialog>
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
      isDialogVisible: false,
    };
  },

  methods: {
    showDialog() {
      this.isDialogVisible = true;
    },

    createPost(post: IPost) {
      this.posts.push(post);
      this.isDialogVisible = false;
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
