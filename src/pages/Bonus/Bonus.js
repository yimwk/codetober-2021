import React from 'react';
import Icon from '@mdi/react'
import { mdiHalloween } from '@mdi/js';

class Bonus extends React.Component {
    render() {
        return <><h1>Happy Halloween!</h1>
            <h2>Trick or Treat</h2>
            <Icon path={mdiHalloween}
                size={10}
                color="orange"
                spin />
            <p>Thanks for supporting my mini side coding project for 31 days. Really appreciate it.</p>
            <p>Sincerely, a <a href="https://github.com/yimwk">Software Engineer</a></p>
        </>
    }
}

export default Bonus;