window.addEventListener("load",function(){
    //input Search
    const formSearch = document.querySelector(".search-form")
    const inputSearch = document.querySelector(".search-form input")
    console.log(formSearch)
    formSearch.addEventListener("submit", handleSearch)
    function handleSearch(e){
        if(inputSearch.value===""){
            e.preventDefault();
            alert("Ban chua nhap gi het!")
        }
    }

    //Đăng ký đăng nhập liên hệ 
    const formregistration = document.querySelector(".form-registration")
    const inputPass = document.querySelector("#pass")  ;
    const inputPwd = document.querySelector("#pass2")  ;
    const inputName = document.querySelector("#nameuser");
    const inputConmntent = document.querySelector("#content");

    let isSubmit =true;
    let isPass = true;
    let Pwd="";
    let isRpPwd= true;
    let isInputName = true;
    let isInputContent = true;
    

    inputPass?.addEventListener("change", function(e){
        
        Pwd=e.target.value;
        if(e.target.value.length<8){
            isPass=false;
            alert("Mat khau phai lon hon 8 ky tu")
        }
    })

    inputPwd?.addEventListener("change", function(e){
        if(e.target.value === Pwd ){
            isRpPwd=true;
            // alert("Mat khau nhap lai da dung")
        }
        else {
            isRpPwd=false;
            alert("mat khau nhap lai chua dung")
        }
    })
    
    inputName?.addEventListener("change", function(e){
        if(e.target.value.length<4){
            alert("Ho ten hon 4 ky tu");
            isInputName = false
        }
        else{
            isInputName=true;
        }
    }
    )

    inputConmntent?.addEventListener("change", function(e){
        if(e.target.value.length<10){
            alert("Noi dung phai hon 10 ky tu");
            isInputContent = false
        }
        else{
            isInputContent=true;
        }
    })

    formregistration.addEventListener("submit",function(e){
        e.preventDefault();
        if(isPass && isRpPwd || (isInputName && isInputContent)){
            this.submit();
            alert("Gui du lieu thanh cong")
            this.reset();
        }
        else{

        }
    })
// SAN PHAM 
    

    
})