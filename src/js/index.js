/*value значение*/
const model = [ /*тут описываем первый блок*/
    {type: 'title', value: 'Hello SlesH JS'},
    {type: 'text', value: 'some Text'},
    {type: 'columns', value: [ /*наш блок с текстом сделаем масив */
                     '111111111',
                     '2222222222',
                     '33333333333'
     ]},
    {type: 'image', value: './assets/header.png'}
];
/*выбрали блок куда будем рендерить весь наш контент*/
const $site = document.querySelector('#site');/*открываем доступ к нашему блоку и создаем переменную*/

model.forEach(block => {
    let html = ''
    if (block.type === 'title') {
        /*включаем форматирование строк и шобланизацию*/
        html = title(block)
    } else if(block.type === 'text'){
        html = text(block)
    } else if(block.type === 'columns'){
        html = columns(block)
    }else if(block.type === 'image'){
        html = image(block)
    }

 $site.insertAdjacentHTML('beforeend', html)/*позволяет в определеннео место вставлять HTML*/
}); /*вызвали масив и вызвали цыкл который позволяет двигаться пок аждому элементу*/

/*создаем функцию чтобы облегчить наш html*/
function title(block) { /*данная функция она принимает в себя обьект и возвращает готовый хтмл*/
    return `
            <div class="row">
               <div class="col-sm">
                   <h1>${block.value}</h1>
               </div>
           </div><!--это определенная структура одногог блока  -->
               `
}
function text(block) {
    return ` <div class="row">
                   <div class="col-sm">
                       <p>${block.value}</p>
                   </div>
                 </div><!--это определенная структура одногог блока  -->
`
}
function columns(block){

    /*map позволяет трансформировать масив сразу во что-то*/
    /*метод мап возвращает нам массив*/
   const html = block.value.map(item=> `<div class="col-sm">${item}</div>`)
    return `
              <div class="row">
                ${html.join('')}
              </div>
`

}
 function image(block) {
     return `
    <div class="row">
        <img src="${block.value}"/>
    </div>
`
 }
