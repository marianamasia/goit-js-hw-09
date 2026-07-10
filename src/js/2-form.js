const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

// Заповнення форми при перезавантаженні сторінки
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// Відстеження введення даних
form.addEventListener('input', event => {
  const { name, value } = event.target;

  // formData[name] = value.trim();
  formData[name] = value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Відправка форми
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      email: formData.email.trim(),
      message: formData.message.trim(),
    })
  );

  //   localStorage.removeItem(STORAGE_KEY);

  //   form.reset();

  //   formData.email = '';
  //   formData.message = '';
});
