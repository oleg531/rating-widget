import reviews from './reviews';
import './styles/index.scss';
import widgetTemplate from './template.html';

(function () {
  document.addEventListener("DOMContentLoaded", e => {

    // create html content
    const mountPoint = document.querySelector('.trustpilot-rating');
    if (!mountPoint) {
      console.error('Sorry, could not find div with \'trustpilot-rating\' class.')
    }
    mountPoint.innerHTML = widgetTemplate;

    // main slide
    const reviewsCountSpan = document.querySelector('.see-reviews');
    reviewsCountSpan.innerHTML = `See ${reviews.reviews.length} review${reviews.reviews.length > 1 ? 's' : ''}`;

    const avgRating = Math.round(reviews.reviews.reduce((acc, x) => acc + (+x.starRating), 0) / reviews.reviews.length * 10) / 10;
    const scoreDiv = document.querySelector('.score');
    scoreDiv.innerHTML = avgRating;

    const mainLogoRating = document.querySelector('.stars img');
    mainLogoRating.src = getStarsImg(Math.round(avgRating));

    // toggle slides
    const showReviewsLink = document.querySelector('.see-reviews');
    const mainView = document.querySelector('.total');
    const slider = document.querySelector('.slide');

    showReviewsLink.addEventListener('click', e => {
      mainView.classList.add('hide');
      slider.classList.remove('hide');
      loadSlide(reviews.reviews[0]);
    });

    document.querySelector('body').addEventListener('click', e => {
      mainView.classList.remove('hide');
      slider.classList.add('hide');
    });

    document.querySelector('.widget-container').addEventListener('click', e => {
      e.stopPropagation();
    })

    // slides navigation
    let currentSlide = 0;
    let maxSlides = reviews.reviews.length - 1;

    const leftSlide = document.querySelector('.left-nav-button');
    leftSlide.addEventListener('click', e => {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = maxSlides;
      }
      loadSlide(reviews.reviews[currentSlide]);
    });

    const rightSlide = document.querySelector('.right-nav-button');
    rightSlide.addEventListener('click', e => {
      currentSlide++;
      if (currentSlide > maxSlides) {
        currentSlide = 0;
      }
      loadSlide(reviews.reviews[currentSlide]);
    });

    function loadSlide(review) {
      const author = document.querySelector('.slide .autor');
      author.innerHTML = review.fullName;

      const title = document.querySelector('.slide .text .title');
      title.innerHTML = `"${review.reviewTitle}"`;

      const text = document.querySelector('.slide .text .text-body');
      text.innerHTML = review.reviewBody;

      const starsImg = document.querySelector('.slide .stars img');
      starsImg.src = getStarsImg(review.starRating);
    }

    function getStarsImg(starsCount) {
      return `http://cdn.trustpilot.net/brand-assets/1.7.0/stars-${starsCount >= 0 && starsCount <= 5 ? starsCount : 0}.svg`;
    }
  });
})();