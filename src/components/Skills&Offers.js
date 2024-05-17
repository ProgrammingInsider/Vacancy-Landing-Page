import React from 'react'

// Icons
import bell from '../Icons/bell.svg'
import person from '../Icons/person.svg'
import home from '../Icons/home.svg'
import book from '../Icons/book.svg'

const SkillsandOffers = () => {
  return <>
    <div className='lists'>
            <h1 className='listsHeader'>Skills <span className='bold'>Needed</span></h1>
            <div className='listContainer'>
                <ul className='eachListContainer'>
                    <li className='eachList'>Add a description of required skill</li>
                    <li className='eachList'>Write here what your new employee should know</li>
                    <li className='eachList'>Add a description of required skill</li>
                    <li className='eachList'>Write here what your new employee should know</li>
                </ul>

                <ul className='eachListContainer'>
                    <li className='eachList'>Write here what your new employee should know</li>
                    <li className='eachList'>Add a description of required skill</li>
                    <li className='eachList'>Write here what your new employee should know</li>
                    <li className='eachList'>Add a description of required skill</li>
                </ul>
            </div>

        </div>

        <div className='lists'>
            <h1 className='listsHeader'><span className='bold'>ADDITIONALLY </span> Skills</h1>
            <div className='listContainer'>
                <ul className='eachListContainer'>
                    <li className='eachList'>Add a description of required skill</li>
                    <li className='eachList'>Write here what your new employee should know</li>
                    <li className='eachList'>Add a description of required skill</li>
                    <li className='eachList'>Write here what your new employee should know</li>
                </ul>

                <ul className='eachListContainer'>
                    <li className='eachList'>Write here what your new employee should know</li>
                    <li className='eachList'>Add a description of required skill</li>
                    <li className='eachList'>Write here what your new employee should know</li>
                    <li className='eachList'>Add a description of required skill</li>
                </ul>
            </div>

            <button className='btn btn1 horzontalCenter'>Apply Now</button>
        </div>

<div className='greyBg'>
        <div className='lists offerLists'>
            <h1 className='listsHeader offerListsHeader'>WE ARE <span className='bold'>OFFERING</span></h1>
            <div className='listContainer'>
                <ul className='eachListContainer'>
                    <li className='eachList'>What can you offer</li>
                    <li className='eachList'>What is salary</li>
                    <li className='eachList'>Write here what what are the benefits</li>
                </ul>
                <ul className='eachListContainer'>
                    <li className='eachList'>What can you offer</li>
                    <li className='eachList'>What is salary</li>
                    <li className='eachList'>Write here what what are the benefits</li>
                </ul>
            </div>
        </div>
        <div className='strongPointContainer'>
            <div className='eachStrongPoint'>
                <article className='offerIconContainer'><img src={bell} alt="bell" className='offerIcon'/></article>   
                <article className='strongPointName'><span className='bold'>Strong point</span> of your job offer</article>
            </div>
            <div className='eachStrongPoint'>
                <article className='offerIconContainer'><img src={person} alt="bell" className='offerIcon'/></article>   
                <article className='strongPointName'><span className='bold'>Strong point</span> of your job offer</article>
            </div>
            <div className='eachStrongPoint'>
                <article className='offerIconContainer'><img src={home} alt="bell" className='offerIcon'/></article>   
                <article className='strongPointName'><span className='bold'>Strong point</span> of your job offer</article>
            </div>
            <div className='eachStrongPoint'>
                <article className='offerIconContainer'><img src={book} alt="bell" className='offerIcon'/></article>   
                <article className='strongPointName'><span className='bold'>Strong point</span> of your job offer</article>
            </div>
        </div>
        <button className='btn btn1 horzontalCenter'>Apply Now</button>
</div>
  </>
}

export default SkillsandOffers