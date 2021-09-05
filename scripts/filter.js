const list = document.querySelector('.list'),
      listItems = document.querySelectorAll('.list__item')
      items = document.querySelectorAll('.card')


function filter() {
    list.addEventListener('click', event => {
        const targetID = event.target.dataset.id
        const target = event.target

        if (target.classList.contains('list__item')) {
            listItems.forEach(listItem => listItem.classList.remove('activ'))
            target.classList.add('activ')
        }

        switch(targetID) {
            case 'all':
                getItems('card')
                break
            case 'pump':
                getItems(targetID)
                break
            case 'spotlight':
                getItems(targetID)
                break
        }
    })
}

filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}