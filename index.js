// Your Code Here

// let answer  = window.prompt('Do you head left, or right?')
// console.log(answer);

// 

// let firstAnswer  = window.prompt('Do you head left, or right?')
// if(firstAnswer === 'left'){
//     let secondAnswer = window.prompt(`You come across a stray cat. 
// It scampers off down a small hole, just large enough for you to crawl through. 
// Do you follow it, or continue on your path?`)

// } else if(firstAnswer === 'right') {
//     let secondAnswer = window.prompt(`You come across a snoring dragon. 
// On the other side of him, you see a shiny chest of treasure. Another path would 
// lead you away from the dragon all together. Which do you take?`)

// }

function start(){
    let firstAnswer  = window.prompt('Do you head left, or right?')
    if(firstAnswer === 'left'){
       goLeft()
    } else if(firstAnswer === 'right') {
        goRight()
    }
}

function goLeft(){
    let secondAnswer = window.prompt(`You come across a stray cat. 
    It scampers off down a small hole, just large enough for you to crawl through. 
    Do you follow it, or continue on your path?`)
    if(secondAnswer === 'back'){
        start()
    } else if (secondAnswer === 'follow') follow()
    //else if (secondAnswer === 'continue') window.prompt('You come across a chamber that extends upward to a shining light above. There is a long, winding staircase and a much quicker, but rickety-looking, ladder that lead up towards the light. Which do you take?')
}




function follow(){
        let secondAnswer = window.prompt('You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')    
        if (secondAnswer === 'stay') stay()
         if(thirdAnswer === 'back'){
            start()  
        }
    }
    // } else if (secondAnswer === 'follow') window.prompt('You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')
    //  //else if (secondAnswer === 'stay') window.prompt('You live happily amongst the cats for the rest of your days.') 
    //  // else if (secondAnswer === 'spread the  word') window.prompt('After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless.')   
    // //if(thirdAnswer === 'stay') window.prompt('You live happily amongst the cats for the rest of your days.')    

function stay(){
   window.prompt('You live happily amongst the cats for the rest of your days.') 
}
function spreadTheWord(){
    window.prompt('After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless.') 
}

// function continue(){
//     let secondAnswer = window.prompt('You come across a chamber that extends upward to a shining light above. There is a long, winding staircase and a much quicker, but rickety-looking, ladder that lead up towards the light. Which do you take?')    
//     if(thirdAnswer === 'back'){
//         start()  
//     }
// }

function ladder(){
    window.prompt('After ascending a few feet up the ladder, one of its rungs snaps and you fall comedically through each of the rungs below. Sheepish, you return home.') 
 }
 function stairCase(){
     window.prompt('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.') 
 }



function goRight(){
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
    On the other side of him, you see a shiny chest of treasure. Another path would 
    lead you away from the dragon all together. Which do you take?`)
    if(secondAnswer === 'back'){
        start()
    } else if (secondAnswer === 'past the dragon') window.prompt('The dragon awakes and sits upright. You only have a moment to respond, to stay or to run:')
    else if (secondAnswer === 'away from the dragon') window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?')
}


start()


