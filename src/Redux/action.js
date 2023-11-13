DATA_PAGE_SUCCESS,
  DATA_PAGE_ERROR,
  SEARCH_DATA_SUCCESS,
  STAT_DATA_SUCCESS
  STAT_DATA_SUCCESS,
  MONTH_DATA_SUCCESS,
  MONTH_SOLD_ITEMS,
  MONTH_UNSOLD_ITEMS
} from "./actionTypes";
import axios from "axios";
const AllData = (page, limit) => (dispatch) => {
  dispatch({ type: DATA_PAGE_LOADING });
  return axios
    .get(`http://localhost:8080/items?page=${page}&limit=${limit}`)
    .then((res) => {
      console.log(res.data,"paginationnn")
      dispatch({ type: DATA_PAGE_SUCCESS, payload: res.data });
    })
    .catch((error) => {
@@ -29,11 +33,31 @@ const {value}=data;
    });
};

const Accoding_Month=(data)=>(dispatch)=>{
return axios.get(`http://localhost:8080/items?month=${data}`).then((res)=>{
  console.log(res.data,"monthhhh")
  dispatch({type:MONTH_DATA_SUCCESS,payload:res.data})
})
}

const STATE=(data)=>(dispatch)=>{
  console.log(data,"data")

return axios.get(`http://localhost:8080/Statistics?month=${data}`).then((res)=>{
  console.log(res.data,"hiii")

dispatch({type:STAT_DATA_SUCCESS,payload:res.data})
})
}
export { AllData, Searching_Data , STATE};

const Totalsold=(data)=>(dispatch)=>{
  return axios.get(`http://localhost:8080/Statistics?month=${data}&sold=${true}`).then((res)=>{
console.log(res.data)
dispatch({type:MONTH_SOLD_ITEMS,payload:res.data.length})
})
}
const Totalunsold=(data)=>(dispatch)=>{
  return axios.get(`http://localhost:8080/Statistics?month=${data}&unsold=${true}`).then((res)=>{
console.log(res.data)
dispatch({type:MONTH_UNSOLD_ITEMS,payload:res.data.length})
})
}
export { AllData, Searching_Data , STATE , Accoding_Month , Totalsold , Totalunsold};