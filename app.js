var hamburger = document.getElementById('hamburger');
var navlist = document.querySelector('.navlist');
var navoverlay = document.querySelector('.nav-overlay');
var bar = document.querySelector('.bar');
var openModal = document.getElementById('openModal');
var closeModal = document.getElementById('closeModal');
var modal = document.getElementById('simplemodal');
var submitPledge = document.querySelectorAll('.submit-pledge');
var thanksCard = document.getElementById('thanks-card');
var thanksCardOverlay = document.getElementById('thanks-card-overlay');
var complete = document.getElementById('complete');







hamburger.addEventListener('click', openMenu);

function openMenu(){
    console.log(123);
    navoverlay.classList.toggle('active');
    navlist.classList.toggle('active');
    hamburger.classList.toggle('active');
}

//click event for  Open modal
openModal.addEventListener('click', () => {
    modal.style.display = 'block';
})

//click event for  Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    window.location.reload();
})

submitPledge.forEach(function(submitBtn){
    submitBtn.addEventListener('click', opencard);
    function opencard() {
        thanksCard.style.display = 'flex';
        thanksCardOverlay.style.display = 'block';
    }
});

complete.addEventListener('click', () => {
    modal.style.display = 'none';
    window.location.reload();
})