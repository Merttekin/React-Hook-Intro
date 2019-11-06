import React, {useContext} from 'react';
import ComponentF from './ComponentF';
import { UserContext, ChannelContext } from '../App';

export default function ComponentE() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    // return <div><ComponentF /></div>;
    return <div>User context value {user}, channel context value {channel}</div>;
}