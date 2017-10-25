/**
 * Created by LEB on 24/10/17.
 */
(function(){
    var text = "empty";
    var main = document.getElementById("main-content");
//Messages
    const TEXT = 0, IMAGE = 1, AUDIO = 2, VIDEO = 3, CONTACT = 4;
//Non Messages
    const MEMBER_IN = 10, MEMBER_OUT = 11, MEMBER_REM = 12, OTHER = 13;

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
            document.getElementById('files').addEventListener('change', File.handleFileSelect, false);
        }
    };

    var Chat = {
        members: function(){
            var lines = text.split('\n');
            let set = new Set();
            for(let i = 0; i < lines.length; i++) {
                if(Utils.isMessage(lines[i]) && !set.has(lines[i].split(':')[3])){
                    set.add(lines[i].split(':')[3]);
                }
            }
            return Array.from(set);
        },
        getStats: function() {
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
            // output the results
            var chatStats = document.createElement("div");
            chatStats.setAttribute('id','chatStats');
            chatStats.innerHTML =
                '<em>Membros :&emsp;</em>'+chat.members.length +
                '<br><em>Atividade Total:&emsp;</em>'+chat['total-activity']+
                '<br><em>Textos:&emsp;</em>'+ chat.texts+
                '<br><em>Imagens:&emsp;</em>'+chat.images+
                '<br><em>Audios:&emsp;</em>'+chat.audio+
                '<br><em>Videos:&emsp;</em>'+chat.video+
                '<br><em>Cartao de Contato :&emsp;</em>'+chat.contact+
                '<br><em>Adicionados:&emsp;</em>'+chat['member-in']+
                '<br><em>Sairam:&emsp;</em>'+chat['member-out']+
                '<br><em>Removidos:&emsp;</em>'+chat['member-rem']+
                '<br><em>Outros:&emsp;</em>'+chat['other'];
            main.appendChild(chatStats);
            return chat;
    },
    // get the number of messages by member
    getMessagesByUser: function() {
        var users = [];
        var lines = text.split('\n');
        for(let i = 0;i < lines.length;i++){
            if(Utils.isMessage(lines[i])){
                console.log("Line "+ i + " Is message ? : " + Utils.isMessage(lines[i]));
                var user = Utils.getUser(lines[i]);
                console.log("User is : " + user);
                var type = Utils.getActivityType(lines[i]);
                console.log("Type is :" + type);

                // check if there is already an object for the user
                var found = false;
                for(let i=0; i<users.length; i++) {
                    if(users[i]['name'] == user) {
                        switch(type) {
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
                if(!found){
                    users.push({name:user,total:1,texts:0,images:0,audio:0,video:0,other:0});
                    switch(type) {
                        case TEXT:
                            users[users.length -1]['texts']++;
                            break;
                        case IMAGE:
                            users[users.length -1]['images']++;
                            break;
                        case AUDIO:
                            users[users.length -1]['audio']++;
                            break;
                        case VIDEO:
                            users[users.length -1]['video']++;
                            break;
                        default:
                            users[users.length -1]['other']++;
                    }
                }
            }
        }
        // sort descending
        users.sort(function(a,b){return(a.total > b.total) ? -1 : ((b.total > a.total) ? 1 : 0);});
        // output results
        var usersStats = document.createElement("div");
        var table = document.createElement("table");
        table.innerHTML = '<tr><th>Phone</th><th>Total</th></tr>';
        for (var i = 0; i < users.length; i++) {
            table.innerHTML += '<tr><td>'+users[i]['name']+'</td><td>'+users[i]['total']+'</td></tr>';
        }
        usersStats.appendChild(table);
        main.appendChild(usersStats);
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
                        if (dates[i]['date'] == date) {
                            dates[i]['total']++;
                            found = true;
                            break;
                        }
                    }
                    //Create new object if not already present
                    if(!found){
                        dates.push({date:date, total:1});
                    }
                }
            }
            // output results
            var datesStats = document.createElement("div");
            var table = document.createElement("table");
            table.innerHTML = '<tr><th>Date</th><th>Total</th></tr>';
            for (let i = 0; i < dates.length; i++) {
                table.innerHTML += '<tr><td>'+dates[i]['date']+'</td><td>'+dates[i]['total']+'</td></tr>';
            }
            datesStats.appendChild(table);
            main.appendChild(datesStats);
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
                        if (times[i]['time'] == time) {
                            times[i]['total']++;
                            found = true;
                            break;
                        }
                    }
                    //Create new object if not already present
                    if(!found){
                        times.push({time:time, total:1});
                    }
                }
            }
            // sort the hours in ascending way
            times.sort(function(a,b){return(a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0);});
            // output results
            var timeStats = document.createElement("div");
            var table = document.createElement("table");
            table.innerHTML = '<tr><th>Hora</th><th>Total</th></tr>';
            for (let i = 0; i < times.length; i++) {
                table.innerHTML += '<tr><td>'+times[i]['time']+'</td><td>'+times[i]['total']+'</td></tr>';
            }
            timeStats.appendChild(table);
            main.appendChild(timeStats);
        },
        // check members who left the group
        whoLeft: function() {
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
                            outers.push({name:name, date:date});
                        }
                    }
                }
            }
            // output results
            var outersStats = document.createElement("div");
            var table = document.createElement("table");
            table.innerHTML = '<tr><th>Nome</th><th>Data</th></tr>';
            for (let i = 0; i < outers.length; i++) {
                table.innerHTML += '<tr><td>'+outers[i]['name']+'</td><td>'+outers[i]['date']+'</td></tr>';
            }
            outersStats.appendChild(table);
            main.appendChild(outersStats);
        }
    };

    var Utils = {
        // check if the line is an activity
        isActivity: function(line) {
            return line.split(":").length > 1;
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
                var member = activity.split(':')[3];
                return member.substring(1, member.length);
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
        //
        removeNonActivity: function(array, param) {
            for(let i = 0; i < array.length ; i++) {
                if(array[i][param]=='Non-messages'){
                    array.splice(i , 1);
                }
            }
        }
    };

    var File = {
        handleFileSelect: function(evt) {
            var file = evt.target.files[0];
            if(file) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    text = e.target.result;
                    Chat.getStats();
                    Chat.getMessagesByUser();
                    Chat.getMessagesByDate();
                    Chat.getMessagesByTime();
                    Chat.whoLeft();
                };
                reader.readAsText(file);
            } else {
                alert("Failed to load the file !");
            }
        }
    };
    window.addEventListener('load', App.init, false);
})();
