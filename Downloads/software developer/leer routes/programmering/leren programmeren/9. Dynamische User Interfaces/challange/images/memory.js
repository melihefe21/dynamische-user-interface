watchlist = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg'];
watchlistcopy = [...watchlist];
watchlist = shuffle(watchlist);
watchlistcopy = shuffle(watchlistcopy);

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

// let clicked = false;
//       button.addEventListener("click", function() {
//         if (!clicked) {
//           clicked = true;
//         } else {
//           button.style.display = "none";
//         }
//       });
watchlist.forEach(image => {
  const imge = document.createElement("img");
  imge.src = image
  document.body.appendChild(imge)
})

watchlistcopy.forEach(image => {
  const imge = document.createElement("img");
  imge.src = image
  document.body.appendChild(imge)
})