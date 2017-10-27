/**
 * Created by user on 26/10/17.
 */
/**
 * Created by LEB on 24/10/17.
 * Based on Github's Nating/WhasApp Stats'
 * */

(function(){
    // variable that will receive the file content
    var text = "empty";
    // output div
    var main = document.getElementById("stats");
    // code for messages types
    const TEXT = 0, IMAGE = 1, AUDIO = 2, VIDEO = 3, CONTACT = 4;
    // code for non messages types
    const MEMBER_IN = 10, MEMBER_OUT = 11, MEMBER_REM = 12, OTHER = 13;
    // svg canvas
    var svg;

    var App =  {
        init: function() {
            Control.init();
            Chart.init();
        }
    };

    var Chart = {
        dim: {
            w: 500,
            h: 100,
            pad: 1
        },
        init: function() {
            console.log("d3js Version : " + d3.version);
            this.setup();
        },
        setup: function() {
            svg =  d3.select("#chart")
                .append("svg")
                .attr("width", this.dim.w)
                .attr("height", this.dim.h);
        },
        draw: function(data) {
            console.log(data);
            // Bars
            var rects = svg.selectAll("rect")
                .data(data)
                .enter()
                .append("rect");

            rects.attr("y",function(d,i){
                    return i*(Chart.dim.h)/(data.length);
                })
                .attr("x", 30)
                .attr("width", function(d){
                    return d["total"]/5;
                })
                .attr("height", Chart.dim.h/data.length - Chart.dim.pad)
                .attr("fill", "teal");
            // labels
            svg.selectAll("text")
                .data(data)
                .enter()
                .append("text")
                .attr("x", 200)
                .attr("y", function(d,i){
                    return i*(Chart.dim.h/data.length) + 12 + 0*(Chart.dim.h/data.length - Chart.dim.pad)/2;
                })
                .text(function(d){
                    return d["total"];
                })
                //.attr("text-anchor", "middle")
                .attr("font-family", "verdana")
                .attr("font-size", "10px")
                .attr("fill", "gray");
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
        // get the number of messages for each weekday
        getMessagesByWeekDay: function() {
            var weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
            var days = [];
            var lines = text.split('\n');
            for (let i = 0; i < lines.length; i++) {
                if(Utils.isMessage(lines[i])) {
                    var dayId = Utils.getWeekDay(lines[i]);
                    // check if there is already data for the date
                    var found = false;
                    for(let i=0; i < days.length; i++) {
                        if (days[i]['dayId'] == dayId) {
                            days[i]['total']++;
                            found = true;
                            break;
                        }
                    }
                    //Create new object if not already present
                    if(!found){
                        days.push({dayId:dayId, total:1});
                    }
                }
            }
            // sort the weekdays
            days.sort(function(a,b){return(a.dayId > b.dayId) ? 1 : ((b.dayId > a.dayId) ? -1 : 0);});
            return days;
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
        // get the week day
        getWeekDay: function(activity) {
            var date = this.getDate(activity);
            var adjustedDate = this.adjustDate(date);
            date = new Date(adjustedDate);
            return date.getDay();
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
                    Chart.draw(Chat.getMessagesByWeekDay());
                };
                reader.readAsText(file);
            } else {
                alert("Failed to load the file !");
            }
        }
    };
    window.addEventListener('load', App.init, false);
})();

