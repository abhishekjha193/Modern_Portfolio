function showSide() {
    document.querySelector('.sidebar').style.display = 'flex';
}

function closeSide() {
    document.querySelector('.sidebar').style.display = 'none';
}

document.querySelectorAll('.video-wrapper').forEach(wrapper => {
  const video = wrapper.querySelector('video');

  wrapper.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      wrapper.classList.add('playing');
    } else {
      video.pause();
      wrapper.classList.remove('playing');
    }
  });
});
