const btn = document.querySelector('.btn');
const cartInfo = document.querySelector('.cartInfo');
const itemInfo = document.querySelector('.itemInfo');

btn.addEventListener('click', function(){
    ajax.then(function(data){
        showData(data);
    }).catch(function(error){
        console.log(error);
    });
})



const ajax = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const url = 'https://randomuser.me/api/';
    xhr.open('GET',url, true);
    xhr.onload = function(){
        if(xhr.status === 200){
            resolve(xhr.responseText);
        } else {
            reject(Error(xhr.statusText))
        }
    };
    xhr.onerror = function () {
        reject(Error('There is an error'));
    }
    xhr.send();
})


function showData(data){
    const response = JSON.parse(data);
    console.log(response.results[0]);

    const {
        dob:{age},
        name:{first}
    } = response.results[0];
document.getElementById('name').textContent = first;
document.getElementById('age').textContent = age;
}
