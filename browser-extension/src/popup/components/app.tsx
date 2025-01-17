import axios from 'axios'
import React, { useLayoutEffect, useState, useCallback } from 'react'

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true }
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions)
  return tab
}

function App() {
  const [state, setState] = useState({ pageTitle: '', url: '' })

  useLayoutEffect(() => {
    getCurrentTab().then((tab) =>
      setState(() => {
        return { pageTitle: tab.title, url: tab.url }
      })
    )
  }, [])

  const onCheckedHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.checked) return
      axios
        .post(
          process.env.NODE_ENV === 'development'
            ? 'http://localhost:4000/api/push_stock'
            : 'https://digitalstrength.dev/api/push_stock',
          {
            pageTitle: state.pageTitle,
            url: state.url,
          }
        )
        .then(() => {
          const span = document.createElement('span')
          span.innerHTML = 'Success!'
          document.querySelector('#popup').appendChild(span)
          setTimeout(() => {
            span.remove()
          }, 2000)
        })
        .catch(() => {
          const span = document.createElement('span')
          span.innerHTML = 'Faild!'
          document.querySelector('#popup').appendChild(span)
          setTimeout(() => {
            span.remove()
          }, 2000)
        })
    },
    [state.pageTitle, state.url]
  )

  return (
    <main id="app-root">
      <section>
        <p>{state.pageTitle.length ? state.pageTitle : ''}</p>
      </section>
      <section>
        <input type="checkbox" onChange={onCheckedHandler} />
      </section>
    </main>
  )
}

export default App
