const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let generateButton = document.getElementById("generate-btn")

generateButton.addEventListener("click", function() {
    let randomIndexOne = Math.floor( Math.random() * characters.length )
    let randomIndexTwo = Math.floor( Math.random() * characters.length )
    let randomIndexThree = Math.floor( Math.random() * characters.length )
    let randomIndexFour = Math.floor( Math.random() * characters.length )
    let randomIndexFive = Math.floor( Math.random() * characters.length )
    let randomIndexSix = Math.floor( Math.random() * characters.length )
    let randomIndexSeven = Math.floor( Math.random() * characters.length )
    let randomIndexEight = Math.floor( Math.random() * characters.length )
    let randomIndexNine = Math.floor( Math.random() * characters.length )
    let randomIndexTen = Math.floor( Math.random() * characters.length )
    let randomIndexEleven = Math.floor( Math.random() * characters.length )
    let randomIndexTwelve = Math.floor( Math.random() * characters.length )
    let randomIndexThirteen = Math.floor( Math.random() * characters.length )
    let randomIndexFourteen = Math.floor( Math.random() * characters.length )
    let randomIndexFifteen = Math.floor( Math.random() * characters.length )
    let randomIndexSixteen = Math.floor( Math.random() * characters.length ) // 1
    let randomIndexSeventeen= Math.floor( Math.random() * characters.length ) // 2
    let randomIndexEightteen = Math.floor( Math.random() * characters.length ) // 3 
    let randomIndexNineteen = Math.floor( Math.random() * characters.length ) // 4
    let randomIndexTwenty= Math.floor( Math.random() * characters.length ) // 5
    let randomIndexTwentyOne = Math.floor( Math.random() * characters.length ) // 6
    let randomIndexTwentyTwo = Math.floor( Math.random() * characters.length ) // 7
    let randomIndexTwentyThree = Math.floor( Math.random() * characters.length ) // 8
    let randomIndexTwentyFour = Math.floor( Math.random() * characters.length ) // 9
    let randomIndexTwentyFive = Math.floor( Math.random() * characters.length ) // 10
    let randomIndexTwentySix = Math.floor( Math.random() * characters.length ) // 11
    let randomIndexTwentySeven = Math.floor( Math.random() * characters.length ) // 12
    let randomIndexTwentyEight = Math.floor( Math.random() * characters.length ) // 13
    let randomIndexTwentyNine = Math.floor( Math.random() * characters.length ) // 14
    let randomIndexThirty = Math.floor( Math.random() * characters.length ) // 15
    passwordOne.textContent = characters[randomIndexOne] + characters[randomIndexTwo] + characters[randomIndexThree] + characters[randomIndexFour] + characters[randomIndexFive] + characters[randomIndexSix] + characters[randomIndexSeven] + characters[randomIndexEight] + characters[randomIndexNine] + characters[randomIndexTen] + characters[randomIndexEleven] + characters[randomIndexTwelve] + characters[randomIndexThirteen] + characters[randomIndexFourteen]+ characters[randomIndexFifteen]
    passwordTwo.textContent = characters[randomIndexSixteen] + characters[randomIndexSeventeen] + characters[randomIndexEightteen] + characters[randomIndexNineteen] + characters[randomIndexTwenty] + characters[randomIndexTwentyOne] + characters[randomIndexTwentyTwo] + characters[randomIndexTwentyThree] + characters[randomIndexTwentyFour] + characters[randomIndexTwentyFive] + characters[randomIndexTwentySix] + characters[randomIndexTwentySeven] + characters[randomIndexTwentyEight] + characters[randomIndexTwentyNine]+ characters[randomIndexThirty]
})


