const addMoodBtn = document.getElementById('open-form-btn');
const formContainer = document.getElementById('form-container');
const form = document.getElementById('mood-form');
const saveBtn = document.getElementById('save-btn');
const cancelBtn = document.getElementById('cancel-btn');

const moodInput = document.getElementById('mood-input');
const dateInput = document.getElementById('date-input');
const noteInput = document.getElementById('note-input');

let moodData = JSON.parse(localStorage.getItem('moods')) || [];

function addMoodEntry()
{
  const moodEntry={
   id: Date.now(),
   mood: moodInput.value,
   date: dateInput.value,
   note: noteInput.value
  };
   moodData.push(moodEntry);
   localStorage.setItem('moods', JSON.stringify(moodData));
   renderMoods();
}

function renderMoods() {

  const moodContainer = document.getElementById("mood-container");

  moodContainer.innerHTML = "";

  moodData.forEach((mood) => {

    moodContainer.innerHTML += `
      <div class="mood-state">
        <p>Mood: ${mood.mood}</p>
        <p>Date: ${mood.date}</p>
        <p>Note: ${mood.note}</p>
      </div>
    `;

  });
}

function toggleForm() {
  formContainer.classList.toggle('hidden');
}

addMoodBtn.addEventListener('click', toggleForm);

saveBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addMoodEntry();
  toggleForm();
});

cancelBtn.addEventListener('click',(e)=>{
  form.reset();
  toggleForm();
})

renderMoods();