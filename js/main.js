document.querySelector('#searchButton').addEventListener('click', addItem)


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
        const itemArray = [data.index,data.weight,data.desc]
        console.log(itemArray)
        addToList(data.index,data.weight,data.desc)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}

function addToList(name,weight,desc){
  var ul = document.getElementById('equipmentList');
  var li = document.createElement('li')
  li.appendChild(document.createTextNode(`Item: ${name}; Weight per Item: ${weight}; Description: ${desc}; Total Weight: (feature in progress); Total Items: (feature in progress)`))
  li.setAttribute('id',`exampleID`)
  ul.appendChild(li)
}

/*
Things to add:

Dynamic ID generation / duplicate check

Remove button append to li
  >remove function, obvs

*/