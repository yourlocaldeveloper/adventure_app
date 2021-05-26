import React, { useEffect, useState } from 'react';
import { CLI, ProgressBar, InputBar } from '../../components'
import axios from 'axios';

const CommandLine = () => {

  const [loading, setLoading] = useState(false);
  const [story, setStory] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchStories = async () => {
      try {
        const {data} = await axios.get("http://localhost:3000/story/")
        setStory(data)
        setLoading(false);
      } catch(err) {
        console.warn(err);
        setError(err)
        setLoading(false);
      }
    }

    fetchStories();
  }, [])

  function fetchContent(){
    console.log(story)
    return (
      <>
        {error ?
          <p>An error has occured.</p>
        :
          <>
            <ProgressBar />
            <CLI/>
            <InputBar />
          </>
        }
      </>
    )
  }
 
    return (
        <section id="command-line" className="container">
          {
            loading ?
              <>
                <h1>Loading page</h1>
              </>
            :
              fetchContent()
          }
        </section>
    )
}

export default CommandLine;