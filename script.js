function meteorShower(){
    let meteorCount = 0

    setInterval(()=>{
        if(meteorCount>=5) meteorCount=0
        meteorCount++
        let meteors = `<div class="meteor${meteorCount}"></div>`
        document.getElementById("meteorsHeader").innerHTML = meteors
        document.getElementById("meteorsFooter").innerHTML = meteors
    },5000)
}
function stars(){
    let starHeadercount = 10
    for(let i = 1 ; i <= starHeadercount ; i++){
        let star = `<div class="star${i}"></div>`
        document.getElementById("starsHeader").innerHTML += star
    }
    let starFootercount = 29
    for(let i = starHeadercount + 1 ; i <= starFootercount ; i++){
        let star = `<div class="star${i}"></div>`
        document.getElementById("starsFooter").innerHTML += star
    }
}
window.onload =  ()=>{
    meteorShower()
    stars()
}