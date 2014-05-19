function Sisluettelo(){
	this.luettelo = LuoLuettelo();
}

function LuoLuettelo(){
	$(".kansio-kontti").each(function(){
		var alikansio_nimi = $(this).children(".alikansio-otsikko").text().trim();
		var alikansio_kategoria = $(this).children(".alikansio-kategoria").text().trim();
		var kansio_nimi = $(this).children(".kansio-otsikko").text().trim();
		var luokka = "kansio-puu-linkki";
		
		if($(this).hasClass("alikansio")) {
			var alikansio_nimi_replace = alikansio_nimi.replace(/ /g, '');
			$(this).attr("id",alikansio_nimi_replace);
			$(".kansio-puu-ul").append('<a href="#' + alikansio_nimi_replace + '" data-category="' + alikansio_kategoria + '" class="' + luokka + ' alikansio-puu-linkki ' + alikansio_kategoria + '"><li><div class="kansio-puu-alimerkki kansio-puu-merkki"><img style="float:left;" src="assets/img/little7.svg" />'+alikansio_nimi+'</div></li></a>'); 
		}
					//if-lause on tässä välttämätön!
					else if($(this).children(".kansio-otsikko").text().length > 0){
						var kansio_nimi_replace = kansio_nimi.replace(/ /g, '');
						$(this).attr("id",kansio_nimi_replace);
						$(".kansio-puu-ul").append('<a href="#' + kansio_nimi_replace + '" data-category="' + kansio_nimi_replace + '" class="' + luokka + ' ylikansio"><li><div class="kansio-puu-ylimerkki kansio-puu-merkki"><img style="float:left;" src="assets/img/little7.svg" />'+kansio_nimi+'</div></li></a>'); 
					}
					else {
						return;	
					}
				});

}


$(function(){

	var UusiLuettelo = new Sisluettelo();
	UusiLuettelo.luettelo;

});




