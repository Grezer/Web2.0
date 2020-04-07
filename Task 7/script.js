let tempListItems = document.getElementById('tempList').children
document.getElementById('tempList').remove()

let categoryList = document.getElementById('categoryList')
let curDate = ''
let programs = null
for (var i = tempListItems.length - 1; i >= 0; i--) {
  let date = tempListItems[i].getElementsByClassName('hidden-date')[0].innerText
  if (curDate != date) {
    if (programs != null) addCategory(categoryList, programs, curDate)
    programs = new Array()
    curDate = date
  }
  programs.push(tempListItems[i])
}
addCategory(categoryList, programs, curDate)

function addCategory(categoryList, programs, curDate) {
  let newCategory = document.createElement('li')
  categoryList.appendChild(newCategory)

  let newCategoryLabel = document.createElement('label')
  newCategoryLabel.innerHTML = curDate
  newCategory.appendChild(newCategoryLabel)
  newCategoryLabel.htmlFor = curDate

  let newCategoryCheck = document.createElement('input')
  newCategoryCheck.type = 'checkbox'
  newCategory.appendChild(newCategoryCheck)
  newCategoryCheck.id = curDate

  let newCategoryUl = document.createElement('ul')
  newCategory.appendChild(newCategoryUl)
  for (var i = programs.length - 1; i >= 0; i--) {
    newCategoryUl.appendChild(programs[i])
  }
}
