function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6lIzuIE2N1C":
        Script1();
        break;
  }
}

function Script1()
{
  // Ambil variabel Storyline
var player = GetPlayer();

// Buat angka acak 1-3
var randomValue = Math.floor(Math.random() * 3) + 1;

// Masukkan ke variabel Storyline
player.SetVar("randomWeather", randomValue);
}

