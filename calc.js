class Calculator{
    numbers1 = Number(document.getElementById("screen").value);
    numbers2 = Number(document.getElementById("screen2").value);

    

    Sum(){
        var total = this.numbers1 + this.numbers2;
        this.Total(total);
    }

    Sub(){
        var total = this.numbers1 - this.numbers2;
        this.Total(total);
    }

    Multy(){
        var total = this.numbers1 * this.numbers2;
        this.Total(total);
    }

    Dev(){
        var total = this.numbers1 / this.numbers2
        this.Total(total);
    }

    Reset(){
        document.getElementById("screen").value = " " ;
        document.getElementById("screen2").value = " ";
        document.getElementById("totalScreen").innerHTML = " ";
    }

    Total(total){
        document.getElementById("totalScreen").innerHTML = total;
        // alert(total);
    }


    


} 

jQuery(document).ready( // ενεργοποιώ την jQuery

    function(){

        let activeScreen = "#screen" ;

        $("#screen").click(
            function(){
                activeScreen = "#screen";
                $("#screen").prop("disabled", false); // Ενεργοποιούμε το πεδίο screen
                $("#screen2").prop("disabled", false);

            

        $("#0").click(
            function(){
                let currentValue = $("#screen").val(); // παίρνουμε την τρέχουσα τιμή
                $("#screen").val(currentValue + "0"); // προσθέτω το 0 στην τρέχουσα τιμή.
            }
        )

        $("#1").click(
            function(){
                let currentValue = $("#screen").val(); // παίρνουμε την τρέχουσα τιμή
                $("#screen").val(currentValue + "1"); // προσθέτω το 0 στην τρέχουσα τιμή.
            }
        )

        $("#2").click(
            function(){
                let currentValue = $("#screen").val(); // παίρνουμε την τρέχουσα τιμή
                $("#screen").val(currentValue + "2"); // προσθέτω το 0 στην τρέχουσα τιμή.
            }
        )

        $("#3").click(
            function(){
                let currentValue = $("#screen").val(); // παίρνουμε την τρέχουσα τιμή
                $("#screen").val(currentValue + "3"); // προσθέτω το 0 στην τρέχουσα τιμή.
            }
        )

        $("#4").click(
            function(){
                let currentValue = $("#screen").val(); // παίρνουμε την τρέχουσα τιμή
                $("#screen").val(currentValue + "4"); // προσθέτω το 0 στην τρέχουσα τιμή.
            }
        )

        $("#5").click(
            function(){
                let currentValue = $("#screen").val(); // παίρνουμε την τρέχουσα τιμή
                $("#screen").val(currentValue + "5"); // προσθέτω το 0 στην τρέχουσα τιμή.
            }
        )

        $("#6").click(
            function(){
                let currentValue = $("#screen").val(); // παίρνουμε την τρέχουσα τιμή
                $("#screen").val(currentValue + "6"); // προσθέτω το 0 στην τρέχουσα τιμή.
            }
        )

        $("#7").click(
            function(){
                let currentValue = $("#screen").val(); // παίρνουμε την τρέχουσα τιμή
                $("#screen").val(currentValue + "7"); // προσθέτω το 0 στην τρέχουσα τιμή.
            }
        )

        $("#8").click(
            function(){
                let currentValue = $("#screen").val(); // παίρνουμε την τρέχουσα τιμή
                $("#screen").val(currentValue + "8"); // προσθέτω το 0 στην τρέχουσα τιμή.
            }
        )

        $("#9").click(
            function(){
                let currentValue = $("#screen").val(); // παίρνουμε την τρέχουσα τιμή
                $("#screen").val(currentValue + "9"); // προσθέτω το 0 στην τρέχουσα τιμή.
            }
        )

        $("#dot").click(
            function() {
                let currentValue = $("#screen").val(); // Παίρνουμε την τρέχουσα τιμή
                if (!currentValue.includes(".")) { // Ελέγχουμε αν δεν υπάρχει ήδη "."
                    $("#screen").val(currentValue + "."); // Προσθέτουμε την "."
                }
            }
        )

    }
    ) 


        $("#screen2").click(

            function(){
                activeScreen ="#screen2";
                $("#screen2").prop("disabled", false); // Ενεργοποιούμε το πεδίο screen2
                $("#screen").prop("disabled", false);

                $("#0").click(

                    function(){
                        let currentValue = $("#screen2").val(); // παίρνουμε την τρέχουσα τιμή
                        $("#screen2").val(currentValue + "0"); // προσθέτω το 0 στην τρέχουσα τιμή.
                        
                    }
                );

                $("#1").click(

                    function(){
                        let currentValue = $("#screen2").val(); // παίρνουμε την τρέχουσα τιμή
                        $("#screen2").val(currentValue + "1"); // προσθέτω το 0 στην τρέχουσα τιμή.
                        
                    }
                )

                $("#2").click(

                    function(){
                        let currentValue = $("#screen2").val(); // παίρνουμε την τρέχουσα τιμή
                        $("#screen2").val(currentValue + "2"); // προσθέτω το 0 στην τρέχουσα τιμή.
                        
                    }
                )

                $("#3").click(

                    function(){
                        let currentValue = $("#screen2").val(); // παίρνουμε την τρέχουσα τιμή
                        $("#screen2").val(currentValue + "3"); // προσθέτω το 0 στην τρέχουσα τιμή.
                        
                    }
                )

                $("#4").click(

                    function(){
                        let currentValue = $("#screen2").val(); // παίρνουμε την τρέχουσα τιμή
                        $("#screen2").val(currentValue + "4"); // προσθέτω το 0 στην τρέχουσα τιμή.
                        
                    }
                )

                $("#5").click(

                    function(){
                        let currentValue = $("#screen2").val(); // παίρνουμε την τρέχουσα τιμή
                        $("#screen2").val(currentValue + "5"); // προσθέτω το 0 στην τρέχουσα τιμή.
                        
                    }
                )

                $("#6").click(

                    function(){
                        let currentValue = $("#screen2").val(); // παίρνουμε την τρέχουσα τιμή
                        $("#screen2").val(currentValue + "6"); // προσθέτω το 0 στην τρέχουσα τιμή.
                        
                    }
                )

                $("#7").click(

                    function(){
                        let currentValue = $("#screen2").val(); // παίρνουμε την τρέχουσα τιμή
                        $("#screen2").val(currentValue + "7"); // προσθέτω το 0 στην τρέχουσα τιμή.
                        
                    }
                )

                $("#8").click(

                    function(){
                        let currentValue = $("#screen2").val(); // παίρνουμε την τρέχουσα τιμή
                        $("#screen2").val(currentValue + "8"); // προσθέτω το 0 στην τρέχουσα τιμή.
                        
                    }
                )

                $("#9").click(

                    function(){
                        let currentValue = $("#screen2").val(); // παίρνουμε την τρέχουσα τιμή
                        $("#screen2").val(currentValue + "9"); // προσθέτω το 0 στην τρέχουσα τιμή.
                        
                    }
                )

            }

        )

    }

)