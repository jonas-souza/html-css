document.addEventListener("visibilitychange", (event) => {
    if(document.visibilityState =="visible"){
        document.title="Navegação";
    } else{
        document.title="Ei, volta aqui!"
    }
}
)
