<template>
  <ArticleInner
    :article-text="articleText"
  />
</template>

<script>
import ArticleInner from '~/components/ArticleInner.vue'

export default {
  head() {
    return {
      title: this.articleText.title,
      meta: [
        {
          name: 'description',
          content: this.articleText.title
        }
      ]
    }
  },

  name: 'Article',

  components: {
    ArticleInner
  },

  async asyncData(context) {
    const url = await context.route.params.id
    const articleText = await context.$axios.$get(
      `https://school-olymp.ru/Andrey/blog/Articles/${url}.php`
    )
    return {
      url,
      articleText
    }
  }
}
</script>
