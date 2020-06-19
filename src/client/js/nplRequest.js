async function nplRequest(url){
    let result;
    try {
        const response = await fetch('/api',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ url })
        })
    
        const data = await response.json()
        
        console.log("::: Data Recieved :::")
            
        result = data;

    } catch (error) {
        console.log(error);
        if( error.message === 'Failed to fetch' ){
            result =  {type:'error', message:'Failed to establish a connection to the server'};
        }
    }
    console.log(result)
    return result;
}

export { nplRequest }