<template>
    <div :class="{ night: nightMode }">
        <div class="layout">
            <header class="site-header mb-4">
                <div class="container">
                    <advertise :id="'div-gpt-ad-9027848-1'" :css_class="'d-flex justify-content-center mt-2'" />
                    <div class="row pt-4 pt-md-5">
                    <div class="col-md-4  pb-4">
                        <a href="index.html" title="Itavisen">
                            <g-image src="~/assets/img/logo.png" class="logo-day" alt="Itavisen" immediate="true" />
                            <g-image src="~/assets/img/logo-night.png" class="logo-night" alt="Itavisen" immediate="true" />
                        </a>
                        <div class="pull-right navbar navbar-light p-0">
                            <button class="navbar-toggler d-md-none bg-light" type="button" data-toggle="collapse" data-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-8 pb-md-4 text-center text-md-right">
                        <span class="mr-3 d-inline-block"><span :class="text_black">NATTMODUS</span><label class=" mb-0 align-middle switch">
                                <input type="checkbox" id="night-mode" @click="toggleNightMode" />
                                <span class="night-mode round"></span>
                            </label></span>
                        <a href="#" class="speedometer btn top-btn d-inline-block mr-2 font-12 exo2" title="SPEEDOMETER">SPEEDOMETER</a> 
                        <div class="social-link d-inline-block">
                            <a href="https://www.facebook.com/ITavisen" class="fb mr-3" title="Follow us on facebook"><i class="fa fa-facebook"></i></a>
                            <a href="https://twitter.com/itavisen" class="tw mr-3" title="Follow us on twitter"><i class="fa fa-twitter"></i></a>
                            <a href="javascript:void(0)" class="gp mr-3" title="Like us on youtube"><i class="fa fa-google-plus"></i></a>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                        <!-- Navigation -->
                        <nav class="navbar navbar-expand-md navbar-light px-md-0 pb-0 col exo2 font-12">
                            <div class="collapse navbar-collapse text-uppercase" id="main-nav">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item mr-3 active">
                                        <a class="nav-link px-1 pb-3" href="#">Forsiden<span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item mr-3">
                                        <a class="nav-link px-1 pb-3" href="#">Om oss</a>
                                    </li>
                                    <li class="nav-item mr-3 dropdown">
                                        <a class="nav-link dropdown-toggle"
                                            href="#" id="navbarDropdown"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">Eksklusivt</a>
                                        <div class="dropdown-menu shadow rounded-0 mt-0 font-12" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item px-3 py-2" href="#">APPS</a>
                                            <a class="dropdown-item px-3 py-2" href="#">VIRTUAL REALITY</a>
                                            <a class="dropdown-item px-3 py-2" href="#">PHOTOGRAPHY</a>
                                            <a class="dropdown-item px-3 py-2" href="#">DESIGN</a>
                                            <a class="dropdown-item px-3 py-2" href="#">AI</a>
                                        </div>
                                    </li>
                                    <li class="nav-item mr-3">
                                        <a class="nav-link px-1 pb-3" href="#">Blogg</a>
                                    </li>
                                    <li class="nav-item mr-3">
                                        <a class="nav-link px-1 pb-3" href="#">Tester</a>
                                    </li>
                                    <li class="nav-item mr-3">
                                        <a class="nav-link px-1 pb-3" href="#">Mobil</a>
                                    </li>
                                    <li class="nav-item mr-3">
                                        <a class="nav-link px-1 pb-3" href="#">Maskinvarae</a>
                                    </li>
                                    <li class="nav-item mr-3">
                                        <a class="nav-link px-1 pb-3" href="#">Spill</a>
                                    </li>
                                    <li class="nav-item mr-3">
                                        <a class="nav-link px-1 pb-3" href="#">APPLE</a>
                                    </li>
                                    <li class="nav-item mr-3">
                                        <a class="nav-link px-1 pb-3" href="#">Microsoft</a>
                                    </li>
                                    <li class="nav-item mr-3">
                                        <a class="nav-link px-1 pb-3" href="#">Google</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div class="col-md-1 mt-2">
                            <form id="search-top" class="w-100">
                                <input type="search" name="s" placeholder="Search" class="form-control float-right" autocomplete="off"/>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
            <slot/>
            <footer id="footer" class="pt-5 mt-5 font-14 font-weight-medium">
            <div class="container">
                <div class="row exo2 text-center ">
                <div class="col-md-4 pb-4 text-md-left">
                    <g-image src="~/assets/img/logo.png" class="logo-day" alt="Itavisen" immediate="true" />
                    <g-image src="~/assets/img/logo-night.png" class="logo-night" alt="Itavisen" immediate="true" />
                    <p class="mb-2 mt-4">Tips Oss: <a href="mailto:red@itavisen.no" title="mail to red@itavisen.no"> red@itavisen.no</a></p>
                    <p class="pb-0">Ansvarlig Redaktør: Trond Bie</p>
                </div>
                <div class="col-md-4 pb-4">
                    <p class="mb-4  pl-3 pr-3">NYHETSBREV · ANNONSEINFORMASJON</p>
                    <form action="index.html" method="post">
                        <input type="text" class="form-control pt-4 pb-4 pr-5" placeholder="subscribe to newsletter" />
                        <button type="submit" class="form-control"></button>
                    </form>
                </div>
                <div class="col-md-4  pb-4 text-md-right">
                    <div class="social-links pt-2 mt-5">
                        <a href="https://www.facebook.com/ITavisen" class="fb mr-2" title="Follow us on facebook"><i class="fa fa-facebook"></i></a>
                        <a href="https://twitter.com/itavisen" class="tw mr-2" title="Follow us on twitter"><i class="fa fa-twitter"></i></a>
                        <a href="https://www.youtube.com/user/itavisenno" class="yt mr-2" title="Like us on youtube"><i class="fa fa-youtube"></i></a>
                        <a href="javascript:void(0)" class="rss" title="RSS"><i class="fa fa-rss"></i></a>
                    </div>
                </div>
                </div>
            </div>
            </footer>
        </div>
    </div>
</template>

<script>
import EventBus from '../EventBus.js';
import Advertise from '~/components/Advertise.vue';
import { displayAds as mounted } from "~/commons.js";

export default {
    components: {
        Advertise
    },
    data() {
        return {
            nightMode: false,
            text_black: 'mr-2 font-14 align-middle text-black exo2'
        }
    },
    mounted,
    methods: {
        toggleNightMode() {
            this.nightMode = !this.nightMode;
            if (this.nightMode) {
                this.text_black = 'mr-2 font-14 align-middle text-black-light exo2';
            } else {
                this.text_black = 'mr-2 font-14 align-middle text-black exo2';
            }
            EventBus.$emit('night-mode-toggler', this.nightMode);
        }
    }
}
</script>