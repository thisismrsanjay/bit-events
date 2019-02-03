export const addFlashMessage =(message)=>{
    return {
        type:"ADD_FLASH_MESSAGE",
        payload:{
            message
        }
    }
}