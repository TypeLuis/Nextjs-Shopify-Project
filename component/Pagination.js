import React from 'react'
import classes from './Pagination.module.scss'

const Pagination = (props) => {
  const pageData = props.pageData
  console.log(pageData)
  
  // https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n?answertab=scoredesc#tab-top
  const arrayFromMax = [...Array(pageData.total_pages).keys()]

  const pageClick = (e) => {
    const ref = props.reviewsRef
    const pageClicked = Number(e.target.id.split('_')[1])
    if(pageClicked != pageData.page){

      // ref.current.style.transition = `height 0.5s linear;`
      ref.current.classList.add(props.classes.change)
      ref.current.style.height = `0px`
      
      setTimeout(()=>{
        ref.current.classList.remove(props.classes.change)
        ref.current.style.height = `${ref.current.scrollHeight}px`
      }, 2000)
      props.setPage(pageClicked)
    }
    
  }
  return (
    <div className={classes.pagination}>
      {arrayFromMax.map((item, i) => {
        return (
          <span key={i} onClick={(e)=>{pageClick(e)}} id={`page_${i + 1}`} className={classes.page}>
            {i + 1}
          
          </span>
        )
      })}
    </div>
  )
}

export default Pagination