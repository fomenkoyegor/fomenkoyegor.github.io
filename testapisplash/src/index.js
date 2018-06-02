
var page = {
    init: function () {
        this.paginate.init();
    }
};

page.paginate = {
    init: function () {
        this.count = document.querySelector('.count');
        this.btnNext = document.querySelector('.next');
        this.btnPrev = document.querySelector('.prev');
        this.container=document.querySelector('.container');
        this.counter=1;
        this.apikey ='1dcac9804322f89a7f23a5f6ec79d9a295a721a562e21d8f7cedb815a9f0aa89';
        this.fetchDataImg(this.counter);
        this.eventAttach();
        this.TextCont();
    },
    eventAttach: function () {
        
        this.btnNext.addEventListener('click', function (e) {
            this.counter++;
            this.TextCont();
            let id=this.counter;
            this.fetchDataImg(id);
        }.bind(this));

        this.btnPrev.addEventListener('click', function (e) {
            if(this.counter===1) return;
            this.counter=this.counter-1;
            this.TextCont();
            let id=this.counter;
            this.fetchDataImg(id);

        }.bind(this));

        this.container.addEventListener('mouseover',(e)=>{
            if(e.target.matches('.container img')){

                document.body.style.backgroundImage=`url(${e.target.getAttribute('src')})`;
                
            }
        })

    },

    TextCont: function () {
        this.count.innerHTML=this.counter;
    },

    fetchDataImg:function(page){
        this.container.innerHTML='';
        fetch(`https://api.unsplash.com/photos/?page=${page}&client_id=${this.apikey}`)
            .then(res=>res.json())
            .then(res=>{
                res.forEach(element => {
                            console.log(element);
                            this.container.innerHTML+=`
                                <img src='${element.urls.regular}' width='150' height='150' >
                            `;
                        });
            })

    }
};


window.addEventListener('load', function () {
    page.init()
});