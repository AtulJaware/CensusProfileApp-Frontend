export const DOMAIN = "http://localhost:9001/";


export const ApiConstant =  {
    applicationApi:DOMAIN+"application",
    putApi:(id)=>DOMAIN+`application/update/${id}`,
    getApi: DOMAIN+"application",
};