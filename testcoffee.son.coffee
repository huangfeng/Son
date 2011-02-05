myColour = "#ff1000"

testStyles = 
    "$#navbar" : 
        width : "80%"
        height : "23px"		
        "$ul" :  
            list : 
                style : 
                    type : "none"
            "$li" : 
                "float" : "left"
                border : "1px solid " + myColour
                padding : "10px"
                "$a" :  
                    "font-weight" : "bold" 
                    color : myColour
                    
     "$#other" : 
        width : "50%"
        "$table" : 
            padding : "10px"
            
     "$#other{uniq}, #yetother, .andanother" : 
        width : "80%"
        "$table": 
            "table-layout" : "15px"
            "$td" : 
                padding : "3px"	
                
     "$code" : 
        clear : "both"
        display : "block"
        padding : "10px"              
        
return testStyles