window.onload = function() {
  setTimeout(function() {
    let gnbOpen = document.querySelector('header .menu');
    let gnb = document.querySelector('.gnb');
    gnbOpen.addEventListener('click', function() {
      gnb.classList.add('on');
    });
    let gnbClose = document.querySelector('.gnb .close');
    gnbClose.addEventListener('click', function() {
      gnb.classList.remove('on');
    });

    // if(localStorage.getItem("infiniteScrollEnabled") === null){
    //   localStorage.setItem('lang', 'kr');
    // }

    let langChange = document.querySelectorAll('.lang-ch a');
    let wrap = document.querySelector('.wrap');
    Array.prototype.forEach.call(langChange, function(e) {
      e.addEventListener('click', function() {
        langChk();
      })
    });

    function langChk() {
      let langLocal = localStorage.getItem('lang');
      if(langLocal === 'kr') {
        enLangSet();
      } else {
        krLangSet();
      }
    }

    function krLangSet() {
      wrap.classList.add('kr-view');
      wrap.classList.remove('en-view');
      localStorage.setItem('lang', 'kr');
    }

    function enLangSet() {
      wrap.classList.remove('kr-view');
      wrap.classList.add('en-view');
      localStorage.setItem('lang', 'en');
    }


    //footer
    let goTop = document.querySelector('.go-top');
    if(goTop)goTop.addEventListener('click', function() {
      window.scrollTo({top:0, behavior:'smooth'});
    });


  },50);
}
