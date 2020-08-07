class Character {
  constructor(animation_time) {
    this.time = animation_time;
    this.args = arguments;
  }

  init(id) {
    document.getElementById(id).setAttribute("width", window.innerWidth);
    document.getElementById(id).setAttribute("height", window.innerHeight);

    this.id = id;
  }

  render(posX, posY) {
    let iteration = 1;
    let write = this.write;
    let args = this.args;
    let id = this.id;

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

    var extra = 0;

    for (var i = 0; i < args[iteration].length; i++) {
      if (!(args[iteration][i] == "\n")) {
        extra += 1;
        // Set fillstyle to color
        ctx.fillStyle = args[iteration][i];
        // Fill at position with a width and height of 10x10
        ctx.fillRect(posX + 10 * extra, posY + ih, 10, 10);
      } else {
        // Is a \n, add to ih and il
        ih += 10;
        extra = 0;
      }
    }
  }
}

class Background {
  constructor(color) {
    this.color = color;
  }

  init(id) {
    this.id = id;
  }

  render() {
    // Initialize Canvas
    var c = document.getElementById(this.id);
    var ctx = c.getContext("2d");

    let canvasWidth = document.getElementById(this.id).width;
    let canvasHeight = document.getElementById(this.id).height;

    for (var i = 0; i < canvasWidth; i++) {
      for (var l = 0; l < canvasHeight; l++) {
        ctx.fillStyle = this.color;
        // Fill at position with a width of 10x10
        ctx.fillRect(i, l, 10, 10);
      }
    }
  }
}
