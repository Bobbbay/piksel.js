class Character {
  constructor(animation_time) {
    this.args = arguments;
    this.time = animation_time;
    console.log(this.args);
  }

  render(id, posX, posY) {
    let iteration = 1;
    let write = this.write;
    let args = this.args;

    write(id, iteration, args, posX, posY);
    if (iteration == args.length - 1) {
      iteration = 1;
    } else {
      iteration++;
    }

    window.setInterval(function () {
      write(id, iteration, args, posX, posY);
      if (iteration == args.length - 1) {
        iteration = 1;
      } else {
        iteration++;
      }
    }, this.time);

    for (var x = 1; x < this.args.length; x++) {}
  }

  write(id, iteration, args, posX, posY) {
    // Initialize Canvas
    var c = document.getElementById(id);
    var ctx = c.getContext("2d");

    // Increase height
    var ih = 0;
    // Increase length
    var il = 0;

    for (var i = 0; i < args[iteration].length; i++) {
      if (!(args[iteration][i] == "\n")) {
        // Set fillstyle to color
        ctx.fillStyle = args[iteration][i];
        // Fill at position with a width of 10x10
        ctx.fillRect(posX + 10 * i - il, posY + ih, 10, 10);
      } else {
        // Is a \n, add to ih and il
        ih += 10;
        il += 60;
      }
    }
  }
}

class Background {
  constructor(color) {
    this.color = color;
  }

  render(id) {
    // Initialize Canvas
    var c = document.getElementById(id);
    var ctx = c.getContext("2d");

    let canvasWidth = document.getElementById(id).offsetWidth;
    let canvasHeight = document.getElementById(id).offsetHeight;

    for (var i = 0; i < canvasWidth; i++) {
      for (var l = 0; l < canvasHeight; l++) {
        ctx.fillStyle = this.color;
        // Fill at position with a width of 10x10
        ctx.fillRect(i, l, 10, 10);
      }
    }
  }
}
