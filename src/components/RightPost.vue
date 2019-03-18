<template>
    <div :id="id" class="row mb-3">
        <div class="col-md-4">
            <a :href="'//' + path.substring(7)" class="link-thumb">
                <g-image class="d-block w-100" :src="img_url" alt="First slide" />
            </a>
        </div>
        <div class="col-md-8">
            <small :class="right_posts_author_text">TECH - 12 Months Ago</small>
            <a :class="right_posts_text" :href="'//' + path.substring(7)" v-html="title">{{title}}</a>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        name: 'right-post'
    },
    props: {
        id: String,
        title: String,
        date: String,
        path: String,
        img_url: String,
        right_posts_author_text: String,
        right_posts_text: String
    }
}
</script>
