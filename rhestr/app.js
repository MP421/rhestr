const rhestrInputEl = document.querySelector('.rhestr-showcase-preview-demo-main-input input');
const rhestrListEl = document.querySelector('.rhestr-showcase-preview-demo-main-output');
const clearAllBtn = document.querySelector('.clear');
const rhestrListItemEntryEl = document.querySelectorAll('.rhestr-list-item');
const faqToggleBtns = document.querySelectorAll('.rhestr-q-and-a-item-toggle');
const faqAnswers = document.querySelectorAll('.rhestr-q-and-a-item-answer');

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

// Live demo functionality
rhestrInputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && rhestrInputEl.value !== '') {

    // Generate new container element for rhestr tasks
    const generateContainerEl = document.createElement('div');
    generateContainerEl.classList.add('rhestr-showcase-preview-demo-main-output-item');
    rhestrListEl.append(generateContainerEl);

    // Generate list item element for taking and displaying user input
    const generateRhestrListItem = document.createElement('li');
    generateRhestrListItem.classList.add('rhestr-list-item');
    generateRhestrListItem.textContent = rhestrInputEl.value.trim();
    rhestrInputEl.value = '';
    generateContainerEl.append(generateRhestrListItem);

    // Generate delete icon for each task element
    const deleteRhestrListItem = document.createElement('span');
    deleteRhestrListItem.classList.add('rhestr-list-delete');
    deleteRhestrListItem.innerHTML = '<i class="fa-solid fa-trash"></i>';
    generateContainerEl.append(deleteRhestrListItem);

    // Add timestamp to each task list item
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timestamp = `${hours}:${minutes}`;
    generateContainerEl.append(timestamp);

    // Add date to each task list item
    const date = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    const currentDate = `${date} ${months[month]} ${year}`;
    generateContainerEl.append(currentDate);

    // Toggle complete status indicator
    generateRhestrListItem.addEventListener('click', () => {
      generateRhestrListItem.classList.toggle('rhestr-complete');
    });

    // Delete individual task items
    deleteRhestrListItem.addEventListener('click', () => {
      generateContainerEl.remove();
    });
  };
});

clearAllBtn.addEventListener('click', () => {
  rhestrListEl.innerHTML = '';
});

// FAQ toggle functionality
faqToggleBtns.forEach(faqToggleBtn => {
  faqToggleBtn.addEventListener('click', () => {
    faqToggleBtn.classList.toggle('turnt');

    const parentItem = faqToggleBtn.closest('.rhestr-q-and-a-item');
    if (parentItem) {
      const faqAnswerEl = parentItem.querySelector('.rhestr-q-and-a-item-answer');
      if (faqAnswerEl) {
        faqAnswerEl.classList.toggle('active');
      };
    };

  });
});