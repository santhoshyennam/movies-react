import { Button } from "react-bootstrap"
import './index.css'

const MyButton = (props) => {
    return (
        <Button
        variant={props.variant}
        className="mybutton"
        onClick={() => {
          props.handleClick();
        }}
      >
        {props.title}
      </Button>
    )
}

export default MyButton