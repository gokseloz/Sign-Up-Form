document.querySelector(".banner-btn").addEventListener("click", () => {
    document.querySelector(".banner").style.display = "none"
    document.querySelector(".container").style.cssText = "background:rgb(204, 104, 60);"
    document.querySelector(".form-container").style.cssText = "display:flex; animation: ContAnim 1s linear"
})

document.querySelector(".x-btn").addEventListener("click", () => {
    document.querySelector(".banner").style.cssText = "display:flex; animation: ContAnim 1s linear"
    document.querySelector(".container").style.cssText = "background:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url(images/bg11.jpg) no-repeat center;"
    document.querySelector(".form-container").style.display = "none"
})

document.querySelector(".form-input:nth-child(1)").addEventListener("blur", () =>{
    var regfname = /^[A-Za-z\s\'\-]$/
    var fname = document.querySelector(".form-input:nth-child(1)").value
    if(regfname.test(fname) || fname == ""){
        fname = fname;
        document.querySelector("#fnamePrompt").innerHTML = ""
    }
    else{
        document.querySelector("#fnamePrompt").innerHTML = "Please Use Only Letters"
    }
})
    
    
