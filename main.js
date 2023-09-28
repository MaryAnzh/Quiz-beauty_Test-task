(()=>{"use strict";class e{constructor(e,t,s,n="",i){const o=document.createElement(t);Array.isArray(s)&&s.forEach((e=>o.classList.add(e))),"string"==typeof s&&(o.className=s),o.textContent=n,e&&e.append(o),i&&i.forEach((e=>o.setAttribute(e.name,e.value))),this.node=o}destroy(){this.node.remove()}}class t extends e{constructor(t){super(t,"header","header"),this.wrap=new e(this.node,"div","header__wrap"),this.title=new e(this.wrap.node,"h1","header__wrap__title","Beauty Quiz"),this.author=new e(this.wrap.node,"h2","header__wrap__author","Мария Ващаева")}destroy(){super.destroy()}}class s extends e{constructor(t){super(t,"footer","footer"),this.linkItems=[{name:"gitHub",url:"https://github.com/MaryAnzh",icon:""},{name:"linkedin",url:"https://www.linkedin.com/in/maryia-vashchayeva-511313240/",icon:""}],this.wrap=new e(this.node,"div","footer__wrap"),this.copyWrite=new e(this.wrap.node,"p","footer__wrap__copywrite","©2023, Minsk"),this.myLinks=new e(this.wrap.node,"ul","footer__wrap__links"),this.linkItems.forEach((({name:t,url:s,icon:n})=>{const i=new e(this.myLinks.node,"li","footer__wrap__links__item");new e(i.node,"a","footer__wrap__links__item__link",t,[{name:"href",value:s},{name:"target",value:"_blank"},{name:"rel",value:"noreferrer"}])}))}destroy(){super.destroy()}}var n,i,o;!function(e){e.Next="next",e.Prev="prev"}(n||(n={})),function(e){e.Next="Дальше",e.Prev="Назад",e.Result="Узнать результат"}(i||(i={})),function(e){e.Fist="quiz-buttons__prev-first",e.Base="quiz-buttons__prev"}(o||(o={}));class r extends e{constructor(t){super(t,"div","quiz-buttons"),this.changeButtonsView=(e,t)=>{0!==e?e!==t-1?this.middleButtonsPos():this.lastButtonsPos():this.firstButtonsPos()},this.firstButtonsPos=()=>{this.prev.node.className=o.Fist,this.next.node.textContent=i.Next},this.middleButtonsPos=()=>{this.prev.node.className=o.Base,this.next.node.textContent=i.Next},this.lastButtonsPos=()=>{this.prev.node.className=o.Base,this.next.node.textContent=i.Result},this.prev=new e(this.node,"button",o.Fist,i.Prev,[{name:"id",value:n.Prev}]),this.next=new e(this.node,"button","quiz-buttons__next",i.Next,[{name:"id",value:n.Next}])}destroy(){this.node.onclick=null,super.destroy()}}class a extends e{constructor(t){super(t,"div","round"),this.checkboxesSet=[],this.answerListSet=[],this.addRoundData=(e,t,s,i)=>(this.cleanRoundInfo(t,s),this.addRoundInfo(e,t,s,i),new Promise((e=>{this.buttonsBlock.node.onclick=t=>{const i=this.answerListSet.findIndex((e=>!0===e.checked)),o=t.target;let r="";if(o.id!==n.Next&&o.id!==n.Prev)return n.Next,void console.log("Неверный id");const a=o.id===n.Prev?n.Prev:n.Next;e({direction:a,checkedQuestion:i,currentRound:s})},this.checkboxesSet.forEach(((t,n)=>{t.onchange=()=>{const t=this.answerListSet.findIndex((e=>!0===e.checked));e({questionNum:n,checkedQuestion:t,currentRound:s})}}))}))),this.addRoundInfo=(e,t,s,n)=>{const i=s+1;this.addQuestionNumberText(i,t),this.question.node.textContent=e.question,this.createAnswerList(e.answers,n),this.buttonsBlock.changeButtonsView(s,t)},this.createCheckBox=t=>{[...Array(t).keys()].forEach((t=>{const s=new e(this.sliderCheckboxes.node,"div","round__info__slider-checkboxes__box"),n=new e(s.node,"input","round__info__slider-checkboxes__box__input",null,[{name:"name",value:"box"},{name:"type",value:"radio"},{name:"id",value:`box-${t}`}]),i=(new e(s.node,"label","round__info__slider-checkboxes__box__label",null,[{name:"for",value:`box-${t}`}]),n.node);this.checkboxesSet.push(i)})),this.checkboxesSet[0].checked=!0},this.checkedSliderInput=e=>{this.checkboxesSet[e].checked=!0},this.addQuestionNumberText=(e,t)=>{this.questionNumText.node.textContent=`Вопрос ${e} из ${t}`},this.createAnswerList=(t,s)=>{this.answerList.node.innerHTML="",[...Array(t.length).keys()].forEach((n=>{const i=new e(this.answerList.node,"li","round__info__answer-list__answer"),o=new e(i.node,"input","round__info__answer-list__answer__input",null,[{name:"name",value:"answer"},{name:"type",value:"radio"}]);new e(i.node,"label","round__info__answer-list__answer__label").node.textContent=t[n];const r=o.node;s>-1&&n===s&&(r.checked=!0),this.answerListSet.push(r)}))},this.cleanRoundInfo=(e,t)=>{0===this.checkboxesSet.length?this.createCheckBox(e):this.checkedSliderInput(t),this.answerListSet=[]},this.infWrap=new e(this.node,"div","round__info"),this.sliderCheckboxes=new e(this.infWrap.node,"div","round__info__slider-checkboxes"),this.questionNumText=new e(this.infWrap.node,"p","round__info__question-num-text"),this.question=new e(this.infWrap.node,"p","round__info__question"),this.answerList=new e(this.infWrap.node,"ul","round__info__answer-list"),this.buttonsBlock=new r(this.node)}destroy(){super.destroy(),this.buttonsBlock.destroy(),this.checkboxesSet=[],this.answerListSet=[],this.answerListSet.forEach((e=>e.checked=null))}}class d extends e{constructor(t){super(t,"section","quiz"),this.addRoundData=(e,t,s,n)=>{return i=this,o=void 0,a=function*(){return yield this.round.addRoundData(e,t,s,n)},new((r=void 0)||(r=Promise))((function(e,t){function s(e){try{d(a.next(e))}catch(e){t(e)}}function n(e){try{d(a.throw(e))}catch(e){t(e)}}function d(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(s,n)}d((a=a.apply(i,o||[])).next())}));var i,o,r,a},this.title=new e(this.node,"h2","quiz__title","Онлайн-подбор средств для лица"),this.description=new e(this.node,"p","quiz__description","Пройдите короткий тест и получите список наиболее подходящих для вас косметических продуктов"),this.round=new a(this.node)}destroy(){this.round.destroy(),super.destroy()}}class h extends e{constructor(t,s){super(t,"div","result"),this.title=new e(this.node,"h2","result__title","Результат"),this.resultList=new e(this.node,"ul","result__list"),this.info=new e(this.node,"p","result__info","Мы подобрали для вас наиболее подходящие средства"),s.map((({question:t,answer:s})=>{new e(this.resultList.node,"li","result__list__item").node.innerHTML=`<span>${t}</span> : ${s||"Ответ не выбран"}`})),this.cardsWrap=new e(this.node,"div","result__cards-wrap")}destroy(){super.destroy()}}class u extends e{constructor(n){super(n,"div","wrapper"),this.result=null,this.addRoundData=(e,t,s,n)=>this.quiz.addRoundData(e,t,s,n),this.showResult=e=>{this.quiz.destroy(),this.result=new h(this.main.node,e)},this.header=new t(this.node),this.main=new e(this.node,"main","main"),this.footer=new s(this.node),this.quiz=new d(this.main.node)}destroy(){super.destroy()}}var c=function(e,t,s,n){return new(s||(s=Promise))((function(i,o){function r(e){try{d(n.next(e))}catch(e){o(e)}}function a(e){try{d(n.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}d((n=n.apply(e,t||[])).next())}))};const l=new class{constructor(e){this.app=null,this.currentRound=0,this.showApp=()=>c(this,void 0,void 0,(function*(){const e=document.querySelector("body");this.app||(this.app=new u(e));const t=this.answersSet.map(((e,t)=>({question:this.data[t].question,answer:this.data[t].answers[e]})));this.app.showResult(t);const s=yield this.getProducts(),n=yield s.json();console.log(n)})),this.createAnswersSet=()=>this.data.map((e=>-1)),this.getProducts=()=>c(this,void 0,void 0,(function*(){return fetch("/json/products.json")})),this.data=e,this.answersSet=this.createAnswersSet()}}([{question:"Сколько вам лет?",answers:["Нужны средства для ребёнка младше 10 лет","Мне меньше 25 лет","От 25 до 35 лет","От 35 до 45 лет","Мне больше 45 лет"]},{question:"Какой у вас тип кожи?",answers:["Сухая","Нормальная","Комбинированная","Жирная"]},{question:"Беспокоят ли воспаления на лице?",answers:["Да","Нет","Иногда"]}]);window.addEventListener("load",(()=>l.showApp()))})();
//# sourceMappingURL=main.js.map