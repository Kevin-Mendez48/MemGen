document.getElementById('meme-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const topText = document.getElementById('top-text').value;
    const bottomText = document.getElementById('bottom-text').value;
    const imageUrl = document.getElementById('image-url').value;

    const memeContainer = document.getElementById('meme-container');

    const memeDiv = document.createElement('div');
    memeDiv.classList.add('meme');

    const img = document.createElement('img');
    img.src = imageUrl;
    memeDiv.appendChild(img);

    const topTextDiv = document.createElement('div');
    topTextDiv.classList.add('meme-text', 'top');
    topTextDiv.innerText = topText;
    memeDiv.appendChild(topTextDiv);

    const bottomTextDiv = document.createElement('div');
    bottomTextDiv.classList.add('meme-text', 'bottom');
    bottomTextDiv.innerText = bottomText;
    memeDiv.appendChild(bottomTextDiv);

    memeDiv.addEventListener('click', function() {
      memeDiv.remove();
    });

    memeContainer.appendChild(memeDiv);

    document.getElementById('meme-form').reset();
  });
