const caixa = document.querySelectorAll('.seleção');

caixa.forEach(function(selecionado){
selecionado.addEventListener('change',function() {
if(this.checked){
caixa.forEach(function(outrasc){
if(outrasc !== selecionado){
    outrasc.checked = false;
}
});
}
});
});

const box0 = document.getElementById('0')
const box1 =document.getElementById('1')
const box2 =document.getElementById('2')
const box3 =document.getElementById('3')
const box4 =document.getElementById('4')
const box5 =document.getElementById('5')
const box6 =document.getElementById('6')
const box7 =document.getElementById('7')

box0.addEventListener('change', function() {
    if(box0.checked){
    window.open('https://www.youtube.com/watch?v=QYcyTQPFDuw&t=935s')}});
    box1.addEventListener('change', function() {
        if(box1.checked){
        window.open('https://www.youtube.com/watch?v=PHoEgqRAKzU')}});
        box2.addEventListener('change', function() {
            if(box2.checked){
            window.open('https://www.youtube.com/watch?v=LIRPOVJkUUM&list=PLHjXLgPhueNd7061PibKGKria7QnBG8Jw')}});
            box3.addEventListener('change', function() {
                if(box3.checked){
                window.open('https://www.youtube.com/watch?v=8pexV0Bi6Rg&t=1041s')}});
                box4.addEventListener('change', function() {
                    if(box4.checked){
                    window.open('https://www.youtube.com/watch?v=-bBzIgIaPS4')}});
                    box5.addEventListener('change', function() {
                        if(box5.checked){
                        window.open('https://www.youtube.com/playlist?list=PL_Q15fKxrBb7wo5SRxHbhk6ZL6zMYh5tH')}});
                        box6.addEventListener('change', function() {
                            if(box6.checked){
                            window.open('https://www.youtube.com/playlist?list=PL_Q15fKxrBb4gT7eMNvTvrFMmqDDNMXMk')}});
                            box7.addEventListener('change', function() {
                                if(box7.checked){
                                window.open('https://www.youtube.com/watch?v=sF80I-TQiW0')}});
