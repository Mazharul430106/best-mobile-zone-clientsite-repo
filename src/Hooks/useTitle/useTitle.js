import {useEffect} from 'react';
const useTitle = title =>{
    useEffect(()=> {
        document.title = `${title} - Best Mobile Zone`
    } ,[title])
}

export default useTitle;