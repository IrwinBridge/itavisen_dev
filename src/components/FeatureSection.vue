<template>
    <section class="feature-section">
        <div class="container">
            <div class="row">
                <div class="left-side-content col-md-9">
                    <div class="row">
                        <div class="col-md-12 mb-2">
                            <advertise :id="'div-gpt-ad-9027848-3'" :css_class="'ad-view-left'" :ad_class="'sidebar-left'" />
                            <advertise :id="'div-gpt-ad-9027848-2'" :css_class="'ad-view-right'" :ad_class="'sidebar-right'" />
                            <div id="featured-slider" class="carousel slide" data-ride="carousel">
                                <!-- Indicators -->
                                <ul class="carousel-indicators row mx-4 mb-5">
                                    <li data-target="#featured-slider" data-slide-to="0" class=" col active"></li>
                                    <li data-target="#featured-slider" data-slide-to="1" class="col"></li>
                                </ul>
                                <!-- The slideshow -->
                                <carousel-posts :posts="posts"></carousel-posts>
                            </div>
                        </div>
                        <div class="col-md-6 mb-2">
                            <figure class="figure position-relative">
                                <a v-if="posts[2].node.tags[0].id.length > 0" class="position-absolute badge bg-3 rounded-0 exo2 text-white py-3 px-4 text-uppercase" :href="'//' + posts[2].node.tags[0].link[0].substring(7)">{{posts[2].node.tags[0].name[0]}}</a>
                                <div class="image-thumb">
                                    <a :href="posts[2].node.path.substring(7)" class="link-thumb">
                                        <g-image :src="posts[2].node.imgUrlFull" class="figure-img img-fluid" alt="A generic 1600X1200 placeholder image in a figure." style="height:505px!important" />
                                    </a>
                                </div>
                                <figcaption class="figure-caption position-absolute-bottom p-3">
                                    <!--a href="#" class="badge bg-4 exo2 text-white py-2 px-2 exo2 rounded-10" title="Oppdatert">Oppdatert</a-->
                                    <h2 class="h4"><a class="text-white font-weight-bold" :href="posts[2].node.path.substring(7)" v-html="posts[2].node.title">{{posts[2].node.title}}</a></h2>
                                    <p class="text-white" v-html="posts[2].node.excerpt">{{posts[2].node.excerpt}}</p>
                                    <p class="text-white"><i class="fa fa-comments mr-2 text-gray"></i>{{posts[2].node.comments.count + (parseInt(posts[2].node.comments.count) == 1 ? ' comment' : ' comments')}}</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="col-md-6 mb-2">
                            <figure class="figure position-relative">
                                <a v-if="posts[3].node.tags[0].id.length > 0" class="badge bg-orange exo2 text-white position-absolute py-3 px-4 rounded-0 text-uppercase" :href="'//' + posts[3].node.tags[0].link[0].substring(7)">{{posts[3].node.tags[0].name[0]}}</a>
                                <div class="image-thumb">
                                    <a :href="posts[3].node.path.substring(7)" class="link-thumb">
                                        <g-image :src="posts[3].node.imgUrlFull" class="figure-img img-fluid" alt="A generic 1600X1200 placeholder image in a figure." style="height:505px!important" />
                                    </a>
                                </div>
                                <figcaption class="figure-caption position-absolute-bottom p-3">
                                    <!--a href="#" class="badge bg-4 exo2 text-white py-2 px-2 exo2 rounded-10" title="Oppdatert">Category</a-->
                                    <h2 class="h4"><a class="text-white font-weight-bold" :href="posts[3].node.path.substring(7)" v-html="posts[3].node.title">{{posts[3].node.title}}</a></h2>
                                    <p class="text-white" v-html="posts[3].node.excerpt">{{posts[3].node.excerpt}}</p>
                                    <p class="text-white"><i class="fa fa-comments mr-2 "></i>{{posts[3].node.comments.count + (parseInt(posts[3].node.comments.count) == 1 ? ' comment' : ' comments')}}</p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="right-side-content mb-4 col-md-3">
                    <div class="row">
                        <div class="col-md-12 px-2">
                            <div class="homepage-video-area"><div class="wrap"></div></div>
                        </div>
                    </div>
                    <div class="row tabs d-none d-lg-block">
                        <div class="tab-links mb-3">
                            <ul class="nav nav-tabs border-0" role=tablist>
                                <li class="nav-item mr-3">
                                    <a class="nav-link font-16 px-0 pb-0 mr-3 font-weight-bold active show" data-toggle="tab" role="tab" href="#popular" aria-selected="true">
                                        Popular                   
                                    </a>
                                </li>
                                <li class="nav-item mr-3">
                                    <a class="nav-link font-16 px-0 pb-0 mr-3 font-weight-bold" data-toggle="tab" role="tab" href="#most" aria-selected="true">
                                        Videos                   
                                    </a>
                                </li>
                                <li class="nav-item mr-3">
                                    <a class="nav-link font-16 px-0 mr-4 pb-0 font-weight-bold" data-toggle="tab" role="tab" href="#top" aria-selected="false">
                                        New                   
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content">
                            <div class="tab-pane popular-tab-content active show" id="popular" role="tabpanel">
                                <div class=" mt-2">
                                    <div id="carousel-popular" class="carousel slide " data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <right-post v-for="post in popular.slice(0, 3)" :key="post.node.id"
                                                            :id="post.node.id"
                                                            :title="post.node.title"
                                                            :date="post.node.date"
                                                            :path="post.node.path"
                                                            :img_url="post.node.imgUrl"
                                                            :right_posts_author_text="right_posts_author_text"
                                                            :right_posts_text="right_posts_text" />
                                            </div>
                                            <div class="carousel-item">
                                                <right-post v-for="post in popular.slice(3, 6)" :key="post.node.id"
                                                            :id="post.node.id"
                                                            :title="post.node.title"
                                                            :date="post.node.date"
                                                            :path="post.node.path"
                                                            :img_url="post.node.imgUrl"
                                                            :right_posts_author_text="right_posts_author_text"
                                                            :right_posts_text="right_posts_text" />
                                            </div>
                                            <div class="carousel-item">
                                                <right-post v-for="post in popular.slice(6, 9)" :key="post.node.id"
                                                            :id="post.node.id"
                                                            :title="post.node.title"
                                                            :date="post.node.date"
                                                            :path="post.node.path"
                                                            :img_url="post.node.imgUrl"
                                                            :right_posts_author_text="right_posts_author_text"
                                                            :right_posts_text="right_posts_text" />
                                            </div>
                                        </div>
                                        <div class="carousel-controls position-relative">
                                            <a class="text-secondary d-inline-block" href="#carousel-popular" role="button" data-slide="prev">
                                                <i class="fa fa-angle-left px-2 py-1 border-half-black text-secondary border pl-2 pr-2 mr-2"></i>
                                            </a>
                                            <a class="text-secondary d-inline-block" href="#carousel-popular" role="button" data-slide="next">
                                                <i class="fa fa-angle-right px-2 py-1 border-half-black text-secondary border pl-2 pr-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane most-tab-content " id="most" role="tabpanel">
                                <div class=" mt-2">
                                    <div id="carousel-most" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <right-post v-for="post in posts.slice(0, 3)" :key="post.node.id"
                                                            :id="post.node.id"
                                                            :title="post.node.title"
                                                            :date="post.node.date"
                                                            :path="post.node.path"
                                                            :img_url="post.node.imgUrl"
                                                            :right_posts_author_text="right_posts_author_text"
                                                            :right_posts_text="right_posts_text" />
                                            </div>
                                            <div class="carousel-item">
                                                <right-post v-for="post in posts.slice(3, 6)" :key="post.node.id"
                                                            :id="post.node.id"
                                                            :title="post.node.title"
                                                            :date="post.node.date"
                                                            :path="post.node.path"
                                                            :img_url="post.node.imgUrl"
                                                            :right_posts_author_text="right_posts_author_text"
                                                            :right_posts_text="right_posts_text" />
                                            </div>
                                            <div class="carousel-item">
                                                <right-post v-for="post in posts.slice(6, 9)" :key="post.node.id"
                                                            :id="post.node.id"
                                                            :title="post.node.title"
                                                            :date="post.node.date"
                                                            :path="post.node.path"
                                                            :img_url="post.node.imgUrl"
                                                            :right_posts_author_text="right_posts_author_text"
                                                            :right_posts_text="right_posts_text" />
                                            </div>
                                        </div>
                                        <div class="carousel-controls position-relative">
                                            <a class="text-secondary d-inline-block" href="#carousel-most" role="button" data-slide="prev">
                                                <i class="fa fa-angle-left px-2 py-1 border-half-black text-secondary border pl-2 pr-2 mr-2"></i>
                                            </a>
                                            <a class="text-secondary d-inline-block" href="#carousel-most" role="button" data-slide="next">
                                                <i class="fa fa-angle-right px-2 py-1 border-half-black text-secondary border pl-2 pr-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane top-tab-content" id="top" role="tabpanel">
                                <div class="mt-2">
                                    <div id="carousel-top" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <right-post v-for="post in posts.slice(0, 3)" :key="post.node.id"
                                                            :id="post.node.id"
                                                            :title="post.node.title"
                                                            :date="post.node.date"
                                                            :path="post.node.path"
                                                            :img_url="post.node.imgUrl"
                                                            :right_posts_author_text="right_posts_author_text"
                                                            :right_posts_text="right_posts_text" />
                                            </div>
                                            <div class="carousel-item">
                                                <right-post v-for="post in posts.slice(3, 6)" :key="post.node.id"
                                                            :id="post.node.id"
                                                            :title="post.node.title"
                                                            :date="post.node.date"
                                                            :path="post.node.path"
                                                            :img_url="post.node.imgUrl"
                                                            :right_posts_author_text="right_posts_author_text"
                                                            :right_posts_text="right_posts_text" />
                                            </div>
                                            <div class="carousel-item">
                                                <right-post v-for="post in posts.slice(6, 9)" :key="post.node.id"
                                                            :id="post.node.id"
                                                            :title="post.node.title"
                                                            :date="post.node.date"
                                                            :path="post.node.path"
                                                            :img_url="post.node.imgUrl"
                                                            :right_posts_author_text="right_posts_author_text"
                                                            :right_posts_text="right_posts_text" />
                                            </div>
                                        </div>
                                        <div class="carousel-controls position-relative">
                                            <a class="text-secondary d-inline-block" href="#carousel-top" role="button" data-slide="prev">
                                                <i class="fa fa-angle-left px-2 py-1 border-half-black text-secondary border pl-2 pr-2 mr-2"></i>
                                            </a>
                                            <a class="text-secondary d-inline-block" href="#carousel-top" role="button" data-slide="next">
                                                <i class="fa fa-angle-right px-2 py-1 border-half-black text-secondary border pl-2 pr-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="weather_updated_text">Last updated:  22nd Mar, 2018 at 00:55</div>
                    <div>
                        <g-image src="~/assets/img/weather.png" class="img-fluid" alt="Weather" immediate="true" />
                    </div>
                    <div class="bg-orange position-relative p-3 mt-3 subscribe-side">
                        <h3 class="h5 exo2 text-center text-white mb-3">Melde deg på</h3>
                        <form action="index.html" method="post">
                            <input type="text" class="form-control font-14 mb-2 rounded-0 " placeholder="Skriv inn navn">
                            <input type="email" class="form-control font-14 mb-2 rounded-0" placeholder="Skriv inn e-post">
                            <button type="submit" class="exo2 w-100 text-white mt-3 btn bg-3">Abonnere</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import EventBus from '../EventBus.js';
