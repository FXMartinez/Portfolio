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
                    <h1 className='header'> - Func<mark className='red'>(</mark> <mark className='purple'>Flex</mark> <mark className='red'>)</mark> - </h1>
                    <div className='menu-bar'>
                        <Menu />
                    </div>
                </div>
                    <div className='layout-left'>
                        <p>
                            something
                        </p>
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