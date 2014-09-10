var index = {

    selectedApp: 18,

    init: function () {
        $("#OurApps > div").hover(
            function () {},
            function () {
                index.selectApp(17);
            }
        );
    },

    selectApp: function(ndx) {
		/*document.write("NDX: " + ndx + "<br/>");*/
        ndx--;
        var left = (ndx % 9 * -700) + "px";
        var top = ((Math.floor(ndx / 9) * -260) ) + "px";
        selectedApp = ndx;
        $("#OurApps div.itemDetail > table").animate({"marginTop": top, marginLeft: left},{queue:false, duration:1000, easing:"easeOutBack"});
/*		alert (ndx % 9);
		alert (ndx);
		alert (left);
		alert (top);
		document.write("NDX--: " + ndx + "<br/>");
		document.write("ndx % 9: " + ndx % 9 + "<br/>");
		document.write("left: " + left + "<br/>");
		document.write("top: " + top + "<br/>");*/
    },
/*
    getExamplesIconHtml: function() {
        var appgrid = "<table>";
        var day = 1;
        var max = 31;
        for (var i=0;i<3;i++) {
            appgrid += "<tr>";
            for (var j=0;j<9;j++) {
                if (day > max) {
                    appgrid += "<td class='empty'>";
                }
                else {
                    appgrid += "<td>";
                    appgrid += "<a id='xlnk" + day + "' href='javascript:void(0)' onclick='index.selectApp(" + day + ")'>";
                    appgrid += "<img src='assets/images/day" + day + "_icon_32.png'/>";
                    appgrid += "</a>";
                }

                day++;
                appgrid += "</td>";
            }

            appgrid += "</tr>";
        }
        
        appgrid += "</table>";
        return appgrid;
    }
*/}

/*$(function(){
    index.init();
});*/