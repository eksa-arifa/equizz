const tblmulai = document.querySelector('.mulai .tbl button');
const mulai = document.querySelector('.mulai');
const timer = document.querySelector('.body .header .waktu .timer');
const soal = document.querySelector('.body .quiz .pertanyaan');
const kondisi = document.querySelector('.kondisi');
const a = document.getElementById('ans1');
const b = document.getElementById('ans2');
const c = document.getElementById('ans3');
const d = document.getElementById('ans4');
const radio1 = document.getElementById('a');
const radio2 = document.getElementById('b');
const radio3 = document.getElementById('c');
const radio4 = document.getElementById('d');
const sc = document.querySelector('.kondisi .keterangan .sc');
const nomor = document.querySelector('.body .footer .nomor');
const congrat = document.querySelector('.kondisi .congrat');
const sisawaktu = document.querySelector('.kondisi .sisa-waktu');

let timercounter;
let times = 30;
let i = 0;
let correct = 0;



tblmulai.onclick = ()=>{
  mulai.classList.add('active');
  waktu(1000);
  mulaisoal();
}

function score(){
  if (radio1.checked && a.innerHTML == question[i].benar) {
    correct++;
  }
  if (radio2.checked && b.innerHTML == question[i].benar) {
    correct++;
  }
  if (radio3.checked && c.innerHTML == question[i].benar) {
    correct++;
  }
  if (radio4.checked && d.innerHTML == question[i].benar) {
    correct++;
  }
  
  i++;
  
  
  if (i > question.length-1) {
    hasil();
  }
  
  
  mulaisoal(i);
  

}

function mulaisoal(){
  soal.innerHTML = question[i].soal;
  a.innerHTML = question[i].a;
  b.innerHTML = question[i].b;
  c.innerHTML = question[i].c;
  d.innerHTML = question[i].d;
  
  let no = i+1
  
  nomor.innerHTML = no+'/'+question.length;
}

function waktu(time){
  timercounter = setInterval(timerplay, time);
  
  function timerplay(){
    timer.textContent = times+'s';
    times--;
  
    if (times < 0) {
      hasil();
    }
  }
}

function retry(){
  correct = 0;
  i = 0;
  times = 30;
  mulaisoal();
  
  waktu(1000);
  
  kondisi.classList.remove('active');
  
}

function kembali(){
  location.reload();
}

function hasil(){
      if (correct > 7) {
        congrat.innerHTML = 'SELAMAT';
      }else{
        congrat.innerHTML = 'BELAJAR LEBIH GIAT';
      }
      sisawaktu.innerHTML = 'waktu tersisa '+times+'s';
      sc.innerHTML = correct+'/'+question.length;
      kondisi.classList.add('active');
    
      clearInterval(timercounter);
}