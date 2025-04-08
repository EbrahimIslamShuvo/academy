import React from 'react';
import { FaRegCircleUser, FaRegUser } from 'react-icons/fa6';
import { GrUserWorker } from 'react-icons/gr';
import { PiStudentBold } from 'react-icons/pi';
import { SiGoogleclassroom } from 'react-icons/si';

const Stat = () => {
    return (
        <div className=' shadow bg-gray-100 '>
            <div className="w-full flex justify-center my-10">
                <div className="stats justify-center mx-auto">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <GrUserWorker className='text-4xl' />
                        </div>
                        <div className="stat-title">Total Trainer</div>
                        <div className="stat-value text-primary">50</div>
                        <div className="stat-desc">Whos are Qualified, Talented</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <SiGoogleclassroom className='text-4xl' />
                        </div>
                        <div className="stat-title">Total Classes</div>
                        <div className="stat-value text-secondary">40.96k</div>
                        <div className="stat-desc">Classes Complete Sucessfully</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <PiStudentBold className='text-4xl' />
                        </div>
                        <div className="stat-title">Total Student</div>
                        <div className="stat-value text-primary">20k</div>
                        <div className="stat-desc">Student Sucessfully Completed Course</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaRegCircleUser className='text-4xl' />
                        </div>
                        <div className="stat-title">Total Support</div>
                        <div className="stat-value text-secondary">70</div>
                        <div className="stat-desc">Total Support Trainer</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stat;