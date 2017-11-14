/**
 * Created by msant on 14-11-2017.
 */

$.ajax({
    type: "GET",
    url: "something.xml",
    dataType: "xml",
    success: function (xml) {

        // Parse the xml file and get data
        var xmlDoc = $.parseXML(xml),
            $xml = $(xmlDoc);
        $xml.find('category[name="My t"] logo').each(function () {
            $("#news-container").append($(this).text() + "<br />");
        });
    }
});