document.addEventListener("DOMContentLoaded", function() {
 const clickHandler = () => {
     document.addEventListener("click", function(e) {
         if (e.target.matches("#plus")){
            incrementCounter(1);
         }else if (e.target.matches("#minus")){
            incrementCounter(-1);
         }else if (e.target.matches("#heart")){
           const likeUl = document.querySelector(".likes")
           let ulData = likeUl.querySelector(`[data-number="${currentNumber()}"]`)
           if (ulData) {
               let likeNum = ulData.dataset.likes
           }
           console.dir(ulData)
            const newLi = document.createElement("li")
            const usedNumber = currentNumber()
            newLi.innerHTML = `
                <li> ${usedNumber} </li>
            `
            // console.log(usedNumber)
            
            likeUl.append(newLi)
            

         }else if (e.target.matches("#pause")){
                clearInterval(intervalId)
            e.target.textContent = "resume"
            e.target.id = "resume"
               
            document.querySelector("#plus").disabled = true
            document.querySelector("#minus").disabled = true
            document.querySelector("#heart").disabled = true
            document.querySelector("#submit").disabled = true
            
            
            
             
        }else if (e.target.matches("#resume")){
            intervalId = setInterval(() => {
                incrementCounter(1)
                 }, 1000)

            e.target.textContent = "pause"
            e.target.id = "pause"

            document.querySelector("#plus").disabled = false
            document.querySelector("#minus").disabled = false
            document.querySelector("#heart").disabled = false
            document.querySelector("#submit").disabled = false
                }

     });
       
        
     

    }

    const submitHandler = () => {
        document.addEventListener("submit", function(e) {
            if (e.target.matches("#comment-form")) {
                e.preventDefault()
                const commentForm = e.target 
                const commentName = commentForm["comment"].value
                const commentDiv = document.querySelector("div.comments")
                const newP = document.createElement("p")
                newP.textContent = commentName
                commentDiv.append(newP)
                
            }
            

        })




    }

     const currentNumber = () => {
            const newCounter = document.querySelector("#counter")
                // console.dir(newCounter)
            const currentNum = parseInt(newCounter.textContent)
            return currentNum
        }   
     
        const incrementCounter = num => {
            // console.log(currentNumber)
            const newCounter = document.querySelector("#counter")
            const newNumber = currentNumber() + num
            newCounter.textContent = newNumber
        }
            
       
         const increaseTimer = () => {
             intervalId = setInterval(() => {
                incrementCounter(1)
                 }, 1000)
         }

        

    increaseTimer();
clickHandler();
submitHandler();
})





/* 

1. Increase timer by 1 each time you click "+".
    - Find (+) 

    */