import React from 'react'

const useOpenToggle = () => {

    const [toggle,setToggle] = React.useState<boolean>(false)

    const toggleClick = () => {
        console.log('called')
        setToggle( !toggle )
    }

    return { toggle, toggleClick }
}

export default useOpenToggle