function countdown() {
    let countDate = new Date("August 9, 2022 00:00:00").getTime()
    let currentDate = new Date().getTime()

    let timeDifference = countDate - currentDate

    let second = 1000
    let minute = second * 60
    let hour = minute * 60
    let day = hour * 24



    let textDay = Math.floor(timeDifference / day)  
    let textHour = Math.floor((timeDifference % day) / hour)
    let textMinute = Math.floor((timeDifference % hour) / minute)
    let textSecond = Math.floor((timeDifference % minute) / second)
    

    document.getElementById('countday').innerHTML = textDay
    document.getElementById('counthour').innerHTML = textHour
    document.getElementById('countminute').innerHTML = textMinute
    document.getElementById('countsecond').innerHTML = textSecond






}

//how time works
setInterval(countdown, 1000)
