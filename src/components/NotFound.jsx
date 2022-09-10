import React from 'react'

function NotFound() {
   return (
      <div>
         <div className="center verticle_center full_height">
            <div className="error_page">
               <div className="center">
                  <div className="error_icon">
                     <img class="img-responsive" src="images/layout_img/error.png" alt="#" />
                  </div>
               </div>
               <br />
               <h3>PAGE NOT FOUND !</h3>
               <p>YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
               <div class="center"><a class="main_bt" href="index.html">Go To Home Page</a></div>
            </div>
         </div>
      </div>
   )
}

export default NotFound