import React, {useState, useEffect} from 'react';

const CLI = ({story}) => {
  const [nextLine, setNextLine] = useState("")
  const [options, setOptions] = useState([])
  const [id, setID] = useState()

  useEffect(() => {
    if (story.length !== 0) {
      setNextLine(story[0].entry)
      setOptions(story[0].options)
      setID(story[0].id)
    }
  }, [story])

  useEffect(() => {
    console.log("THIS IS THE NEXT LINE: " + nextLine)
  }, [nextLine])

  useEffect(() => {
    console.log(options)
  }, [options])

    return (
        <div id="cli">
          <div className="p-wrapper">
            <p>{nextLine}</p>
          </div>
        </div>
    )
}

export default CLI;