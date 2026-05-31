
let mainText = document.getElementById("mainText").innerHTML;
let outerElements = document.getElementById("outerElements").innerHTML;
let selectedPage = document.getElementById("selectedPage").innerHTML;

let templateHead = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>${selectedPage} - ScrambledRubiks's Website</title>
    <link rel="icon" type="image/png" href="/emblem.png">
    <meta charset="utf-8">
    <script src="stats.js" defer></script>
    <link id="template" rel="stylesheet" href="template/template.css"> <!--TODO something-->
    </head>
`;
let templateBody = `
<body class = "bg">
    <br>
    <br>

  <div class="thing">
    <div class="emblem">
    <img class="headerBG" src="https://scrambledrubiks.neocities.org/box-bg.png"> 
      <div class="title"> 
      <img src="https://scrambledrubiks.neocities.org/header.png" alt="Thank you to Yuxian from Fontspace.com for this great pixelated font! https://www.fontspace.com/gangsmall-font-f69090">
      </div>
    </div>
    <div class="header">
    
      <div class="card" id="homePage">
      <a 
      href="https://scrambledrubiks.neocities.org">
        <img src="https://scrambledrubiks.neocities.org/menu_3.png" alt="Card Back" id="homePageImage">
        <div class="centered">Home</div>
        </a>
    </div>  <div class="card" id="projectsPage">
      <a 
      href="https://scrambledrubiks.neocities.org/projects">
        <img src="https://scrambledrubiks.neocities.org/menu_3.png" alt="Card Back" id="projectsPageImage">
        <div class="centered">Projects</div>
        </a>
    </div> <div class="card" id="fractalsPage">
      <a 
      href="https://scrambledrubiks.neocities.org/fractals">
        <img src="https://scrambledrubiks.neocities.org/menu_3.png" alt="Card Back" id="fractalsPageImage">
        <div class="centered">Fractals</div>
        </a>
    </div>
    <div class="card" id="otherPage">
        <img src="https://scrambledrubiks.neocities.org/menu_2.png" alt="Card Back" id="otherPageImage">
        <div class="centered"><div class="menuPhoto" id="otherText">Photo Review Helper</div></div>
    </div>
      </div>
      &#10;
      <div id="mainText" class="body">
        
  </div>
   <div class="footer">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/CC_BY_icon.svg/88px-CC_BY_icon.svg.png">
  </div>
</div>
</body>


</html>
`

document.head.innerHTML = templateHead;
document.body.innerHTML = templateBody;
document.body.classList="bg";

document.getElementById("mainText").innerHTML = mainText;
console.log(document.getElementById("mainText"))
document.body.innerHTML = outerElements + document.body.innerHTML;


if(selectedPage.includes("Home")) {
    document.getElementById("otherPage").remove();
    document.getElementById("homePageImage").src = "https://scrambledrubiks.neocities.org/menu_2.png";
} else if(selectedPage.includes("Projects")) {
    document.getElementById("otherPage").remove();
    document.getElementById("projectsPageImage").src = "https://scrambledrubiks.neocities.org/menu_2.png";
} else if(selectedPage.includes("Fractals")) {
    document.getElementById("otherPage").remove();
    document.getElementById("fractalsPageImage").src = "https://scrambledrubiks.neocities.org/menu_2.png";
} else {
    document.getElementById("otherText").innerHTML = selectedPage;
}
