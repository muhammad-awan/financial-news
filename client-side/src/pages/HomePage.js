import React from 'react'
import CreateArticleForm from '../components/CreateArticleForm'

const HomePage = ({
  onCreate,
  error
}) => (
  <div>
    { !!error && <p>{error.message}</p>}
    <CreateArticleForm onCreate={ onCreate }/>
  </div>
)

export default HomePage