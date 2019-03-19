<template>
  <Layout>
    <feature-section :posts="$page.posts.edges" :popular="$page.popular.edges"></feature-section>
    <section class="article three-columns">
      <div class="container">
        <div class="row" v-for="i in rowCount" :key="i">
          <article-post v-for="(edge, index) in $page.posts.edges.slice(4).slice((i - 1) * 3, i * 3)" :key="edge.node.id"
            :id="index + 1"
            :path="edge.node.path"
            :img_url="edge.node.imgUrl"
            :title="edge.node.title"
            :excerpt="edge.node.excerpt"
            :tagObj="edge.node.tags"
            :comments="edge.node.comments.count + (parseInt(edge.node.comments.count) == 1 ? ' comment' : ' comments')" />
          <!--advertise v-if="i == 1" :id="'div-gpt-ad-9027848-2'" /-->
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPosts(sortBy: "date", order: DESC) {
    edges {
      node { 
        id
        title
        excerpt
        path
        imgUrl
        imgUrlFull
        tags {
          id
          name
          link
        }
        comments {
          id
          date
          count
        }
      }
    }
  }
  popular: allPosts(sortBy: "comments.count", order: DESC) {
    edges {
      node {
        id
        title
        excerpt
        path
        imgUrl
        tags {
          id
          name
          link
        }
        comments {
          id
          date
          count
        }
      }
    }
  }
}
</page-query>

<script>
import FeatureSection from '~/components/FeatureSection.vue';
import ArticlePost from '~/components/ArticlePost.vue';
import Advertise from '~/components/Advertise.vue';
import { displayAds as mounted } from "~/commons.js";

export default {
  components: {
    FeatureSection,
    ArticlePost,
    Advertise
  },
  mounted,
  computed: {
    rowCount() {
      return Math.ceil((this.$page.posts.edges.length) / 3);
    }
  }
}
</script>
