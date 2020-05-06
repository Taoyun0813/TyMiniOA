<template>
    <div id="app">
		<router-view></router-view>
        <msg :msg="getMessage" :active="showMessage" v-if="showMessage" />
        <editor v-if="noticeClose" />
    </div>
</template>

<script>
    import msg from "@/components/message"
    import editor from "@/components/editor"
    import {mapGetters,mapActions} from "vuex"

    export default {
        name:'App',
        computed: {
            ...mapGetters(["getMessage","showMessage","noticeClose"])
        },
        components: {
            msg,
            editor
        }
    }
</script>

<style lang="less">
    @import './style/variables';
	@import './style/element-ui';
	@import './style/common';
	@import './style/scrollBar';
</style>
