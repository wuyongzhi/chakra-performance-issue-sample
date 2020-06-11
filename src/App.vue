<template>
    <div id="app">

        chakra input
        <c-input v-model="title" placement="input some text"/>

        <p>
            <input type="text" v-model="title2" placeholder="html input"/>
        </p>

        <c-button mt="4" @click="toggle = !toggle">toggle performance issue</c-button>

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
    import {CBox, CButton, CFlex, CInput, CStack} from '@chakra-ui/vue'
    // import HelloWorld from "./components/HelloWorld"

    export default {
        name: 'App',
        data() {
            return {
                toggle: true,
                title: "",
                title2: ""
            }
        },
        components: {
            CBox, CButton, CFlex, CInput, CStack
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
