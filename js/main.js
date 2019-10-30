window.addEventListener('load', ()=>{
    var form = document.querySelector('#login');
    form.addEventListener('submit', ()=>{
        var user = document.querySelector('#username').value;
        var pass = document.querySelector('#password').value;


        //Validaciones
            if(user.trim().length == 0 || user.trim() == null){
                document.querySelector('#username').style.borderBottom = "1px solid red";
                document.querySelector('#username').classList.add("error");
            }
            else{
                document.querySelector('#username').style.borderBottom = "1px solid rgb(67, 221, 221)";
                document.querySelector('#username').classList.remove("error");
            }
            if(pass.trim().length == 0 || pass.trim() == null){
                document.querySelector('#password').style.borderBottom = "1px solid red";
                document.querySelector('#password').classList.add("error");
            }
            else{
                document.querySelector('#password').style.borderBottom = "1px solid rgb(67, 221, 221)";
                document.querySelector('#password').classList.remove("error"); 
            }

    })

})