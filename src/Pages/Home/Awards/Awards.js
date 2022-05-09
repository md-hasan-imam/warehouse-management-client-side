import React from 'react';
import './Awards.css'

const Awards = () => {
    return (
        <div className="container-award">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-md-2">
                <div className="col ">
                    <img src="https://themes.potenzaglobalsolutions.com/cardealer-wp/wp-content/uploads/2018/05/09.png?id=8230" alt="" />

                </div>
                <div className="col awards-section">
                    <h2 className='mb-5'>Awards</h2>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3">
                        <div className="col">
                            <h6 className='text-white'>Imported Convertible</h6>
                            <h5 className='text-danger'>SPORT AUTO</h5>
                        </div>
                        <div className="col">
                            <h6 className='text-white'> Most Beautiful Cars 2016</h6>
                            <h5 className='text-danger'>AUTO MOTOR UND SPORT</h5>
                           
                        </div>
                        <div className="col">
                            <h6 className='text-white'>Car of the Year</h6>
                            <h5 className='text-danger'>TOP GEAR</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awards;