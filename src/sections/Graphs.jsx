import React from 'react'
import GitHubContributionGraph from '../components/GitHubContributionGraph'
import LeetCodeStreekGraph from '../components/LeetCodeStreekGraph'


const Graphs = () => {
  return (
    <div
    className='z-2 ml-30 mb-10 mt-10 h-full w-full bg-cover bg-center relative  '
    style={{
        backgroundImage:"url(assets/coding-pov.png)",
    }}

    >
    <div  className='position absalute h-full w-full overflow-hidden mt-10  '
          
        
        
  
    
    >
       
        <div className='z-10 h-full'>
        <LeetCodeStreekGraph/>
        <GitHubContributionGraph/>
        </div>
        

    </div >
    </div>
  )
}

export default Graphs