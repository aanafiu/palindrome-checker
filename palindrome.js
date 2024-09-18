document.getElementById("inputText").addEventListener('keypress', function (event){
    if(event.key == 'Enter')
        {
            checkPalindrome();
            console.log(event.key);
        }
});

function checkPalindrome()
{
    const inputText = document.getElementById('inputText');
    const inputTextValue = inputText.value;
    const copyText = inputTextValue.split('').reverse().join('');
    console.log(inputTextValue);
    // console.log(copyText);
    if(inputTextValue == ""){
        alert("Input A String");
    }
    else if(inputTextValue === copyText){

        // const palindromeMain = document.getElementById('palindromeMain');
        // const p = document.createElement('p');
        // p.innerText = inputTextValue ;
        // palindromeMain.appendChild(p);

        const alertText = document.getElementById('alertText');
        alertText.innerHTML =  inputTextValue + ":<br>This Is A Palindrome.";
        alertText.style.color = "#34A044";
        alertText.style.fontWeight = 700;
        alertText.style.lineHeight = 1.2;
        alertText.style.backgroundColor = "#CAD2C5";
        alertText.classList.remove("hidden");

        inputText.value = '';

    }
    else
    {
        const alertText = document.getElementById('alertText');
        alertText.innerHTML=  inputTextValue + ":<br>This Is Not A Palindrome.";
        alertText.style.color = "#ff4545";
        alertText.style.fontWeight = 700;
        alertText.style.lineHeight = 1.2;
        alertText.style.backgroundColor = "#CAD2C5";
        alertText.classList.remove("hidden");

        inputText.value = '';
    }
}