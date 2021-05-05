  
export const initialState={
    land:[],
    currName:"",
    token:''
    
};


const reducer= (state,action)=>{

    switch(action.type){
        case "PUT_DATA":
            return {
                ...state,
                land:action.land

            };

        case "SET_NAME":
            return {
                ...state,
                currName:action.data
    
             };
             case "SET":
                return {
                    ...state,
                    currName:action.name
        
                 };
            case "SET_TOKEN":
                return {
                    ...state,
                    token:action.token
                }
    }
};

export default reducer;