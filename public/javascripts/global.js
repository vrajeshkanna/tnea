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

    $.getJSON( '/colleges/collegeList', function( data ) {
        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            collegeTableContent += '<tr>';
            collegeTableContent += '<td>' + this.id + '</td>';
            collegeTableContent += '<td>' + this.code + '</td>';
            collegeTableContent += '<td>' + this.name + '</td>';
            collegeTableContent += '<td>' + this.page + '</td>';
            collegeTableContent += '<td>' + this.d_name + '</td>';
            collegeTableContent += '<td><a href="http://univadm.annauniv.edu:7090/cutoff2015/cutoff.jsp?dist='+ this.d_id +'&collname='+ this.code +'&comm=5&submit=Submit">Cutoff</a></td>';
            collegeTableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#collegeList table tbody').html(collegeTableContent);
        $('#colleges_table').DataTable();
    });
};
