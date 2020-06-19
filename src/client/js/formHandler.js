async function handleSubmit(event) {

    event.preventDefault()

    const btn = document.getElementById('submit');
    const url = document.getElementById('url').value
    // disable submit button till end of request;
    client.disableBtn(btn);

    // validation of url
    const isValid = client.checkForUrl(url)
    
    if(isValid){
        console.log("::: Form Submitted :::")

        const data = await client.nplRequest(url);
        
        if(data.type == 'response'){
            client.displayResult(data);
        }else{
            client.sendMessage(data.message)
        }

    }else{
        console.log("::: Invalid URL :::")
        client.sendMessage('Invalid URL')
    }

    client.enableBtn(btn);
}


export { handleSubmit }
