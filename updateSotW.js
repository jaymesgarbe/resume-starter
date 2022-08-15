// automate Song of the Week updating. . . 
function test() {
    alert('just testing :)')
}

function updateSotW() {

    document.getElementById('updateButton').innerText('updated!')

    // // adding current song to archive
    // const titleEl = document.getElementsById('title')
    // const archive = document.getElementsById('archive')
    // archive.insertAdjacentHTML('beforeend',`<p><b><center>${titleEl.innerText}</center></b></p>`)

    // // changing title to new SotW
    // var newTitle = prompt(`New SotW -- Old Title: ${titleEl}`)
    // titleEl.innerText(newTitle)

    // // changing rating
    // var rating = document.getElementById('rating')
    // var newRating = prompt('What do you rate this Song')
    // rating.innerText(`Overall Rating: ${newRating}/10`)

    // // changing fav part
    // var favPart = document.getElementsById('favPart')
    // var newFavPart = prompt('What is your fav part of this song')
    // favPart.innerText(newFavPart)

    // // changing overall review
    // var overall = document.getElementsById('overall')
    // var newOverall = prompt('What is your overall review of this song')
    // overall.innerText(newOverall)

    // // changing img src
    // var newImgSrc = prompt('Import new thumbnail... input file name')
    // document.getElementById('imgSrc').src = `images/${newImgSrc}`
}

