<template>
  <div>
    <Typography
      element="h2"
      text="Latest Posts"
      addAccentLeft
      headingStyle="text-h6"
    />
    <ul v-if="posts && posts.length > 0">
      <li v-for="post in posts" :key="post.id">
        <nuxt-link :to="`/${post.full_slug}`">
          <div class="d-flex">
            <v-img :src="post.content.featuredImage.filename" cover max-width="100" width="100" height="100" />
            <div class="pl-2">
              <p v-if="post.content.title" class="mb-2">
                {{ post.content.title }}
              </p>
              <p
                class="text-grey-darken-2"
                v-if="post.content.firstPublishedAt"
              >
                {{ dateFormat(post.content.firstPublishedAt) }}
              </p>
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import getPost from "~/mixin/getPost";

export default {
  mixins: [getPost],
  data() {
    return {
      posts: null,
    };
  },
  async beforeMount() {
    await this.loadPostData();
  },
  methods: {
    async loadPostData() {
      this.posts = await this.getRecentPosts();
    },
    dateFormat(timestamp) {
      if (!timestamp && !timestamp.length) return;
      const date = new Date(timestamp.replace(" ", "T"));
      const options = { year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString("en-US", options);
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: black;
}
</style>
