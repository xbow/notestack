import dummyTags from './dummyTags'
import dummyNotes from './dummyNotes'

function loadNotes() {
  return loadFromLocalStorage('Notestack', dummyNotes)
}

function loadTags() {
  return loadFromLocalStorage('Notestack-Tags', dummyTags)
}

function loadFromLocalStorage(itemName, fallBack) {
  try {
    return JSON.parse(localStorage.getItem(itemName)) || fallBack
  } catch (err) {
    return fallBack
  }
}

export default {
  notes: loadNotes(),
  tags: loadTags(),
}