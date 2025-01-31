const requestURL = 'https://api.github.com/users/hiteshchoudhary';
const xhr = new XMLHttpRequest();

xhr.open('GET', requestURL);

document.querySelector('.button').addEventListener('click',()=>{

    xhr.onreadystatechange = function(){
        // console.log(xhr.readyState);
        if(xhr.readyState === 4){
            // console.log(this.responseText);
            const data = JSON.parse(this.responseText);
            // console.log(data.followers);
            document.querySelector('.photo').src = data.avatar_url;
            document.querySelector('.followercount').innerHTML = data.followers;
        }
    }
    xhr.send();

})

