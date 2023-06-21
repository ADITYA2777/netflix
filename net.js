// let be use btn to scrollbar for popular section 

let right_btn = document.getElementsByClassName('bi-chevron-double-right')[0];
let left_btn = document.getElementsByClassName('bi-chevron-double-left')[0];
let carts = document.getElementsByClassName('carts')[0];
let search = document.getElementsByClassName('search')[0];
let Input_search = document.getElementById('Input_search');

left_btn.addEventListener('click',()=>{
    carts.scrollLeft -= 140;
})
right_btn.addEventListener('click',()=>{
    carts.scrollLeft += 140;
})

let json_url = "movie.json";

fetch(json_url).then(response => response.json())
 .then((data)=>{
    data.forEach((ele,i) => {
        let { name , imdb , date ,url, sposter , bposter ,genre} = ele;
        let cart = document.createElement('a');
        cart.classList.add('cart');
        cart.href = url;
        cart.innerHTML = `
        <img src="${sposter}" alt="${name}" class="poster">
        <div class="rest-cart">
          <img src="${bposter}" alt="">
          <div class="cont">
            <h4>${name}</h4>
            <div class="sub">
              <p>${genre} ,${date}</p>
              <h3><span>Imdb</span><i class="bi bi-star-fill"></i>${imdb}</h3>
            </div>
          </div>
        </div>
        `
        carts.appendChild(cart);
    });
    document.getElementById("title").innerText = data[0].name;
    document.getElementById("gen").innerText = data[0].genre;
    document.getElementById("date").innerText = data[0].date;
    document.getElementById("rate").innerHTML = `<span>Imdb</span><i class="bi bi-star-fill"></i>${data[0].imdb}`

    // load search bar
    data.forEach(element => {
      let { name , imdb , date , sposter ,genre,url } = element;
  let cart = document.createElement('a');
  cart.classList.add('cart');
  cart.href = url;
  cart.innerHTML = `
  <img src="${sposter}" alt="" />
  <div class="cont">
    <h3>${name}</h3>
    <p>
      ${genre},${date},<span>Imdb</span
      ><i class="bi bi-star-fill"></i>${imdb}
    </p>
  </div>
  `
  search.appendChild(cart);
    });  

    Input_search.addEventListener('keyup',() => {
      let filter = Input_search.value.toUpperCase();
      let a = search.getElementsByTagName('a');

      for (let index = 0; index < a.length; index++) {
        let b = a[index].getElementsByClassName('cont')[0];


        let TextValue = b.textContent || b.innerText;

        if (TextValue.toUpperCase().indexOf(filter) > -1) {
          a[index].style.display = "flex";
          search.style.visibility = "visible";
          search.style.opacity = "1"
        }else{
          a[index].style.display = "none";
        }
        if (Input_search.value == 0) {
          search.style.visibility = "hidden";
          search.style.opacity = "0";
        }
      }
    })
    let video = document.getElementsByTagName('video')[0];
    let play = document.getElementById('play');
play.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    play.innerHTML = 'play <i class="bi bi-pause-fill"></i>';
  } else {
    video.pause();
    play.innerHTML = 'watch <i class="bi bi-play-fill"></i>';
  }
});
     let series = document.getElementById('series');
     series.addEventListener('click',()=>{
      carts.innerHTML =''
     })
     let series_list = data.filter(ele =>{
      return ele.type === "series"
     })

     series_list.forEach((el,i)=>{
      let { name , imdb , date ,url, sposter , bposter ,genre} = el;
      let cart = document.createElement('a');
      cart.classList.add('cart');
      cart.href = url;
      cart.innerHTML = `
      <img src="${sposter}" alt="${name}" class="poster">
      <div class="rest-cart">
        <img src="${bposter}" alt="">
        <div class="cont">
          <h4>${name}</h4>
          <div class="sub">
            <p>${genre} ,${date}</p>
            <h3><span>Imdb</span><i class="bi bi-star-fill"></i>${imdb}</h3>
          </div>
        </div>
      </div>
      `
      carts.appendChild(cart);
     })
 });   



