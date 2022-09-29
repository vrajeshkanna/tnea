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

    $.getJSON( '/data/2022_rank.json', function( data ) {
        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            collegeTableContent += '<tr>';
            collegeTableContent += '<td>' + this.BC + '</td>';
            collegeTableContent += '<td>' + this.OC + '</td>';
            collegeTableContent += '<td>' + this.MBC + '</td>';
            collegeTableContent += '<td>' + this.SC + '</td>';
            collegeTableContent += '<td>' + this.ST + '</td>';
            collegeTableContent += '<td>' + this.brn + '</td>';
            collegeTableContent += '<td>' + this.con + '</td>';
            collegeTableContent += '<td>' + this.coc + '</td>';
            collegeTableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#collegeList table tbody').html(collegeTableContent);
        return $('#colleges_table').DataTable({
        "order": [[ 1, "asc" ]]
    });
    });
};
