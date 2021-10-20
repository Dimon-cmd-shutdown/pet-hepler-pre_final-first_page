const emergency = () =>{
    const regions = [...document.querySelectorAll('.region')];
    const region_1 = document.querySelector('.r-1');
    const region_2 = document.querySelector('.r-2');
    const region_3 = document.querySelector('.r-3');
    const region_4 = document.querySelector('.r-4');
    const region_5 = document.querySelector('.r-5');
    const region_6 = document.querySelector('.r-6');
    const region_7 = document.querySelector('.r-7');
    const region_8 = document.querySelector('.r-8');
    const cities_containers = [...document.querySelectorAll('.cities-container')];
    const oblast1 = document.querySelector('.c-1');
    const oblast2 = document.querySelector('.c-2');
    const oblast3 = document.querySelector('.c-3');
    const oblast4 = document.querySelector('.c-4');
    const oblast5 = document.querySelector('.c-5');
    const oblast6 = document.querySelector('.c-6');
    const oblast7 = document.querySelector('.c-7');
    const oblast8 = document.querySelector('.c-8');

    let count_1 = 0;
    let count_2 = 0;
    let count_3 = 0;
    let count_4 = 0;
    let count_5 = 0;
    let count_6 = 0;
    let count_7 = 0;
    let count_8 = 0;



    const reset_display = () =>{
        cities_containers.forEach((el)=>{
            el.style.display="none";
        })
        regions.forEach((el)=>{
            el.classList.remove('active-emerg');
        })
    }
    reset_display(); 

    region_1.addEventListener('click',(e)=>{
        reset_display(); 
        help_cont_reset_1();
        help_cont_reset_2();
        help_cont_reset_3();
        help_cont_reset_4();
        help_cont_reset_5();
        help_cont_reset_6();
        help_cont_reset_7();
        help_cont_reset_8();
        e.target.classList.add('active-emerg');
        oblast1.style.display='block';
        count_1++;
         count_2 = 0;
         count_3 = 0;
         count_4 = 0;
         count_5 = 0;
         count_6 = 0;
         count_7 = 0;
         count_8 = 0;
        if(count_1 === 2){
            e.target.classList.remove('active-emerg'); 
            oblast1.style.display='none';
            count_1=0;
        }
    })
    region_2.addEventListener('click',(e)=>{
        reset_display(); 
        help_cont_reset_1();
        help_cont_reset_2();
        help_cont_reset_3();
        help_cont_reset_4();
        help_cont_reset_5();
        help_cont_reset_6();
        help_cont_reset_7();
        help_cont_reset_8();
        e.target.classList.add('active-emerg');
        oblast2.style.display='block';
        count_2++;
        count_1 = 0;
        count_3 = 0;
        count_4 = 0;
        count_5 = 0;
        count_6 = 0;
        count_7 = 0;
        count_8 = 0;
        if(count_2 === 2){
            e.target.classList.remove('active-emerg'); 
            oblast2.style.display='none';
            count_2=0;
        }
    })
    region_3.addEventListener('click',(e)=>{
        reset_display(); 
        help_cont_reset_1();
        help_cont_reset_2();
        help_cont_reset_3();
        help_cont_reset_4();
        help_cont_reset_5();
        help_cont_reset_6();
        help_cont_reset_7();
        help_cont_reset_8();
        e.target.classList.add('active-emerg');
        oblast3.style.display='block';
        count_3++;
        count_2 = 0;
        count_1 = 0;
        count_4 = 0;
        count_5 = 0;
        count_6 = 0;
        count_7 = 0;
        count_8 = 0;
        if(count_3 === 2){
            e.target.classList.remove('active-emerg');
            oblast3.style.display='none';
            count_3=0;
            }
    })
    region_4.addEventListener('click',(e)=>{
        reset_display(); 
        help_cont_reset_1();
        help_cont_reset_2();
        help_cont_reset_3();
        help_cont_reset_4();
        help_cont_reset_5();
        help_cont_reset_6();
        help_cont_reset_7();
        help_cont_reset_8();
        e.target.classList.add('active-emerg');
        oblast4.style.display='block';
        count_4++;
        count_2 = 0;
        count_3 = 0;
        count_1 = 0;
        count_5 = 0;
        count_6 = 0;
        count_7 = 0;
        count_8 = 0;
        if(count_4 === 2){
            e.target.classList.remove('active-emerg'); 
            oblast4.style.display='none';
            count_4=0;
        }
    })
    region_5.addEventListener('click',(e)=>{
        reset_display(); 
        help_cont_reset_1();
        help_cont_reset_2();
        help_cont_reset_3();
        help_cont_reset_4();
        help_cont_reset_5();
        help_cont_reset_6();
        help_cont_reset_7();
        help_cont_reset_8();
        e.target.classList.add('active-emerg');
        oblast5.style.display='block';
        count_5++;
        count_2 = 0;
        count_3 = 0;
        count_4 = 0;
        count_1 = 0;
        count_6 = 0;
        count_7 = 0;
        count_8 = 0;
        if(count_5 === 2){
            e.target.classList.remove('active-emerg'); 
            oblast5.style.display='none';
            count_5=0;
        }
    })
    region_6.addEventListener('click',(e)=>{
        reset_display(); 
        help_cont_reset_1();
        help_cont_reset_2();
        help_cont_reset_3();
        help_cont_reset_4();
        help_cont_reset_5();
        help_cont_reset_6();
        help_cont_reset_7();
        help_cont_reset_8();
        e.target.classList.add('active-emerg');
        oblast6.style.display='block';
        count_6++;
        count_2 = 0;
        count_3 = 0;
        count_4 = 0;
        count_5 = 0;
        count_1 = 0;
        count_7 = 0;
        count_8 = 0;
        if(count_6 === 2){
            e.target.classList.remove('active-emerg'); 
            oblast6.style.display='none';
            count_6=0;
        }
    })
    region_7.addEventListener('click',(e)=>{
        reset_display(); 
        help_cont_reset_1();
        help_cont_reset_2();
        help_cont_reset_3();
        help_cont_reset_4();
        help_cont_reset_5();
        help_cont_reset_6();
        help_cont_reset_7();
        help_cont_reset_8();
        e.target.classList.add('active-emerg');
        oblast7.style.display='block';
        count_7++;
        count_2 = 0;
        count_3 = 0;
        count_4 = 0;
        count_5 = 0;
        count_6 = 0;
        count_1 = 0;
        count_8 = 0;
        if(count_7 === 2){
            e.target.classList.remove('active-emerg'); 
            oblast7.style.display='none';
            count_7=0;
        }
    })
    region_8.addEventListener('click',(e)=>{
        reset_display(); 
        help_cont_reset_1();
        help_cont_reset_2();
        help_cont_reset_3();
        help_cont_reset_4();
        help_cont_reset_5();
        help_cont_reset_6();
        help_cont_reset_7();
        help_cont_reset_8();
        e.target.classList.add('active-emerg');
        oblast8.style.display='block';
        count_8++;
        count_2 = 0;
        count_3 = 0;
        count_4 = 0;
        count_5 = 0;
        count_6 = 0;
        count_7 = 0;
        count_1 = 0;
        if(count_8 === 2){
            e.target.classList.remove('active-emerg'); 
            oblast8.style.display='none';
            count_8=0;
        }
    })

const helper_cont = [...document.querySelectorAll('.helper-container')]
const helper_container_all = () => {
    helper_cont.forEach((el)=>{
        el.style.display = "none";
    })
}
helper_container_all();


const cities_list_1 = [...document.querySelectorAll('.c_l_1')]
const Dnepr = document.querySelector('.Dnepr');
const Kamenskoe = document.querySelector('.Kamenskoe');
const Krivoi_Rog = document.querySelector('.Krivoi_Rog');
const helper_container_dnepr = [...document.querySelectorAll('.helper-container-dnepr')];
const Dnepr_cont = document.querySelector('.Dnepr_cont');
const Kamenskoe_cont = document.querySelector('.Kamenskoe_cont');
const Krivoi_Rog_cont = document.querySelector('.Krivoi_Rog_cont');
let Dnepr_count = 0;
let Kamenskoe_count = 0;
let Krivoi_Rog_count = 0;

const help_cont_reset_1 = ()=>{
    helper_container_dnepr.forEach((el)=>{
        el.style.display='none';
    });
    cities_list_1.forEach((el)=>{
        el.classList.remove('active-emerg-cities');
    });
} 
help_cont_reset_1();

Dnepr.addEventListener('click',(e)=>{
    help_cont_reset_1();
    e.target.classList.add('active-emerg-cities');
    Dnepr_cont.style.display='block';
    Dnepr_count++;
    Kamenskoe_count = 0;
    Krivoi_Rog_count = 0;   
    if(Dnepr_count===2){Dnepr_count=0; help_cont_reset_1();}
})


Kamenskoe.addEventListener('click',(e)=>{
    help_cont_reset_1();
    e.target.classList.add('active-emerg-cities');
    Kamenskoe_cont.style.display='block';
    Kamenskoe_count++;
    Dnepr_count = 0;
    Krivoi_Rog_count = 0;   
    if(Kamenskoe_count===2){Kamenskoe_count=0; help_cont_reset_1();}
})

Krivoi_Rog.addEventListener('click',(e)=>{
    help_cont_reset_1();
    e.target.classList.add('active-emerg-cities');
    Krivoi_Rog_cont.style.display='block';
    Krivoi_Rog_count++;
    Dnepr_count = 0;
    Kamenskoe_count = 0;   
    if(Krivoi_Rog_count===2){Krivoi_Rog_count=0; help_cont_reset_1();}
})



const cities_list_2 = [...document.querySelectorAll('.c_l_2')]
const Kiev = document.querySelector('.Kiev');
const Barishev = document.querySelector('.Barishev');
const Bel_cerc = document.querySelector('.Bel_cerc');
const helper_container_kiev = [...document.querySelectorAll('.helper-container-kiev')];
const Kiev_cont = document.querySelector('.Kiev_cont');
const Barishev_cont = document.querySelector('.Barishev_cont');
const Bila_cont = document.querySelector('.Bila_cont');
let Kiev_count = 0;
let Barishev_count = 0;
let Bila_count = 0;
const help_cont_reset_2 = ()=>{
    helper_container_kiev.forEach((el)=>{
        el.style.display='none';
    });
    cities_list_2.forEach((el)=>{
        el.classList.remove('active-emerg-cities');
    });
} 
help_cont_reset_2();

Kiev.addEventListener('click',(e)=>{
    help_cont_reset_2();
    e.target.classList.add('active-emerg-cities');
    Kiev_cont.style.display='block';
    Kiev_count++;
    Barishev_count = 0;
    Bila_count = 0;   
    if(Kiev_count===2){Kiev_count=0; help_cont_reset_2();}
})


Barishev.addEventListener('click',(e)=>{
    help_cont_reset_2();
    e.target.classList.add('active-emerg-cities');
    Barishev_cont.style.display='block';
    Barishev_count++;
    Kiev_count = 0;
    Bila_count = 0;   
    if(Barishev_count===2){Barishev_count=0; help_cont_reset_2();}
})

Bel_cerc.addEventListener('click',(e)=>{
    help_cont_reset_2();
    e.target.classList.add('active-emerg-cities');
    Bila_cont.style.display='block';
    Bila_count++;
    Kiev_count = 0;
    Barishev_count = 0;  
    if(Bila_count===2){Bila_count=0; help_cont_reset_2();}
})


const cities_list_3 = [...document.querySelectorAll('.c-l-3')]
const Odess = document.querySelector('.Odess');
const Chern = document.querySelector('.Chern');
const Ismail = document.querySelector('.Ismail');
const helper_container_odess = [...document.querySelectorAll('.helper-container-odess')];
const Odess_cont = document.querySelector('.Odess_cont');
const Chern_cont = document.querySelector('.Chern_cont');
const Ismail_cont = document.querySelector('.Ismail_cont');
let Odess_count = 0;
let Chern_count = 0;
let Ismail_count = 0;

const help_cont_reset_3 = ()=>{
    helper_container_odess.forEach((el)=>{
        el.style.display='none';
    });
    cities_list_3.forEach((el)=>{
        el.classList.remove('active-emerg-cities');
    });
} 
help_cont_reset_3();

Odess.addEventListener('click',(e)=>{
    help_cont_reset_3();
    e.target.classList.add('active-emerg-cities');
    Odess_cont.style.display='block';
    Odess_count++;
    Chern_count = 0;
    Ismail_count = 0;   
    if(Odess_count===2){Odess_count=0; help_cont_reset_3();}
})


Chern.addEventListener('click',(e)=>{
    help_cont_reset_3();
    e.target.classList.add('active-emerg-cities');
    Chern_cont.style.display='block';
    Chern_count++;
    Odess_count = 0;
    Ismail_count = 0;   
    if(Chern_count===2){Chern_count=0; help_cont_reset_3();}
})

Ismail.addEventListener('click',(e)=>{
    help_cont_reset_3();
    e.target.classList.add('active-emerg-cities');
    Ismail_cont.style.display='block';
    Ismail_count++;
    Odess_count = 0;
    Chern_count = 0;  
    if(Ismail_count===2){Ismail_count=0; help_cont_reset_3();}
})




const cities_list_4 = [...document.querySelectorAll('.c-l-4')]
const Livov = document.querySelector('.Livov');
const Chervonograd = document.querySelector('.Chervonograd');
const Drogobich = document.querySelector('.Drogobich');
const helper_container_livov = [...document.querySelectorAll('.helper-container-livov')];
const Livov_cont = document.querySelector('.Livov_cont');
const Chervonograd_cont = document.querySelector('.Chervonograd_cont');
const Drogobich_cont = document.querySelector('.Drogobich_cont');
let Livov_count = 0;
let Chervonograd_count = 0;
let Drogobich_count = 0;

const help_cont_reset_4 = ()=>{
    helper_container_livov.forEach((el)=>{
        el.style.display='none';
    });
    cities_list_4.forEach((el)=>{
        el.classList.remove('active-emerg-cities');
    });
} 
help_cont_reset_4();

Livov.addEventListener('click',(e)=>{
    help_cont_reset_4();
    e.target.classList.add('active-emerg-cities');
    Livov_cont.style.display='block';
    Livov_count++;
    Chervonograd_count = 0;
    Drogobich_count = 0;  
    if(Livov_count===2){Livov_count=0; help_cont_reset_4();}
})


Chervonograd.addEventListener('click',(e)=>{
    help_cont_reset_4();
    e.target.classList.add('active-emerg-cities');
    Chervonograd_cont.style.display='block';
    Chervonograd_count++;
    Livov_count = 0;
    Drogobich_count = 0;   
    if(Chervonograd_count===2){Chervonograd_count=0; help_cont_reset_4();}
})

Drogobich.addEventListener('click',(e)=>{
    help_cont_reset_4();
    e.target.classList.add('active-emerg-cities');
    Drogobich_cont.style.display='block';
    Drogobich_count++;
    Chervonograd_count = 0;
    Livov_count = 0; 
    if(Drogobich_count===2){Drogobich_count=0; help_cont_reset_4();}
})



const cities_list_5 = [...document.querySelectorAll('.c_l_5')]
const Poltava = document.querySelector('.Poltava');
const Kremenchug = document.querySelector('.Kremenchug');
const Gor_Plavni = document.querySelector('.Gor_Plavni');
const helper_container_poltava = [...document.querySelectorAll('.helper-container-poltava')];
const Poltava_cont = document.querySelector('.Poltava_cont');
const Kremenchug_cont = document.querySelector('.Kremenchug_cont');
const Gor_Plavni_cont = document.querySelector('.Gor_Plavni_cont');
let Poltava_count = 0;
let Kremenchug_count = 0;
let Gor_Plavni_count = 0;

const help_cont_reset_5 = ()=>{
    helper_container_poltava.forEach((el)=>{
        el.style.display='none';
    });
    cities_list_5.forEach((el)=>{
        el.classList.remove('active-emerg-cities');
    });
} 
help_cont_reset_5();

Poltava.addEventListener('click',(e)=>{
    help_cont_reset_5();
    e.target.classList.add('active-emerg-cities');
    Poltava_cont.style.display='block';
    Poltava_count++;
    Kremenchug_count = 0;
    Gor_Plavni_count = 0;  
    if(Poltava_count===2){Poltava_count=0; help_cont_reset_5();}
})


Kremenchug.addEventListener('click',(e)=>{
    help_cont_reset_5();
    e.target.classList.add('active-emerg-cities');
    Kremenchug_cont.style.display='block';
    Kremenchug_count++;
    Poltava_count = 0;
    Gor_Plavni_count = 0;  
    if(Kremenchug_count===2){Kremenchug_count=0; help_cont_reset_5();}
})

Drogobich.addEventListener('click',(e)=>{
    help_cont_reset_5();
    e.target.classList.add('active-emerg-cities');
    Gor_Plavni_cont.style.display='block';
    Gor_Plavni_count++;
    Poltava_count = 0;
    Kremenchug_count = 0;
    if(Gor_Plavni_count===2){Gor_Plavni_count=0; help_cont_reset_5();}
})

const cities_list_6 = [...document.querySelectorAll('.c_l_6')]
const Harkov = document.querySelector('.Harkov');
const Isum = document.querySelector('.Isum');
const Losovaia = document.querySelector('.Losovaia');
const helper_container_harkov = [...document.querySelectorAll('.helper-container-harkov')];
const Harkov_cont = document.querySelector('.Harkov_cont');
const Isum_cont = document.querySelector('.Isum_cont');
const Losovaia_cont = document.querySelector('.Losovaia_cont');
let Harkov_count = 0;
let Isum_count = 0;
let Losovaia_count = 0;

const help_cont_reset_6 = ()=>{
    helper_container_harkov.forEach((el)=>{
        el.style.display='none';
    });
    cities_list_6.forEach((el)=>{
        el.classList.remove('active-emerg-cities');
    });
} 
help_cont_reset_6();

Harkov.addEventListener('click',(e)=>{
    help_cont_reset_6();
    e.target.classList.add('active-emerg-cities');
    Harkov_cont.style.display='block';
    Harkov_count++;
    Isum_count = 0;
    Losovaia_count = 0;  
    if(Harkov_count===2){Harkov_count=0; help_cont_reset_6();}
})


Isum.addEventListener('click',(e)=>{
    help_cont_reset_6();
    e.target.classList.add('active-emerg-cities');
    Isum_cont.style.display='block';
    Isum_count++;
    Harkov_count = 0;
    Losovaia_count = 0;  
    if(Isum_count===2){Isum_count=0; help_cont_reset_6();}
})

Losovaia.addEventListener('click',(e)=>{
    help_cont_reset_6();
    e.target.classList.add('active-emerg-cities');
    Losovaia_cont.style.display='block';
    Losovaia_count++;
    Harkov_count = 0;
    Isum_count = 0;
    if(Losovaia_count===2){Losovaia_count=0; help_cont_reset_6();}
})

const cities_list_7 = [...document.querySelectorAll('.c_l_7')]
const Chernigov = document.querySelector('.Chernigov');
const Nezhin = document.querySelector('.Nezhin');
const Priluki = document.querySelector('.Priluki');
const helper_container_chernigov = [...document.querySelectorAll('.helper-container-chernigov')];
const Chernigov_cont = document.querySelector('.Chernigov_cont');
const Nezhin_cont = document.querySelector('.Nezhin_cont');
const Priluki_cont = document.querySelector('.Priluki_cont');
let Chernigov_count = 0;
let Nezhin_count = 0;
let Priluki_count = 0;

const help_cont_reset_7 = ()=>{
    helper_container_chernigov.forEach((el)=>{
        el.style.display='none';
    });
    cities_list_7.forEach((el)=>{
        el.classList.remove('active-emerg-cities');
    });
} 
help_cont_reset_7();

Chernigov.addEventListener('click',(e)=>{
    help_cont_reset_7();
    e.target.classList.add('active-emerg-cities');
    Chernigov_cont.style.display='block';
    Chernigov_count++;
    Nezhin_count = 0;
    Priluki_count = 0;  
    if(Chernigov_count===2){Chernigov_count=0; help_cont_reset_7();}
})


Nezhin.addEventListener('click',(e)=>{
    help_cont_reset_7();
    e.target.classList.add('active-emerg-cities');
    Nezhin_cont.style.display='block';
    Nezhin_count++;
    Chernigov_count = 0;
    Priluki_count = 0;  
    if(Nezhin_count===2){Nezhin_count=0; help_cont_reset_7();}
})

Priluki.addEventListener('click',(e)=>{
    help_cont_reset_7();
    e.target.classList.add('active-emerg-cities');
    Priluki_cont.style.display='block';
    Priluki_count++;
    Chernigov_count = 0;
    Nezhin_count = 0;
    if(Priluki_count===2){Priluki_count=0; help_cont_reset_7();}
})


const cities_list_8 = [...document.querySelectorAll('.c_l_8')]
const Donezck = document.querySelector('.Donezck');
const Makeevka = document.querySelector('.Makeevka');
const Ghorlovka = document.querySelector('.Ghorlovka');
const helper_container_donezck = [...document.querySelectorAll('.helper-container-donezck')];
const Donezck_cont = document.querySelector('.Donezck_cont');
const Makeevka_cont = document.querySelector('.Makeevka_cont');
const Ghorlovka_cont = document.querySelector('.Ghorlovka_cont');
let Donezck_count = 0;
let Makeevka_count = 0;
let Ghorlovka_count = 0;

const help_cont_reset_8 = ()=>{
    helper_container_donezck.forEach((el)=>{
        el.style.display='none';
    });
    cities_list_8.forEach((el)=>{
        el.classList.remove('active-emerg-cities');
    });
} 
help_cont_reset_8();

Donezck.addEventListener('click',(e)=>{
    help_cont_reset_8();
    e.target.classList.add('active-emerg-cities');
    Donezck_cont.style.display='block';
    Donezck_count++;
    Makeevka_count = 0;
    Ghorlovka_count = 0;  
    if(Donezck_count===2){Donezck_count=0; help_cont_reset_8();}
})


Makeevka.addEventListener('click',(e)=>{
    help_cont_reset_8();
    e.target.classList.add('active-emerg-cities');
    Makeevka_cont.style.display='block';
    Makeevka_count++;
    Donezck_count = 0;
    Ghorlovka_count = 0;  
    if(Makeevka_count===2){Makeevka_count=0; help_cont_reset_8();}
})

Ghorlovka.addEventListener('click',(e)=>{
    help_cont_reset_8();
    e.target.classList.add('active-emerg-cities');
    Ghorlovka_cont.style.display='block';
    Ghorlovka_count++;
    Donezck_count = 0;
    Makeevka_count = 0;
    if(Ghorlovka_count===2){Ghorlovka_count=0; help_cont_reset_8();}
})














































































































}
emergency();

