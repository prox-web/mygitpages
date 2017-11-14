/**
 * Created by msant on 14-11-2017.
 */

    $(window).load(function() {
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

        temp_table1 = "<tableborder='1'><TR style='text-align:center;font-weight: bold;'><td>NAME</td><td>TAMIL</TD><TD>ENGLISH</TD><TD>MATHS</TD><TD>SCIENCE</TD><TD>SOC.SCIENCE</TD><TR>";

        var x = xmlDoc.getElementsByTagName("CD");
        for (i = 0; i < x.length; i++) {
            temp_table2 = temp_table2 + '<tr><td>' + (x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue) + '</td><td>' + x[i].getElementsByTagName("TAMIL")[0].childNodes[0].nodeValue + '</td><td>' + x[i].getElementsByTagName("ENGLISH")[0].childNodes[0].nodeValue + '</td><td>' + x[i].getElementsByTagName("MATHS")[0].childNodes[0].nodeValue + '</td><td>' + x[i].getElementsByTagName("SCIENCE")[0].childNodes[0].nodeValue + '</td><td>' + x[i].getElementsByTagName("SOCIAL")[0].childNodes[0].nodeValue + '</td></tr>';
        }
        $("#xml_div").append(temp_table1 + temp_table2 + "</table>");
    }

