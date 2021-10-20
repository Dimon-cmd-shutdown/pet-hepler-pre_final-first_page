const main_page = ()=>{
    const cat_head = document.querySelector('.cat-head');
    const first_sq = document.querySelector('.sq-1');
    const second_sq = document.querySelector('.sq-2');
    const third_sq = document.querySelector('.sq-3');
    const fourth_sq = document.querySelector('.sq-4');
    const all_sq = [...document.querySelectorAll('.sq')];
    const reset = ()=>{
        all_sq.forEach((el)=>{
            el.classList.remove('active');
            el.classList.remove('font');
        })
    }


    first_sq.addEventListener('mouseover',(e)=>{
        e.target.classList.add('active');
        e.target.classList.add('font');
    })
    first_sq.addEventListener('mouseout',(e)=>{
        reset();
    })
    second_sq.addEventListener('mouseover',(e)=>{
        e.target.classList.add('active');
        e.target.classList.add('font');
    })
    second_sq.addEventListener('mouseout',(e)=>{
        reset();
    })
    third_sq.addEventListener('mouseover',(e)=>{
        e.target.classList.add('active');
        e.target.classList.add('font');
    })
    third_sq.addEventListener('mouseout',(e)=>{
        reset();
    })
    fourth_sq.addEventListener('mouseover',(e)=>{
        e.target.classList.add('active');
        e.target.classList.add('font');
    })
    fourth_sq.addEventListener('mouseout',(e)=>{
        reset();
    })   
}
main_page();





