
let todayDate=moment().format("dddd, MMMM Do YYYY");
let firstTask=localStorage.getItem('task1')
$('#textArea').val(firstTask);
let firstTask1=localStorage.getItem('task2')
$('#textArea1').val(firstTask1);

let firstTask2=localStorage.getItem('task3')
$('#textArea2').val(firstTask2);

let firstTask3=localStorage.getItem('task4')
$('#textArea3').val(firstTask3);

let firstTask4=localStorage.getItem('task5')
$('#textArea4').val(firstTask4);

let firstTask5=localStorage.getItem('task6')
$('#textArea5').val(firstTask5);

let firstTask6=localStorage.getItem('task7')
$('#textArea6').val(firstTask6);

let firstTask7=localStorage.getItem('task8')
$('#textArea7').val(firstTask7);

let firstTask8=localStorage.getItem('task9')
$('#textArea8').val(firstTask8);


$('#displayDate').text(todayDate)




$('#submit9am').on('click',function(){
    let task1= $('#textArea').val();
    $('#textArea').val(task1);
    localStorage.setItem("task1", JSON.stringify(task1))
    
})
$('#submit10am').on('click',function(){
    let task2= $('#textArea1').val();
    $('#textArea1').val(task2);
    localStorage.setItem("task2", JSON.stringify(task2))
})
$('#submit11am').on('click',function(){
    let task3= $('#textArea2').val();
    $('#textArea2').val(task3);
    localStorage.setItem("task3", JSON.stringify(task3))
})
$('#submit12pm').on('click',function(){
    let task4= $('#textArea3').val();
    $('#textArea3').val(task4);
    localStorage.setItem("task4", JSON.stringify(task4))
})
$('#submit1pm').on('click',function(){
    let task5= $('#textArea4').val();
    $('#textArea4').val(task5);
    localStorage.setItem("task5", JSON.stringify(task5))
})
$('#submit2pm').on('click',function(){
    let task6= $('#textArea5').val();
    $('#textArea5').val(task6);
    localStorage.setItem("task6", JSON.stringify(task6))
})
$('#submit3pm').on('click',function(){
    let task7= $('#textArea6').val();
    $('#textArea6').val(task7);
    localStorage.setItem("task7", JSON.stringify(task7))
})
$('#submit4pm').on('click',function(){
    let task8= $('#textArea7').val();
    $('#textArea7').val(task8);
    localStorage.setItem("task8", JSON.stringify(task8))
})
$('#submit5pm').on('click',function(){
    let task9= $('#textArea8').val();
    $('#textArea8').val(task9);
    localStorage.setItem("task9", JSON.stringify(task9))
})

