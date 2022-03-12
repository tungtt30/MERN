
import React, { useRef } from 'react';
import style from './Test2.module.css'
import Progress from './Progress'


const Test2 = () => {



  return (
    <>
      <div className={style["container"]}>
        <div className={style["container"]}>
          <div className={style["overlay"]}>
            <Progress props={60} />
            <p>... mask or whatever
              that is responsive and could be cross-browser compatible back to IE9
            </p>
          </div>
        </div>
      </div>

    </>

  )
}

export default Test2