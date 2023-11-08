const umbrella = document.querySelector('#cursor');

function umbrellaMouse(event)
{
    umbrella.style.top = event.y + 'px';
    umbrella.style.left = event.x + 'px';
    umbrella.style.bottom = event.y + 'px';
    umbrella.style.right = event.x + 'px';
}

window.addEventListener('mousemove', umbrellaMouse);