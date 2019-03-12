<template>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1" to="/">
            <Icon type="md-home" />
            首页
        </MenuItem>
        <MenuItem name="2" to="/user">
            <Icon type="ios-contact" />
            个人简介
        </MenuItem>
        <MenuItem name="3" to="/profile">
            <Icon type="ios-bug" />
            擅长技能
        </MenuItem>
        <MenuItem name="4" to="https://github.com/itzj86/blog" target="_blank" style="float:right;">
            <Icon type="logo-github" size="20" title="Power by github and vue and iview and swiper"/>
        </MenuItem>
    </Menu>
</template>
<script>
    export default {
        name:"MHeader",
        data () {
            return {
                theme1: 'dark'
            }
        }
    }
</script>
