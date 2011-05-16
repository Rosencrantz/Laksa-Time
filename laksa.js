var laksa = function() {
    Date.prototype.isItLaksaTime = function() {
        var hour = this.getHours(),
            minute = this.getMinutes();

        if(hour == 12)  { 
            return true;
        } else {
            return false;
        }
    }

    Date.prototype.isItLaksaDay = function() {
        var day = this.getDay();

        if(day == 4) {
            return true;
        } else {
            return false;
        }
    }

    Date.prototype.howLongTilLaksa = function() {
        var laksaDate = this.getNextLaksaDate();
        
        return(this || laksaDate - this);     
    }

    Date.prototype.getNextLaksaDate = function() {
        var laksaDate = new Date(),
            diff = (4 - this.getDay() + 7) % 7;

        return this.addDays((diff === 0) ? diff += 7 : diff); 
    }
};

<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="utf-8" /> 
    <title>Is it laksa time yet?</title> 
 
<!--
          _____            _____                    _____                    _____                    _____          
         /\    \          /\    \                  /\    \                  /\    \                  /\    \         
        /::\____\        /::\    \                /::\____\                /::\    \                /::\    \        
       /:::/    /       /::::\    \              /:::/    /               /::::\    \              /::::\    \       
      /:::/    /       /::::::\    \            /:::/    /               /::::::\    \            /::::::\    \      
     /:::/    /       /:::/\:::\    \          /:::/    /               /:::/\:::\    \          /:::/\:::\    \     
    /:::/    /       /:::/__\:::\    \        /:::/____/               /:::/__\:::\    \        /:::/__\:::\    \    
   /:::/    /       /::::\   \:::\    \      /::::\    \               \:::\   \:::\    \      /::::\   \:::\    \   
  /:::/    /       /::::::\   \:::\    \    /::::::\____\________    ___\:::\   \:::\    \    /::::::\   \:::\    \  
 /:::/    /       /:::/\:::\   \:::\    \  /:::/\:::::::::::\    \  /\   \:::\   \:::\    \  /:::/\:::\   \:::\    \ 
/:::/____/       /:::/  \:::\   \:::\____\/:::/  |:::::::::::\____\/::\   \:::\   \:::\____\/:::/  \:::\   \:::\____\
\:::\    \       \::/    \:::\  /:::/    /\::/   |::|~~~|~~~~~     \:::\   \:::\   \::/    /\::/    \:::\  /:::/    /
 \:::\    \       \/____/ \:::\/:::/    /  \/____|::|   |           \:::\   \:::\   \/____/  \/____/ \:::\/:::/    / 
  \:::\    \               \::::::/    /         |::|   |            \:::\   \:::\    \               \::::::/    /  
   \:::\    \               \::::/    /          |::|   |             \:::\   \:::\____\               \::::/    /   
    \:::\    \              /:::/    /           |::|   |              \:::\  /:::/    /               /:::/    /    
     \:::\    \            /:::/    /            |::|   |               \:::\/:::/    /               /:::/    /     
      \:::\    \          /:::/    /             |::|   |                \::::::/    /               /:::/    /      
       \:::\____\        /:::/    /              \::|   |                 \::::/    /               /:::/    /       
        \::/    /        \::/    /                \:|   |                  \::/    /                \::/    /        
         \/____/          \/____/                  \|___|                   \/____/                  \/____/         
                                                                                                                     
 
      _____                    _____                    _____                    _____          
     /\    \                  /\    \                  /\    \                  /\    \         
    /::\    \                /::\    \                /::\____\                /::\    \        
    \:::\    \               \:::\    \              /::::|   |               /::::\    \       
     \:::\    \               \:::\    \            /:::::|   |              /::::::\    \      
      \:::\    \               \:::\    \          /::::::|   |             /:::/\:::\    \     
       \:::\    \               \:::\    \        /:::/|::|   |            /:::/__\:::\    \    
       /::::\    \              /::::\    \      /:::/ |::|   |           /::::\   \:::\    \   
      /::::::\    \    ____    /::::::\    \    /:::/  |::|___|______    /::::::\   \:::\    \  
     /:::/\:::\    \  /\   \  /:::/\:::\    \  /:::/   |::::::::\    \  /:::/\:::\   \:::\    \ 
    /:::/  \:::\____\/::\   \/:::/  \:::\____\/:::/    |:::::::::\____\/:::/__\:::\   \:::\____\
   /:::/    \::/    /\:::\  /:::/    \::/    /\::/    / ~~~~~/:::/    /\:::\   \:::\   \::/    /
  /:::/    / \/____/  \:::\/:::/    / \/____/  \/____/      /:::/    /  \:::\   \:::\   \/____/ 
 /:::/    /            \::::::/    /                       /:::/    /    \:::\   \:::\    \     
