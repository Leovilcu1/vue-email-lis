
const { createApp } = Vue;

    createApp({
        data() {
         return {
             mailGenerator:[],
        }
    },
    methods:{
     
    },
    mounted(){
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((key)=>{
                this.mailGenerator.push(key.data.response)
            } 
        )
        }
    }
  }).mount('#app')
