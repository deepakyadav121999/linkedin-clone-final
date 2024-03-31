import React from 'react';
import './css/Rightsidebar.css'
import InfoIcon from '@mui/icons-material/Info';

const Rightsidebar = () => {
  return (
    <div className='widget'>
        <div className="widget_top">
            <div className="widget__header">
                <h4>LinkedIn News</h4>
                <InfoIcon/>
            </div>
            <div className="widget__body">
                <ul className="widget__options">
                    <li>
                        <h4>Slaying Job Search Fees</h4>
                        <p>6d ago * 4,55 readers</p>
                    </li>
                    <li>
                        <h4>A Two Pizza rule for eating</h4>
                        <p>2d ago * 6,12 readers</p>
                    </li>
                    <li>
                        <h4>How To handle a workplace breakup</h4>
                        <p>3d ago * 4,45 readers</p>
                    </li>
                    <li>
                        <h4>Flexi leave is the flexi</h4>
                        <p>2d ago * 3,12 readers</p>
                    </li>
                    <li>
                        <h4>Shorter hour boost productivity</h4>
                        <p>1d ago * 6,55 readers</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="widget_bottom">
            <div className="widget__header">
                <h4>Today's top courses</h4>
                <InfoIcon/>
            </div>
            <div className="widget__body">
                <ul className="widget__options">
                    <li>
                        <h4>Leading with a Heavy Heat</h4>
                        <p>kay Coly</p>
                    </li>
                    <li>
                        <h4>Leading with a Heavy Heat</h4>
                        <p>kay Coly</p>
                    </li>
                    <li>
                        <h4>Leading with a Heavy Heat</h4>
                        <p>kay Coly</p>
                    </li>
                    <li>
                        <h4>Leading with a Heavy Heat</h4>
                        <p>kay Coly</p>
                    </li>
                    <li>
                        <h4>Leading with a Heavy Heat</h4>
                        <p>kay Coly</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Rightsidebar