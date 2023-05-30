import React from 'react'
import {PlusCircleOutlined} from '@ant-design/icons'
import Posts from './posts'

const AppContainer = () => {
    return (
        <>
        <div style={
            {
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height:'40px'
            }
        }>
     
                <span style={
                    {
                        width: '30px',
                        height: '30px',
                        backgroundColor: "lightblue",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '10px',
                        marginLeft: '20px'

                    }
                }>
                    <PlusCircleOutlined/>
                </span>
                
              <strong>Hello</strong>
        </div>
        <div>
            <Posts/>
        </div>
        </>
    )
}

export default AppContainer
