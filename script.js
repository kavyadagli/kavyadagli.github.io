$('.nav-side .nav-toggle').on('click', function(e) {
  e.preventDefault();
  $(this).parent().toggleClass('nav-open');
});

document.getElementById('trigger').onclick = function () {
    document.getElementById('change-theme').href = 'changeTheme.css';
};
