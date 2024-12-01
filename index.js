let availableKeywords = [
    'Minecraft: Chinese House',
    'Pokemon Go: Dual Destiny',
    'Pokemon Go: Bulbasaur',
    'Pokemon Go: Shadow Bulbasaur',
    'Pokemon Go: Dynamax Bulbasaur',
    'Pokemon Go: Ivysaur',
    'Pokemon Go: Shadow Ivysaur',
    'Pokemon Go: Dynamax Ivysaur',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
           return keyword.toLocaleLowerCase().includes(input.toLocaleLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML
    resultsBox.innerHTML = '';
}

function CraftingTable() {
    document.getElementById("search-box").style.display = "none";
}

const button = document.getElementById('checkButton');
button.addEventListener('click', function() {
    const input = document.getElementById('input-box').value;

    if (input === "Minecraft: Chinese House") {
        House1();
    }

    if (input === "Pokemon Go: Dual Destiny") {
        performFunctionpogosmall1();
    }

    if (input === "Pokemon Go: Bulbasaur") {
        Bulbasaur();
    }

    if (input === "Pokemon Go: Shadow Bulbasaur") {
        BulbasaurShadowVersion();
    }

    if (input === "Pokemon Go: Dynamax Bulbasaur") {
        BulbasaurDynamaxVersion();
    }

    if (input === "Pokemon Go: Ivysaur") {
        Ivysaur();
    }

    if (input === "Pokemon Go: Shadow Ivysaur") {
        BulbasaurShadowVersion2();
    }

    if (input === "Pokemon Go: Dynamax Ivysaur") {
        BulbasaurDynamaxVersion2();
    }
});

function home() {
    document.getElementById("main-container1").style.display = "block";
    document.getElementById("button-container2").style.display = "flex";
    document.getElementById("button-container1").style.display = "none";
    document.getElementById("button-container1-1").style.display = "none";
    document.getElementById("house1-container").style.display = "none";
    document.getElementById("big-container1").style.display = "none";
    document.getElementById("big-container2").style.display = "none";
    document.getElementById("button-container-pogo1").style.display = "none";
    document.getElementById("button-container-pogo1-1").style.display = "none";
    document.getElementById("button-container-pogo-kanto1-1").style.display = "none";
    document.getElementById("button-container-minecraft1").style.display = "none";
    document.getElementById("big-container-minecraft1").style.display = "none";
    document.getElementById("pogonews-container").style.display = "none";
    document.getElementById("button-container-pogo2").style.display = "none";
    document.getElementById("Bulbasaurbig-container").style.display = "none";
    document.getElementById("Bulbasaurbig-container2").style.display = "none";
}

function performFunctionMain1() {
    document.getElementById("big-container1").style.display = "none";
    document.getElementById("big-container-minecraft1").style.display = "block";
    document.getElementById("house1-container").style.display = "none";
    document.getElementById("button-container1-1").style.display = "none";
    document.getElementById("slideshow-container-id").style.display = "none";
    document.getElementById("main-container1").style.display = "none";
    document.getElementById("button-container2").style.display = "none";
    document.getElementById("button-container1").style.display = "none";
    document.getElementById("button-container-minecraft1").style.display = "flex";
}

function performFunctionMinecraft1() {
    document.getElementById("big-container1").style.display = "block";
    document.getElementById("big-container-minecraft1").style.display = "none";
    document.getElementById("house1-container").style.display = "none";
    document.getElementById("button-container1-1").style.display = "none";
    document.getElementById("slideshow-container-id").style.display = "none";
    document.getElementById("main-container1").style.display = "none";
    document.getElementById("button-container2").style.display = "none";
    document.getElementById("button-container1").style.display = "flex";
    document.getElementById("button-container-minecraft1").style.display = "none";
}

function performFunction1() {
    document.getElementById("big-container1").style.display = "none";
    document.getElementById("house1-container").style.display = "none";
    document.getElementById("button-container1-1").style.display = "flex";
    document.getElementById("house-modal1").style.display = "none";
    document.getElementById("Chinese-House-Mats").style.display = "none";
    document.getElementById("slideshow-container-id").style.display = "none";
}

function performFunctionMain2() {
    document.getElementById("main-container1").style.display = "none";
    document.getElementById("big-container1").style.display = "none";
    document.getElementById("house1-container").style.display = "none";
    document.getElementById("button-container1-1").style.display = "none";
    document.getElementById("house-modal1").style.display = "none";
    document.getElementById("Chinese-House-Mats").style.display = "none";
    document.getElementById("slideshow-container-id").style.display = "none";
    document.getElementById("big-container2").style.display = "block";
    document.getElementById("button-container-pogo1").style.display = "flex";
}

function performFunctionpogo1() {
    document.getElementById("big-container2").style.display = "none";
    document.getElementById("button-container-pogo1-1").style.display = "flex";
}

function performFunctionpogo2() {
    document.getElementById("big-container2").style.display = "none";
    document.getElementById("button-container-pogo1-1").style.display = "none";
    document.getElementById("button-container-pogo2").style.display = "flex";
}

function performFunctionpogosmall1() {
    document.getElementById("pogonews-container").style.display = "flex";
    document.getElementById("button-container1").style.display = "none";
    document.getElementById("button-container1-1").style.display = "none";
    document.getElementById("house1-container").style.display = "none";
    document.getElementById("big-container1").style.display = "none";
    document.getElementById("big-container2").style.display = "none";
    document.getElementById("button-container-pogo1").style.display = "none";
    document.getElementById("button-container-pogo1-1").style.display = "none";
    document.getElementById("button-container-pogo-kanto1-1").style.display = "none";
    document.getElementById("button-container-minecraft1").style.display = "none";
    document.getElementById("big-container-minecraft1").style.display = "none";
    document.getElementById("button-container-pogo2").style.display = "none";
    document.getElementById("main-container1").style.display = "none";
    document.getElementById("button-container2").style.display = "none";
}

function Kanto() {
    document.getElementById("button-container-pogo1-1").style.display = "none";
    document.getElementById("button-container-pogo-kanto1-1").style.display = "flex";
}

function House1() {
    document.getElementById("big-container1").style.display = "none";
    document.getElementById("house1-container").style.display = "flex";
    document.getElementById("button-container1-1").style.display = "none";
    document.getElementById("house-modal1").style.display = "block";
    document.getElementById("Chinese-House-Mats").style.display = "block";
    document.getElementById("slideshow-container-id").style.display = "block";
    document.getElementById("pogonews-container").style.display = "none";
    document.getElementById("button-container1").style.display = "none";
    document.getElementById("big-container2").style.display = "none";
    document.getElementById("button-container-pogo1").style.display = "none";
    document.getElementById("button-container-pogo1-1").style.display = "none";
    document.getElementById("button-container-pogo-kanto1-1").style.display = "none";
    document.getElementById("button-container-minecraft1").style.display = "none";
    document.getElementById("big-container-minecraft1").style.display = "none";
    document.getElementById("button-container-pogo2").style.display = "none";
    document.getElementById("main-container1").style.display = "none";
    document.getElementById("button-container2").style.display = "none";
    document.getElementById("Bulbasaurbig-container").style.display = "none";
}

function Bulbasaur() {
    document.getElementById("Bulbasaurbig-container").style.display = "block";
    document.getElementById("Bulbasaursmall-container1").style.display = "flex";
    document.getElementById("button-container-pogo-kanto1-1").style.display = "none";
    document.getElementById("pogonews-container").style.display = "none";
    document.getElementById("button-container1").style.display = "none";
    document.getElementById("big-container2").style.display = "none";
    document.getElementById("Bulbasaurbig-container").style.display = "block";
    document.getElementById("Bulbasaurbig-container2").style.display = "none";
    document.getElementById("button-container-pogo1").style.display = "none";
    document.getElementById("button-container-pogo1-1").style.display = "none";
    document.getElementById("button-container-pogo-kanto1-1").style.display = "none";
    document.getElementById("button-container-minecraft1").style.display = "none";
    document.getElementById("big-container-minecraft1").style.display = "none";
    document.getElementById("button-container-pogo2").style.display = "none";
    document.getElementById("main-container1").style.display = "none";
    document.getElementById("button-container2").style.display = "none";
    document.getElementById("big-container1").style.display = "none";
    document.getElementById("house1-container").style.display = "none";
    document.getElementById("button-container1-1").style.display = "none";
    document.getElementById("house-modal1").style.display = "none";
    document.getElementById("Chinese-House-Mats").style.display = "none";
    document.getElementById("slideshow-container-id").style.display = "none";
}

function Ivysaur() {
    document.getElementById("Bulbasaurbig-container2").style.display = "block";
    document.getElementById("Bulbasaursmall-container1").style.display = "flex";
    document.getElementById("button-container-pogo-kanto1-1").style.display = "none";
    document.getElementById("pogonews-container").style.display = "none";
    document.getElementById("button-container1").style.display = "none";
    document.getElementById("big-container2").style.display = "none";
    document.getElementById("Bulbasaurbig-container").style.display = "none";
    document.getElementById("Bulbasaurbig-container2").style.display = "block";
    document.getElementById("button-container-pogo1").style.display = "none";
    document.getElementById("button-container-pogo1-1").style.display = "none";
    document.getElementById("button-container-pogo-kanto1-1").style.display = "none";
    document.getElementById("button-container-minecraft1").style.display = "none";
    document.getElementById("big-container-minecraft1").style.display = "none";
    document.getElementById("button-container-pogo2").style.display = "none";
    document.getElementById("main-container1").style.display = "none";
    document.getElementById("button-container2").style.display = "none";
    document.getElementById("big-container1").style.display = "none";
    document.getElementById("house1-container").style.display = "none";
    document.getElementById("button-container1-1").style.display = "none";
    document.getElementById("house-modal1").style.display = "none";
    document.getElementById("Chinese-House-Mats").style.display = "none";
    document.getElementById("slideshow-container-id").style.display = "none";
}

function BulbasaurDynamaxVersion() {
    document.getElementById("bulbasaurdivs").style.display = "none";
    document.getElementById("bulbasaurdivs1").style.display = "flex";
    document.getElementById("bulbasaurdivs2").style.display = "none";
    document.getElementById("BulbasaurEvolutionsAttack").style.display = "none";
    document.getElementById("BulbasaurEvolutionsAttackDynamax").style.display = "block";
    document.getElementById("BulbasaurEvolutionsAttackShadow").style.display = "none";
    document.getElementById("Bulbasaurbig-container").style.display = "block";
    document.getElementById("Bulbasaurbig-container2").style.display = "none";
    document.getElementById("button-container-pogo-kanto1-1").style.display = "none";
    document.getElementById("pogonews-container").style.display = "none";
    document.getElementById("button-container1").style.display = "none";
    document.getElementById("big-container2").style.display = "none";
    document.getElementById("button-container-pogo1").style.display = "none";
    document.getElementById("button-container-pogo1-1").style.display = "none";
    document.getElementById("button-container-pogo-kanto1-1").style.display = "none";
    document.getElementById("button-container-minecraft1").style.display = "none";
    document.getElementById("big-container-minecraft1").style.display = "none";
    document.getElementById("button-container-pogo2").style.display = "none";
    document.getElementById("main-container1").style.display = "none";
    document.getElementById("button-container2").style.display = "none";
    document.getElementById("big-container1").style.display = "none";
    document.getElementById("house1-container").style.display = "none";
    document.getElementById("button-container1-1").style.display = "none";
    document.getElementById("house-modal1").style.display = "none";
    document.getElementById("Chinese-House-Mats").style.display = "none";
    document.getElementById("slideshow-container-id").style.display = "none";
}

function BulbasaurDynamaxVersion2() {
    document.getElementById("bulbasaurdivs-2").style.display = "none";
    document.getElementById("bulbasaurdivs1-2").style.display = "flex";
    document.getElementById("bulbasaurdivs2-2").style.display = "none";
    document.getElementById("BulbasaurEvolutionsAttack2").style.display = "none";
    document.getElementById("BulbasaurEvolutionsAttackDynamax2").style.display = "block";
    document.getElementById("BulbasaurEvolutionsAttackShadow2").style.display = "none";
    document.getElementById("Bulbasaurbig-container").style.display = "none";
    document.getElementById("Bulbasaurbig-container2").style.display = "block";
    document.getElementById("button-container-pogo-kanto1-1").style.display = "none";
    document.getElementById("pogonews-container").style.display = "none";
    document.getElementById("button-container1").style.display = "none";
    document.getElementById("big-container2").style.display = "none";
    document.getElementById("button-container-pogo1").style.display = "none";
    document.getElementById("button-container-pogo1-1").style.display = "none";
    document.getElementById("button-container-pogo-kanto1-1").style.display = "none";
    document.getElementById("button-container-minecraft1").style.display = "none";
    document.getElementById("big-container-minecraft1").style.display = "none";
    document.getElementById("button-container-pogo2").style.display = "none";
    document.getElementById("main-container1").style.display = "none";
    document.getElementById("button-container2").style.display = "none";
    document.getElementById("big-container1").style.display = "none";
    document.getElementById("house1-container").style.display = "none";
    document.getElementById("button-container1-1").style.display = "none";
    document.getElementById("house-modal1").style.display = "none";
    document.getElementById("Chinese-House-Mats").style.display = "none";
    document.getElementById("slideshow-container-id").style.display = "none";
}

function BulbasaurNormalVersion() {
    document.getElementById("bulbasaurdivs").style.display = "flex";
    document.getElementById("bulbasaurdivs1").style.display = "none";
    document.getElementById("bulbasaurdivs2").style.display = "none";
    document.getElementById("BulbasaurEvolutionsAttack").style.display = "block";
    document.getElementById("BulbasaurEvolutionsAttackDynamax").style.display = "none";
    document.getElementById("BulbasaurEvolutionsAttackShadow").style.display = "none";
    document.getElementById("Bulbasaurbig-container").style.display = "block";
    document.getElementById("Bulbasaurbig-container2").style.display = "none";
    document.getElementById("button-container-pogo-kanto1-1").style.display = "none";
    document.getElementById("pogonews-container").style.display = "none";
    document.getElementById("button-container1").style.display = "none";
    document.getElementById("big-container2").style.display = "none";
    document.getElementById("button-container-pogo1").style.display = "none";
    document.getElementById("button-container-pogo1-1").style.display = "none";
    document.getElementById("button-container-pogo-kanto1-1").style.display = "none";
    document.getElementById("button-container-minecraft1").style.display = "none";
    document.getElementById("big-container-minecraft1").style.display = "none";
    document.getElementById("button-container-pogo2").style.display = "none";
    document.getElementById("main-container1").style.display = "none";
    document.getElementById("button-container2").style.display = "none";
    document.getElementById("big-container1").style.display = "none";
    document.getElementById("house1-container").style.display = "none";
    document.getElementById("button-container1-1").style.display = "none";
    document.getElementById("house-modal1").style.display = "none";
    document.getElementById("Chinese-House-Mats").style.display = "none";
    document.getElementById("slideshow-container-id").style.display = "none";
}

function BulbasaurNormalVersion2() {
    document.getElementById("bulbasaurdivs-2").style.display = "flex";
    document.getElementById("bulbasaurdivs1-2").style.display = "none";
    document.getElementById("bulbasaurdivs2-2").style.display = "none";
    document.getElementById("BulbasaurEvolutionsAttack2").style.display = "block";
    document.getElementById("BulbasaurEvolutionsAttackDynamax2").style.display = "none";
    document.getElementById("BulbasaurEvolutionsAttackShadow2").style.display = "none";
    document.getElementById("Bulbasaurbig-container").style.display = "none";
    document.getElementById("Bulbasaurbig-container2").style.display = "block";
    document.getElementById("button-container-pogo-kanto1-1").style.display = "none";
    document.getElementById("pogonews-container").style.display = "none";
    document.getElementById("button-container1").style.display = "none";
    document.getElementById("big-container2").style.display = "none";
    document.getElementById("button-container-pogo1").style.display = "none";
    document.getElementById("button-container-pogo1-1").style.display = "none";
    document.getElementById("button-container-pogo-kanto1-1").style.display = "none";
    document.getElementById("button-container-minecraft1").style.display = "none";
    document.getElementById("big-container-minecraft1").style.display = "none";
    document.getElementById("button-container-pogo2").style.display = "none";
    document.getElementById("main-container1").style.display = "none";
    document.getElementById("button-container2").style.display = "none";
    document.getElementById("big-container1").style.display = "none";
    document.getElementById("house1-container").style.display = "none";
    document.getElementById("button-container1-1").style.display = "none";
    document.getElementById("house-modal1").style.display = "none";
    document.getElementById("Chinese-House-Mats").style.display = "none";
    document.getElementById("slideshow-container-id").style.display = "none";
}

function BulbasaurShadowVersion() {
    document.getElementById("bulbasaurdivs").style.display = "none";
    document.getElementById("bulbasaurdivs1").style.display = "none";
    document.getElementById("bulbasaurdivs2").style.display = "flex";
    document.getElementById("BulbasaurEvolutionsAttack").style.display = "none";
    document.getElementById("BulbasaurEvolutionsAttackDynamax").style.display = "none";
    document.getElementById("BulbasaurEvolutionsAttackShadow").style.display = "block";
    document.getElementById("Bulbasaurbig-container").style.display = "block";
    document.getElementById("Bulbasaurbig-container2").style.display = "none";
    document.getElementById("button-container-pogo-kanto1-1").style.display = "none";
    document.getElementById("pogonews-container").style.display = "none";
    document.getElementById("button-container1").style.display = "none";
    document.getElementById("big-container2").style.display = "none";
    document.getElementById("button-container-pogo1").style.display = "none";
    document.getElementById("button-container-pogo1-1").style.display = "none";
    document.getElementById("button-container-pogo-kanto1-1").style.display = "none";
    document.getElementById("button-container-minecraft1").style.display = "none";
    document.getElementById("big-container-minecraft1").style.display = "none";
    document.getElementById("button-container-pogo2").style.display = "none";
    document.getElementById("main-container1").style.display = "none";
    document.getElementById("button-container2").style.display = "none";
    document.getElementById("big-container1").style.display = "none";
    document.getElementById("house1-container").style.display = "none";
    document.getElementById("button-container1-1").style.display = "none";
    document.getElementById("house-modal1").style.display = "none";
    document.getElementById("Chinese-House-Mats").style.display = "none";
    document.getElementById("slideshow-container-id").style.display = "none";
}

function BulbasaurShadowVersion2() {
    document.getElementById("bulbasaurdivs-2").style.display = "none";
    document.getElementById("bulbasaurdivs1-2").style.display = "none";
    document.getElementById("bulbasaurdivs2-2").style.display = "flex";
    document.getElementById("BulbasaurEvolutionsAttack2").style.display = "none";
    document.getElementById("BulbasaurEvolutionsAttackDynamax2").style.display = "none";
    document.getElementById("BulbasaurEvolutionsAttackShadow2").style.display = "block";
    document.getElementById("Bulbasaurbig-container").style.display = "none";
    document.getElementById("Bulbasaurbig-container2").style.display = "block";
    document.getElementById("button-container-pogo-kanto1-1").style.display = "none";
    document.getElementById("pogonews-container").style.display = "none";
    document.getElementById("button-container1").style.display = "none";
    document.getElementById("big-container2").style.display = "none";
    document.getElementById("button-container-pogo1").style.display = "none";
    document.getElementById("button-container-pogo1-1").style.display = "none";
    document.getElementById("button-container-pogo-kanto1-1").style.display = "none";
    document.getElementById("button-container-minecraft1").style.display = "none";
    document.getElementById("big-container-minecraft1").style.display = "none";
    document.getElementById("button-container-pogo2").style.display = "none";
    document.getElementById("main-container1").style.display = "none";
    document.getElementById("button-container2").style.display = "none";
    document.getElementById("big-container1").style.display = "none";
    document.getElementById("house1-container").style.display = "none";
    document.getElementById("button-container1-1").style.display = "none";
    document.getElementById("house-modal1").style.display = "none";
    document.getElementById("Chinese-House-Mats").style.display = "none";
    document.getElementById("slideshow-container-id").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}