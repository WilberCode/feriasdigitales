let modalMarca = ($)=>{
    $('.marca-card').on('click', function(e){
        e.preventDefault() 
        document.documentElement.style.setProperty('--offsettop-modal-marca',`${e.target.offsetTop+'px'}`);
        
        $('#marca-modal-info').html( ` 
        <article class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10  placeholder " >
            <div>
                <div class="w-full py-32 bg-gray-200 loading mb-4" ></div> 
                <div class="w-full py-35 bg-gray-200 loading" ></div> 
            </div>
            <div>
                <div class="w-full sm:w-56 py-12 bg-gray-200 loading" ></div>
                <div class="w-full py-2 bg-gray-200 loading mt-12" ></div>
                <div class="w-full py-2 bg-gray-200 loading mt-2 sm:w-56 " ></div>
                <div class="w-full py-2 bg-gray-200 loading mt-10" ></div>
                <div class="w-full py-2 bg-gray-200 loading mt-2 sm:w-56 " ></div>
                <div class="w-full py-2 bg-gray-200 loading mt-10" ></div>
                <div class="w-full py-2 bg-gray-200 loading mt-2 sm:w-56  "></div>
                <div class="w-full py-2 bg-gray-200 loading mt-10" ></div>
                <div class="w-full py-2 bg-gray-200 loading mt-2 sm:w-56 " ></div>
                <div class="w-full py-2 bg-gray-200 loading mt-10" ></div>
                <div class="w-full py-2 bg-gray-200 loading mt-2 sm:w-56  "></div>
                
            </div>
        </article>
        ` )
             
        $('#marca-modal').toggleClass('marca-modal-active')
            
            e.preventDefault();
            let postIdMarca = $(this).data('postidmarca');  
            let html_marca_modal_info = '';  
            const headers = new Headers({
                'Content-Type': 'application/json',
                'X-WP-Nonce': ajax_marcas.nonce
            }); 
            fetch(`${ajax_marcas.url}/?post_id=${postIdMarca}`, {
                method: 'get',
                headers: headers,
                credentials: 'same-origin'
            })
            .then(response => {  
                return response.ok ? response.json() : 'No información de la marca...'; 
            }).then(json_response => {  
                if(json_response){
                    json_response.map((post)=>{   
                        html_marca_modal_info += `   
                        <div  class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                            <div>   
                                ${post.images == null?'':post.images.map((image)=>`<img class="mb-4" src="${image.marca_imagenes_individual}" />`).join('')}
                            </div>  
                            <div  class="pl-0 sm:pl-6"> 
                                <img  class=" w-34 mb-10 sm:w-40 md:w-54 "  src="${post.thumbnail}" alt="${post.title}">
                                 ${post.content} 
                            </div>
                            
                        </div>
                         `;   
                    }) 
                }
                $('#marca-modal-info').html(html_marca_modal_info); 
            }) 
     }) 
     $('.marca-modal-close').on('click', function(e){ 
        $('#marca-modal').removeClass('marca-modal-active');
        $('#marca-modal-info').html('');
    }) 
}

export default modalMarca