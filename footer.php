<!-- Site footer markup goes here --> 
 <?php if(!is_page('como-y-por-que-participar')){?>
    <footer  class=" footer bg-black w-full py-6 " > 
    <div  class="container" > 
         <?php dynamic_sidebar('footer-info') ?>  
    </div>
 </footer>
 <?php }?>
 <?php if(is_page()){ ?>  
   <div class="marca-modal"  id="marca-modal" > 
   <div class="marca-modal-body" id="marca-modal-body" >
      <span  class="marca-modal-close">X</span>
      <div class="marca-modal-info" id="marca-modal-info">  
      </div>
   </div> 
   </div>    

<?php }?>  

 
<?php wp_footer(); ?>  

</body>
</html>

