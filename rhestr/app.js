const rhestrInputEl = document.querySelector('.rhestr-showcase-preview-demo-main-input input');
const rhestrListEl = document.querySelector('.rhestr-showcase-preview-demo-main-output');
const clearAllBtn = document.querySelector('.clear');
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

    // Generate list element
    const rhestrListItem = document.createElement('li');
    rhestrListItem.classList.add('rhestr-list-item');
    rhestrListEl.append(rhestrListItem);

    // Generate a div to house individual tasks and delete icons
    const rhestrListItemEntry = document.createElement('div');
    rhestrListItemEntry.classList.add('rhestr-list-item-entry');
    rhestrListItem.append(rhestrListItemEntry);

    // Generate p element for displaying user input
    const rhestrListItemEntryDisplayInput = document.createElement('p');
    rhestrListItemEntryDisplayInput.classList.add('rhestr-list-item-entry-display-input');
    rhestrListItemEntryDisplayInput.textContent = rhestrInputEl.value.trim();
    rhestrInputEl.value = '';
    rhestrListItemEntry.append(rhestrListItemEntryDisplayInput);

    // Generate span to house delete task icon
    const rhestrDelete = document.createElement('span');
    rhestrDelete.classList.add('rhestr-list-item-entry-delete');
    rhestrDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
    rhestrListItemEntry.append(rhestrDelete);

    // Generate time stamp
    const now = new Date();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const date = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    const rhestrTimestamp = document.createElement('em');
    rhestrTimestamp.classList.add('time-stamp');
    rhestrTimestamp.textContent = `${hours}:${minutes} - ${date} ${months[month]} ${year}`;
    rhestrListItem.append(rhestrTimestamp);

    // Toggle complete status indicator
    rhestrListItemEntryDisplayInput.addEventListener('click', () => {
      rhestrListItemEntryDisplayInput.classList.toggle('rhestr-complete');
    });

    // Delete individual list items
    rhestrDelete.addEventListener('click', () => {
      rhestrListItem.remove();
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