/:::/    /              \::::/____/                       /:::/    /      \:::\   \:::\____\    
\::/    /                \:::\    \                      /:::/    /        \:::\   \::/    /    
 \/____/                  \:::\    \                    /:::/    /          \:::\   \/____/     
                           \:::\    \                  /:::/    /            \:::\    \         
                            \:::\____\                /:::/    /              \:::\____\        
                             \::/    /                \::/    /                \::/    /        
                              \/____/                  \/____/                  \/____/         
                                                                                                
--> 
 
    <!-- Sure it's overkill, but it's probably cached already... --> 
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script> 
    <script type="text/javascript"> 
    (function(){
 
        var options = {
            "yesMessage": "YES!",
            "noMessage": "No",
            "target": "#isitlaksatime",
            "day": 5,         // 5 for friday
            "hour": 12         // 12 for noon!
        };
        
        function countDown() {
 
            var target = options.target,
                targetDay = options.day,
                targetHour = options.hour,
                yesMessage = options.yesMessage || "Yes",
                noMessage = options.noMessage || "No",
                now = new Date(),
                theDay = now.getDay(),
                theHour = now.getHours(),
                theMinute = now.getMinutes();
 
            if ( theDay === targetDay ) {
                
                if ( theHour === targetHour ) {
                    message = yesMessage;
                } else if ( (theHour + 2) === targetHour ) {
                    // can't be arsed abstracting these
                    message = "Not yet";
                } else if ( (theHour + 1) === targetHour ) {
                    message = "Soon";
                    if ( theMinute >= 45) {
                        message = "Really soon";
                    }
                    if ( theMinute >= 55) {
                        message = "Nearly";
                    }
                    if ( theMinute >= 58) {
                        message = "Get ready";
                    }
                } else {
                    message = noMessage;
                }
            
            } else if ( theDay === (targetDay - 1)) {
                message = "Come back tomorrow";
            } else {
                message = noMessage;
            }
 
            $(target).text(message);
            
            if (message.length > 10) {
                $("body").addClass("long");
            } else {
                $("body").removeClass("long");
            }
            
            //console.log("minute: " + theMinute + " message: " + message)
        }
 
        $(document).ready( function() {
            countDown();
            var timer = setInterval(countDown, 10000);
        });
 
    })();
    </script> 
 
    <style type="text/css"> 
    body { background: white; color: black; text-align: center; font-family: sans-serif; }
    .assistive { position: absolute; left: -5000px; width: 4000px; overflow: hidden; top: 0; height: 0; }
    #isitlaksatime { font-size: 10em; margin: 10% 5% 0 5%; text-shadow: 3px 3px 3px #ddd; }
    .long #isitlaksatime { font-size: 6em; }
    </style> 
 
</head> 
<body> 
 
    <h1 class="assistive">is it laksa time yet?</h1> 
    
    <p id="isitlaksatime"> 
        <noscript><a href="http://twitter.com/home/?status=Oi%20@rioter,%20is%20it%20laksa%20time%20yet?%20http://isitlaksatimeyet.200ok.com.au/">Ask Jared</a>.</noscript> 
    </p> 
 
</body> 
</html> 
