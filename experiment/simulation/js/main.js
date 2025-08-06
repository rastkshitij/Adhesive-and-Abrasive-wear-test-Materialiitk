const slideshowImage = document.querySelector('.discImage');
document.getElementById("conclusion").style.display="none"
document.getElementById("out").style.display="none"
const slideshowImagesArray = [
    '../simulation/disc/1-1.png',
    '../simulation/disc/2-1.png',
    '../simulation/disc/3-1.png',
    '../simulation/disc/4-1.png',
    '../simulation/disc/5-1.png',
    '../simulation/disc/6-1.png',
    '../simulation/disc/7-1.png',
    '../simulation/disc/8-1.png',
    '../simulation/disc/9-1.png',
    '../simulation/disc/10-1.png',
    '../simulation/disc/11-1.png',
    '../simulation/disc/12-1.png',
    '../simulation/disc/13-1.png',
    '../simulation/disc/14-1.png',
    '../simulation/disc/15-1.png',
    '../simulation/disc/16-1.png',
    '../simulation/disc/1-1.png',
    '../simulation/disc/2-1.png',
    '../simulation/disc/3-1.png',
    '../simulation/disc/4-1.png',
    '../simulation/disc/5-1.png',
    '../simulation/disc/6-1.png',
    '../simulation/disc/7-1.png',
];

slideshowImage.style.width = "150px";
slideshowImage.style.height = "130px";
slideshowImage.setAttribute('x', '1610');
slideshowImage.setAttribute('y', '1002');

let slideshowCurrentIndex = 0;
let slideshowIntervalId;

function updateSlideshowImage() {
    slideshowCurrentIndex = (slideshowCurrentIndex + 1) % slideshowImagesArray.length;
    slideshowImage.setAttribute('href', slideshowImagesArray[slideshowCurrentIndex]);
}

function startImageSlideshow() {
    clearInterval(slideshowIntervalId);
    slideshowIntervalId = setInterval(updateSlideshowImage, 0.1);

    setTimeout(() => {
        clearInterval(slideshowIntervalId);
    }, 5000);
}

// Movement and interaction logic
const moveButton = document.getElementById('moveButton');
const moveButton2 = document.getElementById('moveButton2');
const moveButton3 = document.getElementById('moveButton3');
const moveButton4 = document.getElementById('moveButton4');
const moveButton5 = document.getElementById('moveButton5');
const moveButton6 = document.getElementById('moveButton6');
const moveButton7 = document.getElementById('moveButton7');
const moveButton8 = document.getElementById('moveButton8');
const refreshButton = document.getElementById('refreshButton');

const objectToMove = document.getElementById('objectToMove');
const objectToMove2 = document.getElementById('objectToMove');
const objectToMove3 = document.getElementById('objectToMove3');
const objectToMove5 = document.getElementById('objectToMove5');
const objectToMove6 = document.getElementById('objectToMove6');

const targetObject = document.getElementById('targetObject');
const targetObject3 = document.getElementById('targetObject3');
const targetObject5 = document.getElementById('targetObject5');
const targetObject6 = document.getElementById('targetObject6');

let selectedMaterial = null;

moveButton.addEventListener('click', () => {
    selectedMaterial = 1;
    moveButton2.disabled = true;
    moveButton.disabled = false;
    objectToMove.style.transition = 'transform 2s ease';
    objectToMove.style.transform = `translate(-439px, -272px)`;
});

moveButton2.addEventListener('click', () => {
    selectedMaterial = 2;
    moveButton.disabled = true;
    moveButton2.disabled = false;
    objectToMove2.style.transition = 'transform 2s ease';
    objectToMove2.style.transform = `translate(-439px, -272px)`;
});

moveButton3.addEventListener('click', () => {
    objectToMove3.style.transition = 'transform 2s ease';
    objectToMove3.style.transform = `translate(1605px, 430px)`;
});

moveButton4.addEventListener('click', () => {
    objectToMove3.style.opacity = 0;
});

moveButton5.addEventListener('click', () => {
    objectToMove5.style.transition = 'transform 2s ease';
    objectToMove5.style.transform = `translate(-405px, -17px)`;
});

