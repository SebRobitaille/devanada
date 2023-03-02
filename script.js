const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const ctaBtn = document.querySelector(".cta-btn");
const contactSec = document.getElementById("contact");
const contactBtn = document.querySelector(".control-5");

// CHANGE PAGE TRANSITION -- CHANGE PAGE TRANSITION -- CHANGE PAGE TRANSITION
function PageTransitions() {
  //button click active class

  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }

  // Sections active class
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from the other btns
      sectBtn.forEach((btn) => {
        btn.classList.remove("active");
      });
      // e.target.classList.add("active"); <--- might be useless
      // hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  // Makes clicking the CTA button switch to contact screen
  ctaBtn.addEventListener("click", (e) => {
    sections.forEach((section) => {
      section.classList.remove("active");
    });
    contactSec.classList.add("active");

    let currentBtn = document.querySelectorAll(".active-btn");
    currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
    contactBtn.classList += " active-btn";
  });

  // // Toggle theme
  // const themeBtn = document.querySelector(".theme-btn");
  // themeBtn.addEventListener("click", () => {
  //   let element = document.body;
  //   element.classList.toggle("light-mode");
  // });
}
PageTransitions();

  // TYPEWRITER FEATURE --  TYPEWRITER FEATURE -- TYPEWRITER FEATURE
// Start of the typing animation within the header
const TypeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement; //the span for the element holding the word
  this.words = words; // The variable for the array of words
  this.txt = ""; // variable for the animation of the typing
  this.wordIndex = 0; //starting with the first word at the index of 0
  this.wait = parseInt(wait, 10); //check it's an integer for the wait time
  this.type(); //method of type that's associated with the typewriter
  this.isDeleting = false; //represents the state if it's deleting or not
};

// a way we add a method to the typeWriter is by using prototypes
TypeWriter.prototype.type = function () {
  //current index of the word (counting down from 1)
  // use the modulus operator "%" to get the remainder of the division
  const currentWord = this.wordIndex % this.words.length;

  //Get the full text of of the word
  const fullTxt = this.words[currentWord];

  //Check if the words are deleting
  // The substring() method extracts characters from start to end
  if (this.isDeleting) {
    //removing letters
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    //add letters
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  //insert txt into elements
  //use template leteral `${}` to interpolate variables
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  //type speed
  // type speed changes (stop, faster deleting, etc), so use let
  let typeSpeed = 200;

  // if isDeleting is true, cut the speed by half
  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  // check to see if the words are complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // this will make the animation pause at the end
    typeSpeed = this.wait;

    // set isDeleting back to true
    this.isDeleting = true;

    // this is the "if" once it's completes typing out the word
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;

    // move to the next word indrumenting by 1
    this.wordIndex++;

    // pause before starting the next word
    typeSpeed = 300;
  }

  // timer for each letter that is added or deleted
  setTimeout(() => this.type(), typeSpeed); // 2 words per second
};

// initializing on DOM load
document.addEventListener("DOMContentLoaded", initializeText);
function initializeText() {
  // getting the h2 element on the DOM
  const txtElement = document.querySelector(".txt-type");

  // getting the text attributes using "data-"
  // need to use JSON.parse() method to turn string into an array
  const words = JSON.parse(txtElement.getAttribute("data-words"));

  // getting the wait attribute using "data-"
  const wait = txtElement.getAttribute("data-wait");

  //initialize the typewriter function
  new TypeWriter(txtElement, words, wait);
}

