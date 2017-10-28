/**
 * Created by LEB on 24/10/17.
 * Based on Github's Nating/WhasApp Stats'
 *
 * */

(function(){
    // directory with members numbers and names
    var directory = [{number: " ‪+55 31 9961‑9730‬", name: "Delfonso"}, {number: " ‪+55 31 8793‑3002‬", name: "Fábio Magalhães"},
        {number: " ‪+55 21 99156‑2389‬", name:"Kilynho"}, {number: " ‪+55 31 9961‑1422‬", name: "Pirex"},
        {number: " ‪+55 35 8898‑7194‬", name:"Reinaldo"}, {number: " ‪+55 31 8855‑2585‬", name: "Rhelman"},
        {number: " ‪+55 21 96700‑0087‬‬", name: "César Guimarães"},{number: "  ‪+55 21 98748‑8787‬", name: "Luiz Valentini"},
        {number: " Leandro Quadros Amorim", name: "Leandro Quadros Amorim"},{number: " ‪+55 31 8812‑1530‬", name: "Toni Claret"},
        {number: " ‪+55 21 98164‑5003‬", name: "Edson Leite"},{number: " ‪+55 31 9961‑1735‬", name: "Fernando"},
        {number: " ‪+55 31 9609‑0304‬", name: "Gilberto Caixeta"},{number: " ‪+55 31 9819‑5680‬", name: "Jorge Inácio"},
        {number: " ‪+55 31 8880‑1378‬", name: "Maria de Lourdes Prazeres"},{number: "‪ ‪+55 21 98291‑1015‬", name: "Cida"},
        {number: " ‪+55 31 9942‑2749‬", name: "Vamberto de Melo"},{number: " ‪+55 31 8470‑1103‬", name: "José Roberto Fernandes"},
        {number: " ‪+55 31 8041‑4181‬", name: "Laércio Rezende"},{number: " LEB", name: "Luiz Eduardo Batista"},
        {number: " ‪+55 31 8959‑2059‬", name: "Maria Aparecida"},{number: " ‪+55 74 9979‑2100‬", name: "Celso Piedade"},
        {number: " ‪+55 31 8653‑6964‬", name: "Samir Cerqueira"},{number: " ‪+55 21 98884‑0026‬", name: "Flávio Versiani"},
        {number: " ‪+55 31 9287‑6197‬", name: "Carlos Pereira"},{number: " ‪+55 31 8795‑3200‬", name: "Helvécio Bigode"},
        {number: " ‪+55 22 99967‑5722‬", name: "Luiz Antonio Coelho"},{number: "  ‪+55 31 8844‑1956‬", name: "Tomaz"},
        {number: " ‪+55 21 99401‑3575‬", name: "Magela"},{number: " ‪+55 11 98963‑5065‬", name: "Cida"},
        {number: " ‪+55 62 8466‑8855‬", name: "Antonio Peixoto"},{number: " ‪+55 31 9961‑1121‬", name: "Geraldo Victor"},
        {number: " ‪+55 31 8433‑3573‬", name: "Fábio Freitas"},{number: " ‪+55 31 8984‑6365‬", name: "Helio Geraldo da Silva"},
        {number: " ‪+55 31 8011‑4665‬", name: "Alexandre Mansur"},{number: " ‪+55 31 9133‑1331‬", name: "Simonidas Brasil"},
        {number: " ‪+55 27 99988‑6086‬", name: "José dos Reis"},{number: " ‪+55 31 9655‑1171‬", name: "Catarina Lopes"},
        {number: " ‪+55 32 9139‑9070‬", name: "TBD"},{number: " ‪+55 31 8417‑9410‬", name: "TBD"},
        {number: " ‪+55 31 9857‑0495‬", name: "Joaquim Ferraz"},{number: " ‪+55 21 99128‑1127‬", name: "Jacaré"},
        {number: " ‪+55 31 8895‑8662‬", name: "Marli Coelho"},{number: " ‪+55 31 8928‑0425‬", name: "Taquinho"},
        {number: " ‪+55 31 8811‑4839‬", name: "Eleonice"},{number: " ‪+55 31 8782‑1808‬", name: "Maria Regina Santos"},
        {number: " ‪+55 31 8010‑3140‬", name: "Regina"},{number: " ‪+55 71 9618‑8309‬", name: "Patrícia Maia"},
        {number: " ‪+55 27 98814‑7790‬", name: "Mauricio Carazza"},{number: "  ‪+55 34 9961‑6563‬", name: "Sebastião Barbosa"},
        {number: " Senem", name: "Antonio Senem da Cruz"},{number: " ‪+55 21 99249‑1510‬", name: "Nora Maia"},
        {number: " ‪+55 31 8040‑3741‬", name: "Roque"},{number: " ‪+55 27 99820‑4032‬", name: "Ifigênia Mol"},
        {number: " ‪+55 27 98801‑2800‬", name: "José Mendes"},{number: " ‪+55 21 99379‑4104‬", name: "Arcioni Nem"},
        {number: " ‪+55 21 99397‑5697‬", name: "Pilar Godoy"},{number: " ‪+55 77 9180‑1035‬", name: "Derli Fausto"},
        {number: " ‎‪+55 27 99856‑0381‬", name: "Paulo Márcio Gonzaga"},{number: " ‪+55 21 97297‑0229‬", name: "Sérgio Quintão"},
        {number: " ‪+55 31 8772‑1705‬", name: "João Pinto"},{number: " ‪+55 27 99933‑3151‬", name: "Geraldo Fernandes"},
        {number: " ‪+55 27 98807‑0641‬", name: "José Carvalho"},{number: " ‪+55 31 8811‑1112‬", name: "Pedro Chaves"},
        {number: " ‪+55 31 9585‑4422‬", name: "Paulinho"},{number: " ‪+55 22 98803‑8930‬", name: "Carlos Neves"},
        {number: " ‪+55 31 8888‑5418‬", name: "Mauro"},{number: " ‪+55 31 8813‑1215‬", name: "Edton Araujo"},
        {number: " ‪+55 79 9956‑3627‬", name: "Vicente"},{number: " ‪+55 31 9200‑6151‬", name: "Taquinho Repolho"},
        {number: " ‪+55 82 9999‑9327‬", name: "Bete Salgado"},{number: " ‪+55 31 9587‑7897‬", name: "Edson Sotero"},
        {number: " ‪+55 31 8892‑4832‬", name: "Valdete Braga"},{number: " Jorge Black", name: "Jorge Black"},
        {number: " ‪+55 31 8816‑4876‬", name: "Lucia Gonçalves"},{number: " ‪+55 37 9993‑2703‬", name: "Geraldo Mendonça"},
        {number: " ‪+55 21 98196‑9919‬", name: "Eurico"},{number: " ‪+55 31 9961‑1473‬", name: "José Eduardo"},
        {number: " ‪+55 31 9963‑7956‬", name: "Sérgio Leocadio"},{number: " ‪+55 31 9506‑8028‬", name: "José Luis"},
        {number: " ‪+55 31 7553‑8668‬", name: "Dâmaso Dornelas"},{number: "  ‪+55 21 98884‑7050‬", name: "Jussara Côrtes"},
        {number: " ‪+55 31 9358‑3198‬", name: "Maria da Glória"},{number: " ‪+55 22 98126‑7578‬", name: "José Pena"},
        {number: " ‪+55 31 8448‑0584‬", name: "João Bosco Carvalho"},{number: " ‪+55 31 8370‑2002‬", name: "José Geraldo Brandão"},
        {number: " ‪+55 21 98702‑9450‬", name: "Geraldo Santana"},{number: " ‪+55 79 9988‑1666‬", name: "Ailton Evangelista"},
        {number: " ‪+55 33 9919‑9471‬", name: "Luís Angelo Abreu"},{number: " ‪+55 31 9362‑7632‬", name: "Luiz Jatobá"},
        {number: " ‪+55 31 9679‑3746‬", name: "Mauro"},{number: " ‪+55 34 9961‑9060‬", name: "Eduardo Bontempo"},
        {number: " Cristina Dornelas", name: "Cristina Dornelas"},{number: " ‪+55 31 8689‑1912‬", name: "Ivan Rodrigues"},
        {number: " ‪+55 31 8782‑6237‬", name: "José Geraldo Barbosa"},{number: " ‪+55 31 9961‑7339‬", name: "Sebastião Ribeiro Júnior"},
        {number: " ‪+55 31 9125‑7992‬", name: "Livio Elias"},{number: " ‪+55 31 9194‑9120‬", name: "Silvia"},
        {number: "  ‪+55 31 9652‑7444‬", name: "Gilberto Mendonça"},{number: " ‪+55 31 8895‑8662‬", name: "Osvaldo Dias"},
        {number: " ‪+55 22 99214‑9733‬", name: "Télio Braz"},{number: " ‪+55 31 8860‑7240‬", name: "Valéria"},
        {number: " ‪+55 31 8868‑1033‬", name: "Junior Grossi"},{number: " ‪+55 31 8514‑3723‬", name: "Eli"},
        {number: " ‪+55 79 8814‑3161‬", name: "Galo"},{number: " ‪+55 31 8848‑3056‬", name: "Virgilio Figueiredo"},
        {number: " ‪+55 85 8595‑8793‬", name: "Geraldo Herivelto"},{number: " ‪+55 79 8872‑0002‬", name: "Carlos Trivellato"},
        {number: " ‪+55 37 8839‑7197‬", name: "Geraldo Pinheiro"},{number: " ‪+55 31 8475‑0936‬", name: "Marcelo Donizete"},
        {number: " ‪+55 31 8781‑6902‬", name: "Fernando Luiz Santos"},{number: " ‪+55 79 9121‑0253‬", name: "Deículo Pedrosa"},
        {number: " ‪+1 (201) 658‑0140‬", name: "Terezinha dos Santos"},{number: " ‪+55 27 99814‑1252‬", name: "Abdon"},
        {number: " ‪+55 31 8926‑8229‬", name: "Kide Svjunior"},{number: " ‪+55 31 8395‑2842‬", name: "Rogério"},
        {number: " Virginia Loiola", name: "Virginia Loiola"},{number: " ‪+55 31 9117‑7296‬", name: "Vinicio Vitorio"},
        {number: " ‪+55 31 9142‑1968‬", name: "Benedito Vitorio"},{number: " ‪+55 94 8405‑7767‬", name: "Milton Lima"},
        {number: " ‪+55 31 9811‑8711‬", name: "Nacif Sirio"},{number: " ‪+55 31 7307‑5001‬", name: "Luiz Paiva"},
        {number: " ‪+55 85 9712‑0629‬", name: "Elenice"},{number: " ‪+55 31 9777‑9000‬", name: "Zeferino"},
        {number: "  ‪+55 31 9961‑9783‬", name: "Fernando Quintão"},{number: " ‪+55 31 9180‑1331‬", name: "Luiz Carlos"},
        {number: "  ‪+55 31 8813‑3102‬", name: "Maria da Glória Rodrigues"},{number: " ‪+55 31 9653‑4302‬", name: "Hailton"},
        {number: " ‪+55 21 98375‑0523‬", name: "João Bosco Araújo"},{number: " ‪+55 31 9892‑1533‬", name: "Carlos Alvim"},
        {number: " ‪+55 22 99983‑7923‬", name: "Amaral"},{number: " ‪+55 31 9612‑7459‬", name: "Anselmo"},
        {number: " ‪+55 31 9117‑9175‬", name: "Norma Paschoal"},{number: " ‪+55 21 98114‑3737‬", name: "Junior - Elir Durso"},
        {number: " ‪+55 31 9822‑4000‬", name: "Professor Emiliano"},{number: " ‪+55 31 9236‑7512‬", name: "Geraldo Rodrigues"},
        {number: "  ‪+55 21 98845‑4114‬", name: "Romero Peixoto"},{number: " ‪+55 31 9345‑0515‬", name: "Julio Vasconcelos"},
        {number: " ‪+55 31 9874‑6141‬", name: "Clovis"},{number: " ‪+55 31 8752‑6666‬", name: "José Fagundes"},
        {number: " ‪+55 71 8307‑0468‬", name: "Décio São José"},{number: " ‪+55 31 9961‑1672‬", name: "Procópio"},
        {number: " ‪+55 31 8861‑5564‬", name: "José Miguel"},{number: " ‪+55 31 8868‑1126‬", name: "Carlos"},
        {number: " ‪+55 13 99153‑0163‬", name: "Carlos Bonfim"},{number: " ‪+55 22 99985‑0678‬", name: "Valter Murta"},
        {number: " ‪+55 31 8838‑2173‬", name: "Luiz França"},{number: " ‪+55 38 9904‑9226‬", name: "Sônia"},
        {number: " ‪+55 61 8112‑7412‬", name: "Carlos Silva"},{number: " ‪+55 31 9877‑5013‬", name: "Wander de Castro"},
        {number: "‪ ‪+55 13 99650‑2750‬", name: "José Geraldo Costa Pinto"}];
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
    var hasNames = false;

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
            hasNames = true;
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
                title: "Mensagens por Participantes"
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
                title: "Mensagens por Dia"
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
                days[i]["name"] = Utils.getWeekDayName(days[i]["name"]);
            }
            return {
                source: days,
                title: "Mensagens por Dia da Semana"
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
                title: "Mensagens por Hora do Dia"
            };
        },
        // check members who left the group
        getMembersOut: function() {
            var outers = [];
            var lines = text.split('\n');
            for (let i = 0; i < lines.length; i++) {
                if(Utils.isActivity(lines[i])) {
                    if(Utils.getActivityType(lines[i]) === MEMBER_OUT) {
                        var name = lines[i].split(":")[3].substring(1,20);
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
                title: "Membros que saíram"
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
            for (var i = 0; i < data.source.length; i++) {
                if(hasNames) {
                    name = Utils.getName(data.source[i]['name']);
                } else {
                    name = data.source[i]['name'];
                }
                table.innerHTML += '<tr><td>'+ name +'</td><td>'+data.source[i]['total']+'</td></tr>';
            }
            usersStats.appendChild(table);
            main.appendChild(usersStats);
            hasNames = false;
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
                var temp = activity.split(':')[3];
                return temp.substr(1, temp.length);
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
                var temp = directory[i]["number"];
                if(temp.substring(1, temp.length) == user) {
                    name = directory[i]["name"];
                    break;
                }
            }
            if(name === "TBD") {
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
