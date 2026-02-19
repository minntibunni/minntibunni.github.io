const mintbunnies = [
    ["./mintbunnies/apricotta.html", "./assets/images/site/apricotta.png", "An image of the mintbunny Apricotta drawn in pixel style."], 
    ["./mintbunnies/aquamarine.html", "./assets/images/site/aquamarine.png", "An image of the mintbunny Aquamarine drawn in pixel style. She is waving to the viewer."],
    ["./mintbunnies/buttercream.html", "./assets/images/site/buttercream.png", "An image of the mintbunny Buttercream drawn in pixel style. She is pointing her paws to each other and looking to the side."],
    ["./mintbunnies/cherryblossom.html", "./assets/images/site/cherryblossom.png", "An image of the mintbunny Cherry Blossom drawn in pixel style. She is winking and smiling."],
    ["./mintbunnies/chocolachip.html", "./assets/images/site/chocola.png", "An image of the mintbunny Chocola Chip drawn in pixel style. She is holding her hand up to her face."],
    ["./mintbunnies/lilybell.html", "./assets/images/site/lilybell.png", "An image of the mintbunny Lilybell drawn in pixel style. She is holding her paw on her chest."],
    ["./mintbunnies/liquoriceswirl.html", "./assets/images/site/liquoriceswirl.png", "An image of the mintbunny Liquorice Swirl drawn in pixel style. She is holding her paw out."],
    ["./mintbunnies/mintymilk.html", "./assets/images/site/mintymilk.png", "An image of the mintbunny Minty Milk drawn in pixel style. She is winking and resting her paws on her torso."],
    ["./mintbunnies/plumpie.html", "./assets/images/site/plumpie.png", "An image of the mintbunny Plum Pie drawn in pixel style. She is waving to the viewer and smiling."]
];

let pagedollDiv = document.getElementById("pagedoll");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function getPagedoll() {
    index = getRndInteger(0, mintbunnies.length);
     pagedollDiv.innerHTML = `
        <a href="${mintbunnies[index][0]}">
            <img src="${mintbunnies[index][1]}" alt="${mintbunnies[index][2]}" title="who's this?" />
        </a>
    `; 

}

getPagedoll();