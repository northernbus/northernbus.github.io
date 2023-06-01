
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
    <a href="https://northernbus.github.io">Home</a>
    </li>
    <li class="dropdown">
    <a><i class="fa-solid fa-chevron-down"></i>Northern</a>
    <ul class="dropdown-content">
      <li class="dropdown-sub">
        <a href="https://northernbus.github.io/Northern/Maps.html">Map</a>
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
