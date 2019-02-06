export const addFlashMessage =(message)=>{
    return {
        type:"ADD_FLASH_MESSAGE",
        payload:{
            message
        }
    }
}
export const deleteFlashMessage =(messageId)=>{
    return {
        type:"DELETE_FLASH_MESSAGE",
        payload:{
            messageId
        }
    }
}