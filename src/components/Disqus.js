import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

const Disqus = ({ shortname, config }) => {
  const [loadDisqus, setLoadDisqus] = React.useState(true)

  return (
    // <div></div>
    <React.Fragment>
      {loadDisqus ? (
        <DiscussionEmbed shortname={shortname} config={config} />
      ) : (
        <div style={{ padding: '1rem 0', borderTop: '1px solid #cecece' }}>
          <button
            className="fpv category"
            onClick={() => {
              setLoadDisqus(!loadDisqus)
            }}
          >
            Leave a comment
          </button>
        </div>
      )}
    </React.Fragment>
  )
}

export default Disqus
