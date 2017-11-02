/**
 * Created by LEB on 24/10/17.
 * Based on Github's Nating/WhasApp Stats'
 *
 * */

(function(){
    // directory with members numbers and names
    var directory = [
        {Number:" ‪+55 31 9961‑9730‬",Name:"Delfonso"},
        {Number:" ‪+55 31 8793‑3002‬",Name:"Fábio Magalhães"},
        {Number:" ‪+55 21 99156‑2389‬",Name:"Kilynho"},
        {Number:" ‪+55 31 9961‑1422‬",Name:"Pirex"},
        {Number:" ‪+55 35 8898‑7194‬",Name:"Reinaldo"},
        {Number:" ‪+55 31 8855‑2585‬",Name:"Rhelman"},
        {Number:"‪ +55 21 96700‑0087‬",Name:"César Guimarães"},
        {Number:" ‪+55 21 98748‑8787‬",Name:"Luiz Valentini"},
        {Number:" +Leandro Quadros Amorim",Name:"Leandro Amorim"},
        {Number:"‪+55 31 8812‑1530‬",Name:"Toni Claret"},
        {Number:"‪+55 21 98164‑5003‬",Name:"Edson Leite (Didi)"},
        {Number:"‪+55 31 9961‑1735‬",Name:"Fernando"},
        {Number:"‪+55 31 9609‑0304‬",Name:"Gilberto Caixeta"},
        {Number:"‪+55 31 9819‑5680‬",Name:"Jorge Inácio"},
        {Number:"‪+55 31 8880‑1378‬",Name:"Maria de Lourdes Prazeres"},
        {Number:"‪+55 21 98291‑1015‬",Name:"Cida"},
        {Number:"‪+55 31 9942‑2749‬",Name:"Vamberto"},
        {Number:"‪+55 31 8470‑1103‬",Name:"José Roberto Fernandes"},
        {Number:"‪+55 31 8041‑4181‬",Name:"Laércio Rezende"},
        {Number:"+LEB",Name:"LEB"},
        {Number:"‪+55 31 8959‑2059‬",Name:"Maria Aparecida"},
        {Number:"‪+55 74 9979‑2100‬",Name:"Celso Piedade"},
        {Number:"‪+55 31 8653‑6964‬",Name:"Samir Cerqueira"},
        {Number:"‪+55 21 98884‑0026‬",Name:"Flávio Versiani"},
        {Number:"‪+55 31 9287‑6197‬",Name:"Carlos Pereira"},
        {Number:"‪+55 31 8795‑3200‬",Name:"Helvécio Bigode"},
        {Number:"‪+55 22 99967‑5722‬",Name:"Luiz Antônio Coelho"},
        {Number:"‪+55 31 8844‑1956‬",Name:"Tomaz"},
        {Number:"‪+55 21 99401‑3575‬",Name:"Magela"},
        {Number:"‪+55 11 98963‑5065‬",Name:"Cida"},
        {Number:"‪+55 62 8466‑8855‬",Name:"Antônio Peixoto"},
        {Number:"‪+55 31 9961‑1121‬",Name:"Geraldo Vitor"},
        {Number:"‪+55 31 8433‑3573‬",Name:"Fábio Freitas"},
        {Number:"‪+55 31 8984‑6365‬",Name:"Hélio Geraldo da Silva"},
        {Number:"‪+55 31 8011‑4665‬",Name:"Alexamdre Mansur"},
        {Number:"‪+55 31 9133‑1331‬",Name:"Simonidas Brasil"},
        {Number:"‪+55 27 99988‑6086‬",Name:"José dos Reis"},
        {Number:"‪+55 31 9655‑1171‬",Name:"Catarina Lopes"},
        {Number:"‪+55 32 9139‑9070‬",Name:"Rozendo"},
        {Number:"‪+55 31 8417‑9410‬",Name:"Rogério Luiz Gomes"},
        {Number:"‪+55 31 9857‑0495‬",Name:"Joaquim Ferraz"},
        {Number:"‪+55 21 99128‑1127‬",Name:"Jacaré"},
        {Number:"‪+55 31 8895‑8662‬",Name:"Marli Coelho"},
        {Number:"‪+55 31 8928‑0425‬",Name:"Taquinho"},
        {Number:"‪+55 31 8811‑4839‬",Name:"Eleonice"},
        {Number:"‪+55 31 8782‑1808‬",Name:"Maria Regina Santos"},
        {Number:"‪+55 31 8010‑3140‬",Name:"Regina"},
        {Number:"‪+55 71 9618‑8309‬",Name:"Patrícia Maia"},
        {Number:"‪+55 27 98814‑7790‬",Name:"Maurício Carazza"},
        {Number:"‪+55 34 9961‑6563‬",Name:"Sebastião Barbosa"},
        {Number:"+Senem",Name:"Senem"},
        {Number:"‪+55 21 99249‑1510‬",Name:"Nora Maia"},
        {Number:"‪+55 31 8040‑3741‬",Name:"Roque"},
        {Number:"‪+55 27 99820‑4032‬",Name:"Ifigênia Mol"},
        {Number:"‪+55 27 98801‑2800‬",Name:"José Mendes"},
        {Number:"‪+55 21 99379‑4104‬",Name:"Arcioni Nem"},
        {Number:"‪+55 21 99397‑5697‬",Name:"Pilar Godoy"},
        {Number:"‪+55 77 9180‑1035‬",Name:"Derli Fausto"},
        {Number:"‪+55 27 99856‑0381‬",Name:"Paulo Márcio Gonzaga"},
        {Number:"‪+55 21 97297‑0229‬",Name:"Sérgio Quintão"},
        {Number:"‪+55 31 8772‑1705‬",Name:"João Pinto"},
        {Number:"‪+55 27 99933‑3151‬",Name:"Geraldo Fernandes"},
        {Number:"‪+55 27 98807‑0641‬",Name:"José Carvalho"},
        {Number:"‪+55 31 8811‑1112‬",Name:"Pedro Chaves"},
        {Number:"‪+55 31 9585‑4422‬",Name:"Paulinho"},
        {Number:"‪+55 22 98803‑8930‬",Name:"Carlos Neves"},
        {Number:"‪+55 31 8888‑5418‬",Name:"Mauro"},
        {Number:"‪+55 31 8813‑1215‬",Name:"Edton Araújo"},
        {Number:"‪+55 79 9956‑3627‬",Name:"Vicente"},
        {Number:"‪+55 31 9200‑6151‬",Name:"Taquinho Repolho"},
        {Number:"‪+55 82 9999‑9327‬",Name:"Bete Salgado"},
        {Number:"‪+55 31 9587‑7897‬",Name:"Edson Sotero"},
        {Number:"‪+55 31 8892‑4832‬",Name:"Valdete Braga"},
        {Number:"+Jorge Black",Name:"Jorge Black"},
        {Number:"‪+55 31 8816‑4876‬",Name:"Lucia Gonçalves"},
        {Number:"‪+55 37 9993‑2703‬",Name:"Geraldo Mendonça"},
        {Number:"‪+55 21 98196‑9919‬",Name:"Eurico"},
        {Number:"‪+55 31 9961‑1473‬",Name:"José Eduardo"},
        {Number:"‪+55 31 9963‑7956‬",Name:"Sérgio Leocádio"},
        {Number:"‪+55 31 9506‑8028‬",Name:"José Luis"},
        {Number:"‪+55 31 7553‑8668‬",Name:"Dâmaso Dornelas"},
        {Number:"‪+55 21 98884‑7050‬",Name:"Jussara Côrtes"},
        {Number:"‪+55 31 9358‑3198‬",Name:"Maria da Glória"},
        {Number:"‪+55 22 98126‑7578‬",Name:"José Pena"},
        {Number:"‪+55 31 8448‑0584‬",Name:"João Bosco Carvalho"},
        {Number:"‪+55 31 8370‑2002‬",Name:"José Geraldo Brandão"},
        {Number:"‪+55 21 98702‑9450‬",Name:"Geraldo Santana"},
        {Number:"‪+55 79 9988‑1666‬",Name:"Ailton Evangelista"},
        {Number:"‪+55 33 9919‑9471‬",Name:"Luís Angelo Abreu"},
        {Number:"‪+55 31 9362‑7632‬",Name:"Luiz Jatobá"},
        {Number:"‪+55 31 9679‑3746‬",Name:"Mauro"},
        {Number:"‪+55 34 9961‑9060‬",Name:"Eduardo Bontempo"},
        {Number:"+Cristina Dornelas",Name:"Cristina Dornelas"},
        {Number:"‪+55 31 8689‑1912‬",Name:"Ivan Rodrigues"},
        {Number:"‪+55 31 8782‑6237‬",Name:"José Geraldo Barbosa"},
        {Number:"‪+55 31 9961‑7339‬",Name:"Sebatião Ribeiro Júnior"},
        {Number:"‪+55 31 9125‑7992‬",Name:"Lívio Elias"},
        {Number:"‪+55 31 9194‑9120‬",Name:"Sílvia"},
        {Number:"‪+55 31 9652‑7444‬",Name:"Gilberto Mendonça"},
        {Number:"‪+55 85 9712‑0629‬",Name:"Osvaldo Dias"},
        {Number:"‪+55 22 99214‑9733‬",Name:"Télio Braz"},
        {Number:"‪+55 31 8860‑7240‬",Name:"Valéria"},
        {Number:"‪+55 31 8868‑1033‬",Name:"Junior Grossi"},
        {Number:"‪+55 31 8514‑3723‬",Name:"Eli"},
        {Number:"‪+55 79 8814‑3161‬",Name:"Galo"},
        {Number:"‪+55 31 8848‑3056‬",Name:"Virgílio Figueiredo"},
        {Number:"‪+55 85 8595‑8793‬",Name:"Geraldo Herivelto"},
        {Number:"‪+55 79 8872‑0002‬",Name:"Carlos Trivellato"},
        {Number:"‪+55 37 8839‑7197‬",Name:"Geraldo Pinheiro"},
        {Number:"‪+55 31 8475‑0936‬",Name:"Marcelo Donizete"},
        {Number:"‪+55 31 8781‑6902‬",Name:"Fernado Luiz dos Santos"},
        {Number:"‪+55 79 9121‑0253‬",Name:"Deículo Pedrosa"},
        {Number:"‪+1 (201) 658‑0140‬",Name:"Terezinha dos Santos"},
        {Number:"‪+55 27 99814‑1252‬",Name:"Abdon"},
        {Number:"‪+55 31 8926‑8229‬",Name:"Kide"},
        {Number:"‪+55 31 8395‑2842‬",Name:"Rogério Fernandes"},
        {Number:"+Virginia Loiola",Name:"Virginia Loiola"},
        {Number:"‪+55 31 9117‑7296‬",Name:"Vinicio Vitorio"},
        {Number:"‪+55 31 9142‑1968‬",Name:"Benedito Vitorio"},
        {Number:"‪+55 94 8405‑7767‬",Name:"Milton Lima"},
        {Number:"‪+55 31 9811‑8711‬",Name:"Nacif Sirio"},
        {Number:"‪+55 31 7307‑5001‬",Name:"Luiz Paiva"},
        {Number:"‪+55 31 8855‑0629‬",Name:"Elenice"},
        {Number:"‪+55 31 9777‑9000‬",Name:"Zeferino"},
        {Number:"‪+55 31 9961‑9783‬",Name:"Fernando Quintão"},
        {Number:"‪+55 31 9180‑1331‬",Name:"Luiz Carlos"},
        {Number:"‪+55 31 8813‑3102‬",Name:"Maria da Glória"},
        {Number:"‪+55 31 9653‑4302‬",Name:"Hailton"},
        {Number:"‪+55 21 98375‑0523‬",Name:"João Bosco"},
        {Number:"‪+55 31 9892‑1533‬",Name:"Carlos Alvim"},
        {Number:"‪+55 22 99983‑7923‬",Name:"Amaral"},
        {Number:"‪+55 31 9612‑7459‬",Name:"Anselmo"},
        {Number:"‪+55 31 9117‑9175‬",Name:"Norma Paschoal"},
        {Number:"‪+55 21 98114‑3737‬",Name:"Elir Junior"},
        {Number:"‪+55 31 9822‑4000‬",Name:"Professor Emiliano"},
        {Number:"‪+55 31 9236‑7512‬",Name:"Geraldo Rodrigues"},
        {Number:"‪+55 21 98845‑4114‬",Name:"Romero Peixoto"},
        {Number:"‪+55 31 9345‑0515‬",Name:"Júlio Vasconcelos"},
        {Number:"‪+55 31 9874‑6141‬",Name:"Clovis"},
        {Number:"‪+55 31 8752‑6666‬",Name:"José Fagundes"},
        {Number:"‪+55 71 8307‑0468‬",Name:"Décio São José"},
        {Number:"‪+55 31 9961‑1672‬",Name:"Procópio"},
        {Number:"‪+55 31 8861‑5564‬",Name:"José Miguel"},
        {Number:"‪+55 31 8868‑1126‬",Name:"Carlos"},
        {Number:"‪+55 13 99153‑0163‬",Name:"Carlos Bonfim"},
        {Number:"‪+55 22 99985‑0678‬",Name:"Valter Murta"},
        {Number:"‪+55 31 8838‑2173‬",Name:"Luiz França"},
        {Number:"‪+55 38 9904‑9226‬",Name:"Sônia"},
        {Number:"‪+55 61 8112‑7412‬",Name:"Carlos Silva"},
        {Number:"‪+55 31 9877‑5013‬",Name:"Wander de Castro"},
        {Number:"‪+55 13 99650‑2750‬",Name:"José Geraldo Costa Pinto"},
        {Number:"‪+55 31 9803‑4181‬",Name:"João Bosco Costa"},
        {Number:"‪+55 31 8781‑8330‬",Name:"TBD"},
        {Number:"‪+55 31 7121‑9208‬",Name:"Marly e Geraldo"},
        {Number:"‪+55 21 98957‑5331‬",Name:"Geraldo"},
        {Number:"‪+55 31 9964‑4222‬",Name:"Ronaldo Carvalho"},
        {Number:"‪+55 31 8969‑2352‬",Name:"Carlos Niquini"},
        {Number:"‪+55 21 98427‑7384‬",Name:"Ronaldo Gonçalves"},
        {Number:"‪+55 34 9182‑4282‬",Name:"Emílio"},
        {Number:"‪+55 31 9927‑2739‬",Name:"Márcio Oliveira"},
        {Number:"‪+55 34 9984‑4629‬",Name:"Jaci Patureba"},
        {Number:"‪+55 22 99227‑8950‬",Name:"Willer"},
        {Number:"‪+55 31 9218‑4566‬",Name:"TBD"},
        {Number:"‪+55 31 8336‑7293‬",Name:"Cláudia Pignataro"},
        {Number:"‪+55 31 8798‑8324‬",Name:"TBD"},
        {Number:"‪+55 14 99672‑1970‬",Name:"Ivair"},
        {Number:"‪+55 31 8788‑4511‬",Name:"José Carlos Theophilo"},
        {Number:"‪+55 31 9945‑4792‬",Name:"Gentil"},
        {Number:"‪+55 31 8715‑3610‬",Name:"Marcos Alvim"},
        {Number:"‪+55 31 8868‑0541‬",Name:"TBD"},
        {Number:"‪+55 19 99647‑5552‬",Name:"Roselene Anjos"},
        {Number:"‪+55 31 8808‑4426‬",Name:"Luiz Macário"},
        {Number:"‪+55 31 8654‑4792‬",Name:"Neuza"},
        {Number:"‪+1 (561) 860‑1192‬",Name:"Regina Aniceto"},
        {Number:"‪+55 31 8215‑5658‬",Name:"Caco"},
        {Number:"‪+55 31 8960‑8112‬",Name:"Izabel"},
        {Number:"‪+55 27 99945‑5720‬",Name:"Orosimbo"},
        {Number:"‪+55 31 8661‑1738‬",Name:"Antônia Câmara"},
        {Number:"‪+55 31 9132‑6425‬",Name:"Ana Campos"},
        {Number:"‪+55 31 9961‑2982‬",Name:"Vânia Quintão"},
        {Number:"‪+55 81 9238‑2658‬",Name:"Elisio Cota"},
        {Number:"‪+55 31 9616‑3668‬",Name:"Paulo Monteiro"},
        {Number:"‪+55 22 99837‑6284‬",Name:"Romualdo"},
        {Number:"‪+55 31 8632‑3511‬",Name:"Vargas"},
        {Number:"‪+55 34 9961‑1253‬",Name:"Aluísio José"},
        {Number:"‪+55 34 9301‑9071‬",Name:"Cilso de Paula"},
        {Number:"‪+55 64 8120‑5840‬",Name:"Hélio Domingos"},
        {Number:"‪+55 32 8401‑5449‬",Name:"Bolão Xavier"},
        {Number:"‪+55 31 9606‑2167‬",Name:"TBD"},
        {Number:"‪+55 19 99223‑5496‬",Name:"Figeninha"},
        {Number:"‪+55 35 9165‑2000‬",Name:"Dirceu DAngelo"},
        {Number:"‪+55 31 8576‑3701‬",Name:"Heron"},
        {Number:"‪+55 31 9796‑1520‬",Name:"Márcio"},
        {Number:"‪+55 22 99966‑3364‬",Name:"Dimas Cancela"},
        {Number:"‪+55 31 9697‑4273‬",Name:"Mauro Silva"},
        {Number:"‪+55 31 9212‑4811‬",Name:"Henrique"},
        {Number:"‪+55 34 8808‑8015‬",Name:"Sérgio"},
        {Number:"‪+55 31 9952‑5114‬",Name:"Luiz Espinha"},
        {Number:"‪+55 12 98204‑7165‬",Name:"Fernando Alves"},
        {Number:"‪+55 31 8417‑9055‬",Name:"Flávio Cerceau"},
        {Number:"‪+55 31 8868‑6542‬",Name:"Grossi"},
        {Number:"‪+55 31 9977‑1932‬",Name:"Átalo"},
        {Number:"‪+55 22 99966‑4737‬",Name:"Egmar"},
        {Number:"‪+55 27 98129‑4125‬",Name:"BD"},
        {Number:"‪+55 31 8479‑1447‬",Name:"Edmilson Miranda"},
        {Number:"‪+55 31 8513‑1337‬",Name:"Roberto Lilico"},
        {Number:"‪+55 92 8811‑8012‬",Name:"Luiz Paulo Gonzaga"},
        {Number:"‪+55 31 9909‑8000‬",Name:"Juno Menezes"},
        {Number:"‪+55 22 99258‑1603‬",Name:"Furtado"},
        {Number:"‪+55 31 8880‑1664‬",Name:"Raimundão"},
        {Number:"‪+55 32 9918‑8267‬",Name:"Marco Antônio Rizzuti"},
        {Number:"‪+55 31 8879‑6326‬",Name:"Lucília Lages"},
        {Number:"‪+55 31 9521‑0518‬",Name:"Antônio da Mata"},
        {Number:"‪+55 37 9973‑6512‬",Name:"Cláudio Schettini"},
        {Number:"‪+55 31 9915‑7883‬",Name:"Adriano Totou"},
        {Number:"‪+55 32 8877‑6439‬",Name:"Damatta"},
        {Number:"‪+55 38 9919‑5346‬",Name:"Celso Vargas"},
        {Number:"‪+55 31 9961‑4062‬",Name:"Oscar Gaiola"},
        {Number:"‪+55 31 8513‑8313‬",Name:"Fernando"},
        {Number:"‪+55 61 8197‑3302‬",Name:"Maria Imaculada"},
        {Number:"‪+55 31 8984‑1083‬",Name:"Leila"},
        {Number:"‪+55 31 8318‑1347‬",Name:"Márcio Borges"},
        {Number:"‪+55 31 8337‑0990‬",Name:"Emilson"},
        {Number:"‪+55 31 8679‑4394‬",Name:"Ivone"},
        {Number:"‪+55 31 8881‑5290‬",Name:"José Moreira"},
        {Number:"‪+55 31 9805‑0858‬",Name:"João Marcos"},
        {Number:"‪+55 31 8448‑6943‬",Name:"Paulo Sergio Mapa"},
        {Number:"‪+55 31 8616‑0049‬",Name:"Carlinhos"},
        {Number:"‪+55 31 8794‑2601‬",Name:"Maria da Penha"},
        {Number:"‪+55 84 9416‑4910‬",Name:"Ronaldo Neves"},
        {Number:"‪‪+55 79 8835‑7328‬",Name:"Ataíde"},
        {Number:"‪‪+55 27 99982‑8655‬",Name:"Alexandre Ferrari"},
        {Number:"‪+55 94 8135‑2863‬‬",Name:"Edel"},
        {Number:"+55 31 8772‑1807‬‬‬",Name:"José Sérgio Mol"},
        {Number:"‪+55 31 9987‑0777‬‬‬",Name:"Antônio Evaristo"}
    ];
        
    // variable that will receive the file content
    var text = "empty";
    // output div
    var main = document.getElementById("stats");
    // code for messages types
    const TEXT = 0, IMAGE = 1, AUDIO = 2, VIDEO = 3, CONTACT = 4;
    // code for non messages types
    const MEMBER_IN = 10, MEMBER_OUT = 11, MEMBER_REM = 12, OTHER = 13;
    // main variables to store the queries results
    var list, generalStats, messagesByUser, messagesByDay, messagesByWeekday, messagesByTime, membersOut;

    var App =  {
        init: function(){
            Control.init();
        }
    };
    
    var Control = {
        // check the File API support and create a listener for the file input
        init: function(){
            if (window.File && window.FileReader && window.FileList && window.Blob) {
                console.log("All the File APIs are supported.");
            } else {
                alert('The File APIs are not fully supported in this browser.');
            }
            document.getElementById('generalStats').addEventListener('click', function(){Chat.showGeneralStats(generalStats);}, false);
            document.getElementById('msgUser').addEventListener('click', function(){Chat.showStats(messagesByUser);}, false);
            document.getElementById('msgDay').addEventListener('click', function(){Chat.showStats(messagesByDay);}, false);
            document.getElementById('msgWeekday').addEventListener('click', function(){Chat.showStats(messagesByWeekday);}, false);
            document.getElementById('msgTime').addEventListener('click', function(){Chat.showStats(messagesByTime);}, false);
            document.getElementById('membersOut').addEventListener('click', function(){Chat.showStats(membersOut);}, false);
            document.getElementById('files').addEventListener('change', File.handleFileSelect, false);
        }
    };

    var Chat = {
        // get all active members
        members: function(){
            var lines = text.split('\n');
            let set = new Set();
            for(let i = 0; i < lines.length; i++) {
                if(Utils.isMessage(lines[i]) && !set.has(lines[i].split(':')[3])){
                    set.add(lines[i].split(':')[3]);
                }
            }
            list = Array.from(set);
            return list;
        },
        // get the chat's stats
        getGeneralStats: function() {
            var chat = {};
            // get chat members
            chat.members = Chat.members();
            // set the counters
            chat.texts = 0;
            chat.images = 0;
            chat.audio = 0;
            chat.video = 0;
            chat.contact = 0;
            chat['member-in'] = 0;
            chat['member-out'] = 0;
            chat['member-rem'] = 0;
            chat['total-activity'] = 0;
            chat.other = 0;
            // read the text lines
            var lines = text.split('\n');
            for(let i = 0; i < lines.length; i++) {
                if(Utils.isActivity(lines[i])) {
                    var type = Utils.getActivityType(lines[i]);
                    switch(type) {
                        case TEXT:
                            chat['texts']++;
                            break;
                        case IMAGE:
                            chat['images']++;
                            break;
                        case AUDIO:
                            chat['audio']++;
                            break;
                        case VIDEO:
                            chat['video']++;
                            break;
                        case CONTACT:
                            chat['contact']++;
                            break;
                        case MEMBER_IN:
                            chat['member-in']++;
                            break;
                        case MEMBER_OUT:
                            chat['member-out']++;
                            break;
                        case MEMBER_REM:
                            chat['member-rem']++;
                            break;
                        case OTHER:
                            chat['other']++;
                            break;
                    }
                    chat['total-activity']++;
                }
            }
            return chat;
        },
        // show general Statistics
        showGeneralStats: function(data) {
            document.getElementById("stats").innerHTML = "";
            var chatStats = document.createElement("div");
            chatStats.setAttribute('class', 'item');
            var table = document.createElement("table");
            table.setAttribute('class', 'table');
            table.innerHTML = '<caption>Estatística Geral</caption>';
            table.innerHTML += '<tr><th>Item</th><th>Valor</th></tr>';
            table.innerHTML += '<tr><td>Membros Ativos</td><td>'+data.members.length+'</td></tr>';
            table.innerHTML += '<tr><td>Textos</td><td>'+data.texts+'</td></tr>';
            table.innerHTML += '<tr><td>Imagens</td><td>'+data.images+'</td></tr>';
            table.innerHTML += '<tr><td>Audios</td><td>'+data.audio+'</td></tr>';
            table.innerHTML += '<tr><td>Cartão de Contato</td><td>'+data.contact+'</td></tr>';
            table.innerHTML += '<tr><td>Adicionados</td><td>'+data['member-in']+'</td></tr>';
            table.innerHTML += '<tr><td>Sairam</td><td>'+data['member-out']+'</td></tr>';
            table.innerHTML += '<tr><td>Removidos</td><td>'+data['member-rem']+'</td></tr>';
            table.innerHTML += '<tr><td>Outros</td><td>'+data['other']+'</td></tr>';
            chatStats.appendChild(table);
            main.appendChild(chatStats);
        },
        // get the number of messages by member
        getMessagesByUser: function() {
            var users = [];
            var lines = text.split('\n');
            for (let i = 0; i < lines.length; i++) {
                if (Utils.isMessage(lines[i])) {
                    var user = Utils.getUser(lines[i]);
                    var type = Utils.getActivityType(lines[i]);
                    // check if there is already an object for the user
                    var found = false;
                    for (let i = 0; i < users.length; i++) {
                        if (users[i]['name'] == user) {
                            switch (type) {
                                case TEXT:
                                    users[i]['texts']++;
                                    break;
                                case IMAGE:
                                    users[i]['images']++;
                                    break;
                                case AUDIO:
                                    users[i]['audio']++;
                                    break;
                                case VIDEO:
                                    users[i]['video']++;
                                    break;
                                default:
                                    users[i]['other']++;
                            }
                            users[i]['total']++;
                            found = true;
                            break;
                        }
                    }
                    //Create new user object if not already present
                    if (!found) {
                        users.push({name: user, total: 1, texts: 0, images: 0, audio: 0, video: 0, other: 0});
                        switch (type) {
                            case TEXT:
                                users[users.length - 1]['texts']++;
                                break;
                            case IMAGE:
                                users[users.length - 1]['images']++;
                                break;
                            case AUDIO:
                                users[users.length - 1]['audio']++;
                                break;
                            case VIDEO:
                                users[users.length - 1]['video']++;
                                break;
                            default:
                                users[users.length - 1]['other']++;
                        }
                    }
                }
            }
            // sort descending
            users.sort(function (a, b) {
                return (a.total > b.total) ? -1 : ((b.total > a.total) ? 1 : 0);
            });
            return {
                source: users,
                title: "Mensagens por Participantes",
                hasnames: true
            };
        },
        // get the number of messages for each date
        getMessagesByDate: function() {
            var dates = [];
            var lines = text.split('\n');
            for (let i = 0; i < lines.length; i++) {
                if(Utils.isMessage(lines[i])) {
                    var date = Utils.getDate(lines[i]);
                    // check if there is already data for the date
                    var found = false;
                    for(let i=0; i<dates.length; i++) {
                        if (dates[i]['name'] == date) {
                            dates[i]['total']++;
                            found = true;
                            break;
                        }
                    }
                    //Create new object if not already present
                    if(!found){
                        dates.push({name:date, total:1});
                    }
                }
            }
            return {
                source: dates,
                title: "Mensagens por Dia",
                hasnames: false
            };
        },
        // get the number of messages for each weekday
        getMessagesByWeekDay: function() {
            var days = [];
            var lines = text.split('\n');
            for (let i = 0; i < lines.length; i++) {
                if(Utils.isMessage(lines[i])) {
                    var dayId = Utils.getWeekDay(lines[i]);
                    // check if there is already data for the date
                    var found = false;
                    for(let i=0; i < days.length; i++) {
                        if (days[i]['name'] == dayId) {
                            days[i]['total']++;
                            found = true;
                            break;
                        }
                    }
                    //Create new object if not already present
                    if(!found){
                        days.push({name:dayId, total:1});
                    }
                }
            }
            // sort the weekdays
            days.sort(function(a,b){return(a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);});
            for(let i=0; i< days.length; i++) {
                days[i]["Name"] = Utils.getWeekDayName(days[i]["Name"]);
            }
            return {
                source: days,
                title: "Mensagens por Dia da Semana",
                hasnames: false
            };
        },
        // get the number of messages for each hour of the day
        getMessagesByTime: function() {
            var times = [];
            var lines = text.split('\n');
            for (let i = 0; i < lines.length; i++) {
                if(Utils.isMessage(lines[i])) {
                    var time = Utils.getTime(lines[i]);
                    // check if there is already an object for the hour
                    var found = false;
                    for(let i=0; i<times.length; i++) {
                        if (times[i]['name'] == time) {
                            times[i]['total']++;
                            found = true;
                            break;
                        }
                    }
                    //Create new object if not already present
                    if(!found){
                        times.push({name:time, total:1});
                    }
                }
            }
            // sort the hours in ascending way
            times.sort(function(a,b){return(a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);});
            return {
                source: times,
                title: "Mensagens por Hora do Dia",
                hasnames: false
            };
        },
        // check members who left the group
        getMembersOut: function() {
            var outers = [];
            var lines = text.split('\n');
            for (let i = 0; i < lines.length; i++) {
                if(Utils.isActivity(lines[i])) {
                    if(Utils.getActivityType(lines[i]) === MEMBER_OUT) {
                        var temp = lines[i].split(":")[3].split("+")[1];
                        var name = temp.substring(0,temp.length-6);
                        var date = lines[i].split(":")[0].substring(0,10);
                        // check if there is already an object for the user
                        var found = false;
                        for(let i=0; i<outers.length; i++) {
                            if (outers[i]['name'] == name) {
                                found = true;
                                break;
                            }
                        }
                        //Create new object if not already present
                        if(!found){
                            outers.push({name:name, total:date});
                        }
                    }
                }
            }
            return {
                source: outers,
                title: "Membros que saíram",
                hasnames: true
            };
        },
        // show outputs
        showStats: function(data) {
            var name;
            document.getElementById("stats").innerHTML = "";
            var usersStats = document.createElement("div");
            usersStats.setAttribute('class', 'item');
            var table = document.createElement("table");
            table.setAttribute('class', 'table');
            table.innerHTML = '<caption>' + data.title + '</caption>';
            table.innerHTML += '<tr><th>Item</th><th>Total</th></tr>';
            for (let i = 0; i < data.source.length; i++) {
                if(data.hasnames) {
                    name = Utils.getName(data.source[i]['name']);
                } else {
                    name = data.source[i]['name'];
                }
                table.innerHTML += '<tr><td>'+ name +'</td><td>'+data.source[i]['total']+'</td></tr>';
            }
            usersStats.appendChild(table);
            main.appendChild(usersStats);
        }
    };

    var Utils = {
        // check if the line is an activity
        isActivity: function(line) {
            return line.split(":").length > 3;
        },
        // check if the activity is a message
        isMessage: function(activity) {
            return activity.split(":").length > 4;
        },
        // defines the type of the activity
        getActivityType: function(line) {
            if(line.includes('imagem ocultada')){
                return IMAGE;
            }
            else if(line.includes('Cartão do contato omitido')){
                return CONTACT;
            }
            else if(line.includes('vídeo ocultado')){
                return VIDEO;
            }
            else if(line.includes('áudio ocultado')){
                return AUDIO;
            }
            else if(line.split(":")[3].includes('saiu')) {
                return MEMBER_OUT;
            }
            else if(line.split(":")[3].includes('adicionou')) {
                return MEMBER_IN;
            }
            else if(line.split(":")[3].includes('removeu')) {
                return MEMBER_REM;
            }
            else if(line.split(":").length > 4){
                return TEXT;
            }
            else {
                return OTHER;
            }
        },
        // get the id of the member
        getUser: function(activity) {
            if(Utils.isMessage(activity)) {
                return  activity.split(":")[3].split("+")[1];
            }
            else {
                return "Non-messages";
            }
        },
        // get the date of the activity
        getDate: function(activity) {
            if(Utils.isMessage(activity)) {
                var date = activity.split(':')[0];
                return date.substring(0,10);
            }
            else{
                return "Non-messages";
            }
        },
        // get the week day
        getWeekDay: function(activity) {
            var date = this.getDate(activity);
            var adjustedDate = this.adjustDate(date);
            date = new Date(adjustedDate);
            return date.getDay();
        },
        // get the week day name
        getWeekDayName(day) {
            var weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
            return weekdays[day];
        },
        // dd/mm/yy to mm/dd/yy
        adjustDate: function(date) {
            var temp = date.split("/");
            return temp[1] + "/" + temp[0] + "/" + temp[2];
        },
        // get the time (hour) of the activity
        getTime: function(activity) {
            if(Utils.isMessage(activity)) {
                var date = activity.split(':')[0];
                return date.substr(-2);
            }
            else{
                return "Non-messages";
            }
        },
        // get the name in directory (if it exists...) - Not working...
        getName: function(user) {
            var name;
            for(let i=0; i<directory.length; i++) {
                var temp = directory[i]["Number"].split("+")[1];
                if(temp == user) {
                    name = directory[i]["Name"];
                    break;
                }
            }
            if(!name || name === "TBD") {
                return user;
            } else {
                return name;
            }
        }
    };

    var File = {
        handleFileSelect: function(evt) {
            var file = evt.target.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    document.getElementById("stats").innerHTML = "";
                    text = e.target.result;
                    generalStats = Chat.getGeneralStats();
                    messagesByUser = Chat.getMessagesByUser();
                    messagesByDay = Chat.getMessagesByDate();
                    messagesByTime = Chat.getMessagesByTime();
                    messagesByWeekday = Chat.getMessagesByWeekDay();
                    membersOut = Chat.getMembersOut();
                    document.getElementById("wrapper").style.display = "block";
                };
                reader.readAsText(file);
            } else {
                alert("Failed to load the file !");
            }
        }
    };
    window.addEventListener('load', App.init, false);
})();
