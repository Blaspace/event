
let nav = document.querySelector('.nav1');
let newClass = document.querySelectorAll('.class')
let navButton = document.querySelector('.nav-button');
let closeBtn =document.querySelector('.close-btn');
let head = document.querySelector('.close')
let nav1 = document.querySelectorAll('.nav1 li');

console.log(nav);

    navButton.addEventListener('click',function(){
        if( nav.style.display === 'none'){
   nav.style.display = 'inline-block';
   navButton.innerHTML = '&times;'
        }else{
            nav.style.display = 'none';
            navButton.innerHTML = '&#x2630'
        }
    })

    nav1.forEach((value, index, Array)=>{
        value.addEventListener('click', ()=>{
            if( nav.style.display === 'none'){
                nav.style.display = 'inline-block';
                navButton.innerHTML = '&times;'
                     }else{
                         nav.style.display = 'none';
                         navButton.innerHTML = '&#x2630'
                     }
        })
    })




 document.querySelectorAll('.pics img').forEach(Image =>{
    Image.onclick = () =>{
        document.querySelector('.below').style.display= 'block';
        document.querySelector('.below img').src = Image.getAttribute('src');
    }
})
let close = document.querySelector('.span');

close.addEventListener('click', function(e){
    
    document.querySelector('.below').style.display= 'none';
})

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ngbedejames145@gmail.com",
        Password : "blaspace",
        To : 'ngbedejames145@gmail.com',
        From : document.querySelector('#email').value,
        Subject : "new message from your web",
        Body : 'name:' + document.querySelector('#name').value +'<br>' 
        + 'Phone no:' + document.querySelector('#phone').value +'<br>' 
        + 'message:' + document.querySelector('#message').value +'<br>' 
    }).then(message => alert('mesage sent succesfully'));
}