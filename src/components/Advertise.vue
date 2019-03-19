<template>
    <div :class="css_class">
        <div :id='id' class="ad-view-div-gpt"></div>
    </div>
</template>

<script>
export default {
    components: {
        name: 'advertise'
    },
    props: {
        id: String,
        css_class: String
    }
}
</script>

