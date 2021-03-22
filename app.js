
const container = document.getElementsByClassName('container');

const bar = document.querySelectorAll('.bar');
const services = document.getElementById('services');
const portfolio = document.getElementById('portfolio');


const imageUrl = [
    "imag/1.jpg",
    "imag/2.jpg",
    "imag/3.jpg",
    "imag/4.jpg",
    "imag/5.jpg",
    "imag/6.jpg",
    "imag/7.jpg",
    "imag/8.jpg",
    "imag/9.jpg"
    
]

let txt='';
for(i=1;i<=9;i++){
    txt+=`
                <div>
                    <div class="pic"  id='${i}'>
                        <h2>
                            Portfolio-${i}<br>
                            <i class="fa fa-plus"></i>
                        </h2>
                    </div>
                </div>`
}

const showPortfolio = (galery)=>{
    document.querySelector('.my-work').innerHTML=galery;
}
const showMyWork = ()=>{
    const pic = document.querySelectorAll('#portfolio .my-work .pic');
    let id;
    pic.forEach((item,index)=>{
        id = parseInt(item.getAttribute('id'))-1;
        item.style.backgroundImage = 'url('+imageUrl[id] +')';
        item.querySelector('i').addEventListener("click",()=>{
            document.querySelector('.popup').style.display='block';
            document.querySelector('.popup img').setAttribute('src',imageUrl[parseInt(item.getAttribute('id'))-1]);

        })
    })
    
}
const active = (index)=>{
    for(i=0;i<=3;i++){
        if(i==index){
            document.querySelectorAll('#portfolio .category a')[i].classList.add('active');
        }else{
            document.querySelectorAll('#portfolio .category a')[i].classList.remove('active');
        }
    }
}
showPortfolio(txt);
showMyWork();
active(0);
const portfolioBtn = document.querySelectorAll('#portfolio .category a');
portfolioBtn.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        active(index);
        if(index==1){
            txt='';
           for(i=1;i<=9;i=i+2){
               txt+=`
                    <div>
                        <div class="pic" id='${i}'>
                            <h2>
                                Portfolio-${i}<br>
                                <i class="fa fa-plus"></i>
                            </h2>
                        </div>
                    </div>
               `
           }
        }
        else if(index==2){
            txt='';
           for(i=2;i<=9;i=i+2){
               txt+=`
                    <div>
                        <div class="pic" id='${i}'>
                            <h2>
                                Portfolio-${i}<br>
                                <i class="fa fa-plus"></i>
                            </h2>
                        </div>
                    </div>
               `
           }
        }else if(index==3){
            txt='';
            for(i=3;i<=9;i=i+3){
                txt+=`
                     <div>
                         <div class="pic" id='${i}'>
                             <h2>
                                 Portfolio-${i}<br>
                                 <i class="fa fa-plus"></i>
                             </h2>
                         </div>
                     </div>
                `
            }
        }else{
            txt='';
            for(i=1;i<=9;i++){
                txt+=`
                            <div>
                                <div class="pic" id='${i}'>
                                    <h2>
                                        Portfolio-${i}<br>
                                        <i class="fa fa-plus"></i>
                                    </h2>
                                </div>
                            </div>`
            }
        }
        
        showPortfolio(txt);
        showMyWork();
    })

})


document.querySelector('.popup i').addEventListener("click",()=>{
    document.querySelector('.popup').style.display='none';
})
