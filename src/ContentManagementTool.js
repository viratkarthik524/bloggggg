import {useState} from 'react'
import './ContentManagementTool.css'

const ContentManagementTool = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [video, setVideo] = useState('')
  const [showDetails, setShowDetails] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setShowDetails(true)
  }

  return (
    <div className="container">
      <h1>Content Management Tool</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          rows="4"
          value={content}
          onChange={e => setContent(e.target.value)}
        />

        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={e => setImage(e.target.value)}
        />

        <label htmlFor="video">Video URL:</label>
        <input
          type="text"
          id="video"
          name="video"
          value={video}
          onChange={e => setVideo(e.target.value)}
        />

        <input type="submit" value="Create Blog" />
      </form>

      {showDetails && (
        <div id="detailsContainer" className="blog">
          <h1>Blog Details</h1>
          <h2>Title: {title}</h2>
          <p>Content: {content}</p>
          <img src={image} alt="Blog" />
          <p>
            Video URL:{' '}
            <a href={video} target="_blank" rel="noopener noreferrer">
              {video}
            </a>
          </p>
        </div>
      )}
    </div>
  )
}

export default ContentManagementTool
