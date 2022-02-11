import { Button, FlexboxGrid } from 'rsuite'
import { signIn } from "next-auth/react"
import styles from './styles.module.css'

export default function Login() {
  return (
      <FlexboxGrid className={styles.container} justify="center" align="middle">
          <Button onClick={() => signIn("google")} appearance="primary">Login with Google</Button>
      </FlexboxGrid>
  )
}