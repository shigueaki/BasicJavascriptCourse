var i = 1;
var pico = 20;
while (i <= pico){
    var spaceBetween = "";
    var spaceBefore = "";
    
    for (var j = 1; j < i; j++)
    {
        spaceBetween += "  ";
    }
   
    for (var h = i; h <= pico; h++) {
        spaceBefore += " ";
    }
    
    console.log(`${spaceBefore}/${spaceBetween}\\${spaceBefore}`);

    if (i == pico) {
        var countGround = 0;
        var groundDraw = "";
        while (countGround <= spaceBetween.length+1) {
            groundDraw += `=`;
            countGround++;
        }
        console.log(`${spaceBefore}${groundDraw}${spaceBefore}`);
    }        
    i++;
}
