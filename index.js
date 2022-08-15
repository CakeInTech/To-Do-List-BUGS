import * as cleartsk from './task';

const listContainer = document.querySelector('.lists');
Sortable.create(listContainer);
document.querySelector('.lists').addEventListener('click', () => {});

cleartsk();