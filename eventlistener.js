console.log('This is tutorial 17 on events');

// document.getElementById('heading').addEventListener('click',function(e){
//     let variable
//     console.log('You have clicked the heading');
//     variable=e.target;
//     console.log(variable);
// })

document.querySelector('.container').addEventListener('mousemove', function(e){
    // console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetX},154)`;
    console.log('You triggered mouse move event');
})