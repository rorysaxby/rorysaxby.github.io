(() =>{
    
    let vibInt;
    const vibrate = () =>{
        navigator.vibrate(500);
    }

    const initVibrate = () =>{
        vibInt = setInterval(vibrate, 2000);
    }

    const stopVibrate = () =>{
        setTimeout(()=>{
            clearInterval(vibInt)
        }, 6000)
    }

    setTimeout(()=>{
        initVibrate();
        stopVibrate();
    }, 3000)
})();