import{reactive, ref} from 'vue'

const store = reactive({
    findCustomerIndex : 0,
     coustomerView(index){
        
        this.findCustomerIndex = index

       
    }
    

})

export{store}