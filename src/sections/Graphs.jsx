import React from 'react'
import GitHubContributionGraph from '../components/GitHubContributionGraph'
import LeetCodeStreekGraph from '../components/LeetCodeStreekGraph'


const Graphs = () => {
  return (
    <div  className='relative h-full w-full overflow-hidden mt-10 '
          style={{
        backgroundImage:"url(/assets/projects/StarsImg.png)",
        backgroundSize: "cover",
        
    }}
    
    >
       
        <div className='z-10 h-full'>
        <LeetCodeStreekGraph/>
        <GitHubContributionGraph/>
        </div>
        

    </div >
  )
}

export default Graphs