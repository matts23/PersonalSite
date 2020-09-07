import { Link } from "gatsby"
import React from "react"
import PostStyles from "./styles/post-tile.module.css"

const PostTile = ({ title, author, date, path, id }) => (
    <div className={PostStyles.container}
    key={id}>
      <h2>
          {title}
      </h2>
      <h3>Written By {author} on {date}</h3>
      <Link to={path}>Read</Link>
    </div>
)

export default PostTile
