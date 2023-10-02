import React from 'react';
import firebase from 'firebase/compat/app';

import { firestore } from '../../firebaseConfig/firebaseConfig';
import withAuth from '../../hoc/withAuth';
import ChatMessageUserDetails from './ChatMessageUserDetails';
import Sidebar from '../Dashboard/Sidebar';
import Section from '../../../styles/Section';
import TransparentButton from '../../atoms/TransparentButton';

class ChatComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            newMessage: '',
        };
    }

    componentDidMount() {
        this.unsubscribe = firestore.collection('messages').orderBy('timestamp').onSnapshot(snapshot => {
            const messageList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            this.setState({ messages: messageList });
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    sendMessage = async () => {
        const { newMessage } = this.state;
        const { user } = this.props;
        
        if (newMessage.trim() === '') return;

        await firestore.collection('messages').add({
            text: newMessage,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: {
                uid: user.uid,
                name: user.name,
                photoUrl: user.photoUrl,
            },
        });

        this.setState({ newMessage: '' });
    };

    handleNewMessageChange = event => {
        this.setState({ newMessage: event.target.value });
    };

    render() {
        const { messages, newMessage } = this.state;

        return (
            <div>
                <Sidebar />
                <Section>
                    <div className="title">
                        <h1 className="text-center text-4xl mt-10">
                            <span className="italic">Messages</span>
                        </h1>
                        <div className="line bg-white mt-4 w-full">
                            <hr />
                        </div>
                    </div>
                </Section>
                <div className="line bg-white mt-4 w-full">
                    <hr />
                </div>
                <div className="bg-black text-white flex flex-col ml-96 mt-3">
                    <div className="flex-grow overflow-y-auto mb-8 h-96">
                        {messages.map(message => (
                            <div key={message.id}>
                                <ChatMessageUserDetails message={message} />
                            </div>
                        ))}
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={this.handleNewMessageChange}
                            className="flex-grow px-4 py-2 rounded-l-md bg-gray-800 focus:outline-none focus:ring focus:border-yellow-400"
                        />
                        <TransparentButton
                            onClick={this.sendMessage}
                        >
                            Send
                        </TransparentButton>
                    </div>

                </div>
                <div className="line bg-white mt-4 w-full">
                    <hr />
                </div>
            </div>
        );
    }
}

export default withAuth(ChatComponent);
