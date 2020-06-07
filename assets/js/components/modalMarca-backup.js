import axios  from 'axios'
let modalMarca = ($)=>{
    $('.marca-card').on('click', async function(e){
        e.preventDefault() 
        let top_modal =  Number(e.target.getBoundingClientRect().top.toFixed()) - 20
        document.documentElement.style.setProperty('--offsettop-modal-marca',`${(e.target.offsetTop-top_modal)+'px'}`);
        let modalActive = false
        if(!modalActive){
            $('#marca-modal-info').html( ` 
                <article class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10  placeholder " >
                    <div>
                        <div class="w-full py-32 loading mb-4" ></div> 
                        <div class="w-full py-35 loading" ></div> 
                    </div>
                    <div>
                        <div class="w-full sm:w-56 py-12 loading" ></div>
                        <div class="w-full py-2 loading mt-12" ></div>
                        <div class="w-full py-2 loading mt-2 sm:w-56 " ></div>
                        <div class="w-full py-2 loading mt-10" ></div>
                        <div class="w-full py-2 loading mt-2 sm:w-56 " ></div>
                        <div class="w-full py-2 loading mt-10" ></div>
                        <div class="w-full py-2 loading mt-2 sm:w-56  "></div>
                        <div class="w-full py-2 loading mt-10" ></div>
                        <div class="w-full py-2 loading mt-2 sm:w-56 " ></div>
                        <div class="w-full py-2 loading mt-10" ></div>
                        <div class="w-full py-2 loading mt-2 sm:w-56  "></div> 
                    </div>
                </article>
           ` )
        }
             
        $('#marca-modal').toggleClass('marca-modal-active') 
        let postIdMarca = $(this).data('postidmarca');  
        let html_marca_modal_info = '';  
        const headers = new Headers({
            'Content-Type': 'application/json',
            'X-WP-Nonce': ajax_marcas.nonce
        }); 
        const options = {
            method: 'get',
            headers: headers,
            credentials: 'same-origin'
        }
        
        try {
            const {data} = await axios.get(`${ajax_marcas.url}/?post_id=${postIdMarca}`,options)  
            if(data){
                modalActive = true
                data.map((post)=>{   
                    html_marca_modal_info += `   
                    <div  class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 relative">
                        <div >   
                            ${post.images == null?'':post.images.map((image)=>`<img class="mb-4" src="${image.marca_imagenes_individual}" alt="${post.title}" />`).join('')}
                        </div>  
                        <div  class="pl-0 sm:pl-6"> 
                            <img  class=" w-34 mb-10 sm:w-40 md:w-54 "  src="${post.thumbnail}" alt="${post.title}">
                                ${post.content} 
                        </div>
                        <a href="${post.link}" class="text-base text-title absolute bottom-0 left-0  -mb-8 hover:underline ">Compartir</a>
                    </div>
                        `;   
                }) 
                $('#marca-modal-info').html(html_marca_modal_info); 
            }

        } catch (error) {
            console.log(error.message)
        } 
     }) 
     $('.marca-modal-close').on('click', function(e){ 
        $('#marca-modal').removeClass('marca-modal-active');
        $('#marca-modal-info').html('');
     }) 
     $('#marca-modal').on('click', function(e){   
        const marcaModalID = e.target.id  
        if(marcaModalID == 'marca-modal' ) {
            $('#marca-modal').removeClass('marca-modal-active')
            $('#marca-modal-info').html(''); 
        } else {
            return;
        }  
    })
}

export default modalMarca