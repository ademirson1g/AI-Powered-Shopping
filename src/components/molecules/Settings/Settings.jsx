import React from 'react'
import withAuth from '../../hoc/withAuth'
import Sidebar from '../Dashboard/Sidebar';
import Section from '../../../styles/Section';
import Navbar from '../Dashboard/Navbar';
import EditProfile from './EditProfile';

const Settings = (props) => {
    const { user } = props;
    return (
        <div className="bg-black">
            {user && (
                <>
                    <Sidebar />
                    <Section>
                        <div className="title">
                            <h1 className="text-center text-4xl mt-10">
                                <span className="italic">Edit Profile</span>
                            </h1>
                            <div className="line bg-white mt-4 w-full">
                                <hr />
                            </div>
                        </div>
                        <div className="bg-black text-white flex flex-col mt-3">
                            <div className="flex-grow overflow-y-auto mb-8 h-96">
                                <EditProfile />
                            </div>
                        </div>
                    </Section>
                </>
            )}
        </div>
    );
};

export default withAuth(Settings)