"use strict";

const recipesList = (function(){

const ageParams = {
    m: 'mėnesiai'
}

const renderRepicesList = ( list ) => {
    let HTML = '';
    
    for ( let i=0; i<list.length; i++ ) {
        const r = list[i];
        const { fromMin, fromNorm } = r.age;
        const fm = fromMin;
        const fn = fromNorm;
        let ageHTML = '';
        
        if ( fromMin && fromNorm ) {
            ageHTML = `<span title="${fm.value + ' ' + ageParams[fm.param]}">${fm.value + fm.param}</span>
                        <span> - </span>
                        <span title="${fn.value + ' ' + ageParams[fn.param]}">${fn.value + fn.param}</span>`;
        }
        if ( !fromMin && fromNorm ) {
            ageHTML = `<span title="${fn.value + ' ' + ageParams[fn.param]}">${fn.value + fn.param}</span>`;
        }

        HTML += `<div class="recipe-card">
                    <img src="./img/food/${r.img[0] ? r.img[0] : 'default.jpg'}"
                        title="${r.name}">
                    <div class="name">${r.name}</div>
                    <div class="age">${ageHTML}</div>
                </div>`;
    }
    
    return document.querySelector('main > .recipes-list').innerHTML = HTML;
}

return {
    render: renderRepicesList
}

})();