import React from 'react';
import { CLI, ProgressBar, InputBar } from '../../components'

const CommandLine = () => {
 
    return (
        <section id="command-line" class="container">
          <ProgressBar />
          <CLI />
          <InputBar />
        </section>
    )
}

export default CommandLine;