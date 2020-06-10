import Vue from 'vue'
import App from './App.vue'
import Chakra, {CReset, CThemeProvider} from '@chakra-ui/vue'

Vue.config.productionTip = false
Vue.use(Chakra)

// Vue.component(CBox.name, CBox)
// Vue.component(CFlex.name, CFlex)
// Vue.component(CInput.name, CInput)
// Vue.component(CButton.name, CButton)
// Vue.component(CCloseButton.name, CCloseButton)
// Vue.component(CStack.name, CStack)
// Vue.component(CStat.name, CStat)


new Vue({
    render: (h) => h(CThemeProvider, [h(CReset), h(App)])
}).$mount('#app')
