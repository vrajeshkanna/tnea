// DOM Ready =============================================================
$(document).ready(function() {
  $("#calc").on("click", function(){

    	var phy=$("#phy").val();
    	var chem=$("#chem").val();
    	var math=$("#math").val();
    	var cutoff=(phy/4) + (chem/4) + (math/2);
    	if(phy != "" || chem != "" || math !="")
    	{
    		if(phy > 200 || chem >200 || math > 200)
    		{
    			alert("Marks Should Be Less than 200");
    		}
    		else{
		    $("#marks").html('<table class="table table-striped">\
				    <thead class="thead-inverse">\
				        <tr>\
				        	<th>S.No</th>\
				            <th>Subject</th>\
				            <th>Marks</th>\
				            <th>Divide By</th>\
				            <th>Calculation</th>\
				        </tr>\
				    </thead>\
				    <tbody>\
				        <tr>\
				            <td>1</td>\
				            <td>Physics</td>\
				            <td>'+$("#phy").val()+'</td>\
				            <td>4</td>\
				            <td>'+($("#phy").val()/4)+'</td>\
				        </tr>\
				        <tr>\
				            <td>2</td>\
				            <td>Chemistry</td>\
				            <td>'+$("#chem").val()+'</td>\
				            <td>4</td>\
				            <td>'+($("#chem").val()/4)+'</td>\
				        </tr>\
				        <tr>\
				            <td>3</td>\
				            <td>Mathematics</td>\
				            <td>'+$("#math").val()+'</td>\
				            <td>2</td>\
				            <td>'+($("#math").val()/2)+'</td>\
				        </tr>\
				         <tr class="" style="font-size:25px">\
				            <th colspan="4" class="bg-muted text-right">Your Cutoff Mark:</th>\
				            <td class="bg-success"><b>'+cutoff+'</b></td>\
				        </tr>\
				    </tbody>\
				</table>');
				}
			}
			else{
				alert("Enter Your marks");
        // <tr>\
        //     <td colspan="5"><b><a href="http://tnea.annauniverzity.com/tnea/cutoff/'+cutoff+'/OC/2015/DALL/CALL" class="btn btn-block btn-success" target="blank">CLICK HERE to find College and department for your cutoff mark '+cutoff+'</a></b></td>\
        // </tr>\
			}
	});
});
