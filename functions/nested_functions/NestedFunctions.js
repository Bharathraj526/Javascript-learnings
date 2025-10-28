//nested functions
function grandFatherFunction(){
    console.log("grandfather function.");
    function fatherFunction(){
        console.log("fatherFunction.");
        function childFunction(){
            console.log("childFunction.");
            function grandChildFunction(){
                console.log("GrandChildFunction");
             }
             grandChildFunction();

        }
        childFunction();
    }
    fatherFunction();
}
grandFatherFunction();


//recomended approach
function grandFatherFunction(){
    console.log("grandfather function.");
    function fatherFunction(){
        console.log("fatherFunction.");
        function childFunction(){
            console.log("childFunction.");
            function grandChildFunction(){
                console.log("GrandChildFunction");
             }
             return grandChildFunction;

        }
        return childFunction;
    }
    return fatherFunction;
}
grandFatherFunction()()()();