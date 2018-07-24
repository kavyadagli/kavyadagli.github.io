//activate slider

$('.nav-side .nav-toggle').on('click', function(e) {
  e.preventDefault();
  $(this).parent().toggleClass('nav-open');
});



//change theme on click

var count = 0

document.getElementById('trigger').onclick = function () {
    count = count + 1;
    if (count%2!=0){
      document.getElementById('default').href = '../src/css/changeTheme.css';

    } else {
       document.getElementById('default').href = '../src/css/main.css';
    }
};
