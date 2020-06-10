<template>
    <div id="app">

        <c-input v-model="title"/>
        <c-button @click="toggle = !toggle">toggle components</c-button>

        <CFlex v-if="toggle">
            <CBox pt="4" ma="5">
                <CBox>Hello, every body</CBox>

                <CStack>
                    <CBox v-for="(n) in 100" :key="'cbox' + n">{{n}}
                        <c-input v-model="title" v-if="n===0"/>
                    </CBox>
                </CStack>
                <CFlex></CFlex>
            </CBox>
        </CFlex>
    </div>
</template>

<script>
    import {CBox, CButton, CFlex, CInput} from '@chakra-ui/vue'

    export default {
        name: 'App',
        data() {
            return {
                toggle: false,
                title: "",
                title2: ""
            }
        },
        components: {
            CBox, CButton, CFlex, CInput
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
