import { defineStore } from "pinia";

export default defineStore("indexStore",{
    //data
    state: () =>({
       location:0,
 
    }),
    //computed
    getters:{
        getLocation:(state) => `現在的位置是:...${state.location}`
    },

    //methods 唯一一個可以用this的區域
    actions:{   
        updateLocation(local){
            this.location = local;
        }
    }
}) 