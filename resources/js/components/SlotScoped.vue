<template lang="html">
    <ul>
        <li
            v-for="option in options"
            :key="option.id"
        >
            <slot :option="option"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    props:{
        options: {required : true},
    }

}
</script>

<style lang="css">
</style>
