(() =>{
    
    const vibrate = () =>{
        navigator.vibrate(1000);
    }

    const initVibrate = () =>{
        const vibInt = setInterval(vibrate, 2000);
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