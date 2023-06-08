let btnCount = [ 0, 0, 0 ]

function changeView(btn) {
    console.log(btn.id);
    document.getElementById('image').src = './images/' + btn.id + '.jpg';
    document.getElementById('container').style.backgroundImage = 'url(./images/bg ' + btn.id + '.jpg)';
    btnCount[btn.id - 1] += 1;
    document.getElementById(btn.id).innerHTML = btnCount[btn.id - 1]
}