document.querySelector('#searchButton').addEventListener('click', addItem)
document.querySelector('#strInputButton').addEventListener('click', calcMaxWeight)
document.querySelector('#resetListButton').addEventListener('click', resetList)
document.querySelector('#resetAllButton').addEventListener('click', resetAll)


let strScoreLog = document.getElementById('strScoreLog')
let totalWO = document.getElementById('totalWO')
let maxWD = document.getElementById('maxWD')

let strScore = 0
let weightTotal = 0
let maxWeight = 0

/* Setting Default, Calculate STR and Max Weight */

function setDefault(){
  totalWO.innerText = (weightTotal)
  maxWD.innerText = (maxWeight)
  strScoreLog.innerText = (strScore)
}

setDefault()


function calcMaxWeight(){
  const strScore = document.querySelector('#strInput').value
  maxWeight = strScore * 15
  strScoreLog.innerText = (strScore)
  maxWD.innerText = (maxWeight)
}


/* Add Items through API */

function addItem(){
  const newObj = getFetch()
  console.log(newObj)
}

function getFetch(){
  const newItem = document.querySelector('#searchInput').value
  const url = 'https://www.dnd5eapi.co/api/equipment/'+newItem
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        addToList(data.index,data.weight,data.desc)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}

function addToList(name,weight,desc){
  var ul = document.getElementById('equipmentList');
  var li = document.createElement('li')
  li.appendChild(document.createTextNode(`Item: ${name}; Weight per Item: ${weight} lbs; Total Weight: (feature in progress); Total Items: (feature in progress); Description: ${desc}`))
  li.setAttribute('id',`exampleID`)
  ul.appendChild(li)
}

/* Reset List */

function resetList(){
  console.log('code to clear UL needed')
}


/* Reset Button reqs Clear List Func (link CL Func to resetListButton, too)*/

function resetAll(){
  strScore = 0
  weightTotal = 0
  maxWeight = 0
  resetList()
  setDefault()
}



/*
Things to add:

Character Max Cap!
maxWeight = Strength*?
if (totalWeight > maxWeight){
  console.log('you are encumbered')
  >print on page near weight that a user is encumbered + the enc. effects
}

INPUT SECTION!!!! Convert ' '/white space into '-'
  >ex.: "block and tackle" > "block-and-tackle"

If invalid input > do not add item, give alert ("this item could not be located. Please manually enter all relevant details in the Manual Entry section.")
  >manual entry section that runs the addToList() function

Input for # of items (default to 1 if no number entered)

Add # to Item list / generate Total Weight (# * data.weight)

Dynamic ID generation / check for duplicates?

Remove button append to li
  >remove function, obvs

Button to add or remove # of items from list
  >w/ accompanying function

Total Weight in Inventory variable (iterate through each LI and add up TW)

Locally log data to browser

*/