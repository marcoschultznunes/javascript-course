let page = 1
let perPage = 4

const user_list = document.getElementById('user_list')

const prev_page_button = document.getElementById('prev_page')
const next_page_button = document.getElementById('next_page')
const page_input = document.getElementById('page_input')

// Page Control
const updatePage = () => {
    page_input.value = page
}

prev_page_button.addEventListener('click', () => {
    if(page <= 1) return null

    page--
    updatePage()
    loadUsers()
})
next_page_button.addEventListener('click', () => {
    page++
    updatePage()
    loadUsers()
})
page_input.addEventListener('change', () => {
    page = Number(page_input.value)
    loadUsers()
})

// GET Request
const loadUsers = () => {
    fetch(`https://reqres.in/api/users?page=${page}&per_page=${perPage}`)
        .then(res => res.json())
        .then(res => {
            console.log(res.data)
            loadList(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}

loadUsers()

// Load list
const loadList = (list) => {
    user_list.innerHTML = ''

    list.forEach(user => {
        user_list.insertAdjacentHTML('beforeend', 
        `<li class="user-card">
            <h3 class="user-id">ID ${user.id}</h3>
            <img src="${user.avatar}" alt="" width="250px" height="250px"/>
            <h3 class="user-detail-label">Name: </h3>
            <h3 class="user-detail">${user.first_name} ${user.last_name}</h3>
            <h3 class="user-detail-label">Email: </h3>
            <h3 class="user-detail">${user.email}</h3>
        </li>`
        )
    });
}
