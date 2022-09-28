// DistrictList data array for filling in info box
var districtListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    var table = populateTable();

    // Event listener to the two range filtering inputs to redraw on input
   $('#min, #max').keyup( function() {
     $('#colleges_table').DataTable().draw();
   } );
});

// Functions =============================================================

// Fill table with data
function populateTable() {

    var collegeTableContent = '';

    $.getJSON( '/search/cutoff', function( data ) {
        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            collegeTableContent += '<tr>';
            collegeTableContent += '<td>' + this.bc + '</td>';
            collegeTableContent += '<td>' + this.oc + '</td>';
            collegeTableContent += '<td>' + this.department + '</td>';
            collegeTableContent += '<td>' + this.name + '</td>';
            collegeTableContent += '<td>' + this.code + '</td>';
            collegeTableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#collegeList table tbody').html(collegeTableContent);
        return $('#colleges_table').DataTable({
        "order": [[ 0, "desc" ]]
    });
    });
};

/* Custom filtering function which will search data in column four between two values */
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min = parseInt( $('#min').val(), 10 );
        var max = parseInt( $('#max').val(), 10 );
        var cutoff = parseFloat( data[0] ) || 0; // use data for the cutoff column

        if ( ( isNaN( min ) && isNaN( max ) ) ||
             ( isNaN( min ) && cutoff <= max ) ||
             ( min <= cutoff   && isNaN( max ) ) ||
             ( min <= cutoff   && cutoff <= max ) )
        {
            return true;
        }
        return false;
    }
);
