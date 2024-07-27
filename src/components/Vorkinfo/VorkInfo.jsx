import React from 'react'
import './VorkInfo.css'
import Counter from './Countr/CounterPeople'
import CounterUser from './Countr/CounterUser'
import CounterProject from './Countr/CounterProject'

function VorkInfo() {
  return (
    <div className='VorkIndoDiv'>
      <h2>Start working <br /> with us right now</h2>
      <p className='para-index'>We are a versatile team of qualified designers and developers. We <br /> develop projects for ourselves and for you.</p>
      <div className='counter0-div'>
        <li className='li-teg'>
          <Counter />
        </li>
        <li className='li-teg'>
          <CounterUser />
        </li>
        <li className='li-teg'>
          <CounterProject />
        </li>
      </div>
      <h5>a larger screen is required to open this page</h5>
    </div>
  )
}

export default VorkInfo