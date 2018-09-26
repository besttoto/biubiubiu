
var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',//方向垂直
  slidesPerView: 'auto',//
  freeMode: true,
  scrollbar: {
      el: '.swiper-scrollbar',
  },
  mousewheel: true,
  });

  var ul =document.querySelector('.category-left ul');
  var liList =ul.parentNode;

  for( var i =0;i<liList.length;i++){
    liList[i].index= i;
  }

  ul.addEventListener('click',function(e){
        var li = e.target.parentNode;
        var index =li.index;
        console.dir(li);
  });