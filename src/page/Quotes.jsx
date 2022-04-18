import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quotesText } from '../actions/quotes'
import './QuotesStyle.css'
Quotes.propTypes = {}

function Quotes(props) {
  var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ]
  var color = colors[Math.floor(Math.random() * 12)]
  const random = Math.floor(Math.random() * 100)
  const quoteRandom = useSelector(state => state.quotes.Quotes)
  const authorRandom = useSelector(state => state.quotes.Author)
  const dispatch = useDispatch()
  if (document.querySelectorAll('.textShow')) {
    const element = document.querySelectorAll('.textShow')
    element.forEach(el => {
      el.classList.remove('textShow')
      setTimeout(() => {
        el.classList.add('textShow')
      }, 100)
    })
  }
  // const getSomething = () => {
  //   return fetch(
  //     'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
  //     { method: 'GET' }
  //   )
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json()
  //       }
  //       throw Error(response.status)
  //     })
  //     .then(result => {
  //       const randomQuotes = {
  //         textQuote: result.quotes[random].quote,
  //         textAuthor: result.quotes[random].author
  //       }
  //       const action = quotesText(randomQuotes)
  //       dispatch(action)
  //     })
  //     .catch(error => {
  //       console.log('error', error)
  //     })
  // }
  /////////////////////////////////////////////////////////////////////
  const getListQuote = () => {
    let xhr = new XMLHttpRequest()
    xhr.open(
      'GET',
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    )
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return
      if (xhr.status === 200) {
        const randomQuotes = {
          textQuote: JSON.parse(xhr.responseText).quotes[random].quote,
          textAuthor: JSON.parse(xhr.responseText).quotes[random].author
        }
        const action = quotesText(randomQuotes)
        dispatch(action)
      } else {
        console.log('HTTP error', xhr.status, xhr.statusText)
      }
    }
    xhr.send()
  }
  ////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    setTimeout(() => {
      getListQuote()
    }, 1000)
  }, [])
  return (
    <div className="text-center items-center h-[100vh] show" style={{ fontFamily: 'Raleway', background: `${color}` }}>
      <div className="h-[auto] w-[28.125rem] bg-[#fff] border-[3px] px-[2.5rem] py-[3.125rem] mx-[auto] relative top-[20%]">
        <div className="text-[1.75em] font-medium show textShow" style={{ color: `${color}` }}>
          <i className="fa fa-quote-left"> </i> {quoteRandom}
        </div>
        <div className="text-right pt-[1.25rem] show text-[#6e4141] textShow" style={{ color: `${color}` }}>
          - {authorRandom}
        </div>
        <a
          href="https://www.facebook.com/profile.php?id=100020679831595"
          className="buttonIcon show"
          title="Tweet this quote!"
          target="_blank"
          rel="noreferrer"
          style={{ background: color }}
        >
          <i className="fa fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com/Tyntyn19102000"
          className="buttonIcon show"
          title="Tweet this quote!"
          target="_blank"
          rel="noreferrer"
          style={{ background: color }}
        >
          <i className="fa fa-twitter"></i>
        </a>
        <button className="buttonQuotes hover:opacity-90 show" style={{ background: color }} onClick={getListQuote}>
          New quotes
        </button>
      </div>
    </div>
  )
}

export default Quotes
