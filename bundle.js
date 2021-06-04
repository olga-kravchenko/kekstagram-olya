(()=>{"use strict";window.constants={EMPTY_STRING:"",ONE_HUNDRED:100,MIN_ARRAY_INDEX:0},(()=>{const e="https://21.javascript.pages.academy/kekstagram/data",t="https://21.javascript.pages.academy/kekstagram",o=(o,n,r,s)=>{const c=new XMLHttpRequest;c.responseType="json",c.timeout=1e4,c.addEventListener("load",(()=>((e,t,o)=>{200===e.status?t(e.response):o(`Статус ответа: ${e.status} ${e.statusText}`)})(c,o,n))),c.addEventListener("error",(()=>(e=>e("Произошла ошибка соединения"))(n))),c.addEventListener("timeout",(()=>(e=>e("Запрос не успел выполниться за 10000 мс"))(n)));const i="POST"===r?t:e;c.open(r,i),c.send(s)};window.backend={get:(e,t)=>o(e,t,"GET"),post:(e,t,n)=>o(t,n,"POST",e)}})(),(()=>{const e=document.querySelector("main"),t=document.querySelector("#success").content,o=document.querySelector("#error").content,n=e=>{e.preventDefault(),document.querySelector(".success").remove()},r=e=>{e.preventDefault(),document.querySelector(".error").remove()},s=t=>{const o=e.querySelector(".success"),s=e.querySelector(".error");"Escape"===t.key&&o?n(t):"Escape"===t.key&&s&&r(t)},c=t=>{const o=e.querySelector(".success"),s=e.querySelector(".error");t.target===o?n(t):t.target===s&&r(t)};window.utilForm={showSuccessModal:()=>{(()=>{const o=t.cloneNode(!0);e.appendChild(o)})(),e.querySelector(".success__button").addEventListener("click",n),document.addEventListener("click",c),document.addEventListener("keydown",s)},showErrorModal:()=>{(()=>{const t=o.cloneNode(!0);e.appendChild(t)})(),e.querySelector(".error__button").addEventListener("click",r),document.addEventListener("click",c),document.addEventListener("keydown",s)}}})(),(()=>{let e;window.util={debounce:t=>{e&&window.clearTimeout(e),e=window.setTimeout((()=>{window.gallery.removePictures(),window.gallery.render(t)}),500)},getRandomNumber:(e,t)=>Math.floor(Math.random()*(t-e)+e),createNewElement:(e,t,o)=>{const n=document.createElement(e);return n.classList.add(t),o&&(n.textContent=o),n},cleanContent:e=>{e.innerHTML=window.constants.EMPTY_STRING},showErrorMessage:e=>{const t=document.createElement("div");t.classList.add("modal-error"),t.textContent=e,document.body.insertAdjacentElement("afterbegin",t),setTimeout((()=>{t.remove()}),3e3)}}})(),(()=>{const e=document.querySelector("#picture").content;window.picture={create:t=>{const o=e.cloneNode(!0);return o.querySelector(".picture").dataset.id=t.id,o.querySelector(".picture__img").src=t.url,o.querySelector(".picture__likes").textContent=t.likes,o.querySelector(".picture__comments").textContent=t.comments.length,o}}})(),(()=>{const e=document.querySelector("body"),t=e.querySelector(".big-picture"),o=t.querySelector("#picture-cancel"),n=t.querySelector(".social__comment-count"),r=t.querySelector(".social__comments"),s=t.querySelector(".comments-loader");let c,i=0;const d=e=>{const t=window.util.createNewElement("li","social__comment"),o=window.util.createNewElement("img","social__picture"),n=window.util.createNewElement("p","social__text",e.message);return o.src=e.avatar,o.alt=e.name,t.appendChild(o),t.appendChild(n),t},l=e=>{let o=i;for(i+5<e.length?i+=5:(i=e.length,s.classList.add("hidden")),t.querySelector("#comments-counter").textContent=i;o<i;o++)r.appendChild(d(e[o]))},a=()=>{l(c.comments)},u=()=>{t.classList.add("hidden"),e.classList.remove("modal-open")},m=e=>{const n="Escape"===e.key,r=t.classList.contains("hidden");n&&!r&&(e.preventDefault(),u(),o.removeEventListener("click",u),document.removeEventListener("keydown",m),s.removeEventListener("click",a))};window.preview={show:d=>{c=d,i=0,(c=>{t.classList.remove("hidden"),e.classList.add("modal-open"),n.classList.remove("hidden"),s.classList.remove("hidden"),window.util.cleanContent(r),(e=>{t.querySelector(".big-picture__img img").src=e.url,t.querySelector(".likes-count").textContent=e.likes,t.querySelector(".comments-count").textContent=e.comments.length,t.querySelector(".social__caption").textContent=e.description})(c),l(c.comments),o.addEventListener("click",u),document.addEventListener("keydown",m),s.addEventListener("click",a)})(d)}}})(),(()=>{const e=document.querySelector(".pictures"),t=document.querySelector(".img-filters"),o=t.querySelectorAll(".img-filters__button"),n=t.querySelector("#filter-default"),r=t.querySelector("#filter-random"),s=t.querySelector("#filter-discussed");let c;const i=t=>{const o=document.createDocumentFragment();switch(t){case r:(e=>{let t=[];for(;t.length<10;){const o=window.util.getRandomNumber(window.constants.MIN_ARRAY_INDEX,c.length);let n=c[o];if(!t.includes(n)){t.push(n);const o=window.picture.create(n);e.appendChild(o)}}})(o);break;case s:(e=>{let t=[...c];for(let o=0;o<t.length;o++){t.sort(((e,t)=>t.comments.length-e.comments.length));const n=window.picture.create(t[o]);e.appendChild(n)}})(o);break;default:(e=>{for(let t=0;t<c.length;t++){const o=window.picture.create(c[t]);e.appendChild(o)}})(o)}e.appendChild(o)},d=e=>{e.classList.contains("img-filters__button--active")||((e=>{o.forEach((e=>e.classList.remove("img-filters__button--active"))),e.classList.add("img-filters__button--active")})(e),window.util.debounce(e))},l=()=>d(n),a=()=>d(r),u=()=>d(s),m=e=>{const t=e.target.closest(".picture");if(t){const e=t.dataset.id;window.preview.show(c[e])}};window.gallery={activate:o=>{c=o,(()=>{for(let e=0;e<c.length;e++)c[e].id=e})(),i(),n.addEventListener("click",l),r.addEventListener("click",a),s.addEventListener("click",u),e.addEventListener("click",m),t.classList.remove("img-filters--inactive")},render:i,removePictures:()=>{e.querySelectorAll(".picture").forEach((e=>e.remove()))}}})(),(()=>{const e="none",t="chrome",o="sepia",n="marvin",r="phobos",s="heat",c="none",i="grayscale",d="sepia",l="invert",a="blur",u="brightness",m=document.querySelector(".img-upload__overlay"),w=m.querySelector(".img-upload__preview img"),v=m.querySelector(".effects"),p=m.querySelector(".effect-level"),y=p.querySelector(".effect-level__line"),h=p.querySelector(".effect-level__pin"),_=p.querySelector(".effect-level__depth");let g=c,E=100,L=453;const S=e=>{(e=>{const t=e.type;"click"===t?L=e.offsetX:"mousemove"===t&&(L+=e.movementX)})(e),E=100*L/453,E=E<0?0:E,E=E>100?100:E,h.style.left=`${E}%`,_.style.width=`${E}%`},f=()=>{E=100,h.style.left=`${E}%`,_.style.width=`${E}%`,L=453},q=e=>E*e/window.constants.ONE_HUNDRED,k=()=>{let m,v;switch("none"===g?p.classList.add("hidden"):p.classList.remove("hidden"),g){case e:m=`${c}`;break;case t:m=`${i}(${q(1)})`,v=t;break;case o:m=`${d}(${q(1)})`,v=o;break;case n:m=`${l}(${q(100)}%)`,v=n;break;case r:m=`${a}(${q(3)}px)`,v=r;break;case s:m=`${u}(${q(3)})`,v=s}w.style.filter=m,w.className=window.constants.EMPTY_STRING,v&&w.classList.add(`effects__preview--${v}`)},b=e=>{e.target!==h&&(S(e),k())},N=e=>{f(),g=e.target.value,k()},C=e=>{S(e),k()},$=()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",$)},M=()=>{document.addEventListener("mousemove",C),document.addEventListener("mouseup",$)};window.filters={addListeners:()=>{h.addEventListener("mousedown",M),y.addEventListener("click",b),v.addEventListener("change",N)},reset:()=>{f(),g=c,document.querySelector("input#effect-none").checked=!0,k()}}})(),(()=>{const e=document.querySelector(".img-upload__overlay"),t=e.querySelector(".img-upload__preview img"),o=e.querySelector(".scale__control--smaller"),n=e.querySelector(".scale__control--bigger"),r=e.querySelector(".scale__control--value");let s=100;const c=()=>{r.value=`${s}%`,t.style.transform=`scale(${s/window.constants.ONE_HUNDRED})`},i=()=>{s<100&&(s+=25,c())},d=()=>{s>25&&(s-=25,c())};window.zoom={addListeners:()=>{n.addEventListener("click",i),o.addEventListener("click",d)},reset:()=>{s=100,c()}}})(),(()=>{const e=/^#[\w\d]{1,19}(\s|$)/,t="",o="Хэштег начинается с # и длинной не больше 19 символов",n="Хэштегов должно быть не больше 5",r=document.querySelector(".img-upload__form").querySelector(".text__hashtags");let s;const c=()=>{r.setCustomValidity(t),r.reportValidity()};window.hashtag={checkHashtag:()=>{let c,i=r.value.trim().split(" ");return r.value.trim()===window.constants.EMPTY_STRING?c=!0:i.length>5?s=n:c=(n=>{let r;return r=n.every((t=>e.test(t))),s=r?t:o,r})(i),c},addListeners:()=>{r.addEventListener("input",c)},showErrorMessage:()=>{r.setCustomValidity(s),r.reportValidity()}}})(),(()=>{const e=document.querySelector("body"),t=e.querySelector("#upload-select-image"),o=t.querySelector("#upload-file"),n=t.querySelector(".img-upload__overlay"),r=n.querySelector("#upload-cancel"),s=n.querySelector(".effect-level"),c=n.querySelector(".text__hashtags"),i=n.querySelector(".text__description"),d=e=>{const t="Escape"===e.key,o=c!==document.activeElement,n=i!==document.activeElement;t&&o&&n&&(e.preventDefault(),m())},l=e=>{e.preventDefault(),m()},a=e=>{e.preventDefault(),u()},u=()=>{w(),n.classList.remove("hidden"),e.classList.add("modal-open"),s.classList.add("hidden")},m=()=>{v(),n.classList.add("hidden"),e.classList.remove("modal-open"),window.filters.reset(),window.zoom.reset(),t.reset()},w=()=>{document.addEventListener("keydown",d),r.addEventListener("click",l)},v=()=>{document.removeEventListener("keydown",d),r.removeEventListener("click",l)},p=()=>{m(),window.utilForm.showSuccessModal()},y=()=>{m(),window.utilForm.showErrorModal()},h=e=>{e.preventDefault(),window.hashtag.checkHashtag()?window.backend.post(new FormData(t),p,y):window.hashtag.showErrorMessage()};window.form={activate:()=>{window.filters.addListeners(),window.zoom.addListeners(),window.hashtag.addListeners(),t.addEventListener("submit",h),o.addEventListener("change",a)}}})(),(()=>{const e=window.gallery.activate,t=window.util.showErrorMessage;window.backend.get(e,t),window.form.activate()})()})();