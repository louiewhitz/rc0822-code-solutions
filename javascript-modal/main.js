var modalBtn = document.querySelector('.modal-btn');
var noBtn = document.querySelector('.confirm-btn');
var overlay = document.querySelector('.overlay');
var survey = document.querySelector('.survey-section');

modalBtn.addEventListener('click', handleModal);

function handleModal(event) {
  if (event.target.className === 'modal-btn') {

    overlay.className = 'overlay show';

    survey.className = 'survey-section show';
  }
}

noBtn.addEventListener('click', handleSurvey);

function handleSurvey(event) {
  if (event.target === noBtn) {
    overlay.className = 'overlay hide';
    survey.className = 'survey-section hide';
  }
}
