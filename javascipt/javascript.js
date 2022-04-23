let menubtn = document.querySelector("#menu-btn");
let mynav = document.querySelector(".navbar");
menubtn.onclick = () =>{
  menubtn.classList.toggle("fa-times");
  mynav.classList.toggle('active');
}