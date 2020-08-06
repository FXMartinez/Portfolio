import React from 'react';
import Menu from '../components/menu'
import Body from '../components/body'

class Main extends React.Component {

    state = {
        user: null
    }

    render() {

        return (
            <div className='grid-container'>
                <div className='Header'>
                    <h2> This is the header </h2>
                </div>
                    <div className='layout-left'>
                        <Menu />
                    </div>
                    <div className='layout-center'>
                        <Body />
                    </div>
                    <div className='layout-right'>
                        <p> stuff here </p>
                    </div>
            </div>


        )
    }
}

export default Main;