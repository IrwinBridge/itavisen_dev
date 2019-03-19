<template>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <figure class="figure position-relative">
                <a v-if="posts[0].node.tags[0].id.length > 0" class="position-absolute badge bg-orange-2 rounded-0 exo2 py-3 px-4 text-white text-uppercase" :href="'//' + posts[0].node.tags[0].link[0].substring(7)">{{posts[0].node.tags[0].name[0]}}</a>
                <div class="image-thumb">
                    <g-image :src="posts[0].node.imgUrlFull" class="figure-img img-fluid" alt="A generic 1600X900 placeholder image in a figure." style="min-height:518px!important"/>
                </div>
                <figcaption class="figure-caption position-absolute-bottom p-3">
                    <h2><a class="text-white font-weight-bold" :href="'//' + posts[0].node.path.substring(7)" v-html="posts[0].node.title">{{posts[0].node.title}}</a></h2>
                    <p class="text-white" v-html="posts[0].node.excerpt"></p>
                    <p class="p-2"></p>
                </figcaption>
            </figure>
        </div>
        <div class="carousel-item">
            <figure class="figure position-relative">
                <a v-if="posts[1].node.tags[0].id.length > 0" class="position-absolute badge bg-orange-2 rounded-0 exo2 py-3 px-4 text-white text-uppercase" :href="'//' + posts[1].node.tags[0].link[0].substring(7)">{{posts[1].node.tags[0].name[0]}}</a>
                <div class="image-thumb">
                    <g-image :src="posts[1].node.imgUrlFull" class="figure-img img-fluid" alt="A generic 1600X900 placeholder image in a figure." style="min-height:518px!important"/>
                </div>
                <figcaption class="figure-caption  position-absolute-bottom p-3">
                    <h2><a class="text-white font-weight-bold" :href="'//' + posts[1].node.path.substring(7)" v-html="posts[1].node.title">{{posts[1].node.title}}</a></h2>
                    <p class="text-white" v-html="posts[1].node.excerpt"></p>
                    <p class="p-2"></p>
                </figcaption>
            </figure>
        </div>
    </div>
</template>

<script>
import EventBus from '../EventBus.js';

export default {
    components: {
        name: 'carousel-posts'
    },
    props: {
        posts: Array
    },
    data() {
        return {
            text_class: 'h3 text-dark font-weight-bold'
        }
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
        }
    }
}
</script>

<style>
/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/
@media (min-width: 320px) and (max-width: 480px) {
    h2 a {
        font-size: 0.75rem;
    }
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    h2 a {
        font-size: 0.75rem;
    }
}
</style>
