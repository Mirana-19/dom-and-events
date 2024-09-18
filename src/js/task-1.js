const list = document.querySelector('#categories');

function countCategories(list) {
  console.log(`Number of categories: ${list.children.length}`);

  for (const item of list.children) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  }
}

countCategories(list);
