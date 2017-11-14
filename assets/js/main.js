/**
 * Created by msant on 14-11-2017.
 */

$(window).on('load', function(){
        retrive_xml_data();
    });

    function retrive_xml_data() {
        if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else { // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("GET", "progress.xml", false);
        xmlhttp.send();
        xmlDoc = xmlhttp.responseXML;
        var temp_table1 = "";
        var temp_table2 = "";

        temp_table1 = "<thead><TR style='text-align:center;font-weight: bold;'><th>FEATURE</th><th>DESCRIPTION</th><th>STATUS</th></TR></thead>";

        var x = xmlDoc.getElementsByTagName("CD");
        for (i = 0; i < x.length; i++) {
            temp_table2 = temp_table2 + '<tr><td>' + (x[i].getElementsByTagName("FEATURE")[0].childNodes[0].nodeValue) + '</td><td>' + x[i].getElementsByTagName("DESCRIPTION")[0].childNodes[0].nodeValue + '</td><td>' + x[i].getElementsByTagName("STATUS")[0].childNodes[0].nodeValue + '</td></tr>';
        }
        $("#xml_div").append("<table>" + temp_table1 + "<tbody>"+ temp_table2 + "</tbody></table>");

    }

