// create account form hide 
const createAccountHide=()=>{
    let createAccountForm=document.querySelector('.login-width');
    createAccountForm.style.display='none';
}
setTimeout(()=>{
    createAccountHide();
},5*5000)
// all input field empty with help of this function 
const emptyAllInputField=()=>{
    ragisterName.value=``;
    ragisterEmail.value=``;
    ragisterPassword.value=``;
}
// any input field blanck then fire this  function 
const pleaseFill=()=>{
    ragisterName.value=`Name  requerd `;
    ragisterEmail.value=`Email requerd `;
    ragisterPassword.value=`Password requerd `;
    ragisterEmail.style.background='red';
    ragisterName.style.background='red';
    ragisterPassword.style.background='red';
    setTimeout(()=>{
        emptyAllInputField();
        ragisterEmail.style.background='';
    ragisterName.style.background='';
    ragisterPassword.style.background=''; 
    },3000)
}
////store data function
const storeData=()=>{
    let isAgree=confirm("are you want sign up");
    if(isAgree){
    let data=localStorage.getItem("blogger");
    // if storage empty 
   if(data==null){
let arr=[];
arr.push([
    `${ragisterName.value}`,
    `${ragisterEmail.value}`,
     `${ragisterPassword.value}`
 ]);
 localStorage.setItem("blogger",JSON.stringify(arr));
 createAccountHide();
   }
//    storage not empty 
   else{
    let json=JSON.parse(localStorage.getItem('blogger'));  json.push([ragisterName.value,ragisterEmail.value,ragisterPassword.value]);
  localStorage.setItem("blogger",JSON.stringify(json));
  createAccountHide();
   }
}
}
// create account  <button> trigger here </button>
createAccountButton.addEventListener('click',(e)=>{
    e.preventDefault();(ragisterName.value!==''||ragisterEmail.value!==''||ragisterPassword.value!=='')?storeData():pleaseFill();
})
// login form details checking 
let loginHere=document.querySelector('.login-here');
let cancel=document.querySelector('.Cancel');
    setTimeout(()=>{
    loginHere.style.display='block';
    },3*2000);
    setTimeout(()=>{
        loginHere.style.display='none';
        },665000);
        cancel.addEventListener('click',()=>{
        loginHere.style.display='none';
        });
        // check storage that storage null or not and check that user acount present or no 
        const isAccountPresent=()=>{
            let isAccount=confirm('You have no account if you want sign up then click OK ');
            if(isAccount){
                window.open(`#create-account`)
            }
        }
        // empty all login input field 
        //check all login detail logic
const checkAllLoginInfo=()=>{
let loginData=JSON.parse(localStorage.getItem('blogger'));
if(loginData===''||loginData===null){
    isAccountPresent();
}
// if user account allready in storage then controle here 
else{
    let isLogin;
loginData.forEach(i =>{   
(i[1]===`${loginEmail.value}`&&i[2]===loginPassword.value)?isLogin=true:isLogin=false;
});
if(isLogin){
    alert("login succesfully "+loginEmail.value);
    loginHere.style.display='none';
}
else{
    alert("email or password wrong");
}
}
}
loginButton.addEventListener('click',checkAllLoginInfo);