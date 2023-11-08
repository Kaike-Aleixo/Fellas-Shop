const photos = document.querySelectorAll('#others-photos img');

function idClick(event)
{
    const photoClicked = event.currentTarget;
    const principalPhoto = document.querySelector('#principal-photo');
    principalPhoto.src = photoClicked.src;
    
}

function photosSelection(photo)
{
    photo.addEventListener('click', idClick);
};

photos.forEach(photosSelection);
