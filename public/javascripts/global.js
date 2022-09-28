// DistrictList data array for filling in info box
var districtListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable();
});

// Functions =============================================================

// Fill table with data
function populateTable() {

    var collegeTableContent = '';

    $.getJSON( '/data/2022.json', function( data ) {
        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            collegeTableContent += '<tr>';
            collegeTableContent += '<td>' + this.coc + '</td>';
            collegeTableContent += '<td>' + this.con + '</td>';
            collegeTableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#collegeList table tbody').html(collegeTableContent);
        $('#colleges_table').DataTable();
    });
};
