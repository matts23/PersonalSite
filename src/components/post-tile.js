import { Link } from "gatsby"
import React from "react"
import PostStyles from "./styles/post-tile.module.css"

const PostTile = ({ title, author, date, path, key }) => (
    <div className={PostStyles.container}
    key={key}>
      <div>
        <h2>
            {title}
        </h2>
        <h3>Written By {author} on {date}</h3>
      </div>
      <Link to={path}>read→</Link>
    </div>
)

export default PostTile