import CarouselPosts from './CarouselPosts.vue';
import RightPost from './RightPost.vue';
import Advertise from '~/components/Advertise.vue';

export default {
    components: {
        name: 'future-section',
        CarouselPosts,
        RightPost,
        Advertise
    },
    props: {
        posts: Array,
        popular: Array
    },
    data() {
        return {
            video_link_text: 'text-black mt-3 mb-3 font-16 font-weight-bold',
            right_posts_text: 'font-15 text-black font-weight-bold',
            weather_updated_text: 'mt-3 mb-2 font-14 text-black',
            right_posts_author_text: 'd-block text-half-black font-12 w-100',
        }
    },
    mounted() {
        EventBus.$on('night-mode-toggler', (mode) => {
            this.toggleNightMode(mode);
        });
        this.runAdScript();
    },
    methods: {
        toggleNightMode(mode) {
            if (mode) {
                this.video_link_text = 'text-black-light mt-3 mb-3 font-16 font-weight-bold';
                this.right_posts_text = 'font-15 text-black-light font-weight-bold';
                this.weather_updated_text = 'mt-3 mb-2 font-14 text-black-light';
                this.right_posts_author_text = 'd-block text-half-light font-12 w-100';
            } else {
                this.video_link_text = 'text-black mt-3 mb-3 font-16 font-weight-bold';
                this.right_posts_text = 'font-15 text-black font-weight-bold';
                this.weather_updated_text = 'mt-3 mb-2 font-14 text-black';
                this.right_posts_author_text = 'd-block text-half-black font-12 w-100';
            }
        },
        runAdScript() {
            
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
    h2.h4 a.font-weight-bold {
        font-size: 0.75rem;
    }
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    h2.h4 a.font-weight-bold {
        font-size: 0.75rem;
    }
}

.ad-view-left {
    z-index: 1000;
    position: absolute;
    left: -185px !important;
}

.sidebar-left {
    position: fixed;
    top: 285px !important;
}

.ad-view-right {
    z-index: 1000;
    position: absolute;
    right: -300px !important;
}

.sidebar-right {
    position: fixed;
    top: 285px !important;
}
</style>