moveButton6.addEventListener('click', () => {
    objectToMove6.style.transition = 'transform 2s ease';
    objectToMove6.style.transform = `translate(-90px, -705px)`;
});

// One-by-one button reveal
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button');

    function revealNextButton(currentButtonIndex) {
        if (currentButtonIndex < buttons.length - 1) {
            // buttons[currentButtonIndex].disabled = true;
            buttons[currentButtonIndex + 1].classList.remove('hidden');
        }
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            revealNextButton(i);
        });
    }
});

// Tooltip on hover for SVG elements
const svgContainer = document.getElementById("svgContainer");
const elementName = document.getElementById("elementName");

svgContainer.addEventListener("mouseover", (e) => {
    if (e.target.dataset.name) {
        elementName.innerText = e.target.dataset.name;
        elementName.style.left = e.clientX + "-5px";
        elementName.style.top = e.clientY + "-4px";
        elementName.style.display = "block";
    }
});

svgContainer.addEventListener("mouseout", () => {
    elementName.style.display = "none";
});

// SVG image slideshow
const svgImages = document.querySelectorAll('.svg-image');
let currentIndex = 0;
let intervalId;

function showNextImage() {
    svgImages[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % svgImages.length;
    svgImages[currentIndex].style.display = 'block';
}

function startAnimation() {
    intervalId = setInterval(showNextImage, 0.1);
}

function stopAnimation() {
    clearInterval(intervalId);
}

moveButton7.addEventListener('click', () => {
    startAnimation();
    setTimeout(stopAnimation, 5000);
});
moveButton7.addEventListener('click', startImageSlideshow);

// Slideshow logic
const resultContainer = document.getElementById('resultContainer');
const material1Slideshow = document.getElementById('material1Slideshow');
const material2Slideshow = document.getElementById('material2Slideshow');

const material1Image = document.getElementById('material1Image');
const material1Caption = document.getElementById('material1Caption');
const material1NextBtn = document.getElementById('material1NextBtn');

const material2Image = document.getElementById('material2Image');
const material2Caption = document.getElementById('material2Caption');
const material2NextBtn = document.getElementById('material2NextBtn');

const material1Slides = [
    { src: '../simulation/outputImages/c01-1.png', caption: 'Observation of worn surface under a scanning electron microscope (SEM)', buttonLabel: 'Study under a scanning electron microscope (SEM)' },
    { src: '../simulation/outputImages/c01-2.png', caption: 'Wear track ', buttonLabel: 'At Higher Magnification' },
    { src: '../simulation/outputImages/c01-3.png', caption: 'Abraded wear debris', buttonLabel: 'Observation of worn surface under a scannig mircoscope' }
];

const material2Slides = [
    { src: '../simulation/outputImages/c02-1.png', caption: 'Observation of worn surface under a scanning electron microscope (SEM)', buttonLabel: 'Study under a scanning electron microscope (SEM)' },
    { src: '../simulation/outputImages/c02-2.png', caption: 'Wear track', buttonLabel: 'Examination of the worn surface under a microscope at greater magnification.' },
    { src: '../simulation/outputImages/c02-3.png', caption: 'Wear debris adhered to the counter body', buttonLabel: 'Counter body' },
    { src: '../simulation/outputImages/c02-4.png', caption: 'Ball', buttonLabel: 'Observation of worn surface' }
];

let index1 = 0;
let index2 = 0;

function updateSlideshow(material) {
    if (material === 1) {
        const slide = material1Slides[index1];
        material1Image.src = slide.src;
        material1Caption.textContent = slide.caption;
        material1NextBtn.textContent = slide.buttonLabel;
    } else if (material === 2) {
        const slide = material2Slides[index2];
        material2Image.src = slide.src;
        material2Caption.textContent = slide.caption;
        material2NextBtn.textContent = slide.buttonLabel;
    }
}

// ✅ Working infinite looping for Material 1 Next button
material1NextBtn.onclick = () => {
    index1 = (index1 + 1) % material1Slides.length;
    updateSlideshow(1);
};

// ✅ Working infinite looping for Material 2 Next button
material2NextBtn.onclick = () => {
    index2 = (index2 + 1) % material2Slides.length;
    updateSlideshow(2);
};

function showResult() {
    resultContainer.style.display = 'block';
    document.getElementById("conclusion").style.display = "block";
    // document.getElementById("messageBox").style.display = "none";

    if (selectedMaterial === 1) {
        material1Slideshow.style.display = 'block';
        material2Slideshow.style.display = 'none';
        index1 = 0;
        updateSlideshow(1);  // ensure initial slide is set
    } else if (selectedMaterial === 2) {
        material1Slideshow.style.display = 'none';
        material2Slideshow.style.display = 'block';
        index2 = 0;
        updateSlideshow(2);  // ensure initial slide is set
    }
}

moveButton8.addEventListener('click', showResult);

// Help video logic
document.getElementById("playButton").addEventListener("click", function () {
    document.querySelector(".video-player").style.display = "block";
});

document.getElementById("closeButton").addEventListener("click", function () {
    document.querySelector(".video-player").style.display = "none";
    document.getElementById("video").pause();
});

// Delayed visibility for moveButton8
moveButton7.addEventListener("click", function () {
    setTimeout(function () {
        document.getElementById("moveButton8").style.display = "block";
        document.getElementById("out").style.display = "block";
    }, 5000);
});

// Button 4 appearance after 1 sec of Button 3
moveButton3.addEventListener("click", function () {
    setTimeout(function () {
        document.getElementById("moveButton4").style.display = "block";
    }, 1000);
});

// Refresh logic
refreshButton.addEventListener('click', function () {
    window.location.href = window.location.href;
});

//
let flag1 = false;
let flag2 = true;

function showMessage() {
  const box = document.getElementById('messageBox');
  document.getElementById("out").style.display = "block";

  let learningOutcomes = `
    <h3>Learning Outcomes:</h3>
    <ul>
      <li>Understand the importance of wear</li>
      <li>Perform wear test</li>
      <li>Distinguish between abrasive and adhesive wear</li>
    </ul>
  `;

  if (selectedMaterial == 2) {
    box.innerHTML = `
      <h3>Abrasive Wear – Conclusion</h3>
      <p>
        Abrasive wear occurs when hard particles or rough surfaces slide against a softer material,
        causing material removal through micro-cutting or plowing. It is influenced by surface hardness,
        contact pressure, and sliding speed. Common in machining, polishing, and particulate environments.
        <br><br><button class="reveal-button" onclick="displayObjectives()">Overall conclusion</button>
      </p>
    `;
    box.style.display = 'block';

  } else if (selectedMaterial == 1) {
    box.innerHTML = `
      <h3>Adhesive Wear – Conclusion</h3>
      <p>
        Adhesive wear is caused by material transfer between surfaces due to adhesion. It results in
        material loss and buildup, occurring when materials weld together under pressure and separate
        during motion. Common in metal-to-metal contact without proper lubrication.
      </p><br><br><br>
      <button class="reveal-button" onclick="displayObjectives()">Overall conclusion</button>
    `;
    box.style.display = 'block';

  } else {
    box.style.display = 'none';
  }
}

///ne w

  function displayObjectives() {
    document.getElementById("learningGoals").style.display = "block";
    // document.getElementById("resultContainer").style.display="none";
  }
document.addEventListener('DOMContentLoaded', () => {
  // Choose the buttons you want ticks on (narrow selector if needed)
  const buttons = document.querySelectorAll('#moveButton, #moveButton2');

  // Ensure each button has a <span class="tick">✔️</span>
  buttons.forEach(btn => {
    let tick = btn.querySelector('.tick');
    if (!tick) {
      tick = document.createElement('span');
      tick.className = 'tick';
      tick.textContent = '✔️';
      btn.appendChild(tick);
    }
  });

  // Use event delegation so inline onclick/toggleButtons don’t interfere
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('#moveButton, #moveButton2');
    if (!btn) return;

    // If you want only the latest clicked button to show a tick:
    document.querySelectorAll('#moveButton, #moveButton2').forEach(b => b.classList.remove('has-tick'));
    btn.classList.add('has-tick');

    // If your inline onclick returns false somewhere, this still runs
  });
});