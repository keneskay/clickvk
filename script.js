let volume = 0;

snake = document.getElementsByClassName('volume-snake')[0];

function PlusVolume() {
  if (volume != 230) {
    volume = volume + 23;
    snake.style.height = volume;
  }
}

function MinusVolume() {
  if (volume != 0) {
    volume = volume - 23;
    snake.style.height = volume;
  }
}



