$(function() {
  var lastClicked = null;
  var txt = $('h1');

  // Función para restablecer el último elemento clicado
  function resetLastClicked() {
    if (lastClicked) {
      lastClicked.removeClass('puff2').addClass('burn2');
      lastClicked.siblings('.smoke2').removeClass('puff2-bubble');
      lastClicked.siblings('#glow2').css('display', 'block');
    }
  }

  $('#flame').on({
    click: function() {
      resetLastClicked();
      $(this).removeClass('burn').addClass('puff');
      $(this).siblings('.smoke').addClass('puff-bubble');
      $(this).siblings('#glow').remove();
      txt.html("Mi <b>Motita De Polvo</b> Suspendidad En Un Rayo De Sol...");
      lastClicked = $(this);
    }
  });

  $('#flame2').on({
    click: function() {
      resetLastClicked();
      $(this).removeClass('burn2').addClass('puff2');
      $(this).siblings('.smoke2').addClass('puff2-bubble');
      $(this).siblings('#glow2').remove();
      txt.html("Feliz <b>Cumpleaños</b> Mi Amor...");
      lastClicked = $(this);
    }
  });

  $('#flame3').on({
    click: function() {
      resetLastClicked();
      $(this).removeClass('burn3').addClass('puff3');
      $(this).siblings('.smoke3').addClass('puff3-bubble');
      $(this).siblings('#glow3').remove();
      txt.html("Eres la chispa que enciende mi motor y el destino al que siempre quiero llegar. ...");
      lastClicked = $(this);
    }
  });
});
