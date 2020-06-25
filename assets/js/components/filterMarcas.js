import modalMarca from './modalMarca'

let filterMarcas = ($)=>{
    $('.marca-category-filter > a').on('click', function(e){ 
        e.preventDefault();
        let category = $(this).data('categorymarca');   
        let html_marca = '';  
        const headers = new Headers({
            'Content-Type': 'application/json',
            'X-WP-Nonce': ajax_marcas.nonce
        });
        let category_url =  $(this)[0].id === 'marca-todos'? '':`?category=${category}` 
        fetch(`${ajax_marcas.url}/${category_url}`, {
            method: 'get',
            headers: headers,
            credentials: 'same-origin'
        })
        .then(response => {  
            return response.ok ? response.json() : 'No hay marcas...'; 
        }).then(json_response => {  
            json_response.map((post)=>{  
                html_marca += `   
                                   <div class="marca-card" data-postidmarca="${post.id}" >
                                        <div  class="marca-card-image flex justify-center items-center h-56 sm:h-65 p-4 " >
                                            <img  class="w-full" style="max-width: 140px;"  src=" ${post.thumbnail}" alt="${post.link}" >  
                                        </div>
                                        <h2  class="text-lg font-medium text-secondary-300 mt-2 " >Ver Regalos</h2>
                                    </div>  
                                  `;   
            })
            $('#marca-grid').html(html_marca); 
            // Modal
            modalMarca($)  
        })  
    })  
}

export default filterMarcas