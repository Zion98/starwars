const main = "https://swapi.dev/api/people/";
  fetch(main)
  .then((response) => response.json())
  .then((data) => {
    people_html = '';
    
    const arr =["images/1.jpg", "images/2.jpg","images/3.jpg","images/4.jpeg",
               "images/5.png","images/6.png",
              "images/7.png", "images/8.jpg", "images/9.png","images/10.jpg"];

    let i=0;
    while(i<arr.length){ 
    const create= data.results.map(people=>{
      // const myInd = Math.floor(Math.random() * arr.length);

      people_html +=  '<div class="box">'+
      '<div class="box-image">'+
       `<img src=${arr[i++]} alt="">`+   
      '</div>'+ 
      '<div class="box-name" onclick="getModal(\''+people.name+","+people.gender+","+people.height+","+people.mass+","+people.skin_color+'\')">'+people.name+'</div>'+
      '</div>';
    }) .join('');
   }
    document.querySelector(".container").innerHTML= people_html;
  }); 

  let modal = document.getElementById("peopleModal");
  let span = document.getElementsByClassName("close")[0];
  span.onclick = function(){modal.style.display="none";}

  window.onclick = function(e){
    if(e.target == modal){
      modal.style.display = "none";
    }
  }

  const getModal=(cat)=>{
    modal.style.display = "block";
    let txt = cat.split(',');
    let name = txt[0];
    let gender = txt[1];
    let height = txt[2];
    let mass= txt[3];
    let skin_color=txt[4];

    document.querySelector(".name").innerHTML=name;
    document.querySelector(".gender").innerHTML=gender;
    document.querySelector(".height").innerHTML=height;
    document.querySelector(".mass").innerHTML=mass;
    document.querySelector(".skin-color").innerHTML=skin_color;
  }


module.exports = {main}