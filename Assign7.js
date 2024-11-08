function perform(){
    let text = document.querySelector("#inp").value;
    let count = 0;
    let decount = 0;

    for(let x of text){
        if(x=='a'||x=='e'||x=='i'||x=='o'||x=='u')
        {
            count++;
        }
        decount++;
    }

    document.querySelector("#result").innerText = `Number Of Vowels In String : ${count} `;
}
