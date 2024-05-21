import React from 'react';
import Carrusel from '../componentes/carrusel';
import ProductList from '../componentes/ProductList';
import Filter from '../componentes/Filter';

import 'bootstrap/dist/css/bootstrap.min.css';
function Tienda(){
    return (
        <div>
          <section className='bg-danger p-5'>
          <h2>Tienda</h2>
          <div>
            <Filter/>
      <ProductList />
    </div>
</section>
          
        </div>
           
      );
}

export default Tienda;