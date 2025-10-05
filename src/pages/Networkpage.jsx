import React from 'react'
import ProfileSection from '../components/Profilesection'
import NetworkMembersPage from './NetworkMembers'
import profileBg from '/SAM_3.JPG'

const Networkpage = () => {
    return (
        <div>
            <ProfileSection
                bgImage={profileBg}
                name="About SAN"
                breadcrumbs={['Home', 'About']}
            />
            <NetworkMembersPage />
        </div>
    )
}

export default Networkpage