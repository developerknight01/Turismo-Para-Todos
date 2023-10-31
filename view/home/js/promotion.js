$(document).ready(function(){        
    ClickTablePromo();  
    CheckLanguageDefault();  
});
function CheckLanguageDefault(){
    var lang = readCookie("language");    
    if(lang == "spanish"){
        $("#table").DataTable({     
            stateSave: true,
            "bDestroy": true,   
            "autoWidth": false,
            sDom: '<"top"fli>t<"bottom"p><"clear">r',
            sPaginationType: "full_numbers",
            bProcessing: true,
            bAutoWidth: false,
            response:true,
            language: {
                "emptyTable": "Sin datos",
                "lengthMenu": "Mostrar _MENU_ entradas",
                "info": "Mostrando _TOTAL_ entradas",
                "infoEmpty": "Mostrando 0 al 0 de 0 entradas",
                "search": "Buscar:",
                "paginate": {
                    "first": "Inicio",
                    "last": "Último",
                    "next": "Siguiente",
                    "previous": "Anterior"
                }
            }        
        });
    }
    else if(lang == "english"){
        $("#table").DataTable({      
            stateSave: true,
            "bDestroy": true,     
            "autoWidth": false,
            sDom: '<"top"fli>t<"bottom"p><"clear">r',
            sPaginationType: "full_numbers",
            bProcessing: true,
            bAutoWidth: false,
            response:true,
            language: {
                "emptyTable": "No data available in table",
                "lengthMenu": "Show _MENU_ entries",
                "info": "Showing _START_ to _END_ of _TOTAL_ entries",
                "infoEmpty": "Showing 0 to 0 of 0 entries",
                "search": "Search:",
                "paginate": {
                    "first": "First",
                    "last": "Last",
                    "next": "Next",
                    "previous": "Previous"
                }
            }    
        });
    }
    else if(lang == "french"){
        $("#table").DataTable({       
            stateSave: true,
            "bDestroy": true,    
            "autoWidth": false,
            sDom: '<"top"fli>t<"bottom"p><"clear">r',
            sPaginationType: "full_numbers",
            bProcessing: true,
            bAutoWidth: false,
            response:true,
            language: {
                "emptyTable": "Pas de données disponibles dans le tableau",
                "lengthMenu": "Afficher _MENU_ les entrées",
                "info": "Affichage de _START_ à _END_ sur _TOTAL_ entrées",
                "infoEmpty": "Affichage de 0 à 0 sur 0 entrées",
                "search": "Rechercher:",
                "paginate": {
                    "first": "Premier",
                    "last": "Dernier",
                    "next": "Suivant",
                    "previous": "Précédent"
                }
            }  
        });
    }
    else if(lang == "german"){
        $("#table").DataTable({    
            stateSave: true,
            "bDestroy": true,       
            "autoWidth": false,
            sDom: '<"top"fli>t<"bottom"p><"clear">r',
            sPaginationType: "full_numbers",
            bProcessing: true,
            bAutoWidth: false,
            response:true,
            language: {
                "emptyTable": "Keine Daten in der Tabelle verfügbar",
                "lengthMenu": "Einträge _MENU_ anzeigen",
                "info": "Zeige _START_ bis _END_ von _TOTAL_ Einträgen",
                "infoEmpty": "Zeige 0 bis 0 von 0 Einträgen",
                "search": "Suche:",
                "paginate": {
                    "first": "Erster",
                    "last": "Letzter",
                    "next": "Nächster",
                    "previous": "Vorheriger"
                }
            }  
        });        
    }
}
function ClickTablePromo(){
    $(".tablePromo table .btnIco").click(function(){        
        if($(this).hasClass("btnWhatsapp")){            
            let num = '16572615932';
            let promo = $(this).parent().parent().children("td").children("b").text().split(":")[0];            
            let msg= "Buenas, tengo unas consultas con respecto al paquete " + promo;
            var win = window.open(`https://wa.me/${num}?text=${msg}`, '_blank');
        }
        else if($(this).hasClass("btnPhone")){
            window.open('tel://16572615932')
        }
    });
    $(".tablePromo table tbody tr td:nth-child(1) img").click(function(){              
        openImage($(this));
    });
}