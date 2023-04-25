
document.getElementById("footer").innerHTML = `
<style>
/*::-webkit-scrollbar {width:1px}*/
@media screen and (max-width: 600px) {.column {width: 100%;height: auto;}}
</style>
<div class="footer-basic">
  <footer>
    <ul class="list-inline">
        <li class="list-inline-item"><a href="example.html">Home</a></li>
        <li class="list-inline-item"><a href="https://twitter.com/LewisGamingRBLX">Twitter</a></li>
        <li class="list-inline-item"><a href="https://www.youtube.com/@LewisRBLX">Youtube</a></li>
    </ul>
  </footer>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
`
document.getElementById("navigbar").innerHTML = `  
  <div class="nav_ul">
    <ul id="nav_ul">
    <li class="dropdown">
    <a><i class="fa-solid fa-chevron-down"></i>Northern</a>
    <ul class="dropdown-content">
      <li class="dropdown-sub">
        <a href="https://northernbus.github.io/Maps.html">Map</a>
      <li class="dropdown-sub">
        <a href="Routes.html">Routes</a>
      <li class="dropdown-sub">
        <a href="Apps.html">Apps</a>
      <li class="dropdown-sub">
        <a href="Timetables.html">Timetables</a>
        <ul class="dropdown-sub-list">
        </ul></li>
      </li>
    </ul>
    </li>
    <li class="dropdown">
    <a href="videos.html">Videos</a>
    </li>
    </ul>
  </div>
  `

document.getElementById('importantDates').innerHTML=["const dateRN=new Date().getDay()",
"var x = setInterval(function() {var now = new Date().getTime();var countDownDate = new Date('Jun 14, 2023 13:00:00').getTime();var distance = countDownDate - now;var days = Math.floor(distance / (1000 * 60 * 60 * 24));var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));var seconds = Math.floor((distance % (1000 * 60)) / 1000);",
"document.getElementById('paperA').innerHTML = `PaperA: ${days} Days, ${hours}:${minutes}:${seconds}`", "if (distance < 0) {clearInterval(x);document.getElementById('paperA').innerHTML = 'Exam has begun';}}, 1000);",
"var x = setInterval(function() {var now = new Date().getTime();var countDownDate = new Date('Jun 21, 2023 13:00:00').getTime();var distance = countDownDate - now;var days = Math.floor(distance / (1000 * 60 * 60 * 24));var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));var seconds = Math.floor((distance % (1000 * 60)) / 1000);",
"document.getElementById('paperB').innerHTML = `PaperB: ${days} Days, ${hours}:${minutes}:${seconds}`",
"if (distance < 0) {clearInterval(x);document.getElementById('paperB').innerHTML = 'Exam has begun';}}, 1000);",
"var x = setInterval(function() {var now = new Date().getTime();var countDownDate = new Date('May 08, 2023 9:00:00').getTime();var distance = countDownDate - now;var days = Math.floor(distance / (1000 * 60 * 60 * 24));var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));var seconds = Math.floor((distance % (1000 * 60)) / 1000);",
"document.getElementById('ESP').innerHTML = `ESP: ${days} Days, ${hours}:${minutes}:${seconds}`",
"if (distance < 0) {clearInterval(x);document.getElementById('ESP').innerHTML = 'ESP has begun';}}, 1000);",
"var x = setInterval(function() {var now = new Date().getTime();var countDownDate = new Date('Mar 30, 2023 15:00:00').getTime();var distance = countDownDate - now;var days = Math.floor(distance / (1000 * 60 * 60 * 24));var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));var seconds = Math.floor((distance % (1000 * 60)) / 1000);",
"document.getElementById('EoT').innerHTML = `End of Term: ${days} Days, ${hours}:${minutes}:${seconds}`}, 1000);",
"var x = setInterval(function() {var now = new Date().getTime();var countDownDate = new Date('Apr 18, 2023 15:00:00').getTime();var distance = countDownDate - now;var days = Math.floor(distance / (1000 * 60 * 60 * 24));var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));var seconds = Math.floor((distance % (1000 * 60)) / 1000);",
"document.getElementById('EoHT').innerHTML = `End of Half Term: ${days} Days, ${hours}:${minutes}:${seconds}`}, 1000);", "var x = setInterval(function() {var now = new Date().getTime();var countDownDate = new Date('Sep 09, 2023 11:00:00').getTime();var distance = countDownDate - now;var days = Math.floor(distance / (1000 * 60 * 60 * 24));var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));var seconds = Math.floor((distance % (1000 * 60)) / 1000);",
"document.getElementById('training').innerHTML = `Training Round: ${days} Days, ${hours}:${minutes}:${seconds}`}, 1000);"].join('\n')
