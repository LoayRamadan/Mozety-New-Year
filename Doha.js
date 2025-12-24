        function checkPass() {
            const val = document.getElementById('passInput').value;
            if(val === "260705") { 
                showScreen('screen2');
            } else {
                alert("الباسورد غلط يا دودو (260705)");
            }
        }

        function showScreen(screenId) {
            
            document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
           
            document.getElementById(screenId).classList.add('active');
        }
