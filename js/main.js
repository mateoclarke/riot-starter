  var buzzer = {
    press: function () {
      this.trigger('buzz');
    }
  };
  // This adds an `on` method!
  $.observable(buzzer);

  // Now we can use it!
  buzzer.on('buzz', function () {
    alert('The buzzer went off!');
  });

  buzzer.press();
  buzzer.press();


// PE #1.1
var pizzaCook = {
  ego: 0,
  spinDough: function () {
    this.ego += 1;
    if (this.ego > 10) {
      this.trigger('confidence');
    }
  }
};

$.observable(pizzaCook);

pizzaCook.on('confidence', function () {
  alert('I HAVE SOLVED WORLD HUNGER');
});

for (var i = 0; i < 11; i += 1) {
  pizzaCook.spinDough();
}

// PE #1.2
var weather = {
  change: function () {
  this.trigger('snow-storm');
  this.trigger('tornado');
  }
};

$.observable(weather);


weather.on('snow-storm', function () {
  alert('Bring your coats');
});

weather.on('tornado', function () {
  alert('Everybahdy panic!');
});

weather.change('tornado');

