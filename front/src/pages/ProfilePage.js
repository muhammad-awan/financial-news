import React from 'react'
import { Redirect } from 'react-router-dom'

const ProfilePage = ({
    userInfo,
    onSignOut
}) => (
    <div>
    {
        !userInfo ? (
            <Redirect to='/signin' />
        ) : (
            <div>
                <dl>
                    
                    <dt>Email:</dt>
                    <dd>{ userInfo.email }</dd>
                </dl>
                <button onClick={ onSignOut }>
                    Sign Out
                </button>
            </div>
        )
    }
    </div>
)

export default ProfilePage