import{reactive, ref} from 'vue'

const store = reactive({
    findCustomerIndex : 0,
    isModalOpen : false,
     coustomerView(index){
        this.findCustomerIndex = index
    },



    login(){
        this.isModalOpen = true
    }
    

})

export{store}