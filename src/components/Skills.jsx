import React from 'react';

function Skills() {
  return (
    <section className=' w-full screen-max-width ml-11 lg:ml-28 md:ml-32 mt-36 sm:ml-10 gradient2'>
      <p className='honk text-5xl text-left pb-10 underline-offset-1'>Skills:-</p>
      <div className='text-center lg:columns-3 md:columns-2 sm:columns-1'>
        
        <div className='card block mb-9'>
          <p className='heading mb-9'>REACT</p>
          <img className='mb-5' loading='eager' src='react.svg'/></div>
          
          <div className='card mb-8'>
            <p className='heading mb-9'>TAILWIND</p>  
            <img className='mb-5' loading='lazy'  src='tailwind.svg'/></div>
            
            <div className='card mb-8'>
              <p className='heading mb-9'>RUST</p>  
              <img className='mb-5' loading='lazy' src='rust.svg'/></div>
              
              <div className='card mb-8'>
                <p className='heading mb-5'>CSS</p> 
                <img className='mb-5' loading='lazy' src='css3.svg'/></div>
                
                <div className='card mb-8'>
                  <p className='heading mb-9'>TSX</p>  
                  <img className='mb-5' loading='lazy' src='typescript.svg'/></div>
                  
                  <div className='card mb-8'>
                    <p className='heading mb-9'>JS</p>  
                    <img className='mb-5' loading='lazy' src='js.svg'/></div>
                    
                    <div className='card mb-8'>
                      <p className='heading mb-9'>MYSQL</p>  
                      <img className='mb-5' loading='lazy' src='mysql.svg'/></div>
                      
                      <div className='card mb-8'>
                        <p className='heading mb-9'>HTML5</p>  
                        <img className='mb-5' loading='lazy' src='html.svg'/></div>
                        
                        <div className='card mb-8'>
                          <p className='heading mb-9'>EXCEL</p>  
                          <img className='mb-5' loading='lazy' src='excel.svg'/></div>
                          
                          <div className='card mb-8'>
                            <p className='heading mb-9'>CANVA</p>  
                            <img className='mb-5' loading='lazy' src='canva.svg'/></div>
                            
                            <div className='card mb-8'>
                              <p className='heading mb-9'>FIGMA</p>  
                              <img  className='mb-5' loading='lazy' src='figma.svg'/></div>
                              
                              <div className='card mb-5'>
                                <p className='heading mb-7'>POWER BI</p>  
                                <img  className='' loading='lazy' src='power bi.svg'/></div>`

      
      </div>
    </section>
  );
}

export default Skills;
