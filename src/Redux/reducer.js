import {DATA_PAGE_LOADING,DATA_PAGE_SUCCESS,DATA_PAGE_ERROR , SEARCH_DATA_SUCCESS , STAT_DATA_SUCCESS} from "./actionTypes"
import {DATA_PAGE_LOADING,DATA_PAGE_SUCCESS,DATA_PAGE_ERROR , SEARCH_DATA_SUCCESS , STAT_DATA_SUCCESS , MONTH_DATA_SUCCESS ,MONTH_UNSOLD_ITEMS, MONTH_SOLD_ITEMS} from "./actionTypes"
const inital_state={
    loading:false,
    error:false,
    data:[],
    stats:[]
    stats:[],
    solditems:"",
    unsolditems:""
}
const reducer=(state=inital_state,action)=>{
const {type,payload}=action;
@@ -13,6 +15,9 @@ switch(type){
    case DATA_PAGE_ERROR:return {...state,loading:false,error:true}
    case SEARCH_DATA_SUCCESS:return {...state,loading:false,data:payload}
    case STAT_DATA_SUCCESS : return {...state,loading:false,stats:payload}
    case MONTH_DATA_SUCCESS:return {...state,loading:false,data:payload}
    case MONTH_SOLD_ITEMS:return {...state,loading:false,solditems:payload}
    case MONTH_UNSOLD_ITEMS:return {...state,loading:false,unsolditems:payload}
    default:return state
}
}
