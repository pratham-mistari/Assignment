function action(){
    if(document.querySelector("#sel1").checked)
    {
        document.write("You Are Not Eligible To Drive Car");
    }
    
    else if(document.querySelector("#sel2").checked)
    {
        document.write("You Are Not Eligible To Drive Vehicle");
    }

    else
    {
        document.write("Please Check Eligibility Box ");
    }
}