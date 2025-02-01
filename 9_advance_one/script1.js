const requestURL = 'https://api.github.com/users/hiteshchoudhary';
const xhr = new XMLHttpRequest;


document.querySelector(".button").addEventListener("click",()=>{
    xhr.open('GET', requestURL);

    xhr.onreadystatechange = function()  {
        if(xhr.readyState === 4){
            const data = JSON.parse(this.responseText);

            document.querySelector(".photo").src = data.avatar_url;
            document.querySelector(".followercount").innerHTML = data.followers;
        }
    }
    xhr.send();
}, false);