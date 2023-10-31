$(document).ready(function(){
    CheckLanguage();
    ClickTranslation();
});
function CheckLanguage(){
    var lang = readCookie("language");    
    if(lang){
        Translate(lang);
    }
    else{
        createCookie("language","spanish",2);
    }
}
function ClickTranslation(){
    $(".menu .contentFlag .flag").click(function(){
        var lang = "";
        $(".menu .contentFlag .flag.inactive").removeClass("inactive");
        if($(this).hasClass("flagSpanish")){
            TranslateSpanish();            
            lang = "spanish";
        }
        else if($(this).hasClass("flagEnglish")){
            TranslateEnglish();
            lang = "english";
        }
        else if($(this).hasClass("flagFrench")){
            TranslateFrench();
            lang = "french";
        }
        else if($(this).hasClass("flagGerman")){
            TranslateGerman();
            lang = "german";
        }        
        createCookie("language",lang,2);
    });
}
function Translate(lang){
    if(lang == "spanish"){
        TranslateSpanish();
    }
    else if(lang == "english"){
        TranslateEnglish();
    }
    else if(lang == "french"){
        TranslateFrench();
    }
    else if(lang == "german"){
        TranslateGerman();
    }
}
function TranslateSpanish(){
    $(".menu .contentFlag .flag.flagSpanish").addClass("inactive");
//MENU - FOOTER
    $(".menu .contentMenu .index a,footer .foot .home a").text("Inicio");
    $(".menu .contentMenu .promo a,footer .foot .promos a").text("Promociones");
    $(".menu .contentMenu .gallery a,footer .foot .gallery a").text("Galería");
    $(".menu .contentMenu .us a,footer .foot .us a").text("Nosotros");
    $(".menu .contentMenu .contact a,footer .foot .contact a").text("Contáctenos");
    $("footer b:nth-child(1)").text("Correo electrónico");
    $("footer b:nth-child(2)").text("Teléfono");
// BODY
//INDEX
    if(location.href.split("/")[location.href.split("/").length-1] == "" || location.href.split("/")[location.href.split("/").length-1] == "index"){
        $("main .promotion h3").text("Promociones Nuevas");
        $("main .promotion .pack-1 .descriptionPromotion b").text("Aventura en la Selva:");
        $("main .promotion .pack-1 .descriptionPromotion p").text("Este paquete le permite experimentar la emoción de la selva tropical en Costa Rica con nuestro paquete de aventura en la selva. Durante este viaje, explorarás exuberantes bosques tropicales, te sumergirás en aguas termales volcánicas y te deslizarás por dosel de la selva en tirolesa. También tendrás la oportunidad de observar la rica biodiversidad de la región, que incluye monos, tucanes y perezosos. Este paquete te sumerge en la belleza natural de Costa Rica y en su espíritu aventurero.");
        $("main .promotion .pack-2 .descriptionPromotion b").text("Playas Pradisíacas:");
        $("main .promotion .pack-2 .descriptionPromotion p").text("Descubre la costa pacífica de Costa Rica con nuestro paquete de playas paradisíacas. Este viaje te llevará a algunas de las playas más hermosas del país, donde podrás disfrutar de aguas cristalinas, arena blanca y una brisa tropical refrescante. Realiza actividades como el surf, el buceo y las excursiones en kayak. Además, tendrás tiempo para relajarte en la playa y disfrutar de la rica cultura costarricense. Este paquete es perfecto para los amantes del sol y el mar.");
        $("main .promotion .pack-3 .descriptionPromotion b").text("Descubre la Vida Silvestre:");
        $("main .promotion .pack-3 .descriptionPromotion p").text("Sumérgete en la riqueza natural de Costa Rica con nuestro paquete '"+'Descubre la Vida Silvestre'+"'. Este itinerario te lleva a parques nacionales y reservas naturales donde tendrás la oportunidad de observar la impresionante vida silvestre de Costa Rica. Realiza caminatas guiadas para ver aves exóticas, perezosos y otros animales en su hábitat natural. Además, visita centros de rescate de vida silvestre y aprende sobre los esfuerzos de conservación en el país. Este paquete es ideal para los amantes de la naturaleza y la vida silvestre.");        
        $("main .partner h3").text("Nuestras Alianzas");    
    }
//PROMOTION
    else if(location.href.split("/")[location.href.split("/").length-1] == "promotion"){
        CheckLanguageDefault();
        $("#table thead tr th:nth-child(2)").text("Descripción");
        $("#table thead tr th:nth-child(3)").text("Precio");
        $("#table thead tr th:nth-child(4)").text("Hasta");
        $("#table tbody tr:nth-child(1) td:nth-child(2) b").text("Aventura en la Selva:");
        $("#table tbody tr:nth-child(1) td:nth-child(2) p").text("Este paquete le permite experimentar la emoción de la selva tropical en Costa Rica con nuestro paquete de aventura en la selva. Durante este viaje, explorarás exuberantes bosques tropicales, te sumergirás en aguas termales volcánicas y te deslizarás por dosel de la selva en tirolesa. También tendrás la oportunidad de observar la rica biodiversidad de la región, que incluye monos, tucanes y perezosos. Este paquete te sumerge en la belleza natural de Costa Rica y en su espíritu aventurero.");
        $("#table tbody tr:nth-child(2) td:nth-child(2) b").text("Playas Pradisíacas:");
        $("#table tbody tr:nth-child(2) td:nth-child(2) p").text("Descubre la costa pacífica de Costa Rica con nuestro paquete de playas paradisíacas. Este viaje te llevará a algunas de las playas más hermosas del país, donde podrás disfrutar de aguas cristalinas, arena blanca y una brisa tropical refrescante. Realiza actividades como el surf, el buceo y las excursiones en kayak. Además, tendrás tiempo para relajarte en la playa y disfrutar de la rica cultura costarricense. Este paquete es perfecto para los amantes del sol y el mar.");
        $("#table tbody tr:nth-child(3) td:nth-child(2) b").text("Descubre la Vida Silvestre:");
        $("#table tbody tr:nth-child(3) td:nth-child(2) p").text("Sumérgete en la riqueza natural de Costa Rica con nuestro paquete '"+'Descubre la Vida Silvestre'+"'. Este itinerario te lleva a parques nacionales y reservas naturales donde tendrás la oportunidad de observar la impresionante vida silvestre de Costa Rica. Realiza caminatas guiadas para ver aves exóticas, perezosos y otros animales en su hábitat natural. Además, visita centros de rescate de vida silvestre y aprende sobre los esfuerzos de conservación en el país. Este paquete es ideal para los amantes de la naturaleza y la vida silvestre.");        
    }
//ABOUT US
    else if(location.href.split("/")[location.href.split("/").length-1] == "about_us"){
        $(".mision .description-1 b").text("Visión");
        $(".mision .description-2 b").text("Misión");
        $(".mision .description-1 p").remove();
        $(".mision .description-1 b").after("<p>En <i>Turismo para Todos</i>, nuestra visión es ser líderes en la creación de experiencias turísticas memorables en Costa Rica. Buscamos inspirar a viajeros de todo el mundo a descubrir la riqueza natural y cultural de este hermoso país. Nuestra pasión es brindar servicios de alta calidad que conecten a las personas con la maravillosa diversidad de Costa Rica.</p>");
        $(".mision .description-2 p").text("Nuestra misión es proporcionar a nuestros clientes experiencias auténticas y enriquecedoras a través de itinerarios turísticos excepcionales. Nos comprometemos a promover prácticas sostenibles, respetando y preservando el entorno natural y las comunidades locales que visitamos. Trabajamos con dedicación para garantizar que cada viaje con nosotros sea una aventura inolvidable.");
    }
//GALLERY
    else if(location.href.split("/")[location.href.split("/").length-1] == "gallery"){
        $("main .head h3").text("Galería");
        $(".gallery .box-1 .galleryFoot h3").text("Promociones");
        $(".gallery .box-1 .galleryFoot p").text("Promociones tanto vigentes como pasadas");
        $(".gallery .box-2 .galleryFoot h3").text("Paisajes montañosos");
        $(".gallery .box-3 .galleryFoot h3").text("Paisajes en playas");
    }  
}
function TranslateEnglish(){
    $(".menu .contentFlag .flag.flagEnglish").addClass("inactive");
//MENU - FOOTER
        $(".menu .contentMenu .index a,footer .foot .home a").text("Home");
        $(".menu .contentMenu .promo a,footer .foot .promos a").text("Promotions");
        $(".menu .contentMenu .gallery a,footer .foot .gallery a").text("Gallery");
        $(".menu .contentMenu .us a,footer .foot .us a").text("About Us");
        $(".menu .contentMenu .contact a,footer .foot .contact a").text("Contact");
        $("footer b:nth-child(1)").text("Email");
        $("footer b:nth-child(2)").text("Phone");
// BODY
//INDEX
    if(location.href.split("/")[location.href.split("/").length-1] == "" || location.href.split("/")[location.href.split("/").length-1] == "index"){
        $("main .promotion h3").text("New Promotions");
        $("main .promotion .pack-1 .descriptionPromotion b").text("Jungle Adventure:");
        $("main .promotion .pack-1 .descriptionPromotion p").text("This package allows you to experience the thrill of the rainforest in Costa Rica with our jungle adventure package. During this journey, you will explore lush tropical forests, soak in volcanic hot springs, and zip through the jungle canopy on a zipline. You will also have the opportunity to observe the rich biodiversity of the region, including monkeys, toucans, and sloths. This package immerses you in the natural beauty of Costa Rica and its adventurous spirit.");
        $("main .promotion .pack-2 .descriptionPromotion b").text("Paradise Beaches:");
        $("main .promotion .pack-2 .descriptionPromotion p").text("Discover Costa Rica's Pacific coast with our paradise beaches package. This journey will take you to some of the most beautiful beaches in the country, where you can enjoy crystal-clear waters, white sand, and a refreshing tropical breeze. Engage in activities such as surfing, scuba diving, and kayaking excursions. Additionally, you will have time to relax on the beach and savor the rich Costa Rican culture. This package is perfect for sun and sea lovers.");
        $("main .promotion .pack-3 .descriptionPromotion b").text("Discover Wildlife");
        $("main .promotion .pack-3 .descriptionPromotion p").text("Immerse yourself in the natural richness of Costa Rica with our ''"+'Discover Wildlife'+"'' package. This itinerary takes you to national parks and nature reserves where you will have the opportunity to observe Costa Rica's stunning wildlife. Take guided hikes to see exotic birds, sloths, and other animals in their natural habitat. Additionally, visit wildlife rescue centers and learn about conservation efforts in the country. This package is ideal for nature and wildlife enthusiasts.");        
        $("main .partner h3").text("Our Partnerships");    
    }
//PROMOTION
    else if(location.href.split("/")[location.href.split("/").length-1] == "promotion"){
        CheckLanguageDefault();
        $("#table thead tr th:nth-child(2)").text("Description");
        $("#table thead tr th:nth-child(3)").text("Price");
        $("#table thead tr th:nth-child(4)").text("Avaible");
        $("#table tbody tr:nth-child(1) td:nth-child(2) b").text("Jungle Adventure:");
        $("#table tbody tr:nth-child(1) td:nth-child(2) p").text("This package allows you to experience the thrill of the rainforest in Costa Rica with our jungle adventure package. During this journey, you will explore lush tropical forests, soak in volcanic hot springs, and zip through the jungle canopy on a zipline. You will also have the opportunity to observe the rich biodiversity of the region, including monkeys, toucans, and sloths. This package immerses you in the natural beauty of Costa Rica and its adventurous spirit.");
        $("#table tbody tr:nth-child(2) td:nth-child(2) b").text("Paradise Beaches:");
        $("#table tbody tr:nth-child(2) td:nth-child(2) p").text("Discover Costa Rica's Pacific coast with our paradise beaches package. This journey will take you to some of the most beautiful beaches in the country, where you can enjoy crystal-clear waters, white sand, and a refreshing tropical breeze. Engage in activities such as surfing, scuba diving, and kayaking excursions. Additionally, you will have time to relax on the beach and savor the rich Costa Rican culture. This package is perfect for sun and sea lovers.");
        $("#table tbody tr:nth-child(3) td:nth-child(2) b").text("Discover Wildlife");
        $("#table tbody tr:nth-child(3) td:nth-child(2) p").text("Immerse yourself in the natural richness of Costa Rica with our ''"+'Discover Wildlife'+"'' package. This itinerary takes you to national parks and nature reserves where you will have the opportunity to observe Costa Rica's stunning wildlife. Take guided hikes to see exotic birds, sloths, and other animals in their natural habitat. Additionally, visit wildlife rescue centers and learn about conservation efforts in the country. This package is ideal for nature and wildlife enthusiasts.");        
    }
//ABOUT US    
    else if(location.href.split("/")[location.href.split("/").length-1] == "about_us"){
        $(".mision .description-1 b").text("Mission");
        $(".mision .description-2 b").text("Vision");
        $(".mision .description-1 p").remove();
        $(".mision .description-1 b").after("<p>At <i>Turismo para Todos</i>, our vision is to be a leader in creating memorable tourist experiences in Costa Rica. We aim to inspire travelers from around the world to discover the natural and cultural richness of this beautiful country. Our passion is to provide high-quality services that connect people with Costa Rica's wonderful diversity.</p>");
        $(".mision .description-2 p").text("Our mission is to offer our customers authentic and enriching experiences through exceptional tourist itineraries. We are committed to promoting sustainable practices, respecting and preserving the natural environment and local communities we visit. We work diligently to ensure that every journey with us is an unforgettable adventure.");
    }
//GALLERY
    else if(location.href.split("/")[location.href.split("/").length-1] == "gallery"){
        $("main .head h3").text("Gallery");
        $(".gallery .box-1 .galleryFoot h3").text("Promotions");
        $(".gallery .box-1 .galleryFoot p").text("Current and Past Promotions");
        $(".gallery .box-2 .galleryFoot h3").text("Mountain Landscapes");
        $(".gallery .box-3 .galleryFoot h3").text("Beach Landscapes");
    }  
}
function TranslateFrench(){
    $(".menu .contentFlag .flag.flagFrench").addClass("inactive");
//MENU - FOOTER
    $(".menu .contentMenu .index a,footer .foot .home a").text("Accueil");
    $(".menu .contentMenu .promo a,footer .foot .promos a").text("Promotions");
    $(".menu .contentMenu .gallery a,footer .foot .gallery a").text("Galerie");
    $(".menu .contentMenu .us a,footer .foot .us a").text("À Propos de Nous");
    $(".menu .contentMenu .contact a,footer .foot .contact a").text("Contactez-Nous");
    $("footer b:nth-child(1)").text("Courriel");
    $("footer b:nth-child(2)").text("Téléphone");
// BODY
//INDEX
    if(location.href.split("/")[location.href.split("/").length-1] == "" || location.href.split("/")[location.href.split("/").length-1] == "index"){
    $("main .promotion h3").text("Nouvelles Promotions");
        $("main .promotion .pack-1 .descriptionPromotion b").text("Aventure dans la Jungle :");
        $("main .promotion .pack-1 .descriptionPromotion p").text("Ce forfait vous permet de vivre l'excitation de la jungle tropicale au Costa Rica avec notre forfait aventure dans la jungle. Au cours de ce voyage, vous explorerez des forêts tropicales luxuriantes, vous vous baignerez dans des sources chaudes volcaniques et vous glisserez à travers la canopée de la jungle en tyrolienne. Vous aurez également l'opportunité d'observer la riche biodiversité de la région, y compris des singes, des toucans et des paresseux. Ce forfait vous plonge dans la beauté naturelle du Costa Rica et dans son esprit aventureux.");
        $("main .promotion .pack-2 .descriptionPromotion b").text("Plages Paradisiaques:");
        $("main .promotion .pack-2 .descriptionPromotion p").text("Découvrez la côte pacifique du Costa Rica avec notre forfait de plages paradisiaques. Ce voyage vous emmènera sur certaines des plages les plus magnifiques du pays, où vous pourrez profiter d'eaux cristallines, de sable blanc et d'une brise tropicale rafraîchissante. Participez à des activités telles que le surf, la plongée sous-marine et des excursions en kayak. De plus, vous aurez le temps de vous détendre sur la plage et de savourer la riche culture costaricaine. Ce forfait est parfait pour les amateurs de soleil et de mer.");
        $("main .promotion .pack-3 .descriptionPromotion b").text("Découvrez la Faune:");
        $("main .promotion .pack-3 .descriptionPromotion p").text("Plongez dans la richesse naturelle du Costa Rica avec notre forfait '"+'Découvrez la Faune'+"'. Cet itinéraire vous mène dans des parcs nationaux et des réserves naturelles où vous aurez l'occasion d'observer la faune impressionnante du Costa Rica. Participez à des randonnées guidées pour voir des oiseaux exotiques, des paresseux et d'autres animaux dans leur habitat naturel. De plus, visitez des centres de sauvetage de la faune et apprenez-en davantage sur les efforts de conservation dans le pays. Ce forfait est idéal pour les amateurs de nature et de faune.");        
        $("main .partner h3").text("Nos Partenariats");  
    }    
//PROMOTION
    else if(location.href.split("/")[location.href.split("/").length-1] == "promotion"){    
        CheckLanguageDefault();    
        $("#table thead tr th:nth-child(2)").text("Description");
        $("#table thead tr th:nth-child(3)").text("Prix");
        $("#table thead tr th:nth-child(4)").text("Disponible");        
        $("#table tbody tr:nth-child(1) td:nth-child(2) b").text("Aventure dans la Jungle :");
        $("#table tbody tr:nth-child(1) td:nth-child(2) p").text("Ce forfait vous permet de vivre l'excitation de la jungle tropicale au Costa Rica avec notre forfait aventure dans la jungle. Au cours de ce voyage, vous explorerez des forêts tropicales luxuriantes, vous vous baignerez dans des sources chaudes volcaniques et vous glisserez à travers la canopée de la jungle en tyrolienne. Vous aurez également l'opportunité d'observer la riche biodiversité de la région, y compris des singes, des toucans et des paresseux. Ce forfait vous plonge dans la beauté naturelle du Costa Rica et dans son esprit aventureux.");
        $("#table tbody tr:nth-child(2) td:nth-child(2) b").text("Plages Paradisiaques:");
        $("#table tbody tr:nth-child(2) td:nth-child(2) p").text("Découvrez la côte pacifique du Costa Rica avec notre forfait de plages paradisiaques. Ce voyage vous emmènera sur certaines des plages les plus magnifiques du pays, où vous pourrez profiter d'eaux cristallines, de sable blanc et d'une brise tropicale rafraîchissante. Participez à des activités telles que le surf, la plongée sous-marine et des excursions en kayak. De plus, vous aurez le temps de vous détendre sur la plage et de savourer la riche culture costaricaine. Ce forfait est parfait pour les amateurs de soleil et de mer.");
        $("#table tbody tr:nth-child(3) td:nth-child(2) b").text("Découvrez la Faune:");
        $("#table tbody tr:nth-child(3) td:nth-child(2) p").text("Plongez dans la richesse naturelle du Costa Rica avec notre forfait '"+'Découvrez la Faune'+"'. Cet itinéraire vous mène dans des parcs nationaux et des réserves naturelles où vous aurez l'occasion d'observer la faune impressionnante du Costa Rica. Participez à des randonnées guidées pour voir des oiseaux exotiques, des paresseux et d'autres animaux dans leur habitat naturel. De plus, visitez des centres de sauvetage de la faune et apprenez-en davantage sur les efforts de conservation dans le pays. Ce forfait est idéal pour les amateurs de nature et de faune.");        
    }  
//ABOUT US
    else if(location.href.split("/")[location.href.split("/").length-1] == "about_us"){
        $(".mision .description-1 b").text("Mission");
        $(".mision .description-2 b").text("Vision");
        $(".mision .description-1 p").remove();
        $(".mision .description-1 b").after("<p>Chez <i>Turismo para Todos</i>, notre vision est d'être un leader dans la création d'expériences touristiques mémorables au Costa Rica. Nous visons à inspirer les voyageurs du monde entier à découvrir la richesse naturelle et culturelle de ce beau pays. Notre passion est de fournir des services de haute qualité qui relient les gens à la merveilleuse diversité du Costa Rica.<p/>");
        $(".mision .description-2 p").text("Notre mission est d'offrir à nos clients des expériences authentiques et enrichissantes à travers des itinéraires touristiques exceptionnels. Nous nous engageons à promouvoir des pratiques durables, en respectant et en préservant l'environnement naturel et les communautés locales que nous visitons. Nous travaillons avec dévouement pour nous assurer que chaque voyage avec nous soit une aventure inoubliable.");
    }
//GALLERY
    else if(location.href.split("/")[location.href.split("/").length-1] == "gallery"){
        $("main .head h3").text("Galerie");
        $(".gallery .box-1 .galleryFoot h3").text("Promotions");
        $(".gallery .box-1 .galleryFoot p").text("Promotions actuelles et passées");
        $(".gallery .box-2 .galleryFoot h3").text("Paysages de montagne");
        $(".gallery .box-3 .galleryFoot h3").text("Paysages de plage");
    }    
}
function TranslateGerman(){
    $(".menu .contentFlag .flag.flagGerman").addClass("inactive");
//MENU - FOOTER
    $(".menu .contentMenu .index a,footer .foot .home a").text("Startseite");
    $(".menu .contentMenu .promo a,footer .foot .promos a").text("Sonderangebote");
    $(".menu .contentMenu .gallery a,footer .foot .gallery a").text("Galerie");
    $(".menu .contentMenu .us a,footer .foot .us a").text("Über Uns");
    $(".menu .contentMenu .contact a,footer .foot .contact a").text("Kontaktieren Sie Uns");
    $("footer b:nth-child(1)").text("E-Mail");
    $("footer b:nth-child(2)").text("Telefon");
// BODY
//INDEX
    if(location.href.split("/")[location.href.split("/").length-1] == "" || location.href.split("/")[location.href.split("/").length-1] == "index"){
        $("main .promotion h3").text("Neue Aktionen");
        $("main .promotion .pack-1 .descriptionPromotion b").text("Dschungelabenteuer: ");
        $("main .promotion .pack-1 .descriptionPromotion p").text("Dieses Paket ermöglicht es Ihnen, das Abenteuer des Regenwalds in Costa Rica mit unserem Dschungelabenteuer-Paket zu erleben. Während dieser Reise werden Sie üppige tropische Wälder erkunden, in vulkanischen heißen Quellen baden und durch den Dschungel auf einer Seilrutsche gleiten. Sie haben auch die Gelegenheit, die reiche Artenvielfalt der Region zu beobachten, einschließlich Affen, Tukane und Faultiere. Dieses Paket taucht Sie in die natürliche Schönheit Costa Ricas und in seinen abenteuerlichen Geist ein.");
        $("main .promotion .pack-2 .descriptionPromotion b").text("Paradiesische Strände:");
        $("main .promotion .pack-2 .descriptionPromotion p").text("Entdecken Sie die Pazifikküste von Costa Rica mit unserem Paket für paradiesische Strände. Diese Reise führt Sie zu einigen der schönsten Strände des Landes, wo Sie kristallklares Wasser, weißen Sand und eine erfrischende tropische Brise genießen können. Nehmen Sie an Aktivitäten wie Surfen, Tauchen und Kajakausflügen teil. Außerdem haben Sie Zeit, sich am Strand zu entspannen und die reiche Kultur Costa Ricas zu genießen. Dieses Paket ist ideal für Sonnen- und Meeresliebhaber.");
        $("main .promotion .pack-3 .descriptionPromotion b").text("Entdecke die Tierwelt: ");
        $("main .promotion .pack-3 .descriptionPromotion p").text("Tauchen Sie ein in den natürlichen Reichtum Costa Ricas mit unserem Paket '"+'Entdecke die Tierwelt'+"'. Dieses Reiseplan führt Sie zu Nationalparks und Naturreservaten, in denen Sie die Gelegenheit haben, die atemberaubende Tierwelt Costa Ricas zu beobachten. Nehmen Sie an geführten Wanderungen teil, um exotische Vögel, Faultiere und andere Tiere in ihrem natürlichen Lebensraum zu sehen. Besuchen Sie außerdem Wildtierrettungszentren und erfahren Sie mehr über die Bemühungen zur Erhaltung in diesem Land. Dieses Paket ist ideal für Natur- und Tierliebhaber.");        
        $("main .partner h3").text("Unsere Partnerschaften");  
    }   
//PROMOTION
    else if(location.href.split("/")[location.href.split("/").length-1] == "promotion"){        
        CheckLanguageDefault();
        $("#table thead tr th:nth-child(2)").text("Beschreibung");
        $("#table thead tr th:nth-child(3)").text("Preis");
        $("#table thead tr th:nth-child(4)").text("Verfügbar");        
        $("#table tbody tr:nth-child(1) td:nth-child(2) b").text("Dschungelabenteuer: ");
        $("#table tbody tr:nth-child(1) td:nth-child(2) p").text("Dieses Paket ermöglicht es Ihnen, das Abenteuer des Regenwalds in Costa Rica mit unserem Dschungelabenteuer-Paket zu erleben. Während dieser Reise werden Sie üppige tropische Wälder erkunden, in vulkanischen heißen Quellen baden und durch den Dschungel auf einer Seilrutsche gleiten. Sie haben auch die Gelegenheit, die reiche Artenvielfalt der Region zu beobachten, einschließlich Affen, Tukane und Faultiere. Dieses Paket taucht Sie in die natürliche Schönheit Costa Ricas und in seinen abenteuerlichen Geist ein.");
        $("#table tbody tr:nth-child(2) td:nth-child(2) b").text("Paradiesische Strände:");
        $("#table tbody tr:nth-child(2) td:nth-child(2) p").text("Entdecken Sie die Pazifikküste von Costa Rica mit unserem Paket für paradiesische Strände. Diese Reise führt Sie zu einigen der schönsten Strände des Landes, wo Sie kristallklares Wasser, weißen Sand und eine erfrischende tropische Brise genießen können. Nehmen Sie an Aktivitäten wie Surfen, Tauchen und Kajakausflügen teil. Außerdem haben Sie Zeit, sich am Strand zu entspannen und die reiche Kultur Costa Ricas zu genießen. Dieses Paket ist ideal für Sonnen- und Meeresliebhaber.");
        $("#table tbody tr:nth-child(3) td:nth-child(2) b").text("Entdecke die Tierwelt: ");
        $("#table tbody tr:nth-child(3) td:nth-child(2) p").text("Tauchen Sie ein in den natürlichen Reichtum Costa Ricas mit unserem Paket '"+'Entdecke die Tierwelt'+"'. Dieses Reiseplan führt Sie zu Nationalparks und Naturreservaten, in denen Sie die Gelegenheit haben, die atemberaubende Tierwelt Costa Ricas zu beobachten. Nehmen Sie an geführten Wanderungen teil, um exotische Vögel, Faultiere und andere Tiere in ihrem natürlichen Lebensraum zu sehen. Besuchen Sie außerdem Wildtierrettungszentren und erfahren Sie mehr über die Bemühungen zur Erhaltung in diesem Land. Dieses Paket ist ideal für Natur- und Tierliebhaber.");        
    }   
//ABOUT US
    else if(location.href.split("/")[location.href.split("/").length-1] == "about_us"){
        $(".mision .description-1 b").text("Mission");
        $(".mision .description-2 b").text("Vision");
        $(".mision .description-1 p").remove();
        $(".mision .description-1 b").after("<p>Bei <i>Turismo para Todos</i> ist unsere Vision, führend bei der Schaffung unvergesslicher touristischer Erlebnisse in Costa Rica zu sein. Wir möchten Reisende aus der ganzen Welt inspirieren, den natürlichen Reichtum und die kulturelle Vielfalt dieses wunderschönen Landes zu entdecken. Unsere Leidenschaft besteht darin, hochwertige Dienstleistungen anzubieten, die Menschen mit der wunderbaren Vielfalt Costa Ricas verbinden.</p>");
        $(".mision .description-2 p").text("Unsere Mission ist es, unseren Kunden authentische und bereichernde Erlebnisse durch außergewöhnliche touristische Reiserouten zu bieten. Wir verpflichten uns zur Förderung nachhaltiger Praktiken und zur Achtung und Erhaltung der natürlichen Umwelt und der lokalen Gemeinschaften, die wir besuchen. Wir arbeiten mit Hingabe daran, sicherzustellen, dass jede Reise mit uns zu einem unvergesslichen Abenteuer wird.");
    }      
//GALLERY
    else if(location.href.split("/")[location.href.split("/").length-1] == "gallery"){
        $("main .head h3").text("Galerie");
        $(".gallery .box-1 .galleryFoot h3").text("Promotionen");
        $(".gallery .box-1 .galleryFoot p").text("Aktuelle und vergangene Promotionen");
        $(".gallery .box-2 .galleryFoot h3").text("Berglandschaften");
        $(".gallery .box-3 .galleryFoot h3").text("Strandlandschaften");
    }
}