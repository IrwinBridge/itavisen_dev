<template>
    <div :class="css_class">
        <div :id='id' :class="ad_class" data-ad-view-gpt="gpt"></div>
    </div>
</template>

<script>
export default {
    components: {
        name: 'advertise'
    },
    props: {
        id: String,
        css_class: String,
        ad_class: String
    }
}
</script>

