import Alert from '@kiwicom/orbit-components/lib/Alert'

export function Post(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
      <Alert>Welcome!</Alert>
    </div>
  )
}
