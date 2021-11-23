const backgrounds = [
  {
    name: "",
    src: "mwangi-gatheca-qlKaN7eqay8-unsplash.jpg",
  },
  {
    name: "",
    src: "anthony-reungere-s6xt1mwF_iU-unsplash.jpg",
  },
  {
    name: "",
    src: "daniel-novykov-UARLPxdjfsI-unsplash.jpg",
  },
  {
    name: "",
    src: "eugene-aikimov-azqdBkIHVo0-unsplash.jpg",
  },
  {
    name: "",
    src: "juan-rojas-M62J7DBZ-hY-unsplash.jpg"
  },
]
const todayBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)]

// img 태그 생성
// const bgImage = document.createElement("img")
// bgImage.src = `img/${todayBackground.src}`
// document.body.appendChild(bgImage)

// css
document.body.background = `img/${todayBackground.src}`
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
// document.body.setAttribute("no-repeat", true)

// document.body.style.backgroundImage = "url('https://www.tutorialspoint.com/html5/images/html5-mini-logo.jpg')";