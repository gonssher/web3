var resetdata = document.getElementById('reset_button')
var formcalc = document.getElementById('calculatordetails')
var alerts = document.getElementById('detailedAlerts')
var calculatorbutton = document.getElementById('calculate_button')


let mortgage_Amount = document.getElementById("Mortgage_Amount");
let interest_Rate = document.getElementById("Interest_Rate");
let loan_Length = document.getElementById("Loan_Length");
let postal_Code = document.getElementById("Postal_Code");



//reset details
function resetalldetails()
{
    //declaring global variables 

    console.log( mortgage_Amount.value)
    console.log(interest_Rate.value)
    console.log(loan_Length.value)
    console.log( postal_Code.value)

    mortgage_Amount.value = "";
    interest_Rate.value = "";
    loan_Length.value = "";
    postal_Code.value = "";
    alerts.innerHTML = "";

    console.log("hi am here in reset ")
    postal_Code.classList.remove("is-valid");
    postal_Code.classList.remove("is-invalid");
    interest_Rate.classList.remove("is-valid");
    interest_Rate.classList.remove("is-invalid");
    loan_Length.classList.remove("is-valid");
    loan_Length.classList.remove("is-invalid");
    mortgage_Amount.classList.remove("is-valid");
    mortgage_Amount.classList.remove("is-invalid");


    event.preventDefault();
}

function errorHandling()
{//variable global to function for checking purposes 

    let mortgagevaluecheck = "";
    let interestratevaluecheck = "";
    let loanlengthvaluecheck = "";
    let postalcodevaluecheck = "" ;
     let sendingerrormsg = "";
     let firstpush = "";
     let secondpush = "";
     let thirdpush = "";
     let fourth = "";
    //mortgage amount 

    if (mortgage_Amount.value <= 0 || mortgage_Amount.value == "" || isNaN(mortgage_Amount.value)) {

        mortgagevaluecheck = false;
        firstpush = "Mortgage Amount must be a positive number"
        mortgage_Amount.classList.remove("is-valid");
        mortgage_Amount.classList.add("is-invalid");
        sendingerrormsg +="<ul> <li>" +  firstpush + "</li>"

      }
      else{

        console.log('Yes it is a number ')
        mortgagevaluecheck = true;
        mortgage_Amount.classList.add("is-valid");
        mortgage_Amount.classList.remove("is-invalid");
      }
     if(interest_Rate.value <= 0 || interest_Rate .value == "" || isNaN(interest_Rate.value)) {
        interestratevaluecheck = false;
        secondpush = " Interest Rate must be a positive number"
        interest_Rate.classList.remove("is-valid");
        interest_Rate.classList.add("is-invalid");
        sendingerrormsg +="<li>" + secondpush + "</li>"
      }
      else{
        console.log('Yes it is number')
        interestratevaluecheck = true;
        interest_Rate.classList.add("is-valid");
        interest_Rate.classList.remove("is-invalid");
      }
     if(loan_Length.value == "" || isNaN(loan_Length.value) || loan_Length.value <= 0 ||  loan_Length.value <= 5 || loan_Length.value > 30 )
      {
        loanlengthvaluecheck = false;
        loan_Length.classList.remove("is-valid");
        loan_Length.classList.add("is-invalid");
        

        thirdpush = "Loan Length must be between 5-30 years"
        sendingerrormsg +="<li>" + thirdpush + "</li>"
      } else{

        console.log('Yes it is number')
        loanlengthvaluecheck = true;
 
        loan_Length.classList.add("is-valid");
        loan_Length.classList.remove("is-invalid");
      }
      let localpostcode = postal_Code.value;
      let lenthbe = localpostcode.length;
      if(!postal_Code.value.startsWith("L") || lenthbe >7)
      {

        postalcodevaluecheck = false;
        postal_Code.classList.remove("is-valid");
        postal_Code.classList.add("is-invalid");
    
        fourth = "Must be located in Hamilton"
        sendingerrormsg +="<li>" + fourth + "</li>"
      } else{

        console.log('Yes it is number')
        postal_Code.classList.add("is-valid");
        postal_Code.classList.remove("is-invalid");

         postalcodevaluecheck = true;
      }

      if (sendingerrormsg == "")
      {

        return false;
      }
      else
      {
        console.log(sendingerrormsg)
        type = 'danger'
        firstconcat = '<div class="alert alert-'
        typeconcat = 'danger'
        thirdconcat = ' alert-dismissible" role="alert">'
        fourthconcat = sendingerrormsg;
        fithconcat = '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
        alerts.innerHTML = firstconcat + typeconcat + thirdconcat + fourthconcat + fithconcat
        return true;
    }


}



function calculateAll()
{
    let captch = errorHandling();
    if (captch == true)
    {
    console.log("errors found")
    }
    else
    {
    alerts.innerHTML = ""
    caclulateMortgae()
    }
    event.preventDefault();

}

function caclulateMortgae()
{

    console.log( mortgage_Amount.value)
    console.log(interest_Rate.value)
    console.log(loan_Length.value)
    console.log( postal_Code.value)

    let mortgage  = mortgage_Amount.value * (interest_Rate.value/12) * (Math.pow(1+(interest_Rate.value/12),loan_Length.value))/(Math.pow(1+(interest_Rate.value/12),loan_Length.value)-1)
    console.log(mortgage)
    console.log("HI TRYING TO DISPLAY MORTAGE VALUE" )
    console.log("hi am here " + mortgage)

        sendingsuccessmsg = ("Your monthly payment is $"+ mortgage )
        firstconcat = '<div class="alert alert-'
        typeconcat = 'success'
        thirdconcat = ' alert-dismissible" role="alert">'
        fourthconcat = sendingsuccessmsg;
        fithconcat = '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
        alerts.innerHTML = firstconcat + typeconcat + thirdconcat + fourthconcat + fithconcat


}


calculatorbutton.addEventListener("submit",calculateAll);
resetdata.addEventListener("click", resetalldetails);