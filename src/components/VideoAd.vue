<template>
    <div class="homepage-video-area">
        <div class="wrap">
        </div>
    </div>
</template>

<script>
export default {
    components: {
        name: 'video-ad'
    },
    mounted() {
        let ad_video = document.createElement('script');
        ad_video.setAttribute('src', '//itavisen.bbvms.com/p/itavisen_player_skin/y/PvCX5-ie8Z4.js');
        ad_video.async = true;
        document.querySelector('.homepage-video-area .wrap').appendChild(ad_video);
    }
}
</script>
