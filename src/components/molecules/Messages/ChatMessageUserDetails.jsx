import React from 'react';

const ChatMessageUserDetails = ({ message }) => {
    const { user, text } = message;
    
    const shouldEnableScroll = text.length > 10;

    return (
        <div className="flex items-start mb-3">
            {user && user.name && (
                <div className="mr-2">
                    <img
                        src={user.photoUrl || ''}
                        alt={user.name}
                        className="rounded-full w-8 h-8"
                    />
                </div>
            )}
            <div>
                {user && user.name && (
                    <div className="font-semibold">{user.name}:</div>
                )}
                <div className={`bg-yellow-600 text-white rounded-lg p-2 ${shouldEnableScroll ? 'max-h-20 overflow-y-auto' : ''}`}>
                    {text}
                </div>
            </div>
        </div>
    );
};

export default ChatMessageUserDetails;
