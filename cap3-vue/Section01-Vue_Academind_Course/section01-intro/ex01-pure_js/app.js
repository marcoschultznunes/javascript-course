const goalName= document.querySelector('#goal_name')
const addGoalButton = document.querySelector('#add_goal_button')
const goalList = document.querySelector('#goal_list')

addGoalButton.addEventListener('click', () => {
    goalList.innerHTML += '<li>' + goalName.value + '</li>'
})