import { useState } from 'react'

import styles from './styles.module.css'


const Login = ({onClick}: {onClick: () => void}) => {
  const [verify, setVerify] = useState(false)

  return (
    <div className={styles.container}>
        <form>
            <input type="text" />
            <input type="text" />
        </form>
        <button onClick={onClick}>Submit</button>
        {/* <button>Cancel</button> */}
    </div>
  )
}

export default Login