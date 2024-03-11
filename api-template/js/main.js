//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)



  //example book - 9780140328721, 1387207776

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        if(!localStorage.getItem('books')){
          localStorage.setItem('books', data.title)
        } else {
          let books = localStorage.getItem('books') +', '+ data.title;
          localStorage.setItem('books', books);
        }

        document.querySelector('h2').innerText = localStorage.getItem('books');
        console.log(data.title)
    
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

