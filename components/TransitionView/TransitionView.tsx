import React from 'react';
// import Animatable from 'react-native-animatable';
import * as Animatable from 'react-native-animatable';

class TransitionView extends React.Component{
    render() {
        const {...rest} = this.props;
        return(
            <Animatable.View
                duration={500}
                useNativeDriver
                {...rest}
            />
        );
    }
};

export default TransitionView