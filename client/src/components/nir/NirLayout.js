import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Nir from './Nir'


const NirLayout = () => {

    const handleClick = (e) => {
        console.log(e.target)
    }

    return (
        <>
            <Nir />
            <div className='dashboard'>
                <header>
                    <h4>Now playing:</h4>
                    <h2>String 57th  9th</h2>
                </header>

                <div className="cd">
                    <div className="cd-thumb">
                    </div>
                </div>

                <div className="control">
                    <div className="btn btn-repeat">
                        <i className="fas fa-redo"></i>
                    </div>
                    <div className="btn btn-prev">
                        <i className="fas fa-step-backward"></i>
                    </div>
                    <div className="btn btn-toggle-play">

                        <Button
                            variant='outline-danger' size='sm'
                            onClick={handleClick}
                        >Play
                        </Button>

                    </div>
                    <div className="btn btn-next">
                        <i className="fas fa-step-forward"></i>
                    </div>
                    <div className="btn btn-random">
                        <i className="fas fa-random"></i>
                    </div>
                </div>

                <div>
                    <input className="progress" type="range" />
                    <input className="volume" type="range" />

                </div>
            </div>


        </>
    )




}

export default NirLayout
