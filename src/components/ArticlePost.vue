<template>
    <div :id="post_id" class="col-md-4 mb-4 article-post">
        <figure class="figure position-relative">
            <div class="image-thumb position-relative">
                <a :href="'//' + post_url" class="link-thumb">
                    <g-image :src="img_url"
                                class="figure-img img-fluid mb-0"
                                alt="A generic 400X300 placeholder image in a figure." />
                </a>
            </div>
            <figcaption class="figure-caption">
                <a v-for="(tag, index) in tags" :key="tag.id"
                    :href="'//' + tag.link"
                    class="color-2 font-12 exo2 text-uppercase">{{tag.name + ((index != tags.length - 1) ? ', ' : '')}}</a>
                <h2><a :class="text_class" :href="'//' + post_url" title="Title here" v-html="title">{{ title }}</a></h2>
                <div v-html="excerpt"></div>
                <p><i class="fa fa-comments mr-2 text-gray"></i>22 comments</p>
            </figcaption>
        </figure>
    </div>
</template>

<script>
import EventBus from '../EventBus.js';

export default {
    components: {
        name: 'article-post'
    },
    props: {
        post_id: Number,
        title: String,
        excerpt: String,
        img_url: String,
        path: String,
        tagObj: {
            id: Array,
            name: Array,
            link: Array
        }
    },
    data() {
        return {
            post_url: '',
            text_class: 'h3 text-dark font-weight-bold',
            tags: []
        }
    },
    created() {
        this.post_url = this.$props.path.substring(7);
        this.extractTags(this.$props.tagObj[0]);
    },
    mounted() {
        EventBus.$on('night-mode-toggler', (mode) => {
            this.toggleNightMode(mode);
        })
    },
    methods: {
        toggleNightMode(mode) {
            if (mode)
                this.text_class = 'h3 text-light font-weight-bold';
            else
                this.text_class = 'h3 text-dark font-weight-bold'
        },
        extractTags(tag) {
            for (let i = 0; i < tag.id.length; i++) {
                this.tags.push({
                    id: tag.id[i],
                    name: tag.name[i],
                    link: tag.link[i].substring(7)
                });
            }
        }
    }
}
</script>
