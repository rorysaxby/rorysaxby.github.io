(() =>{
    
    const vibrate = () =>{
        navigator.vibrate(2000);
    }

    const initVibrate = () =>{
        const vibInt = setInterval(vibrate, 3000);
    }

    const stopVibrate = () =>{
        setTimeout(()=>{
            clearInterval(vibInt)
        }, 3000)
    }

    setTimeout(()=>{
        initVibrate();
    }, 3000)
})();