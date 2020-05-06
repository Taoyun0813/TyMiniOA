import Vue from 'vue'
import Vuex from 'vuex'
if(process.env.NODE_ENV === "development"){
    Vue.use(Vuex) 
} 

import user from './modules/user'
import permission from './modules/permission'
import money from './modules/money'
import menu from './modules/menu'
import boxNum from "./modules/boxNum"
import msg from "./modules/utils"

export default new Vuex.Store({
    modules: {
        user,
        permission,
        money,
        menu,
        boxNum,
        msg
    }
});

