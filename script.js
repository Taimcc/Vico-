document.getElementById('workout-form').addEventListener('submit', function(event) {  
    event.preventDefault();  

    const exercise = document.getElementById('exercise').value;  
    const duration = document.getElementById('duration').value;  

    const workoutList = document.getElementById('workout-list');  
    const listItem = document.createElement('li');  
    listItem.textContent = `${exercise} - ${duration} 分钟`;  
    workoutList.appendChild(listItem);  

    // 清空输入框  
    document.getElementById('exercise').value = '';  
    document.getElementById('duration').value = '';  
});