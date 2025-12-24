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

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄'; // ممكن تغيرها لـ '•' لو عاوزه ثلج ناعم
    
    // مكان عشوائي للبدء (من اليمين للشمال)
    snowflake.style.left = Math.random() * 100 + 'vw';
    
    // حجم عشوائي للحبات
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    
    // سرعة عشوائية للسقوط
    const duration = Math.random() * 3 + 2 + 's';
    snowflake.style.animationDuration = duration;
    
    // درجة شفافية عشوائية
    snowflake.style.opacity = Math.random();

    document.body.appendChild(snowflake);

    // مسح الحبة بعد ما توصل للأرض عشان ميتلمش كتير في الصفحة
    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(duration) * 1000);
}

// إنشاء حبة ثلج كل 200 مللي ثانية
setInterval(createSnowflake, 200);
