/**
 * Created by msant on 14-11-2017.
 */
// Load the xml file using ajax
$.ajax({
    type: "GET",
    url: "progress.xml",
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