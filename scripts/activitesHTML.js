"use strict";
//inputs
//Dropdown options
const activitylCategory = document.getElementById("activitylCategory");
const activityNames = document.getElementById("activityNames");
//Inputs
const numOfTickets = document.getElementById("numOfTickets");
const cardNumber = document.getElementById("cardNumber");
const emailAddress = document.getElementById("emailAddress");
//Buttons
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
//ouputs
const customerId = document.getElementById("customerId");
const nameOfCustomer = document.getElementById("nameOfActivity");
const activityDescription = document.getElementById("activityDescription");
const activityLocation = document.getElementById("activityLocation");
const priceOfActivity = document.getElementById("priceOfActivity");
const userReceipt = document.getElementById("userReceipt");

window.onload = function(){
    submitBtn.onclick = onClickedSubmitBtn;
    resetBtn.onclick = onClickedResetBtn;
    activityNames.onchange = onChangeActivityName;

    activitylCategory.onchange = onChangeAcitvityCategory;

    initializeCategories();
    // initializeActivityNames();
}

function initializeCategories(){
    //loop through categories and add options to the select.
    for(let i = 0; i < categories.length; i++ ){
        let newActivittyOptions = document.createElement("option");
        newActivittyOptions.value = categories[i];
        newActivittyOptions.innerHTML = categories[i];
    
        activitylCategory.appendChild(newActivittyOptions);
    }

}
function caculatingPriceOfActivity(){
    let userSelectedChooseOfActivity = activityNames.value
    let numOfUserTickets = Number(numOfTickets.value);
    let activityPrice = 0;
    for(let i = 0; i < activities.length; i++){
        if(activities[i].name == userSelectedChooseOfActivity){
            if(numOfUserTickets >= 1){
                activityPrice = activities[i].price * numOfUserTickets;
                console.log(activityPrice);
            }
            else{
                alert("error");
            }
        }
    }
 return activityPrice;
}
function getUserPersonalInfo(){
    let userEmail = emailAddress.value;
    // let userCardNum = cardNumber.value;
    // console.log(userEmail);
    // console.log(userCardNum);
    return userEmail;
}


function onClickedSubmitBtn(){
    console.log("submit");
    userResults();
    getUserPersonalInfo();
    userPurchaseMessage();
}

function onClickedResetBtn(){
    console.log("reset");
}

function onChangeAcitvityCategory(){
    activityNames.length = '';
    let userSelectedCategory = activitylCategory.value;
    // console.log(userSelectedCategory);
    for(let i = 0; i < activities.length; i++){
        if(activities[i].category == userSelectedCategory){
            console.log(userSelectedCategory);
            let newActivityOfChoose = document.createElement("option");
            newActivityOfChoose.value = activities[i].name;
            newActivityOfChoose.innerHTML = activities[i].name;
        
            activityNames.appendChild(newActivityOfChoose);
        }
    }
}

function onChangeActivityName(){

}

function userResults(){
    let userSelectedChooseOfActivity = activityNames.value
    let numOfUserTickets = Number(numOfTickets.value);
    // console.log(userSelectedChooseOfActivity);
    for(let i = 0; i < activities.length; i++){
        if(activities[i].name == userSelectedChooseOfActivity){
            activityDescription.innerHTML = activities[i].description;
            activityLocation.innerHTML = activities[i].location;
            priceOfActivity.innerHTML = caculatingPriceOfActivity();
        }
    }
}

function userPurchaseMessage(){
    let numOfUserTickets = Number(numOfTickets.value);
    let activityName = activityNames.value;
    for(let i = 0; i < activities.length; i++){
        if(activities[i].name == activityName){
            activityName = activities[i].name; 
        }
    }
    userReceipt.innerHTML = "Your credit card has been charged $" + caculatingPriceOfActivity() + " for #" + numOfUserTickets + " number of tickets " + "for " + activityName + "A confirmation email has been sent to " + getUserPersonalInfo();

}

// function initializeActivityNames(){
//     // for(let i = 0; i < activities.length; i++){
//     //     let newActivityOfChoose = document.createElement("option");
//     //     newActivityOfChoose.value = activities[i].name;
//     //     newActivityOfChoose.innerHTML = activities[i].name;
    
//     //     activityNames.appendChild(newActivityOfChoose);
//     // }
// }